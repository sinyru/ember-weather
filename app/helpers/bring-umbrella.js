import Ember from 'ember';

export function bringUmbrella(params) {
  if (params.toString()==="Rain"){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(bringUmbrella);
