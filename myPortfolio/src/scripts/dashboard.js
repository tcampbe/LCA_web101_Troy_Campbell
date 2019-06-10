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


  




  
  }());

  
 
  
    

    




  
