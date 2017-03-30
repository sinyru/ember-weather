import Ember from 'ember';

export function randomPick(params) {
  let apparels = params;
  let result = apparels[0];
  return result;
}

export default Ember.Helper.helper(randomPick);


// [Math.floor(Math.random() * myArray.length)]
