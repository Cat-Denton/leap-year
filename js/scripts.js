function isLeapYear (year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else { 
  return false;
  }
}


$(document).ready(function() {
  $("#leapYear").submit(function(event) {
    const year = parseInt($("input#year").val());
    // console.log(year);
    console.log(isLeapYear(year));
    event.preventDefault();
  })
})