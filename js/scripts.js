function isLeapYear (year) {
  if (year % 4 === 0) {
    return true;
  }
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