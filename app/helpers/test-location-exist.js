import Ember from 'ember';

export function testLocationExist(params) {
  if (params.toString()!==""){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(testLocationExist);
