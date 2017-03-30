import Ember from 'ember';

export default Ember.Route.extend({
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
});
