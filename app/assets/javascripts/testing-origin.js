var new_windows = null;
var intervalID;

function open_new_window() {
  new_windows = window.open('http://sandbox.jurnal.id/authorize_apps/new?client_id=57170c81a5a74b7d83a469e41364b102', 'myWin', 'width = 500, height = 600');
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