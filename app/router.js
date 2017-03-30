import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('locations');
  this.route('weather', {path: '/locations/:weather'});
  this.route('apparels');
  this.route('apparel', {path: '/apparels/apparel'});
  this.route('random');
});

export default Router;
