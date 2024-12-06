// Funzione per inizializzare gli iframe di YouTube
function onYouTubeIframeAPIReady() {
  const videoIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  videoIds.forEach(function(id) {
    new YT.Player('player' + id, {
      events: {
        'onReady': onPlayerReady
      }
    });
  });
}

// Funzione per gestire l'evento onReady del player
function onPlayerReady(event) {
  event.target.playVideo();
}
