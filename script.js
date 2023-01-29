const onswitch = document.querySelector(".onswitch")
const offswitch = document.querySelector(".offswitch")
const room = document.querySelector(".room")
const light = document.querySelector(".light")

onswitch.addEventListener("click", lightOn);

function lightOn() {
    document.body.style.backgroundColor = "#808080";
    light.style.backgroundColor = "#ffffff";
}

offswitch.addEventListener("click", lightOff);

function lightOff () {
    document.body.style.backgroundColor = "#000000";
    light.style.backgroundColor = "#000000";
}
