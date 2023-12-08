img="";
objetos=[]
statusModelo=""
function preload(){
    img=loadImage("istockphoto-1281240685-612x612.jpg");
}
function setup(){
    canvas=createCanvas (640,420);
    canvas.center();
    detectorDeObjeto=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detectando objetos";
}

function modelLoaded(){
    console.log("modelo carregado");
    statusModelo=true;
    detectorDeObjeto.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log("erro");

    }
    else{
        console.log(results);
     objetos=results;
    }
}

function draw(){
    image(img,0,0,640,420);
   if(statusModelo!=""){
for( i=0 ; i<objetos.length; i=i+1 ){
document.getElementById("status").innerHTML="status:objeto detectado";
fill("#FF0000");
percent=floor(objetos[i].confidence*100);
text(objetos[i].label+" "+ percent+"%",objetos[i].x+15,objetos[i].y+15);
noFill(); 
stroke('#FF0000');
rect(objetos[i].x, objetos[i].y, objetos[i].width, objetos[i].height);
}
   }
}
    

