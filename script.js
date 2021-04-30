
const video = document.getElementById('video')
const photo = document.getElementById('canvas')

var age;
var gender;
var mensaje;




Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.ageGenderNet.loadFromUri('/models')
  


]).then(startVideo)

function startVideo() {
  navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;
  if (navigator.getUserMedia){
    navigator.getUserMedia(
      { audio: true,video: {} },
      stream => video.srcObject = stream,
      err => console.error(err)
    )
  }
}
function asd(porcentaje,edad,genero){
  if (genero=='male'){
    genero="masculino"
  }
  else if (genero=='female'){
    genero="femenino"
  }
  mensaje="Se ha dectetado un instruso con rasgos "+genero+" con una edad aproximada de "+Math.trunc(edad)+" años";
  takePicture();
}


video.addEventListener('playing', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  var idvar = setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withAgeAndGender()
    var porcent =JSON.stringify(detections)

    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)  
     resizedDetections.forEach( detection => {
      const box = detection.detection.box 
       age=detection.age
       gender=detection.gender
      const drawBox = new faceapi.draw.DrawBox(box, { label: Math.round(detection.age) + " year old " + detection.gender })
      drawBox.draw(canvas)
    })
    if(porcent.length>2){

      var porcent2=porcent.toString()
      var porcent3=JSON.parse(porcent2.slice(1,-1))
      asd(porcent3['detection']['_classScore'],age,gender)
      clearInterval(idvar);
      
    }

  }, 350)
});

function takePicture(){

  photo.getContext("2d").drawImage(video, 0, 0,720,560);
  var img = photo.toDataURL("image/png",1.0);



  document.getElementById('linkimg').value=img;
  document.getElementById('caption').value=mensaje;

  takeVideo();


}
function takeVideo(){

    
    let mediaRecorder = new MediaRecorder(video.srcObject,{mimeType: 'video/webm; codecs=vp9'});
    let chunks = [];
    
    mediaRecorder.start();
    console.log(mediaRecorder.state);

    setTimeout(function(){
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
    },15000);


    mediaRecorder.ondataavailable = function(ev) {
        chunks.push(ev.data);
    }
    mediaRecorder.onstop = (ev)=>{
        let blob = new Blob(chunks, { 'type' : 'video/mp4;' });
        chunks = [];
        let videoURL = window.URL.createObjectURL(blob);
        var reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = function() {
            var base64data = reader.result;     
            document.getElementById('linkvideo').value=base64data;

            $.ajax({
                   url: "index.php",
                   type: "POST",
                   data: {'linkimg':document.getElementById('linkimg').value,
                   'caption':document.getElementById('caption').value,
                   'linkvideo':document.getElementById('linkvideo').value} 


               });
            }
              startVideo();
          }
    
}

