var new_windows = null;
var intervalID;

function open_new_window() {
  new_windows = window.open('http://sandbox.jurnal.id/authorize_apps/new?client_id=5c2f09fcd0c94222aa7a1237490377cb', 'myWin', 'width = 600, height = 800');
  new_windows.focus();
}


function receiveMessage(event)
{
  window.location.href = window.location + "?access_token=" +event.data;
  if(new_windows != null){
    new_windows.close();
  }
}

window.addEventListener("message", receiveMessage, false);

$(function(){
  $(".button-area").click(open_new_window);
});