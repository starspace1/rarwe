import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',

  isAddButtonDisabled: Ember.computed('title', function() {
    return Ember.isEmpty(this.get('title'));
  }),

  actions: {
    updateRating: function(params) {
      var song = params.item;
      var rating = params.rating;
      song.set('rating', rating);
    }
  }
});
