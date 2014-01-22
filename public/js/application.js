if (!!window.EventSource) {
  var source = new EventSource('/readings');
} else {
  alert('Events not supported in browser');
}

source.addEventListener('temp', function(e) {
  if (e.origin != 'http://localhost:4567') {
    alert('Not from safe origin');
    return;
  }
  console.log(e.data);
  $('.temp').html(e.data);
}, false);

source.addEventListener('CC', function(e) {
  if (e.origin != 'http://localhost:4567') {
    alert('Not from safe origin');
    return;
  }
  console.log(e.data);
  $('.power').html(e.data);
}, false);

source.addEventListener('open', function(e) {
  // Connection was opened.
}, false);

source.addEventListener('error', function(e) {
  if (e.readyState == EventSource.CLOSED) {
    // Connection was closed.
  }
}, false);
