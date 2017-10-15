/*Fetch Date data*/
function setToday() {
  var now   = new Date();
  var day   = now.getDate();
  var month = now.getMonth();
  var year  = now.getYear();
  if (year < 2000)
  year = year + 1900;
  this.focusDay = day;
  document.calControl.month.selectedIndex = month;
  document.calControl.year.value = year;
  displayCalendar(month, year);
}
function isFourDigitYear(year) {
  if (year.length != 4) {
  alert ("Sorry, the year must be four-digits in length.");
  document.calControl.year.select();
  document.calControl.year.focus();
  } else {
    return true;
  }
}
/*Select Date */
function selectDate() {
  var year  = document.calControl.year.value;
  if (isFourDigitYear(year)) {
    var day   = 0;
    var month = document.calControl.month.selectedIndex;
    displayCalendar(month, year);
  }
}
/*Setter for previous month*/
function setPreviousMonth() {
  var year  = document.calControl.year.value;
  if (isFourDigitYear(year)) {
    var day   = 0;
    var month = document.calControl.month.selectedIndex;
    if (month == 0) {
    month = 11;
      if (year > 1000) {
      year--;
      document.calControl.year.value = year;
      }
    } else {
      month--;
    }
  document.calControl.month.selectedIndex = month;
  displayCalendar(month, year);
  }
}
/*Setter for next month*/
function setNextMonth() {
  var year  = document.calControl.year.value;
  if (isFourDigitYear(year)) {
    var day   = 0;
    var month = document.calControl.month.selectedIndex;
    if (month == 11) {
      month = 0;
      year++;
      document.calControl.year.value = year;
    } else {
      month++;
    }
    document.calControl.month.selectedIndex = month;
    displayCalendar(month, year);
  }
}
/*Setter for previous year*/
function setPreviousYear() {
  var year  = document.calControl.year.value;
  if (isFourDigitYear(year)) {
    var day   = 0;
    var month = document.calControl.month.selectedIndex;
    year--;
    document.calControl.year.value = year;
    displayCalendar(month, year);
  }
}
/*Setter for Next Year*/
function setNextYear() {
  var year = document.calControl.year.value;
  if (isFourDigitYear(year)) {
    var day = 0;
    var month = document.calControl.month.selectedIndex;
    year++;
    document.calControl.year.value = year;
    displayCalendar(month, year);
  }
}
/*Show calendar*/
function displayCalendar(month, year) {
  month = parseInt(month);
  year = parseInt(year);
  var i = 0;
  var days = getDaysInMonth(month+1,year);
  var firstOfMonth = new Date (year, month, 1);
  var startingPos = firstOfMonth.getDay();
  days += startingPos;
  document.calbuttons.calPage.value  =   " Su Mo Tu We Th Fr Sa";
  document.calbuttons.calPage.value += "\n --------------------";
  for (i = 0; i < startingPos; i++) {
    if ( i%7 == 0 ) document.calbuttons.calPage.value += "\n ";
    document.calbuttons.calPage.value += "   ";
  }
  for (i = startingPos; i < days; i++) {
    if ( i%7 == 0 ) document.calbuttons.calPage.value += "\n ";
    if (i-startingPos+1 < 10)
    document.calbuttons.calPage.value += "0";
    document.calbuttons.calPage.value += i-startingPos+1;
    document.calbuttons.calPage.value += " ";
  }
  for (i=days; i<42; i++)  {
    if ( i%7 == 0 ) document.calbuttons.calPage.value += "\n ";
    document.calbuttons.calPage.value += "   ";
  }
  document.calControl.Go.focus();
}
/*Getter for days concerning the month*/
function getDaysInMonth(month,year)  {
  var days;
  if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)  days=31;
  else if (month==4 || month==6 || month==9 || month==11) days=30;
  else if (month==2)  {
    if (isLeapYear(year)) { days=29;
    } else { days=28; }
  }
  return (days);
}
/*Verify Leap Year*/
function isLeapYear (Year) {
  if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {
    return (true);
  } else {
    return (false);
  }
}
/*On start function*/
(function() {
  setToday();
  selectDate();
  /*console log calendar*/
  var text1 = document.getElementById('myTextArea').value;
  console.log(text1);
})();
/*MENU RESPONSIVE function*/
function myMenu(y) {
  var x = document.getElementById("myTopnav");
  var logo = document.getElementById('logo');
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  if (x.classList.contains('responsive')){
    logo.classList.add('logofloatness');
    logo.classList.remove('logo');
  } else {
    logo.classList.add('logo');
    logo.classList.remove('logofloatness');
  }
    y.classList.toggle("change");
}
