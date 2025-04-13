const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");




href.innerHTML = "window href: " + location.href;
hostname.innerHTML = "window hostname: " + location.hostname;
pathname.innerHTML = "window pathname: " + location.pathname;
protocol.innerHTML = "window protocol: " + location.protocol;
port.innerHTML = "window port: " + location.port;


function loadw3s(){
    window.location.assign("https://www.w3schools.com/js/")

}