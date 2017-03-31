import Ember from 'ember';
import RSVP from 'rsvp';


export default Ember.Route.extend({
  weather: Ember.inject.service(),
  model () {
      return this.get('store').findAll('apparel')
      .then(()=>RSVP.Promise.resolve({}))
      ;
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
