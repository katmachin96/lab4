import { MadAnswer } from './mad-answer.js';
import { RefreshButton } from './refresh-button.js';

// eslint-disable-next-line no-undef
export const MadAnswers = Vue.component('mad-answers', {
    template: `
    <div>
        <div :class="classObject" :style="styleObject">
            <span v-for="phrase in fullStory" v-if="!phrase.includes('{')">{{phrase}}</span>
            <mad-answer v-else :name="phrase.replace('{', '')"></mad-answer>
        </div>
        <refresh></refresh>
    </div>
    `,
    components: {
        'mad-answer': MadAnswer,
        'refresh': RefreshButton,
    },
   
   
    data() {
        return {
            classObject: ['bg-dark'],
            styleObject: {
                'flex': '2 2 2',
                'min-width': '400px',
                'max-width': '1200px',
                'border-radius': '10px',
                'color': 'white',
                'padding': '20px',
                'letter-spacing' : '2px',
                'margin-right': '10px',
            },
            fullStory: this.$parent.fullStory,
            elements: this.$parent.elements,
        };
    }, 
});