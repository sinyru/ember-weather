import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  newApparel (apparel) {
    return this.get('ajax').post(`/apparels`, {data: apparel});
  }
});
