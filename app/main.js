const state = {
    notes: [],
    timestamps: [],
};

const mutations = {
    ADD_NOTE () {

    },

    ADD_TIMESTAMP () {

    },
};

const inputComponent = {
    template: `<input placeholder='Enter a note' class="input is-small" type="text"
                @keyup.emter="onKeyEnter()" 
                />`,

    methods: {
        onKeyEnter () {
            alert(1)
        }
    },
};

new Vue({
    el: '#app',
    components: {
        'input-component': inputComponent
    },
});
