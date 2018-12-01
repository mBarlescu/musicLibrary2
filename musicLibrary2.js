
// Library
// Playlist
// Track
// This one will be slightly different from the Week 1 in that it will have the following functionality:

// A Library has a name and a creator (both strings)
// These are the only things required in order to create a music library
// A Library has many playlists (starts as an empty array)
// Playlist objects can be added to an instance of a library
// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks
// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks


function library (name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];

  this.addplaylists = (playlist) =>{
    this.playlists.push(playlist);
  }

}

function Playlist (name) {
  this.name = name;
  this.tracks = [];
  this.totalRating = 0;
  this.totalDuration = 0;

  this.addTrack = function(trackName) {
    this.tracks.push(trackName);
  }
  this.getOverallRating = function() {
    this.totalRating = 0;
    for(const track of this.tracks){
      this.totalRating += track.rating;
    }
    return this.totalRating / this.tracks.length;
  }
  this.getDurationSum = () => {
    this.totalDuration = 0;
    for(const track of this.tracks){
      this.totalDuration += track.length;
    }
    return this.totalDuration;

  }
}

function track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}


const library1 = new library('library1', 'mark');
const playlist1 = new Playlist('playlist1');
const track1 = new track('track1', 2, 120);
const track2 = new track('track2', 4, 135);
playlist1.addTrack(track2);
playlist1.addTrack(track1);
library1.addplaylists(playlist1);
playlist1.getOverallRating();
console.log(playlist1.totalRating);


// console.log(library1.playlists);
// console.log(track1)
console.log(playlist1);
console.log(playlist1.tracks.length);
console.log(playlist1.getOverallRating());
console.log(playlist1.getDurationSum());
console.log(playlist1.totalDuration);