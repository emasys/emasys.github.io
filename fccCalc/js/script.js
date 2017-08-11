/**
 * Created by eMASYS ND on 7/31/2017.
 */

let answer = document.getElementById('results');
let expressions = document.getElementById('expressions');
$(document).ready(function(){
        $('#err').hide();

    $('#buttons').on('click', function(e) {

        if (e.target.nodeName === 'LI') {
            let value = e.target.innerHTML;
            if (value === '=') {
                try {
                    if(expressions.innerHTML !== ""){
                        answer.innerHTML = eval(expressions.innerHTML);
                    }

                } catch(e) {
                    $('#results').css({"fontSize":"26px","fontWeight":"Bolder"});
                    answer.innerHTML = "sign error";
                }
            } else if(value ==='AC'){
                expressions.innerHTML = "";
                answer.innerHTML = "";
                $('#results').css({"fontSize":"26px","fontWeight":"Bolder"});
                $('#expressions').css("fontSize","28px");
                $('.typed-cursor').css("fontSize","28px");
            }
            else if(value ==='C'){
                var c = expressions.innerHTML;
                if(expressions.innerHTML.length < 14) {
                    expressions.innerHTML = c.slice(0,c.length-1);
                    answer.innerHTML = "";
                    $('#results').css({"fontSize":"26px","fontWeight":"Bolder"});
                    $('#expressions').css("fontSize","28px");
                    $('.typed-cursor').css("fontSize","28px");

                }else{
                    expressions.innerHTML = c.slice(0,c.length-1);
                    answer.innerHTML = "";
                    if(expressions.innerHTML.length === 28) {
                        $('#err').show();
                    }
                }
            }
            else{
                if(expressions.innerHTML.length <= 11) {
                    $('#err').hide();
                    expressions.innerHTML += value;
                    $('#results').css("fontSize","40px");
                    $('#expressions').css("fontSize","28px");
                    $('.typed-cursor').css("fontSize","28px");
                }else if(expressions.innerHTML.length === 28) {
                    $('#err').show();
                }else{
                    $('#err').hide();
                    expressions.innerHTML += value;
                    $('#results').css("fontSize","16px");
                    $('#expressions').css("fontSize","12px");
                    $('.typed-cursor').css("fontSize","12px");
                }
            }
        }
    });

});

