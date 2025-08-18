function updateclock() {
    const timern = new Date()
    document.getElementById("mainclock").innerText = timern.toLocaleTimeString();
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