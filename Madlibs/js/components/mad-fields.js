import { MadField } from './mad-field.js';

// eslint-disable-next-line no-undef
export const MadFields = Vue.component('mad-fields', {
    template: `
      <div :class="classObject">
        <mad-field v-for="item in elements" :key="item.id" :id="item.id" :type="item.type"></mad-field>
      </div>
    `,

    components: {
        'mad-field': MadField,
    },
   
    data() {
        return {
            classObject: ['container', 'p-2'],
            styleObject: {
                'flex': '0 1 0',
                'max-width': '400px',
                'float' : 'left',
            },
            elements: this.$parent.elements
        };
    },
});