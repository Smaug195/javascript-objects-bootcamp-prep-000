var playlist = {'Pink Floyd':'Dark Side of The Moon'}

var updatePlaylist(playlist,artist,song){
  return Object.assign({},playlist,{[artist]: song})
}