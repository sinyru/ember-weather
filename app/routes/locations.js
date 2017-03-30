import Ember from 'ember';
import RSVP from 'rsvp';


export default Ember.Route.extend({
  weather: Ember.inject.service(),
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  flashMessages: Ember.inject.service(),

    model () {
       if (this.get('isAuthenticated')) {
         return this.get('store').findAll('dataset');
       } else {
         this.transitionTo('sign-in');
         this.get('flashMessages')
         .danger('Please sign in to view this page.');
       }
     },


  actions: {
    getLocation(location) {
      return this.get('weather').getWeather(location)
      .then((data)=>{

        return this.transitionTo('weather', data);
      })
      ;
    },

  }

});
