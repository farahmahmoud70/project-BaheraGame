console.log("connected");

var registerBtns = document.querySelectorAll(".reg-btn");
var containter = document.querySelector(".start-container");
var reg = document.querySelector(".register");


//start.height = window.outerHeight;
containter.style.height = ""+window.innerHeight+"px";
reg.style.height = ""+window.innerHeight+"px";


$('#start-game').click(function(e){
        console.log("sign up")
        $('.register-btn').addClass('hide')
        $('.register').addClass('show-reg-container')
        $('.Login-form').addClass('show-reg-form');
})

$('#login').click(function(e){
    var val = $('#username').val();
    var score;
    var lifes;
    // var username ='username';
    var scorenum ='score';
    var highScoreNum ='highScore';
    var lifenum ='lifes';
    var storedUsername;
    var storedscore;
    var storedLife;
    var storedHighScore;
    var dataObjectArr = [];
    retrivedOjects = localStorage.getItem('dataObjectArr');
    var arr = JSON.parse(localStorage.getItem('dataObjectArr'));
    console.log("hiiiii",arr)
    var obj;


    var audio = document.getElementById("sound");


    export default function retrive() {
        if(retrivedOjects && retrivedOjects.length > 0){
            arr.forEach(function(obj) {

                    if(val == obj.username){
                    console.log("fsdf");
                    storedUsername = obj.username;
                    storedscore = obj.score;
                    storedHighScore = obj.highScore;
                    storedLife = obj.lifes;
                    console.log(storedscore, storedLife, storedHighScore)
                }
               
            });
        }   
    }




    retrive();
   

    if(val === ""){
        $('#error').text("*you can't login with empty username.");
    }else{

    if(storedUsername === val){
        //$('.Login-form').removeClass('show-reg-form');
        $('.Login-form').hide('show-reg-form');
        $('.condition-form').addClass('show-reg-form');
        console.log(e.target.parentNode.nextElementSibling.firstElementChild);
      
        if(e.target.parentNode.nextElementSibling.firstElementChild === document.getElementById("continue")){
            $('#continue').click(function(e) {

            console.log(storedUsername);
            $('.register').removeClass('show-reg-container');
            $('.start-container').addClass('hide');
            $('.game-container').removeClass('hide');
            $('.NameOfPlayer').text(storedUsername);
            $('#noOfHeart').text(storedLife);
            $('#score').text(storedscore);
            $('#highScore').text(storedHighScore);
                audio.play();
            
            
        })
        }
        if(e.target.parentNode.nextElementSibling.firstElementChild.nextElementSibling === document.getElementById("new-gamer")){
            $('#new-gamer').click(function(e) {
            // window.localStorage.setItem('dataObjectArr', JSON.stringify(dataObjectArr));
            console.log("success")
            $('.register').removeClass('show-reg-container');
            $('.start-container').addClass('hide');
            $('.game-container').removeClass('hide');
            $('.NameOfPlayer').text(storedUsername);
            $('#noOfHeart').text(storedLife);
            $('#score').text(storedscore);
            $('#highScore').text(storedHighScore);
            audio.play();

            })
        }
        console.log("log in")

    }else if(storedUsername !==val){
        console.log("do not exist");

        if (localStorage.getItem('dataObjectArr') && localStorage.getItem('dataObjectArr').length > 0)
        dataObjectArr = JSON.parse(localStorage.getItem('dataObjectArr'));
        dataObj = {
            'username':val,
            'score':'0',
            'highScore':'0',
            'lifes':'3'
        };
        //console.log(dataObj)
        dataObjectArr.push(dataObj);
        localStorage.setItem('dataObjectArr', JSON.stringify(dataObjectArr));

        $('.register').removeClass('show-reg-container');
        $('.start-container').addClass('hide');
        $('.game-container').removeClass('hide');
        $('.NameOfPlayer').text(val)
        $('#noOfHeart').text('3');
        $('#score').text('0');
        $('#highScore').text('0');
        audio.play();


        // retrivedOjects = localStorage.getItem('dataObjectArr');

        // console.log('retrivedOjects: ', JSON.parse(retrivedOjects));

        console.log("successfully added")
    }
}
})

