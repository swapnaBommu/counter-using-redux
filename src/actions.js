export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

export  function increaseCounter(value){
  return {
    type: INCREASE_COUNTER,
    value
  };
}

export  function decreaseCounter(value){
  return {
    type: DECREASE_COUNTER,
    value
  };
}