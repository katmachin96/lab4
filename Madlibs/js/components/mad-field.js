import { EventBus } from '../index.js';

// eslint-disable-next-line no-undef
export const MadField = Vue.component('mad-field', {
    template: `
      <form>
          <div :class="classObject" :style="styleObject">
              <div class="col" >
                  <label :for="this.id">{{this.type}}:</label>
              </div>
              
              <div class="col">
                  <input :id="this.id" class="form-control" type="text" :placeholder="this.type" @keyup="updateAnswer($event.target.value)">
              </div>
          </div>
      </form>
    `,
   
    props: {
        type: { required: true }, 
        id: { required: true }
    },
  
    data() {
        return {
            classObject: ['form-group', 'row'],
            styleObject: {
                'float': 'left',
                'min-width': '250px',
                'max-width': '280px',
                'margin-right': '15px',
            }
        };
    },
   
    methods: {
        updateAnswer(newAnswer) {
            EventBus.$emit('updateAnswer', this.id, newAnswer);
        }
    }, 
});