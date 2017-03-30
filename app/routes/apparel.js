import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model () {

    return this.get('store').findAll('apparel')
    .then(()=>RSVP.Promise.resolve({}))
    ;

  },
  actions: {
    create(apparel) {
      if(apparel.name!=="") {
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
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Are you sure you fill in everything?');
        })
        ;
      } else {
        this.get('flashMessages')
        .danger('There was a problem. Are you sure you fill in everything?');
      }
    }
  }
});
