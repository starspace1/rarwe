import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateRating: function(params) {
      var song = params.item;
      var rating = params.rating;
      song.set('rating', rating);
    }
  }
});
