import Ember from 'ember';
import RSVP from 'rsvp';


export default Ember.Route.extend({
  weather: Ember.inject.service(),
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
