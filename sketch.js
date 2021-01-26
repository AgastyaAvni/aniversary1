
var hearts1,hearts2,hearts3,hearts4,hearts5;
var heartsImg,heartsImg1;

var photo;
var photoImg;

function preload(){

heartsImg=loadImage("hearts.webp");
heartsImg1=loadImage("hearts.webp");

photoImg=loadImage("momanddad.png");

}


function setup (){

createCanvas(1400,1000)

photo = createSprite(700,550,20,20)
photo.addImage(photoImg);
photo.scale=0.8








}

function draw(){

background("pink")

   movingHearts();
   movingHearts1();
   movingHearts2();

  textSize(100);
  fill(random(50,160), random(20,190),random(100,200));
  stroke(random(50,160), random(20,190),random(100,200));
  strokeWeight(2)
  text("Happy Aniversary",300,200)


  textSize(120);
  
  fill(random(50,160), random(20,190),random(100,200));
  stroke(random(50,160), random(20,190),random(100,200));
  text("AJAY and RUPAM",230,420)

 


  drawSprites();


}

function movingHearts(){

  if(frameCount % 160 === 0 ){

    hearts1=createSprite(random(1500,300),140)
    var r=Math.round(random(1,2));

    if(r===1){
      hearts1.addImage(heartsImg);
    }
    else{

      hearts1.addImage(heartsImg1);
    }
   
    
    hearts1.velocityY+=8;
  
    hearts1.scale=0.1;
  
    hearts1.addImage(heartsImg);
  


}


}

function movingHearts1(){

  if(frameCount % 120 === 0 ){

    hearts2=createSprite(random(1000,300),80)
    var r=Math.round(random(1,2));

    if(r===1){
      hearts2.addImage(heartsImg);
    }
    else{

      hearts2.addImage(heartsImg1);
    }
   
    
    hearts2.velocityY+=8;
  
    hearts2.scale=0.1;
  
    hearts2.addImage(heartsImg);
  


}


}

function movingHearts2(){

  if(frameCount % 80 === 0 ){

    hearts3=createSprite(random(200,300),20)
    var r=Math.round(random(1,2));

    if(r===1){
      hearts3.addImage(heartsImg);
    }
    else{

      hearts3.addImage(heartsImg1);
    }
   
    
    hearts3.velocityY+=8;
  
    hearts3.scale=0.1;
  
    hearts3.addImage(heartsImg);
  


}


}

