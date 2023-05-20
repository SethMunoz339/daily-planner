
var hrEl9 = $('#hour-9')
var hrEl10 = $('#hour-10')
var hrEl11 = $('#hour-11')
var hrEl12 = $('#hour-12')
var hrEl1 = $('#hour-13')
var hrEl2 = $('#hour-14')
var hrEl3 = $('#hour-15')
var hrEl4 = $('#hour-16')
var hourText = $('.hour')
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
// compares local time to time in each div and color codes based on past, present or future
function checkTime() {
  
  var compareTime = Number(dayjs().format('HH'))
  

console.log(compareTime)
  for (var i = 0; i < hrArray.length; i++) {
    var hour = Number(hrArray[i][0].id.replace('hour-', ''))

console.log(hour)
    if (compareTime < (hour)) {
      hrArray[i][0].classList.value = 'col-8 col-md-10 description future';
      console.log(hrArray[i] + " is in the future.");
    }
    else if (compareTime === (hour)) {
      hrArray[i][0].classList.value = 'col-8 col-md-10 description present';
      console.log(hrArray[i] + " is the present hour.");
    }
    else  {
      hrArray[i][0].classList.value = 'col-8 col-md-10 description past';
      console.log(hrArray[i] + " is in the past.");
    }
  }
}
const hours = ['9', '10', '11', '12', '13', '14', '15', '16']
$(document).ready(function() {
  // Load previously saved text from local storage
  for (var i = 0; i < hours.length; i++) {

    var savedText = localStorage.getItem('hour-' + hours[i]);

    if (savedText) {
      $('hour-' + hours[i]).val(JSON.parse(savedText));
      textAreaEl[i].append(savedText)
    }
  }});
// creates a button to clear local storage
  document.getElementById('clearButton').addEventListener('click', function() {
    localStorage.clear();
    alert('Appointments have been cleared. Refresh the page.');
});

  
  checkTime()

