import { madlibs } from './resources/resources.js';
import { MadAnswers } from './components/mad-answers.js';
import { MadFields } from './components/mad-fields.js';

console.log(`${madlibs.length} madlibs loaded`);

// eslint-disable-next-line no-undef
export const EventBus = new Vue();
 
// eslint-disable-next-line no-undef
export const app = new Vue({
    el: '#app',

    components: {
        'mad-answers': MadAnswers,
        'mad-fields': MadFields,
    },
 
    data() {
        let madlib = madlibs[Math.floor(Math.random() * madlibs.length)];
        let substitutions = madlib.content.match(/\[([^\])]*)\]/g);
        let elements = [];
        let index = 1;
        substitutions.forEach(el => {
            elements.push({
                id: index,
                type: el.replace(/[\])}[{(]/g, ''),
                value: '',
                answer: index
            });
            index++;
        });
        let n = 0;
        let fullStory = madlib.content.replace(/\[([^\])]*)\]/g, function() {
            return '[{' + (++n) + ']';
        }).split(/\[([^\])]*)\]/);
        return {
            rootClasses: ['w-100', 'h-100', 'p-3', 'd-flex', 'flex-row'],
            styleObject: { 
                'float': 'left',
                'padding': '20px',
                'font-size': 'min(max(14px, 2vw), 16px)',
            },
            componentKey: 0,
            elements, fullStory, substitutions, madlib,
        };
    },

    created() {
        EventBus.$on('refreshMadlib', () => {
            let random = Math.floor(Math.random() * madlibs.length);
            let madlib = madlibs[random];
            this.madlib = madlib;
            this.substitutions = madlib.content.match(/\[([^\])]*)\]/g);
            this.elements = [];
            let index = 1;
            this.substitutions.forEach(el => {
                this.elements.push({
                    id: index,
                    type: el.replace(/[\])}[{(]/g, ''),
                    value: '',
                    answer: index
                });
                index++;
            });
            let n = 0;
            this.fullStory = madlib.content.replace(/\[([^\])]*)\]/g, function() {
                return '[{' + (++n) + ']';
            }).split(/\[([^\])]*)\]/);
            this.componentKey += 1;
        });
        EventBus.$on('updateAnswer', (id, answer) => {
            this.elements.forEach(el => {
                if(el.id == id) {
                    el.value = answer;
                    EventBus.$emit('submitAnswer', el);
                }
            });
        });
    }
});