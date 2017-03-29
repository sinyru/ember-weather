import Ember from 'ember';

export function testApparel(data) {
  if (data>0){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(testApparel);
