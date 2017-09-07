/**
 * Created by eMASYS ND on 7/31/2017.
 */

let answer = document.getElementById('results');
let expressions = document.getElementById('expressions');

$(document).ready(function () {
    $('#err').hide();

    $('#buttons').on('click', function (e) {

        if (e.target.nodeName === 'LI') {
            let value = e.target.innerHTML;

            let decimal = [];
            if (value === 'x') {
                value = '*';
            }

            let count = 0,
                countSign = 0;
            if (value === '.') {

                let x = expressions.innerHTML;
                decimal = x.split('');

                if (decimal.indexOf('.') === -1) {
                    value = '.';
                    console.log(decimal);

                } else {

                    for (let i = 0; i < decimal.length; i++) {
                        if (decimal[i] === '.' && decimal[i + 1] !== '.') {
                            count++;
                            console.log(count);
                        }

                        if ((decimal[i] === '/' && decimal[i + 1] !== '.') || (decimal[i] === '*' && decimal[i + 1] !== '.') || (decimal[i] === '-' && decimal[i + 1] !== '.') || (decimal[i] === '+' && decimal[i + 1] !== '.')) {
                            countSign++;
                            console.log(countSign);
                        }
                    }

                    if ((decimal.indexOf('/') !== -1 && (count <= countSign)) || (decimal.indexOf('*') !== -1 && (count <= countSign)) || (decimal.indexOf('+') !== -1 && (count <= countSign)) || (decimal.indexOf('-') !== -1 && (count <= countSign))) {

                        value = '.';

                    } else {
                        value = '';
                    }

                }

            }
            if (value === '÷') {

                value = '/';

            }

            if (value === '+' || value === '-' || value === "/" || value === "." || value === '*' || value === '%') {
                let x = expressions.innerHTML;
                let y = x.split('');
                y.push(value);
                for (let i = 0; i < y.length; i++) {
                    if (((y[i] === '+' && y[i + 1] === '+') || (y[i] === '+' && y[i + 1] === '-') || (y[i] === '+' && y[i + 1] === "/") || (y[i] === '+' && y[i + 1] === "%") || (y[i] === '+' && y[i + 1] === ".") || (y[i] === '+' && y[i + 1] === '*')) || ((y[i] === '.' && y[i + 1] === '+') || (y[i] === '.' && y[i + 1] === '-') || (y[i] === '.' && y[i + 1] === "/") || (y[i] === '.' && y[i + 1] === "%") || (y[i] === '.' && y[i + 1] === ".") || (y[i] === '.' && y[i + 1] === '*')) || ((y[i] === '-' && y[i + 1] === '-') || (y[i] === '-' && y[i + 1] === '+') || (y[i] === '-' && y[i + 1] === "/") || (y[i] === '-' && y[i + 1] === "%") || (y[i] === '+' && y[i + 1] === ".") || (y[i] === '-' && y[i + 1] === '*')) || ((y[i] === '*' && y[i + 1] === '-') || (y[i] === '*' && y[i + 1] === '+') || (y[i] === '*' && y[i + 1] === "/") || (y[i] === '*' && y[i + 1] === "%") || (y[i] === '+' && y[i + 1] === ".") || (y[i] === '*' && y[i + 1] === '*')) || ((y[i] === '/' && y[i + 1] === '-') || (y[i] === '/' && y[i + 1] === '+') || (y[i] === '/' && y[i + 1] === "/") || (y[i] === '+' && y[i + 1] === ".") || (y[i] === '/' && y[i + 1] === "%") || (y[i] === '/' && y[i + 1] === '*')) || ((y[i] === '%' && y[i + 1] === '-') || (y[i] === '%' && y[i + 1] === '+') || (y[i] === '%' && y[i + 1] === "/") || (y[i] === '+' && y[i + 1] === ".") || (y[i] === '%' && y[i + 1] === "%") || (y[i] === '%' && y[i + 1] === '*'))) {
                        // y[i + 1] = '';
                        value = '';
                    }

                }
            }

            if (value === '%') {
                let x = expressions.innerHTML;
                let y = x.split('');
                y.push(value);
                for (let i = 0; i < y.length; i++) {
                    if (y[i] === '') {
                        value = ''
                    } else {

                        answer.innerHTML = eval(expressions.innerHTML);
                        answer.innerHTML = eval(answer.innerHTML / 100);
                        expressions.innerHTML = '';
                        value = '/100'.css({"display": "none"});
                    }
                }
            }

            if (value === '=') {
                try {
                    if (expressions.innerHTML !== "") {
                        answer.innerHTML = eval(expressions.innerHTML);
                    }

                } catch (e) {
                    $('#results').css({"fontSize": "26px", "fontWeight": "Bolder"});
                    answer.innerHTML = "sign error";
                }
            } else if (value === 'AC') {
                expressions.innerHTML = "";
                answer.innerHTML = "";
                $('#results').css({"fontSize": "26px", "fontWeight": "Bolder"});
                $('#expressions').css("fontSize", "28px");
                $('.typed-cursor').css("fontSize", "28px");
            } else if (value === 'DEL') {
                var c = expressions.innerHTML;
                if (expressions.innerHTML.length < 14) {
                    expressions.innerHTML = c.slice(0, c.length - 1);
                    answer.innerHTML = "";
                    $('#results').css({"fontSize": "26px", "fontWeight": "Bolder"});
                    $('#expressions').css("fontSize", "28px");
                    $('.typed-cursor').css("fontSize", "28px");

                } else {
                    expressions.innerHTML = c.slice(0, c.length - 1);
                    answer.innerHTML = "";
                    if (expressions.innerHTML.length === 28) {
                        $('#err').show();
                    }
                }
            } else {
                if (expressions.innerHTML.length <= 11) {
                    $('#err').hide();
                    expressions.innerHTML += value;
                    $('#results').css("fontSize", "40px");
                    $('#expressions').css("fontSize", "28px");
                    $('.typed-cursor').css("fontSize", "28px");
                } else if (expressions.innerHTML.length === 28) {
                    $('#err').show();
                } else {
                    $('#err').hide();
                    expressions.innerHTML += value;
                    $('#results').css("fontSize", "16px");
                    $('#expressions').css("fontSize", "12px");
                    $('.typed-cursor').css("fontSize", "12px");
                }
            }
        }
    });

});