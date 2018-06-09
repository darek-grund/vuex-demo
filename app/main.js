const state = {
    notes: [],
    timestamps: [],
};

const mutations = {
    ADD_NOTE (state, payload) {
        let newNote = payload;
        state.notes.push(newNote);
    },

    ADD_TIMESTAMP (state, payload) {
        let newTimeStamp = payload;
        state.timestamps.push(newTimeStamp);
    },
};

const actions = {
    addNote (context, payload) {
        context.commit('ADD_NOTE', payload)
    },

    addTimestamp (context, payload) {
        context.commit('ADD_TIMESTAMP', payload)
    },
};

// getters are optional,
// because we can directly address
//      this.$store.state
// instead of
//      this.$store.getters
const getters = {
    getNotes: state => state.notes,
    getTimestamps: state => state.timestamps,
    getNoteCount: state => state.timestamps.length,
};

const inputComponent = {
    template: `<input placeholder='Enter a note' class="input is-small" type="text"
                v-model="input"
                @keyup.enter="onKeyEnter()"
                />`,

    data () {
        return {
            input: '',
        }
    },

    methods: {
        onKeyEnter () {
            this.$store.dispatch('addNote', this.input);
            store.dispatch('addTimestamp', new Date().toLocaleDateString());
            this.input = '';
        }
    },
};

const noteCountComponent = {
    template:
        `<div class="note-count">Note count: <strong>{{ noteCount }}</strong></div>`,
    computed: {
        noteCount() {
            return this.$store.getters.getNoteCount;
        }
    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});

new Vue({
    el: '#app',
    store,
    components: {
        'input-component': inputComponent,
        'note-count-component': noteCountComponent
    },

    computed: {
        notes () {
            return this.$store.getters.getNotes;
        },

        timestamps () {
            return this.$store.state.timestamps;
        }
    },

    mounted () {

    }
});


