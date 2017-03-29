import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  apparel: {},
  actions: {
    create () {
      this.sendAction('create', this.get('apparel'));
    },
  }
});
