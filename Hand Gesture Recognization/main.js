prediction=""

Webcam.attach(camera);

console.log('ml5 version: ', ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DckxZcEtb/model.json',modelLoaded);

function modelLoaded() {
console.log('Model Loaded!')
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction; 
    var utterThis = new SpeechSynthesisUtterance (speak_data_1 + speak_data_2);
    synth.speak (utterThis);
}

function check()
{   
 img = document.getElementById('captured_image');
 classifier.classify(img, gotResult);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(results);
    }
    else
    {
        console.log(results);

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    }

}