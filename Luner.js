function popout() {
    for (var i = 0; i < 100; i++) {
  firstAlert("You Tried ", "escaping the Luner " + i  + " times.");
  secondAlert("Stop Trying, ", "you can't escape the Luner. You've been trying " + i + " times");
}
}

function firstAlert(dank, dork) {
    if (i < 50) {
        alert(dank + dork);
    }
}

function secondAlert(lun, ner) {
  if (i >= 50) {
    alert(lun + ner);
  }
}

function myFunction() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('http://i.imgur.com/YTNRPWE.jpg')";
}

function namePrompt() {
    var namePrompt = prompt("What's Your Name Buddy?");
    document.getElementById("rexx").innerHTML = "Welcome to Tay Is Bae Website, " + namePrompt +  "!";
}
window.onload = namePrompt;
