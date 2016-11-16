var Names = ["MEMES", "HARDER DADDY :tayrexx:", "LE", "Fearless Swiftie is Awesome", "Holeguy", "WHERES MY FUCKING PACKAGE!!!!", "CosGOD"];
var Daddy = Names[Math.floor(Math.random() * Names.length)];

function popout() {
    for (var i = 0; i <= 100; i++) {
  firstAlert("You Tried ", "Escaping The Luner for " + i  + " Times.");
  secondAlert("Stop Trying ", "you can't escape the luner, you've been trying for " + i + " Times");
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


function changeParagraph() {
  document.getElementById("meh").innerHTML = Daddy;
}

function myFunction() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('http://i.imgur.com/YTNRPWE.jpg')";
}

function name() {
    var namePrompt = ("What's Your Name Buddy?");
    document.getElementById("rexx").innerHTML = "Welcome to Tay Is Bae Website, " + namePrompt +  "!";
}
name();
