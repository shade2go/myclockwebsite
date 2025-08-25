function updateclock() {
    const timern = new Date()
    document.getElementById("mainclock").innerText = timern.toLocaleTimeString();
    listofdays = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    dayrn = listofdays[timern.getDay()];

    listofmonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"];
    monthrn = listofmonths[timern.getMonth()]
    document.getElementById("fulldate").innerText = `${dayrn}, ${timern.getDate()} ${monthrn}, ${timern.getFullYear()}`
}
setInterval(updateclock, 1000)
updateclock()

let isvisible = true

const shwatermarkbutton = document.getElementById("shwatermark")
const signature = document.getElementById("watermark")

shwatermarkbutton.addEventListener("click", function showhide() {
    isvisible = !isvisible
    isvisible ? signature.style.display = "block" : signature.style.display = "none"
});

document.getElementById("timezone").innerText = `Your Timezone: ${new Date().toString().slice(24)}`

document.getElementById("fullscreenbutton").addEventListener("click", () =>
    document.fullscreenElement 
        ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
        : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen()
);

let isdark = true
document.getElementById("darklighttoggle").addEventListener("click", function darklighttoggle() {
    isdark = !isdark
    isdark ? document.getElementById("cssselector").href = "style.css" : document.getElementById("cssselector").href = "lightstyle.css"
    isdark ? document.getElementById("darklighttoggle").innerText = "Light Mode" : document.getElementById("darklighttoggle").innerText = "Dark Mode"
});

