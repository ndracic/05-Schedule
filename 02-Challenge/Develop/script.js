// 1. What is today's date in the following format: Jan 1st, 1999?
var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY"));
$("#currentTime").text(today.format("h:m a"));

//save data in textarea to local storage
var saveEvent = document.getElementById('saveBtn')
var comment = document.getElementById('time-block')


// $("#note").val(localStorage.getItem ("comment"));
// localStorage.setItem($(".time-block").val());


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
