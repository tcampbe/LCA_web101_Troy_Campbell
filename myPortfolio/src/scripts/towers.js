'use strict';

$(document).ready(function() {
  let $block = null;
  
//... using atibute data row like a class
  $('[data-row]').click(function() {
      //click to place colored block
    if ($block) {
      $(this).append($block);
      $block = null;
      // click to select colored block
    } else {
      $block = $(this).children().last().detach();
    }
  })
})