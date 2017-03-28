import Ember from 'ember';

export function bringCoat(params) {
  if (params.toString()==="Snow"){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(bringCoat);
