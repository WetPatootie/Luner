var Names = ["MEMES", "HARDER DADDY :tayrexx:", "LE", "Fearless Swiftie is Awesome", "Holeguy", "WHERES MY FUCKING PACKAGE!!!!", "CosGOD"];
var Daddy = Names[Math.floor(Math.random() * Names.length)];

function FS() {
    for (var i = 0; i <= 100; i++) {
  meme("You Tried ", "Escaping The Luner for " + i  + " Times.");
  luna("Stop Trying ", "you can't escape the luner, you've been trying for " + i + " Times");
}
}


var i = 0;
function meme(dank, dork, Donran) {
    if (i < 50) {
        alert(dank + dork);
    }
}

function luna(lun, ner, lol) {
  if (i >= 50) {
    alert(lun + ner);
  }
}


function nene() {
  document.getElementById("meh").innerHTML = Daddy;
}

function myFunction() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('http://i.imgur.com/YTNRPWE.jpg')";
}

function Name() {
    var Andri
    
    Andri=prompt("What's Your Name Buddy?");
    document.getElementById("rexx").innerHTML = "Welcome to Tay Is Bae Website, " + Andri +  "!";
}
Name();
