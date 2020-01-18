console.log("connected");

export var storedUsername;
export var storedscore;
export var storedLife;
export var storedHighScore;
export var retrivedOjects;
export var arr ;

var val ;




var registerBtns = document.querySelectorAll(".reg-btn");
var containter = document.querySelector(".start-container");
var reg = document.querySelector(".register");


containter.style.height = "" + window.innerHeight + "px";
reg.style.height = "" + window.innerHeight + "px";

export function retrive() {
    retrivedOjects = localStorage.getItem('dataObjectArr');
    arr = JSON.parse(retrivedOjects);
    if (retrivedOjects && retrivedOjects.length > 0) {
        arr.forEach(function (obj) {

            if (val == obj.username) {
                storedUsername = obj.username;
                storedscore = obj.score;
                storedHighScore = obj.highScore;
                storedLife = obj.lifes;
            }
        });
    }
}

export function startGame(e) {
    $('.register-btn').addClass('hide')
    $('.register').addClass('show-reg-container')
    $('.Login-form').addClass('show-reg-form');
}


export function logIn(e) {
    val = $('#username').val();
    var score;
    var lifes;


    var dataObjectArr = [];

    var obj;


    var audio = document.getElementById("sound");


   




    retrive();


    if (val === "") {
        $('#error').text("*you can't login with empty username.");
    } else {

        if (storedUsername === val) {
            $('.Login-form').hide('show-reg-form');
            $('.condition-form').addClass('show-reg-form');

            if (e.target.parentNode.nextElementSibling.firstElementChild === document.getElementById("continue")) {
                $('#continue').click(function (e) {

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
                    $('.register').removeClass('show-reg-container');
                    $('.start-container').addClass('hide');
                    $('.game-container').removeClass('hide');

                    if(retrivedOjects && retrivedOjects.length > 0){
                        arr.forEach(function(obj) {
                            if(obj.username === val){
                                  obj.score = 0;
                                  obj.lifes = 3;
                                  $('#score').text(obj.score);
                                  $('#noOfHeart').text(obj.lifes);
                                  $('#highScore').text(obj.highScore);
                                   $('.NameOfPlayer').text(obj.username);
                                  return true
                                  
                              }
                             
                          });
                          localStorage.setItem('dataObjectArr', JSON.stringify(arr));
                  
                      } 

                   
                   
                    
                 
                    audio.play();

                })
            }

        } else if (storedUsername !== val) {

            if (localStorage.getItem('dataObjectArr') && localStorage.getItem('dataObjectArr').length > 0)
                dataObjectArr = JSON.parse(localStorage.getItem('dataObjectArr'));
            var dataObj = {
                'username': val,
                'score': 0,
                'highScore': 0,
                'lifes': 3
            };
            dataObjectArr.push(dataObj);
            localStorage.setItem('dataObjectArr', JSON.stringify(dataObjectArr));


            retrivedOjects = localStorage.getItem('dataObjectArr');

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