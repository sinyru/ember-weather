import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getLocation() {
      this.sendAction('getLocation', this.get('location'));
      this.set('location', '');
    },
  }
});
