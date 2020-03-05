import { EventBus } from '../index.js';

// eslint-disable-next-line no-undef
export const MadAnswer = Vue.component('mad-answer', {
    template: `
      <span :style="styleObject">
        {{this.story[this.name-1].value == '' ? '[________]' : this.answer}}
      </span>
    `,
   
    props: {
        name: { required: true }
    },
   
    data() {
        let story = this.$parent.elements;
        return {
            story,
            styleObject: {
                'color': 'lightpink',
            },
            answer: story[this.name-1].value
        };
    },
   
    created() {
        EventBus.$on('submitAnswer', (blank) => {
            if(this.name == blank.answer) {
                this.answer = blank.value;
            }
        });
    }
});