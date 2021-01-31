$(document).ready(function() {
    // Current day and time in Jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

    // Array of hours from 9am to 5pm
    var nineToFive = [ , , , , , , , , , "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    
    // For loop iterating rows in .container div
    for (var i = 9; i < 18; i++) {
        // Template literal 
        var hourlyRow = $(`<div data-time=${i} id='${i}' class="row hourlyRow">
        <div class="col-sm-1 hour">${nineToFive[i]}</div>
        <textarea class="col-sm-10 past description" id=text${i} placeholder="Add appointment..."></textarea>
        <button class="col-sm-1 saveBtn" id=${i}><i class="fas fa-save"></i></button>`);

        //Appends template literal to empty div and increments each hour
        $(".container").append(hourlyRow);
        
        getLocalStorage(i);

    }

    function updateColors() {
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) {
            if (currentTime === $(`#${i}`).data("time")){
                $(`#text${i}`).addClass( "present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#text${i}`).addClass( "future");
            } else {
                $(`text${i}`).addClass("past");
            }
        }
    }

    updateColors();
    
    function getLocalStorage(key) {
        let value = localStorage.getItem(key);
        if (value) {
            $(`#text${key}`).text(value);
        }
    }
    
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', () => {
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        localStorage.setItem(eventId, eventText);
    });
});