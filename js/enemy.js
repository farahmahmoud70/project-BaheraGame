import {
  storedUsername,
  storedscore,
  storedLife,
  storedHighScore,
  retrivedOjects,
  arr
} from './start.mjs'
import {
  startGame,
  logIn,
  retrive
} from './start.mjs'
// import {logIn} from './start.mjs'


$('#start-game').click(startGame);
$('#login').click(logIn);

///////////////////////////////////////////////////////////////////
var y = 15;
var x = 46;
var player = document.querySelector('.girl');
var enemies = document.querySelectorAll('.enemy');
var enimesss = [];
// let start = Date.now();

var counterLevel1 = 12;
var counterLevel2 = 5;
var speed = Math.floor(Math.random() * counterLevel1 + counterLevel2)
console.log("jj", speed)
// var d;
// var body = document.body.clientWidth;
document.addEventListener('keydown', function (e) {
  console.log(e.keyCode);
  //top
  if (e.keyCode == 38) {
    y -= 14;
    document.querySelector(".levelUpContainer").classList.add("hide")
    audio.muted = false;

    // console.log(x)
    $('.girl').css({
      "top": `${y}vh`
    });

    if (y < -50) {
      y = 15;
      x = 46;
      // var levelUpAudio =document.querySelector(".levelUpAudio")
      document.querySelector(".levelUpContainer").classList.remove("hide")

      // levelUpAudio.play();


      $('.girl').css({
        "top": `${y}vh`
      });
      $('.girl').css({
        "left": `${x}vw`
      });


      if (retrivedOjects && retrivedOjects.length > 0) {
        arr.forEach(function (obj) {

          if (obj.username === $('.NameOfPlayer').text()) {
            console.log("beeeeeb");


            obj.score++;
            $('#noOfHeart').text(obj.lifes);
            $('#score').text(obj.score);
            $('#highScore').text(obj.highScore);
            console.log(obj, obj.score, obj.lifes)
            return true

          }

        });
        localStorage.setItem('dataObjectArr', JSON.stringify(arr));

      }

    }
  }
  //bottom

  if (e.keyCode == 40) {
    y += 14;

    $('.girl').css({
      "top": `${y}vh`
    });
    if (y >= 15) {
      y = 15;
      $('.girl').css({
        "top": `${y}vh`
      });
      $('.girl').css({
        "left": `${x}vw`
      });
    }
  }
  //right
  if (e.keyCode == 39) {
    x += 2;
    $('.girl').css({
      "left": `${x}vw`
    });
    console.log(window.innerWidth)
    console.log(x)
    if (x >= 94) {
      x = 94;
      console.log("rrrr", x);
      $('.girl').css({
        "left": `${x}vw`
      });
    }
  }
  //left
  if (e.keyCode == 37) {
    x -= 2;
    $('.girl').css({
      "left": `${x}vw`
    });

    if (x <= 0) {
      x = 0;
      $('.girl').css({
        "left": `${x}vw`
      });
    }
  }
  for (let index = 0; index < 3; index++) {
    isCollapsed(enimesss[index], player)
  }
})

enemies.forEach(function (cur) {
  console.log(y)
  if (document.querySelector('.girl').getBoundingClientRect() < -50) {
    counterLevel1--;
    counterLevel2--;

    console.log("ccccc", counterLevel1);
    console.log("vvvvv", counterLevel2);

    console.log(speed);
  }
  speed = Math.floor(Math.random() * counterLevel1 + counterLevel2)
  cur.style.animation = `mymove ${speed}s linear infinite`
  enimesss.push(cur);
  console.log(enimesss)
  cur.addEventListener('animationstart', function () {

    setInterval(() => {
      isCollapsed(cur, player);

    }, 100);


  });
  cur.addEventListener('animationiteration', function () {
    setInterval(() => {
      isCollapsed(cur, player)
    }, 100);

  })



})







////////////////////////////collsion

var fallAudio = document.querySelector(".fallAudio")

function isCollapsed(enemy, player) {
  var bug = enemy.getBoundingClientRect();
  var bahera = player.getBoundingClientRect();

  if (bug.left < bahera.left + bahera.width && bug.left + bug.width > bahera.left &&
    bug.top < bahera.top + bahera.height && bug.top + bug.height > bahera.top) {
    y = 15;
    x = 46;

    audio.muted = true;
    fallAudio.play();
    // audio.muted = false;
    $('.girl').css({
      "top": `${y}vh`
    });
    $('.girl').css({
      "left": `${x}vw`
    });


    console.log(storedLife)

    var life = storedLife;
    console.log(life)

    if (retrivedOjects && retrivedOjects.length > 0) {
      arr.forEach(function (obj) {

        if (obj.username === $('.NameOfPlayer').text()) {
          console.log("beeeeeb");
          if (obj.lifes <= 3) {

            obj.lifes--;
            obj.score = parseInt($('#score').text());
            $('#noOfHeart').text(obj.lifes);

          }


          if (obj.lifes == 0) {

            obj.lifes = 3;
            if (obj.highScore < obj.score) {
              obj.highScore = obj.score;
              console.log(obj.highScore)
            }
            obj.score = 0;
            var gameOverAudio = document.querySelector(".gameOverAudio")

            document.querySelector(".gameOverContainer").classList.remove("hide")
            gameOverAudio.play()
            audio.muted = true;
          }

          console.log(obj, obj.score, obj.lifes)
          return true

        }

      });
      localStorage.setItem('dataObjectArr', JSON.stringify(arr));

    }


  } else {
    // console.log("noooooooo")
  }
}