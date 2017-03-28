import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.set('main.temp', 25);
  }
});
