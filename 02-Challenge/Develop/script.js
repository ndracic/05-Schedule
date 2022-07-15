// 1. What is today's date in the following format: Jan 1st, 1999?
var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY"));
$("#currentTime").text(today.format("h:m a"));

//save data in textarea to local storage
var saveEvent = document.getElementById('saveBtn')
var comment = document.getElementById('time-block')



var checkTime = function () {
    var currentTime = moment().format('H');
    var typedEvent = $(".textarea");

    //loop through textarea classes
    for (var i = 0 ; i < typedEvent.length ; i++) {

        var textareaId = typedEvent[i].id;
        console.log(textareaId)

        //get element by ID
        var newID = document.getElementById(typedEvent[i].id)

        //remove any old classes from element
        $(typedEvent[i].id).removeClass(".textarea");

        // apply new class if task is present/past/future
        if (textareaId < currentTime) {
            $(newID).addClass("past");
        } else if (textareaId > currentTime) {
            $(newID).addClass("future");
        } else {
            $(newID).addClass("present");
        }
    }
}
// check the time every half hour
setInterval(checkTime(), (1000 * 60) * 30);


//local storage

// save button on click 
//function event and claim variable 

// Save calendar item to local storage when save button is clicked
$(".saveBtn").on("click", function(event) {
  var calenderEvent = event.target.parentElement.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.parentElement.attributes[0].value, calenderEvent);
});

// Function to populate calendar events if they are in local storage
$(document).ready(function () {
    if (localStorage["saveNine"] !== null && localStorage["saveNine"] !== undefined) {
      var calenderEventNine = $("<p>" + localStorage["saveNine"] + "</p>");
      $("#nine").append(calenderEventNine[0].innerText);
    }
    else {
      ("");
    }});

$(document).ready(function () {
    if (localStorage["saveTen"] !== null && localStorage["saveTen"] !== undefined) {
      var calenderEventTen = $("<p>" + localStorage["saveTen"] + "</p>");
      $("#ten").append(calenderEventTen[0].innerText);
    }
    else {
      ("");
    }});

$(document).ready(function () {
    if (localStorage["saveEleven"] !== null && localStorage["saveEleven"] !== undefined) {
      var calenderEventEleven = $("<p>" + localStorage["saveEleven"] + "</p>");
      $("#eleven").append(calenderEventEleven[0].innerText);
    }
    else {
      ("");
    }});

$(document).ready(function () {
    if (localStorage["saveTwelve"] !== null && localStorage["saveTwelve"] !== undefined) {
      var calenderEventTwelve = $("<p>" + localStorage["saveTwelve"] + "</p>");
      $("#twelve").append(calenderEventTwelve[0].innerText);
    }
    else {
      ("");
    }});

$(document).ready(function () {
    if (localStorage["saveThirteen"] !== null && localStorage["saveThirteen"] !== undefined) {
      var calenderEventThirteen = $("<p>" + localStorage["saveThirteen"] + "</p>");
      $("#thirteen").append(calenderEventThirteen[0].innerText);
    }
    else {
      ("");
    }});

$(document).ready(function () {
    if (localStorage["saveFourteen"] !== null && localStorage["saveFourteen"] !== undefined) {
      var calenderEventFourteen = $("<p>" + localStorage["saveFourteen"] + "</p>");
      $("#fourteen").append(calenderEventFourteen[0].innerText);
    }
    else {
      ("");
    }});

$(document).ready(function () {
    if (localStorage["saveFifteen"] !== null && localStorage["saveFifteen"] !== undefined) {
      var calenderEventFifteen = $("<p>" + localStorage["saveFifteen"] + "</p>");
      $("#fifteen").append(calenderEventFifteen[0].innerText);
    }
    else {
      ("");
    }});

$(document).ready(function () {
    if (localStorage["saveSixteen"] !== null && localStorage["saveSixteen"] !== undefined) {
      var calenderEventSixteen = $("<p>" + localStorage["saveSixteen"] + "</p>");
      $("#sixteen").append(calenderEventSixteen[0].innerText);
    }
    else {
      ("");
    }});