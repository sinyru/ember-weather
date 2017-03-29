import Ember from 'ember';

export function createImage(params) {
  let getUrl=`http://openweathermap.org/img/w/${params}.png`;

  return getUrl;
}

export default Ember.Helper.helper(createImage);
