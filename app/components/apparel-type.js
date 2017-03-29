import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group'],
  tagName: 'div',
  actions: {
  atiToggled(choice) {
    this.set('ati', choice);
  }
}
});
