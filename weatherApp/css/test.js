// function julianIntToDate(n) {     // convert a Julian number to a Gregorian
// Date.    S.Boisseau / BubblingApp.com     // / 2014     var a = n + 32044;
// var b = Math.floor(((4 * a) + 3) / 146097);     var c = a -
// Math.floor((146097 * b) / 4);     var d = Math.floor(((4 * c) + 3) / 1461);
// var e = c - Math.floor((1461 * d) / 4);     var f = Math.floor(((5 * e) + 2)
// / 153);     var D = e + 1 - Math.floor(((153 * f) + 2) / 5);     var M = f +
// 3 - 12 - Math.round(f / 10);     var Y = (100 * b) + d - 4800 + Math.floor(f
// / 10);     return new Date(Y, M, D); } // assert 2456931 -> September 30
// 2014 console.log(julianIntToDate(2456931).toString());
// console.log(julianIntToDate(1504911).toString()); Create a new JavaScript
// Date object based on the timestamp multiplied by 1000 so that the argument is
// in milliseconds, not seconds.
var date = new Date(1504911600 * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);