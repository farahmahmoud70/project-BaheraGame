console.log("connected");

export var storedUsername;
export var storedscore;
export var storedLife;
export var storedHighScore;
export var retrivedOjects;
// export var retrivedOjects = localStorage.getItem('dataObjectArr');
// export var arr = JSON.parse(localStorage.getItem('dataObjectArr'));
export var arr ;

var val ;




var registerBtns = document.querySelectorAll(".reg-btn");
var containter = document.querySelector(".start-container");
var reg = document.querySelector(".register");


//start.height = window.outerHeight;
containter.style.height = "" + window.innerHeight + "px";
reg.style.height = "" + window.innerHeight + "px";

export function retrive() {
    retrivedOjects = localStorage.getItem('dataObjectArr');
    arr = JSON.parse(retrivedOjects);
    console.log(retrivedOjects)
    if (retrivedOjects && retrivedOjects.length > 0) {
        arr.forEach(function (obj) {

            if (val == obj.username) {
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

export function startGame(e) {
    console.log("sign up")
    $('.register-btn').addClass('hide')
    $('.register').addClass('show-reg-container')
    $('.Login-form').addClass('show-reg-form');
}


export function logIn(e) {
    val = $('#username').val();
    var score;
    var lifes;
    // var username ='username';


    var dataObjectArr = [];

    console.log("hiiiii", arr)
    var obj;


    var audio = document.getElementById("sound");


   




    retrive();
    console.log('blaaaaaaaaaaa', storedUsername);


    if (val === "") {
        $('#error').text("*you can't login with empty username.");
    } else {

        if (storedUsername === val) {
            //$('.Login-form').removeClass('show-reg-form');
            $('.Login-form').hide('show-reg-form');
            $('.condition-form').addClass('show-reg-form');
            console.log(e.target.parentNode.nextElementSibling.firstElementChild);

            if (e.target.parentNode.nextElementSibling.firstElementChild === document.getElementById("continue")) {
                $('#continue').click(function (e) {

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
            if (e.target.parentNode.nextElementSibling.firstElementChild.nextElementSibling === document.getElementById("new-gamer")) {
                $('#new-gamer').click(function (e) {
                    // window.localStorage.setItem('dataObjectArr', JSON.stringify(dataObjectArr));
                    console.log("success")
                    $('.register').removeClass('show-reg-container');
                    $('.start-container').addClass('hide');
                    $('.game-container').removeClass('hide');

                    if(retrivedOjects && retrivedOjects.length > 0){
                        arr.forEach(function(obj) {
                            if(obj.username === val){
                                console.log(obj.username)
                                  console.log("uuuuuuuu");
                                  obj.score = 0;
                                  obj.lifes = 3;
                                  $('#score').text(obj.score);
                                  $('#noOfHeart').text(obj.lifes);
                                  $('#highScore').text(obj.highScore);
                                   $('.NameOfPlayer').text(obj.username);
                                  console.log(obj,obj.score, obj.lifes)
                                  return true
                                  
                              }
                             
                          });
                          localStorage.setItem('dataObjectArr', JSON.stringify(arr));
                  
                      } 

                   
                   
                    
                 
                    audio.play();

                })
            }
            console.log("log in")

        } else if (storedUsername !== val) {
            console.log("do not exist");

            if (localStorage.getItem('dataObjectArr') && localStorage.getItem('dataObjectArr').length > 0)
                dataObjectArr = JSON.parse(localStorage.getItem('dataObjectArr'));
            var dataObj = {
                'username': val,
                'score': 0,
                'highScore': 0,
                'lifes': 3
            };
            //console.log(dataObj)
            dataObjectArr.push(dataObj);
            console.log(dataObjectArr)
            localStorage.setItem('dataObjectArr', JSON.stringify(dataObjectArr));


            retrivedOjects = localStorage.getItem('dataObjectArr');
            console.log('retrivedOjects: ', JSON.parse(retrivedOjects));

            retrive();

            $('.register').removeClass('show-reg-container');
            $('.start-container').addClass('hide');
            $('.game-container').removeClass('hide');
            $('.NameOfPlayer').text(val)
            $('#noOfHeart').text(storedLife);
            $('#score').text(storedscore);
            $('#highScore').text(storedHighScore);
            audio.play();


        



            console.log("successfully added")
        }
    }
}