import { EventBus } from '../index.js';

// eslint-disable-next-line no-undef
export const RefreshButton = Vue.component('refresh', {
    template: `
        <button :class="classObject" :style="styleObject" @click="refreshMadlib">Refresh</button>
    `,

    data() {
        return {
            classObject: ['btn', 'btn-dark'],
            styleObject: {
                'margin-top': '5px',
            },
            elements: this.$parent.elements
        };
    },

    methods: {
        refreshMadlib() {
            EventBus.$emit('refreshMadlib');
        }
    },
});