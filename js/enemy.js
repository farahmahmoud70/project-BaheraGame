import retrive from 'start.js'
var player = document.querySelector('.girl');
var enemies = document.querySelectorAll('.enemy');
var enimesss = [];
// let start = Date.now();
var speed = Math.floor(Math.random() * 12 + 6)
// var d;
// var body = document.body.clientWidth;
enemies.forEach(function (cur) {
  speed = Math.floor(Math.random() * 12 + 6)
  cur.style.animation = `mymove ${speed}s linear infinite`
  enimesss.push(cur);
console.log(enimesss)
  cur.addEventListener('animationstart', function () {

    setInterval(() => {
      isCollapsed(cur, player)
    }, 100);
  });
  cur.addEventListener('animationiteration', function () {
    setInterval(() => {
      isCollapsed(cur, player)
    }, 100);
  })


})

console.log('bew',retrive())

var y = 15;
var x = 46;


document.addEventListener('keydown', function (e) {
  console.log(e.keyCode);
  //top
  if (e.keyCode == 38) {
    y -= 14;
    // console.log(x)
    $('.girl').css({
      "top":`${y}vh`
    });
   
    if (y < -50) {
      y = 15;
      x = 46;

      $('.girl').css({
        "top":`${y}vh`
      });
      $('.girl').css({
        "left":`${x}vw`
      });

    }
  }
  //bottom
  if (e.keyCode == 40) {
    y += 14;
    
    $('.girl').css({
      "top":`${y}vh`
    });
    if (y >= 15) {
      y = 15;
      $('.girl').css({
        "top":`${y}vh`
      });
      $('.girl').css({
        "left":`${x}vw`
      });
    }
  }
  //right
  if (e.keyCode == 39) {
    x += 2;
    $('.girl').css({
      "left":`${x}vw`
    });
    console.log(window.innerWidth)
    console.log(x)
    if (x >= 94) {
      x = 94;
      console.log("rrrr", x);
      $('.girl').css({
        "left":`${x}vw`
      });
    }
  }
  //left
  if (e.keyCode == 37) {
    x -= 2;
    $('.girl').css({
      "left":`${x}vw`
    });
    
    if (x <= 0) {
      x = 0;
      $('.girl').css({
        "left":`${x}vw`
      });
    }
  }
  for (let index = 0; index < 3; index++) {
    isCollapsed(enimesss[index], player)
  }
})
////////////////////////////collsion
function isCollapsed(enemy, player) {
  var bug = enemy.getBoundingClientRect();
  var bahera = player.getBoundingClientRect();

  if (bug.left < bahera.left + bahera.width && bug.left + bug.width > bahera.left &&
    bug.top < bahera.top + bahera.height && bug.top + bug.height > bahera.top) {
    y = 15;
    x = 46;

    $('.girl').css({
      "top":`${y}vh`
    });
    $('.girl').css({
      "left":`${x}vw`
    });
  }
  else {
    // console.log("noooooooo")
  }
}












