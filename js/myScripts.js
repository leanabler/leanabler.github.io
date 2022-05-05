// ----------------------------------------------------------------
// This function calculates appropriate map height from
// given viewport width and map width.
// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
// This function loads specified image to specified
// container and changes background color of clicked thumb.
// ----------------------------------------------------------------
// It uses a primary color stored in a variable defined
// in myStyles.css file.
// ----------------------------------------------------------------
function loadImage(imgSrcPath,imgContainerId,thumbTag){

  var imgUrl = "url('" + imgSrcPath + "')";
  document.getElementById(imgContainerId).style.backgroundImage = imgUrl;
  thumbTag.style.backgroundColor = 'rgb(var(--bs-primary-rgb))';

}

function loadAppTitle(appTitleId,appTitle,url,thumbTag){
  thumbTag.style.backgroundColor = 'rgb(var(--bs-primary-rgb))';
  document.getElementById(appTitleId).innerHTML = appTitle;
  document.getElementById(appTitleId).setAttribute('href',url);
}

// ----------------------------------------------------------------
// Main procedures

// Declare variables
var vpWidth;
var mapWidth
var newMapHeight;
var newImgHeight;

vpWidth = window.innerWidth;

// ----------------------------------------------------------------
// Calculate and set initial appropriate heights.
// Jquery is used to get the rendered widths of map iframe
// and image container to calculate and set appropriate values
// of heights
// ----------------------------------------------------------------
mapWidth = $("#mapFrm").width();
newMapHeight = calcMapHeight(vpWidth,mapWidth);
$("#mapFrm").css('height', newMapHeight);

// Calculate and set initial appropriate img height
imgWidth = $(".myImgContainer").width();
newImgHeight = calcMapHeight(vpWidth,imgWidth);
$(".myImgContainer").css('height', newImgHeight);

// ----------------------------------------------------------------
// Listen to window resize event.
// Event listener is added to window so that it reads the
// following codes every time when the window is resized.
// The purpose is to adjust the heights of iframe map and
// image container, making them better responsive to different
// window sizes.
// ----------------------------------------------------------------
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

  if ($('#navbarResponsive').is(":visible")){
    // console.log('nav status: visible');
    $("#appTitleContainer").css('max-width', 833);
  } else {
    // console.log('nav status: invisible');
    $("#appTitleContainer").css('max-width', 938);
  }
  // console.log('imgWidth' + imgWidth);
  // console.log('titleWidth' + $("#appTitleContainer").css('width'));
  
});

