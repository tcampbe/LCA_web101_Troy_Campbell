

// ..........this puts an x in box oneone .............//
// document.getElementById("oneone").innerHTML = "X";
//.....................................................//


// ........this also puts an x in box oneone ..........//
// var mark = "X";
// document.getElementById("oneone").innerHTML = mark;
//.....................................................//


// ........this also puts an x in box oneone ..........//
// function mark() {
//     document.getElementById("oneone").innerHTML = "X";
// }

// mark();
//......................................................//

//.......this puts an x in oneone after click...........//
// ...in HTML put <div id="oneone" onclick = "mark()"></div>...//
// var markx = "x"
// function mark() {
//         document.getElementById("oneone").innerHTML = markx;
// }
//..............................................................//


//......this puts x after click without referenc in HTML..... //
// var markx = "x";
// document.getElementById("oneone").onclick = function() {mark()};
// function mark() {
//     document.getElementById("oneone").innerHTML = markx;
// }
//................................................................//


//.....event listener to put x after click ................//
// var markx = "x";
// document.getElementById("oneone").addEventListener("click", mark);
// function mark() {
//   document.getElementById("oneone").innerHTML = markx;
// }
//.................................................................//


//...........this produces an x, but "if" is wrong somehow..........//
// var markx = "x";
// document.getElementById("oneone").addEventListener("click", mark);
// function mark() {
//     if (markx = "x" ) {
//         document.getElementById("oneone").innerHTML = markx;};
//     };


//.....this produces an X if choose =1 and O if choose =0......//
// var choose = 1;
// var marko = "O"
// var markx = "X";
// document.getElementById("oneone").addEventListener("click", mark);
// function mark() {
//     if (choose > 0 ) {
//         document.getElementById("oneone").innerHTML = markx;}
//     else {
//             document.getElementById("oneone").innerHTML = marko;
//         };
//     };
//..................................................................//


//...with onclick="pick(1)" on 2 buttons in html, this puts x or o...//
// var choose;
// function pick(choice) {
//     choose = choice;
// };
// var marko = "O";
// var markx = "X";
// document.getElementById("oneone").addEventListener("click", mark);
// function mark() {
//     if (choose > 0 ) {
//         document.getElementById("oneone").innerHTML = markx;}
//     else {
//             document.getElementById("oneone").innerHTML = marko;
//         };
//     };  
//...............................................................// 

//..onClick="mark(this.id)"...in each html div functions for all..//



var choose;
    function pick(choice) {
        choose = choice;
};
var marko = "O";
var markx = "X";
function mark(clicked) {
    if (choose > 0 ) {
    document.getElementById(clicked).innerHTML = markx;
    } else {
    document.getElementById(clicked).innerHTML = marko;
    };
};  
