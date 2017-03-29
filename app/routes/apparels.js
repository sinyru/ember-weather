import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model () {
    return this.get('store').findAll('apparel');
  },
  actions: {
    delete (id) {
      let store = this.get('store');
      store.findRecord('apparel', id, {reload: true})
      .then(function(apparel) {
        apparel.destroyRecord();
      })
      .then(()=>this.transitionTo('apparels'))
      ;
    }
  }
});
