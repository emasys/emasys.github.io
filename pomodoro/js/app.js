/**
 * Created by eMASYS ND on 8/3/2017.
 * credits: https://mrkaluzny.com/
 */

var sessionLength = 25;
var breakLength = 5;
var alarm = new Audio('alert.mp3');
var loop = 0;
var clicks = 0;
function btnReset() {
    $('#sessionName').text('In Session');
    clearInterval(countInt);
}
function addSessionTime() {
    sessionLength += 1;
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
    $('.glow').removeClass('pulse');
    btnReset();
}
function decreaseSessionTime() {
    if (sessionLength > 1){
        sessionLength -= 1;
    } else {
        sessionLength = 1;
    }
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
    $('.glow').removeClass('pulse');
    btnReset();
}
function decreaseBreakTime() {
    if (breakLength > 1){
        breakLength -= 1;
    } else {
        breakLength = 1;
    }
    $("#timer-break").text(breakLength);
    btnReset();
}
function addBreakTime(){
    breakLength += 1;
    $("#timer-break").text(breakLength);
    btnReset();
}
function startTimer() {
    if (clicks == 0) {
        clicks += 1;
        seconds = 0;
        countDown(sessionLength, seconds);
        $('.glow').addClass('pulse');
    } else if (clicks == 1) {
       btnReset();
        clicks -= 1;
        $('.glow').removeClass('pulse');
    }
}
function countDown(m,s) {
    countInt = setInterval(function(){
        if (m == 0 && s == 0) {
            clearInterval(countInt);
            if (loop == 0) {
                timeLeft = breakLength;
                loop += 1;
                $('#sessionName').text('On Break');
                $('.glow').removeClass('pulse');
            } else {
                timeLeft = sessionLength;
                loop -= 1;
                $('#sessionName').text('In Session');
                $('.glow').addClass('pulse');
            }
            alarm.play();
            countDown(timeLeft,0);
        } else if (s != 0) {
            if (s <= 10){
                s -= 1;
                timeLeft = m + ':0' + s;
            } else {
                s -= 1;
                timeLeft = m + ':' + s;
            }
        } else if (s == 0) {
            s = 59;
            m -= 1;
            timeLeft = m + ':' + s;
        }
        $('#timeLeft').text(timeLeft);
    }, 1000);
}
function reset() {
    sessionLength = 25;
    breakLength = 5;
    $('.glow').removeClass('pulse');
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
    $("#timer-break").text(breakLength);
    btnReset();
}
$('document').ready(function(){
    $('#pause').hide();
    $('#settings-panel').hide();
    $('#play').on('click', function(){
        $(this).hide();
        $('#pause').show();
    }).on('mouseenter', function(){
        $(this).css({"text-shadow": "0 0 0 black"}).addClass('fa-spin');
    }).on('mouseleave', function(){
        $(this).css({"text-shadow": "0 2px 2px black"}).removeClass('fa-spin')
    });
    $('#pause').on('click', function(){
        $(this).hide();
        $('#play').show();
    }).on('mouseenter', function(){
        $(this).css({"text-shadow": "0 0 0 black"}).addClass('fa-spin');
    }).on('mouseleave', function(){
        $(this).css({"text-shadow": "0 2px 2px black"}).removeClass('fa-spin')
    });
    $('#setting').on('click',function(){
        $('#settings-panel').slideToggle(100);
    }).on('mouseenter', function(){
        $(this).css({"text-shadow": "0 0 0 black"}).addClass('fa-spin');
    }).on('mouseleave', function(){
        $(this).css({"text-shadow": "0 2px 2px black"}).removeClass('fa-spin')
    });
    $('#reset').on('mouseenter', function(){
        $(this).css({"text-shadow": "0 0 0 black"}).addClass('fa-spin');
    }).on('mouseleave', function(){
        $(this).css({"text-shadow": "0 2px 2px black"}).removeClass('fa-spin')
    });

});