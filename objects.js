var playlist = {
  'Ke$ha': 'Praying',
  'Kanye': 'Gold Digger'
};
function updatePlaylist(playlist){
  playlist.assign ({'Phil Ochs' : "Heres to the State of Mississippi"});
  return playlist
}
function removeFromPlaylist(playlist){
  delete playlist.Kanye
  return playlist
}
