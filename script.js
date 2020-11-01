$(document).ready(function() {
    // Current day and time in Jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    // For loop iterating rows in .container div
    for (var i = 9; i < 18; i++) {
        // Create hourly-row
        var hourlyRow = $(`<div data-time=${i} id='${i}' class=" row hourlyRow">`);
        // Create first column for each hour
        var hour = $('<div class="col-sm-1 hour">' + ampmConvert(i) + '</div>');
        // Create second column to record appointments
        var appointment = $(`<textarea class="col-sm-10 past description" id=text${i} placeholder="Add appointment...">`);      
        // Create third column for save button
        var saveBtn = $(`<button class="col-sm-1 saveBtn" id=${i}><i class="fas fa-save"></i>`);
        // append hour
        hourlyRow.append(hour);
        //append appointment
        hourlyRow.append(appointment);
        //append save button
        hourlyRow.append(saveBtn);
        // append hourlyRow to .container div
        $(".container").append(hourlyRow);

        getLocalStorage(i);

    }

    function ampmConvert(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }

    ampmConvert();

    function updateColors(){
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) {
            if ($(`#${i}`).data("time") == currentTime){
                $(`#text${i}`).addClass( "present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#text${i}`).addClass( "future");
            }
        }
    }

    setInterval(function() {
        updateColors();
    }, 1000);
    
    function getLocalStorage(key) {
        let value = localStorage.getItem(key);
        if (value) {
            $(`#text${key}`).text(value);
        }
    }
    
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function(){
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        localStorage.setItem(eventId, eventText);
    });
});