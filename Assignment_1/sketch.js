// IMAGE REFERENCES

// https://www.quora.com/What-are-actors-called-that-are-in-movies
// https://www.wsfa.com/2019/03/21/bill-repeal-common-core-standards-passes-committee/
// https://coachmaitefinch.com/coaching-relaciones-de-pareja/#.YeC_KljMLFo
// https://www.engadget.com/2019-04-26-sony-ps5-playstation-5-launch-date-2020.html
// https://cutewallpaper.org/25/anime-school-lockers-wallpaper/view-page-25.html


// ILLUSTRATIONS REFERENCES

// https://stock.adobe.com/ca/?ef_id=Cj0KCQiAuP-OBhDqARIsAD4XHpeCKw8eL05NLMxf1M5vG7AwDnm7njz72lZ-uyUBp0gDK4PWQrjBWWsaAjNTEALw_wcB:G:s&s_kwcid=AL!3085!3!444559090922!e!!g!!adobe%20stock!335482729!18992981689&as_channel=sem&as_campclass=brand&as_campaign=CA|CPRO|Stock|PURCH|Brand_Exact|GG||&as_source=google&as_camptype=acquisition&sdid=PQ7SQCN4&mv=search&gclid=Cj0KCQiAuP-OBhDqARIsAD4XHpeCKw8eL05NLMxf1M5vG7AwDnm7njz72lZ-uyUBp0gDK4PWQrjBWWsaAjNTEALw_wcB


// Model URL #1
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/5lj77bbp_/';

// Video
let video;
let flippedVideo;


// Images

// let img;
// let img1;
// let img2;
// let img3;
// let img4;


// Illustration

let png;
let png1;
let png2;
let png3;
let png4;


let classifier;
// To store the classification
let label = "";

// Sound
// Source: https://freesound.org/

// let song = false;


let font; // when I tried to changed the typography, it caused the emojis to not pop
             // I'll most likely look back into this another day.

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');

  // ------ IMAGES --------
  img = loadImage('assets/school_hallway.png');
  img1 = loadImage('assets/classroom.png');
  img2 = loadImage('assets/camera.png');
  img3 = loadImage('assets/gaming.png');
  img4 = loadImage('assets/coffee_mug.png');


  // ------ ILLUSTRATIONS ----------
  png = loadImage('assets/notebook_school.png');
  png1 = loadImage('assets/eraser_fives.png');
  png2 = loadImage('assets/camera_lens.png');
  png3 = loadImage('assets/gaming_2.png');
  png4 = loadImage('assets/mug_smoke.png');


  // ---- SOUNDS --------

  // song = loadSound('assets/school.mp3');
  // song = loadSound('assets/Underworld.mp3'); //Sound from Nintendo's Super Mario Bros.
  // song = loadSound('assets/camera.mp3');
  // song = loadSound('assets/star_wars.mp3');

  font = loadFont('Gilroy-Regular.otf');
}

function setup() {
  createCanvas(640, 520);
  pixelDensity(5);
  // Create the video
  video = createCapture(VIDEO);
  video.size(640, 500);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);

  // Draw the video
  image(flippedVideo, 0, 0);
  // filter(BLUR, 8);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height - 8);

  // in the first few iterations, I had the sound play while emojis were on the screen
  // however, due to the amount of information that is being put into the sketch 
  // it's likely what is causing the sound to get static, I'll see if it can play 
  // certain music and sound better WITHOUT the emojis


  // ------- IMAGE ITERATIONS ----------------


  // if (label == 'Notebook') {
  //   image(img, 0, 0, 640, 500);
  //   // filter(POSTERIZE, 4);

  // } else if (label == 'Eraser') {
  //   image(img1, 0, 0, 640, 500);

  // } else if (label == 'Camera') {
  //   image(img2, 0, 0, 640, 500);

  // } else if (label == 'Controller') {
  //   image(img3, 0, 0, 640, 500);

  // } else if (label == 'Mug') {
  //   image(img4, 0, 0, 640, 500);

  // }

  // ------- ILLUSTRATION ITERATIONS ----------------


  if (label == 'Notebook') {
    image(png, 0, 0, 640, 500);
    // filter(POSTERIZE, 4);

  } else if (label == 'Eraser') {
    image(png1, 0, 0, 640, 500);

  } else if (label == 'Camera') {
    image(png2, 0, 0, 640, 500);

  } else if (label == 'Controller') {
    image(png3, 0, 0, 640, 500,);

  } else if (label == 'Mug') {
    image(png4, 0, 0, 640, 500, 10);

  }




  // ------------ EMOJI & FILTER ITERATIONS ------------------

  // let emoji = '📕';
  // if (label == 'Eraser') {
  //   emoji = '🖍';  //couldn't find a whiteboard eraser emoji

  //   // image(flippedVideo, 0, 0);
  //   // filter(GRAY);
  // } else if (label == 'Controller') {
  //   emoji = '🎮';

  //   // image(flippedVideo, 0, 0);
  //   // filter(INVERT);
  // } else if (label == 'Camera') {
  //   emoji = '📸';

  //   // image(flippedVideo, 0, 0);
  //   // filter(OPAQUE);
  // } else if (label == 'Mug') {
  //   emoji = '🍵';

  //   // image(flippedVideo, 0, 0);
  //   // filter(BLUR);
  // }

  // ------------- SOUND ITERATIONs -----------------

  // if (label == 'Eraser') {
  //   // plays the school.mp3 file
  //   song.stop();
  //   // image(flippedVideo, 0, 0);
  //   // filter(GRAY);
  // } else if (label == 'Controller') {
  
  //   song.stop();
  //   // image(flippedVideo, 0, 0);
  //   // filter(INVERT);
  // } else if (label == 'Camera') {
  
  //   song.stop();
  //   // image(flippedVideo, 0, 0);
  //   // filter(OPAQUE);
  // } else if (label == 'Mug') {
 
  //   // song.play();
  //   // image(flippedVideo, 0, 0);
  //   // filter(BLUR);
  // }


  // textSize(200);
  // text(emoji, 135, 135);
  // textFont(font);
}
// song.stop();

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}