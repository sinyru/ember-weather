import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group'],
  tagName: 'div',
  actions: {
  atiToggled(choice) {
    console.log("changing ati choice", choice);
    this.set('ati', choice);
  }
}
});
