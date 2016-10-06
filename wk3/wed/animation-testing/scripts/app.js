// timer hits zero end game
// if time hits zero and score is below x number you lose
// if timer hits zero and score is above number or move on
// before game starts show color to compare darker or lighter -- maybe keep this at the top of the screen? or somewhere in the screen?
// as the game progresses make the color range smaller so it gets harder


$(document).ready(function(){
    console.log("linked");
});

// jQuery selectors
    // try to declare selector variables??

// GLOBAL VARIABLES
var colorButtonChoice = '';
var score = 0;
var time = 25;


// ON CLICK FUNCTIONS
$('#start').on('click', function(){
    createBoard();
    var timer = setInterval(countDown,1000); // counts down seconds

    function countDown(){
        time--;
        if(time == 0){
            clearInterval(timer);
        }
        $('#time-div').html('time remaining : '+ time);
    }
    $('#start').fadeOut(500, function(){
        // start button fades out
    });
    $('.container').css('display', 'none');
    $('.box').fadeIn(1200, 'swing', function(){
        // boxes fading in at start
    });
    $('.box').on('click', function(){
        var id = this.id;
        console.log('this is the '+ id);
        var clickedColor = $('#'+id).css('backgroundColor'); //logs rgb value of clicked colors
        // check rgb value at blue and if it is lower than a certain number console log something
        var colorArray = [];
        var color = clickedColor.substring(3).replace('(', '').replace(')', ''); // cuts off the rgb part of color tag
        colorArray.push(color.split(', ')); // removes the commas and pushes into color array
        console.log(colorArray);
        if(colorButtonChoice === 'blue'){
            if(colorArray[0][2] < 100){
                $('#'+id).text('dark blue color');
                console.log('dark blue color');
                score += 1;
                $('#score-div').html('SCORE : ' + score);
            }
            else {
                $('#'+id).text('not dark blue enough!!');
                console.log('not dark blue enough!!');
                score -= 1;
                $('#score-div').html('SCORE : ' + score);
            }
        }
        else if (colorButtonChoice === 'green'){
            if(colorArray[0][1] < 100){
                $('#'+id).text('dark green color');
                console.log('dark green color');
                score += 1;
                $('#score-div').html('SCORE : ' + score);
            }
            else {
                $('#'+id).text('not dark green enough!!');
                console.log('not dark green enough!!');
                score -= 1;
                $('#score-div').html('SCORE : ' + score);
            }
        }
        else if (colorButtonChoice === 'red'){
            if(colorArray[0][0] < 100){
                $('#'+id).text('dark red color');
                console.log('dark red color');
                score += 1;
                $('#score-div').html('SCORE : ' + score);
            }
            else {
                $('#'+id).text('not dark red enough!!');
                console.log('not dark red enough!!');
                score -= 1;
                $('#score-div').html('SCORE : ' + score);
            }
        }
        else {
            console.log('you probably tried to add the purple button back in and there is no if else statement for that yet');
        }
        console.log(clickedColor);
        $('#'+id).fadeOut(500, function(){
            // boxes fading out on click
        })
    });
});

$('.color-button').on('click', function(){
    var colorId = this.id;
    if (colorId === 'blue'){
        colorButtonChoice = 'blue';
        console.log('blue works!');
    }
    else if (colorId === 'red'){
        colorButtonChoice =  'red';
        console.log('red works!');
    }
    else if (colorId === 'purple'){
        colorButtonChoice =  'purple';
        console.log('red works!');
    }
    else {
        colorButtonChoice =  'green';
        console.log('green works!')
    }
    $('.color-button').fadeOut(500, function(){}); // color buttons fade out
    $('#start').delay(500).fadeIn(500, function(){}); // start button fades in
    console.log(colorButtonChoice);
    return colorButtonChoice;
});

// THIS CAN FOR SURE BE SHORTENED AND REFACTORED
var createBoard = function(){
    $('body').prepend('<header>');
    $('body').prepend('<div id="score-div"></div>');
    $('body').prepend('<div id="time-div"></div>');
    $('#score-div').text('SCORE : ' + score);
    $('#time-div').text('time remaining : ' + time);
    for (var i = 1; i <= 36; i++) {
        var $newdiv = $('<div class="box"/>');
        if (colorButtonChoice === "blue"){
            var colorBlue = randomRGBBlue();
            $('body').append($newdiv);
            $($newdiv).css('background-color',colorBlue);
            $($newdiv).prop('id',i);
        }
        else if (colorButtonChoice === "red"){
            var colorRed = randomRGBRed();
            $('body').append($newdiv);
            $($newdiv).css('background-color',colorRed);
            $($newdiv).prop('id',i);
        }
        else if (colorButtonChoice === "purple"){
            var colorPurple = randomRGBPurple();
            $('body').append($newdiv);
            $($newdiv).css('background-color',colorPurple);
            $($newdiv).prop('id',i);
        }
        else{
            var colorGreen = randomRGBGreen();
            $('body').append($newdiv);
            $($newdiv).css('background-color',colorGreen);
            $($newdiv).prop('id',i);
        }
    }
};

$('body').keydown(function(e){
    console.log(e.which);
    if(e.which === 27){
        location.reload();
        console.log('refresh');
    }
});



// set interval to keep creating colors but hide overflow?
// check if rgb([i]) is within a range -- ie a specific color?


// VARIOUS COLOR GENERATORS
function randomRGBNumber() {
    return Math.round((Math.random() * 210) + 46);
}

// mid range number to keep colors less dark
function randomMid(){
    return Math.round((Math.random() * 150) + 106);
}

function randomRGBBlue(){
    return 'rgb(' + 0 + ', ' + 0 + ', ' + randomRGBNumber() + ')';
}

function randomRGBRed(){
    return 'rgb(' + randomRGBNumber() + ', ' + 0 + ', ' + 0 + ')';
}

function randomRGBGreen(){
    return 'rgb(' + 0 + ', ' + randomRGBNumber() + ', ' + 0 + ')';
}

function randomRGBPurple(){
    return 'rgb(' + randomMid() + ', ' + 0 + ', ' + randomMid() + ')';
}

function randomRGBColor() {
    return 'rgb(' + randomRGBNumber() + ', ' + randomRGBNumber() + ', ' + randomRGBNumber() + ')';
}

function hexRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var colorArray = ['red', 'green', 'blue', 'pink'];
pickRandomArrayColor = function(){
    for(var i = 0; i < colorArray.length; i++){
        var color = [];
        color.push(colorArray[Math.round(Math.random() * colorArray.length)]);
        console.log(color);
    }
};
// d3.select("body").append("p").text("New paragraph!");
// var dataset = [ 5, 10, 15, 20, 25 ];
// d3.select("body").selectAll("p").data(dataset).enter().append("p").text("New paragraph!");