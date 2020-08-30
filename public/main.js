var videoLocal = document.getElementById("localvideo");
var constraints = {audio: false, video: true}
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;  
    navigator.getUserMedia(constraints,mostrarvideo,errorvideo);
}else{
    alert( MediaDevices.getUserMedia());
    navigator.mediaDevices.getUserMedia(constraints,mostrarvideo,errorvideo);
}
function mostrarvideo(stream){
    alert()
    videoLocal.srcObject =stream;
    //videoLocal.play();
}

function errorvideo(error){
   alert(error);
}


