const width = document.getElementById("width");
const height = document.getElementById("height");
const availWidth = document.getElementById("availWidth");
const availHeight = document.getElementById("availHeight");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");

width.innerHTML = "screen Width: " + screen.width;
height.innerHTML = "screen Height: " + screen.height;
availWidth.innerHTML = "screen availwidth: " + screen.availWidth;
availHeight.innerHTML = "screen availheight: " + screen.availHeight;
colorDepth.innerHTML = "screen colorDepth: " + screen.colorDepth;
pixelDepth.innerHTML = "screen pixelDepth: " + screen.pixelDepth;


