import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  getWeather (location) {
    return this.get('ajax').request(`/weathers/${location}`);
  }

});
