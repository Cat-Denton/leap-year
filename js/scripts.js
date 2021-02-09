


$(document).ready(function() {
  $("#leapYear").submit(function(event) {
    const year = parseInt($("input#year").val());
    // console.log(year);
    event.preventDefault();
  })
})