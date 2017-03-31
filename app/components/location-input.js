import Ember from 'ember';

export default Ember.Component.extend({
  location: '',

  init() {
    this._super(...arguments);
    this.set('location', '');
  },

  actions: {
    getLocation() {
      this.sendAction('getLocation', this.get('location'));
      this.set('location', '');
    },
  }
});
