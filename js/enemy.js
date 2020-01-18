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
import{soundOn,
  soundOff,
  audio} from './UI.mjs'

var flag = true;
$('#start-game').click(startGame);
$('#login').click(logIn);

///////////////////////////////////////////////////////////////////
var y = 15;
var x = 46;
var player = document.querySelector('.girl');
var enemies = document.querySelectorAll('.enemy');
var enimesss = [];
var counterLevel1 = 30;
var counterLevel2 = 5;
var scoreChange;
var speed = Math.floor(Math.random() * counterLevel1 + counterLevel2)

function bugspeed() {
  do {
    enemies.forEach(function (cur) {
      if (counterLevel2 <= 1) {
        counterLevel2 = 1;
      }
      speed = Math.floor(Math.random() * counterLevel1 + counterLevel2)
      cur.style.animation = `mymove ${speed}s linear infinite`
      enimesss.push(cur);
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
  } while (scoreChange < parseInt($('#score').text()));
}
bugspeed();

document.addEventListener('keydown', function (e) {
  //top 
  if (flag == true) {
    document.querySelector(".levelUpContainer").classList.add("hide")
    audio.muted = false;
    if (e.keyCode == 38) {
      y -= 14;
      $('.girl').css({
        "top": `${y}vh`
      });

      if (y < -50) {
        y = 15;
        x = 46;
        document.querySelector(".levelUpContainer").classList.remove("hide")
        $('.girl').css({
          "top": `${y}vh`
        });
        $('.girl').css({
          "left": `${x}vw`
        });


        if (retrivedOjects && retrivedOjects.length > 0) {
          arr.forEach(function (obj) {

            if (obj.username === $('.NameOfPlayer').text()) {
              scoreChange = obj.score;
              obj.score++;
              counterLevel1 -= 2;
              counterLevel2--;
              if (speed <= 1) {
                counterLevel1 = 2;
                counterLevel2 = 1;
              }
              if (counterLevel2 === 1) {
                counterLevel2 = 1;
              }
              bugspeed();
              $('#noOfHeart').text(obj.lifes);
              $('#score').text(obj.score);
              $('#highScore').text(obj.highScore);
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
      if (x >= 94) {
        x = 94;
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
  }
  for (let index = 0; index < 3; index++) {
    isCollapsed(enimesss[index], player)
  }
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
    $('.girl').css({
      "top": `${y}vh`
    });
    $('.girl').css({
      "left": `${x}vw`
    });

    var life = storedLife;
    if (retrivedOjects && retrivedOjects.length > 0) {
      arr.forEach(function (obj) {

        if (obj.username === $('.NameOfPlayer').text()) {
          if (obj.lifes <= 3) {
            obj.lifes--;
            obj.score = parseInt($('#score').text());
            $('#noOfHeart').text(obj.lifes);

          }

          if (obj.lifes == 0) {

            flag=false;
            document.querySelector('.game-container').classList.add("hide")
            obj.lifes = 3;
            if (obj.highScore < obj.score) {
              obj.highScore = obj.score;
            }
            obj.score = 0;
            var gameOverAudio = document.querySelector(".gameOverAudio")

            document.querySelector(".gameOverContainer").classList.remove("hide")
            gameOverAudio.play()
            audio.muted = true;
          }

          return true

        }

      });
      localStorage.setItem('dataObjectArr', JSON.stringify(arr));

    }


  } else {
  }
}



document.querySelector(".on").addEventListener("click",soundOn);
document.querySelector(".off").addEventListener("click",soundOff)






