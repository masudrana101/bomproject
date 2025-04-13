const width = document.getElementById("width");
const height = document.getElementById("height");

width.innerHTML = "window Width is : " + window.innerWidth;
height.innerHTML = "window Height is : " + window.innerHeight;


function openWindow(){
    myWindow = window.open("https://chatgpt.com/");
}

function closeWindow(){
    myWindow.close();
}

