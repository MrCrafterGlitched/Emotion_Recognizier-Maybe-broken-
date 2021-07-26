var Predict_1=""
var Predict_2=""
Webcam.set({
width:350, height:300, image_format:"jpeg", jpeg_quality:110, dest_width:345, dest_height:295
});
Camera=document.getElementById("camera")
Webcam.attach(Camera)
function TakeSnapShot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="Snapshot" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WvSO9Inev/model.json", model_loaded);
function model_loaded() {
console.log("m0de1_1s_10aded")
}
function Speak() {
    var Synth=window.speechSynthesis;
    Prediction_1="The First Prediction is"+ Predict_1;
    Prediction_2="The Second Prediction is"+ Predict_2;
    var Utter= new SpeechSynthesisUtterance(Prediction_1+Prediction_2)
    Synth.speak(Utter);
}
function IdentifySnapShot() {
    img=document.getElementById("Snapshot");
    classifier.classify(img,getResult);
}
function getResult(error,result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        Predict_1=result[0].label
        Predict_2=result[1].label
        document.getElementById("emotion1").innerHTML=Predict_1
        document.getElementById("emotion2").innerHTML=Predict_2
        Speak()
        if (Predict_1=="Sad") {
            document.getElementById("emoji1").innerHTML="&#128532;"
        } else if(Predict_1=="Happy") {
            document.getElementById("emoji1").innerHTML="&#128512;"
        }else if(Predict_1=="Angry") {
            document.getElementById("emoji1").innerHTML="&#128545;"
        }
        if (Predict_2=="Sad") {
            document.getElementById("emoji2").innerHTML="&#128532;"
        } else if(Predict_2=="Happy") {
            document.getElementById("emoji2").innerHTML="&#128512;"
        }else if(Predict_2=="Angry") {
            document.getElementById("emoji2").innerHTML="&#128545;"
        }
    }
}