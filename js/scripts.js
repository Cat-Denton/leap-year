function isLeapYear (year) {
  return false;
}


$(document).ready(function() {
  $("#leapYear").submit(function(event) {
    const year = parseInt($("input#year").val());
    // console.log(year);
    console.log(isLeapYear(year));
    event.preventDefault();
  })
})