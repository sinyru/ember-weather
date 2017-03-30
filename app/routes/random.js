import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('apparel')
    .then((clothes) => {
        const rand = Math.floor(Math.random() * clothes.get('length'));
        return clothes.objectAt(rand);
    });
  }
});
