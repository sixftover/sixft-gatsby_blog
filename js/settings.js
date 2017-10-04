

//Unveil
$(document).ready(function() {
   $("img").unveil();
});

// TypeIt
$('#typing').typeIt({
   strings: ["Six Feet Over.", "tasting new food.", "exploring new cities.", "taking photos."],
   // options
      //speed: 50,
   breakLines: false,
      loop: true,
      deleteDelay: 2000,
   //autoStart: false
});