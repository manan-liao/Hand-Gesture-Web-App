Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:95
});

prediction = "";

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "capture _image" src = "'+data_uri+'">';
    } );
}

console.log("ml5version",ml5.version);
classifier = ml5.imageClassifier('v',modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "the prediction is"+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();
        if(results[0].label == "All the best"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "That was a marevlous victory"){
            document.getElementById("update_emoji").innerHTML = "&#129304;";
        }
        if(results[0].label == "This is looking amazing"){
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
    }
}