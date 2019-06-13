var myLocation = document.getElementById("my-coordinates")

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayPosition)
    } else {
    myLocation.innerHTML = "Not available"
    }
}

function displayPosition(position) {
    myLocation.innerHTML = "Longitude: " + 
    position.coords.longitude + " Latitude: " + 
    position.coords.latitude
}

// the var "myVar" stores setinterval function but doesnt get called because the function contians the output and location
// set interval method calls a function at a set interval
var myVar = setInterval(function() { // no parameters, just the base object
  myTimer(); // references the below function 
}, 1000); // 1000ms is equal to 1 second, so this updates every second

function myTimer() {
  var d = new Date(); // .............toLocateTimeString gets the users time
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
} //the parameter "clock" refers to the id in html


n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;


$(function() {
                        //..let locks in a var...$list is a variable (like x) .....\/
  let $list = $('ul');//.............$('ul') is get the ul element....
                                        //...$('#newItemForm') is get the element with the id newItemForm ..\/
  let $newItemForm = $('#newItemForm');//...id="newItemForm" in html is <form> element.......//
                                          //.. $newItemForm.on is "on event" in this case the event is submit.\/
  $newItemForm.on('submit', function(e) {//.. sumbit is the event .. function(e) is function(event)...//
                        //.. e. is event prevent default prevnts the event form normal...\/
    e.preventDefault();//...in this case the event is submit on a form element...//
                                                //....create variable 'text' . \/
                                              //.. like Javascript ...  <form text: <input type="text">
    let text = $('input[type="text"]').val();//..variable text = what is typed in..// 
    $list.append(`<li>${text}</li>`); //add text to the list..//
    $('input[type="text"]').val(''); // the typed text..//
  });

// onclick of list item remove the list item = 'this' 
  $list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
  });


// spin wheel onclick by applying a class 'clicked' with css animation
  $('.spinner img').on('click', function() {
    $(this).toggleClass('clicked');
});



  
}());

  
 
  
    

    




  
