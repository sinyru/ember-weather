import Ember from 'ember';

export function tempConvert(params) {
  let k = params;
  let f = (9/5)*(k - 273) + 32;
  return parseInt(f);
}

export default Ember.Helper.helper(tempConvert);
