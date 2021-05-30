// 6.Playlist
// Add: Pushes the passed-through song to the songs array
// Play: Plays current song based on array index
// Stop: Holds place in array, but calls above stop song prototype function
// Next: Sets the next song in the songs array, calling the above play prototype function
// Song should take in two arguments, title and artist, which should both be added as properties when the
// Song constructor function is used.
// Play: Sets the song as playing using isPlaying
// Stop: Sets the song as not playing (isPlaying = false)

function Playlist() {
  let songIndex = 0;
  this.songs = [];
  this.add = function (song) {
    this.songs = [...this.songs, song];
    return this.songs;
  };
  this.play = function () {
    return `${this.songs[0][songIndex]} started`;
  };
  this.stop = function () {
    return `${this.songs[songIndex][0]} stopped`;
  };
  this.next = function () {
    if (songIndex > this.songs.length - 1) {
      songIndex = 0;
    }
    this.songIndex++;
    return `${this.songs[songIndex][0]} stopped, ${
      this.songs[songIndex + 1][0]
    } started `;
  };
}
function Song(...songs) {
  this.song = [songs[0], songs[1]];
  return this.song;
}
const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
console.log(playlist.add(jaded));
console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started
