window.onload = function () {
    speechToText();
}


function getText() {
            var recognition = new webkitSpeechRecognition();
            recognition.onresult = function (event) {
                console.log(event);
                document.getElementsByClassName('textToSpeech')[0].children[0].value = event.results[0][0].transcript;
            }
            recognition.start();
        }
        
        
function speechToText() {
            var $divs = document.getElementsByClassName("textToSpeech");
            for (var i = 0; i < $divs.length; i++) {
                var sb = [];
                var elm = $divs[i];
                sb.push("<img class='speechTextIcon' src='style/images/sound.png'");
                sb.push("onclick='getText(");
                sb.push(")'>");
                elm.innerHTML += sb.join("");
            }


    }