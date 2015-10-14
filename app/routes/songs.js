import Ember from 'ember';

var Song = Ember.Object.extend({ title: '',
  rating: 0,
  band: ''
});

var SongCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['rating'],
  sortAscending: false,
  content: []
});

var songs = SongCollection.create();

var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

songs.pushObject(blackDog);
songs.pushObject(yellowLedbetter);
songs.pushObject(pretender);


export default Ember.Route.extend({
  model: function() {
    return songs;
  }
});
