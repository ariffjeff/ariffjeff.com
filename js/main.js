function copyElemText(id) {
    var text = document.getElementById(id).textContent
    var textArea = document.createElement("textarea");
    elem = document.body.appendChild(textArea);
    textArea.value = text;
    textArea.select();
    document.execCommand("copy");
    elem.remove()
}

// function copyElementText(id) {
//     var p = document.getElementById(id);
//     p.select();
//     document.execCommand('copy');
//     alert("Copied the text: " + text);
// }