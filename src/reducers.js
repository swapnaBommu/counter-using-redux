import {INCREASE_COUNTER, DECREASE_COUNTER} from "./actions";
const initialcounterState = {
    counterValue: 0
   }
export default function counter(state = initialcounterState, action){
     
     switch(action.type){
         case INCREASE_COUNTER:
             return {
                 ...state,
                 counterValue: action.value + 1
             };
         case DECREASE_COUNTER:
             
             return{
                 ...state,
                 counterValue: action.value > 0 ? action.value -1 : 0
             };
         default:
             return state;
     }
     
   }