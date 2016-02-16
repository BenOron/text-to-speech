/**
 * Created by I075528 on 11/3/14.
 */
window.onload = function () {
    speechText(),
    speechToText();
}

function speechText() {
    var $divs = document.getElementsByClassName("speechText");
    for (var i = 0; i < $divs.length; i++) {
        var sb = [];
        var elm = $divs[i];
        if(elm.nodeName=="INPUT"){
            console.log("@@@ Error - Please insert the input Tag using speechText Class into Div @@@@ ");
        }
        var text = findClass(elm);
        sb.push("<audio name='audioPlayer' id='audioPlayer")
        sb.push(i);
        sb.push("' style='display:none ' controls='' name='media'>");
        sb.push("<source class='textGet' src='http://translate.google.com/translate_tts?tl=en&amp;q=");
        sb.push(encodeURI(text));
        sb.push("' type='audio/mpeg'>");
        sb.push("</audio>");
        sb.push("<img style='margin-left: 10px;' class='speechTextIcon imageSpeechTextIcon' src='style/images/sound.png'");
        sb.push(" onclick='play(");
        sb.push(i);
        sb.push(")'>");
        elm.innerHTML += sb.join(""); 
        }
}

function play(audioNumber) {
    var elmId = document.getElementById("audioPlayer" + audioNumber);
    elmId.play();
}

function getText(elm) {
    if (elm.textContent)
        return elm.textContent.length>1 ? elm.textContent: elm.value;
    return elm.innerText.length>1?elm.innerText:elm.value;

}

function findClass(elm){
    if(elm.childElementCount>0){
       return getText(elm.children[0]);
    }else{
       return getText(elm);
    }
}


function getTextToSpeech() {
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function (event) {
        var elm =  document.getElementsByClassName('textToSpeech')[0];
        console.log(event);
        if(elm.childElementCount>0){
            for(var i=0;i<elm.childElementCount;i++){
                if(elm.children[i].nodeName=='INPUT'){
                       elm.children[i].value = event.results[0][0].transcript;
                }
            }
        }else{
            elm.children[0].value = event.results[0][0].transcript;    
        }
    }
    recognition.start();
}

function speechToText() {
    var $divs = document.getElementsByClassName("textToSpeech");
    for (var i = 0; i < $divs.length; i++) {
        var sb = [];
        var elm = $divs[i];
        sb.push("<img style='width: 18px' class='speechTextIcon' src='style/images/microphone.png'");
        sb.push("onclick='getTextToSpeech(");
        sb.push(")'>");
        elm.innerHTML += sb.join("");
    }
}