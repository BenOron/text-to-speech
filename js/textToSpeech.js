/**
 * Created by I075528 on 11/3/14.
 */
window.onload = function () {
    speechText();
}

function speechText() {
    
    var $divs = document.getElementsByClassName("speechText");
    for (var i = 0; i < $divs.length; i++) {
        var sb = [];
        var elm = $divs[i];
        var text = getText(elm);
        sb.push("<audio name='audioPlayer' id='audioPlayer")
        sb.push(i);
        sb.push("' style='display:none ' controls='' name='media'>");
        sb.push("<source src='http://translate.google.com/translate_tts?tl=en&amp;q=");
        sb.push(encodeURI(text));

        sb.push("' type='audio/mpeg'>");
        sb.push("</audio>");
        sb.push("<img class='speechTextIcon' src='style/images/sound.png'");
        sb.push(" onclick='play(");
        sb.push(i);
        sb.push(")'>");
        elm.innerHTML += sb.join("");
    }

}

function play(audioNumber) {
    document.getElementById("audioPlayer" + audioNumber).play();
}

function getText(elm) {
    if (elm.textContent)
        return elm.textContent;
    return elm.innerText;

}