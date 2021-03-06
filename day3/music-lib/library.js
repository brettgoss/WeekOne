var arg = process.argv[2]
var param1 = process.argv[3]
var param2 = process.argv[4]


var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
 var pId = library.playlists;
 for (var key in pId) {
    var result = (
      pId[key].id
      + ': '
      + pId[key].name
      + ' - '
      + pId[key].tracks.length
      + ' tracks'
    );
    console.log(result);
  }
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var tId = library.tracks;
  for (var key in tId) {
    var result = (
      tId[key].id
      + ': '
      + tId[key].name
      + ' by '
      + tId[key].artist
      + ' ('
      + tId[key].album
      + ')'
    );
    console.log(result);
  }
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var pId = library.playlists[playlistId];
  var tId = library.tracks;
  var pTracks = pId.tracks;
  var resultP = (
    pId.id
    + ': '
    + pId.name
    + ' - '
    + pId.tracks.length
    + ' tracks');

  console.log(resultP);

  for(var i = 0; i < pTracks.length; i++){
    var track = tId[pTracks[i]]
    var result = (`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
    console.log(result)
  }
}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

switch(arg){
  case 'allPlaylists':
    printPlaylists()
    break;
  case 'allTracks':
    printTracks()
    break;
  case 'playlist':
    printPlaylist(param1)
    break;
  case 'addtoplaylist':
    addTrackToPlaylist(param1, param2)
    break;
  default:
    console.log('Please specify a function.')
  }
