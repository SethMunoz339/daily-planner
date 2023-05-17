// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hrEl9 = $('#hour-9')
// let hrEl9 = "9:00 am"
var hrEl10 = $('#hour-10')
// let hrEl10 = "10:00 am"
var hrEl11 = $('#hour-11')
// let hrEl11 = "11:00 am"
var hrEl12 = $('#hour-12')
// let hrEl12 = "12:00 pm"
var hrEl1 = $('#hour-1')
// let hrEl1 = "1:00 pm"
var hrEl2 = $('#hour-2')
// let hrEl2 = "2:00 pm"
var hrEl3 = $('#hour-3')
// let hrEl3 = "3:00 pm"
var hrEl4 = $('#hour-4')
// let hrEl4 = "4:00 pm"
var timeBlockEl = $('.time-block')
var textAreaEl = $('.description')
var saveButtonEl = $('.saveBtn')
var timeEl= dayjs();
$('#currentDay').text(timeEl.format('dddd, MMMM D YYYY, h:mm a'));

var hrArray = [hrEl9, hrEl10, hrEl11, hrEl12, hrEl1, hrEl2, hrEl3, hrEl4]

$(document).ready(function() {
  // Button click event handler
  saveButtonEl.on('click',(function() {
    var $row = $(this).closest(timeBlockEl);
    var $targetTextArea = $row.find(textAreaEl);
    var targetTextAreaValue = $targetTextArea.val();

    // Save the text area value to local storage
    var textAreaId = $targetTextArea.attr('id');
    localStorage.setItem(textAreaId, JSON.stringify(targetTextAreaValue));
    console.log('Text area value saved to local storage:', targetTextAreaValue);
    
  }));
});

$(document).ready(function() {
  // Load previously saved text from local storage
  for (var i = hrArray; i <= (hrArray); i++) {
    textAreaId = textAreaEl + i;
    var savedText = localStorage.getItem(textAreaId);

    if (savedText) {
      $(hrArray + textAreaId).val(JSON.parse(savedText));
      textAreaEl.append(savedText)
    }
  }});

  function checkTime() {
    for (var i = 0; i < hrArray.length; i++) {
      var hour = dayjs(hrArray[i], "h:mm a");
  
      if (currentTime.isBefore(hour)) {
        timeBlockEl.attr('class', 'past');
        console.log(hrArray[i] + " is in the future.");
      } 
      
      else if (currentTime.isSame(hour, "hour")) {
        timeBlockEl.attr('class', 'present');
        console.log(hrArray[i] + " is the present hour.");
      } 
      
      else {
        timeBlockEl.attr('class', 'future');
        console.log(hrArray[i] + " is in the past.");
      }
    }
  }
  

// $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  // });
  

// // var rootEl = document.getElementById("root");
// var rootEl = $('#root');

//   // TODO: Add the class `plain` to the author element
// authorEl.attr('class', 'plain');

// // rootEl.appendChild(titleEl);
// rootEl.append(titleEl);

// // select all `<div>` elements on the page
// // document.querySelectorAll('div');
// console.log($('div'));

// // Alternatively use the `$.each` method
// // $.each(abilities, function(i, ability) {
// //    abilityEl.append("<div>" + ability + "</div>");
// // })

// // Click event causes alert light theme toggle
// themeButtonEl.on('click', function () {
//   if (isDark) {
//     $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
//     isDark = !isDark;
//   } else {
//     $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
//     isDark = !isDark;
//   }
// });

// // Select all checked options
// var checkedEl = $('input:checked');
// var selected = [];

// // Loop through checked options to store in array
// $.each(checkedEl, function () {
//   selected.push($(this).val());

// // TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
// function addItem(event) {
//   event.preventDefault();
//   console.log('shopping-input', inputItem.val())
//   var liEl = $('<li>')
//   liEl.text(inputItem)
//   shoppingListEl.append(liEl)
// }
// // TODO: Add an event listener to the `shoppingFormEl` to handle submission
// shoppingFormEl.on('submit', addItem)