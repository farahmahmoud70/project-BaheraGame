export var audio = document.getElementById("sound");


export function soundOn() {
    document.querySelector(".off").classList.toggle("hide")
    document.querySelector(".on").classList.toggle("hide")
    audio.muted = true;
}


export function soundOff() {

    document.querySelector(".off").classList.toggle("hide")
    document.querySelector(".on").classList.toggle("hide")
    audio.muted = false;

}