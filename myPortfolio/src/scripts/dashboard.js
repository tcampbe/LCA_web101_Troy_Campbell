// $(document).ready(function() {

//.....below is short for - the same as above....//
$(function() {

//..let locks in a var...$list is a variable (like x) .....\/
//.............$('ul') is get the ul element.... 
    let $list = $('ul');
//...$('#newItemForm') is get the element with the id newItemForm ..\/
//...id="newItemForm" in html is <form> element.......//
    let $newItemForm = $('#newItemForm');
  
//.. $newItemForm.on is "on event" in this case the event is submit.\/
//.. sumbit is the event .. function(e) is function(event)...//
    $newItemForm.on('submit', function(e) {
//.. e. is event prevent default prevnts the event form normal...\/
//...in this case the event is submit on a form element...//
      e.preventDefault();
//....create variable 'text' .. = .. \/
//.. like Javascript ...  <form text: <input type="text">
//..this is onsubmit function (above)..??..<input type="submit"..?? 
      let text = $('input[type="text"]').val();
      $list.append(`<li>${text}</li>`); //add text to the list
      $('input[type="text"]').val(''); // the input value is '' ??
    });
  
    //.....this function removes a list item when clicked......//
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });
 
    

  });



  
// }