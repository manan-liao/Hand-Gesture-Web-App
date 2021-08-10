Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:95
});

prediction_1 = "";
prediction_2 = "";

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "capture _image" src = "'+data_uri+'">';
    } );
}

console.log("ml5version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7G0FC5ZR7/',modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");
}