// ------------------------------------------------------------
// This function calculates appropriate map height
// from given viewport width and map width
function calcMapHeight(vWidth,mWidth){

  var mAr = 9/6;
  // vWidthMax and mHeightMax were obtained from experiment
  // so that they gave smooth fluid layouts
  var vWidthMax = 1220; 
  var mHeightMax = 556;
  
  if (vWidth <= vWidthMax){
    mHeight = mWidth/mAr;
  }
  else{
    mHeight = mHeightMax;
  }
  return mHeight;
}

// ------------------------------------------------------------
// This function loads specified image to specified container
// and change background color of clicked thumb
function loadImage(imgSrcPath,imgContainerId,thumbTag){

  var imgUrl = "url('" + imgSrcPath + "')";
  document.getElementById(imgContainerId).style.backgroundImage = imgUrl;
  thumbTag.style.backgroundColor = 'rgb(var(--bs-primary-rgb))';

}

// ------------------------------------------------------------
// Main procedures

// Declare variables
var vpWidth;
var mapWidth
var newMapHeight;
var newImgHeight;

vpWidth = window.innerWidth;

// Calculate and set initial appropriate map height
mapWidth = $("#mapFrm").width();
newMapHeight = calcMapHeight(vpWidth,mapWidth);
$("#mapFrm").css('height', newMapHeight);

// Calculate and set initial appropriate img height
imgWidth = $(".myImgContainer").width();
newImgHeight = calcMapHeight(vpWidth,imgWidth);
$(".myImgContainer").css('height', newImgHeight);

// ------------------------------------------------------------
// Listen for window resize event
window.addEventListener('resize', function(event){});

// Update map and img height everytime when window is resized
$(window).resize(function() {

  vpWidth = window.innerWidth;
  
  mapWidth = $("#mapFrm").width();
  newMapHeight = calcMapHeight(vpWidth,mapWidth);
  $("#mapFrm").css('height', newMapHeight);

  imgWidth = $(".myImgContainer").width();
  newImgHeight = calcMapHeight(vpWidth,imgWidth);
  $(".myImgContainer").css('height', newImgHeight);

});