var playlist = {
  'Ke$ha': 'Praying',
  'Kanye': 'Gold Digger'
};
function updatePlaylist(playlist){
  playlist['Phil Ochs'] = "Here\'s to the State of Mississippi"
  return playlist
}
function removeFromPlaylist(playlist){
  delete playlist.Kanye
  return playlist
}
