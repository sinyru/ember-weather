import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model () {
    return RSVP.Promise.resolve({});
  },
  actions: {
    create(apparel) {
      return this.get('ajax').request('/apparels', {
        method: 'POST',
        data: {
          apparel: {
            name: apparel.name,
            clothing_type: apparel.clothingType,
          }
        },
      })
      .then(()=>this.transitionTo('apparels'))
      ;
    }
  }
});
