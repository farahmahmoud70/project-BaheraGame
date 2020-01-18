
    var audio = document.getElementById("sound");


document.querySelector(".on").addEventListener("click",function (
    ) {

        document.querySelector(".off").classList.toggle("hide")
    document.querySelector(".on").classList.toggle("hide")
    audio.muted = true;
})

document.querySelector(".off").addEventListener("click",function (
    ) {

        document.querySelector(".off").classList.toggle("hide")
    document.querySelector(".on").classList.toggle("hide")
    audio.muted = false;

})



