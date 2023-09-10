x = 0;
y = 0;

drawApple = "";

var apple = "apple.png";

var speakData = "" ;

var toNumber = "" ;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  loadImage(apple)
}

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 toNumber = Number(content);

 if(Number.isInteger(toNumber)) {
  document.getElementById("status").innerHTML = "A maçã começou a ser desenhada" + set;
 }
 else {
  document.getElementById("status").innerHTML = "O número não foi reconhecido" + set;
 }

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas= createCanvas(screen_width,screen_height-150)
  canvas.position(0,150)
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";

  }
  for(var i = 1; i <= toNumber; i++) {
  
   x=  Math.floor(Math.random()*700);
   y= Math.floor(Math.random()*400);
    Image(apple,x,y,50,50);
    document.getElementById("status").innerHTML = toNumber + "maçãs desenhadas";
    speakData = toNumber + "maçãs desenhadas";
    speakData()
}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
