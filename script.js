

$(document).ready(function() {
    // Current day and time in Jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    // For loop iterating rows in .container div
    for (let i = 9; i < 18; i++) {
        // Create hourly-row
        var hourlyRow = $('<div data-time=`${i}` id=`${i}` class="hourly-row">');
        // Create first column for each hour
        var hour = $('<div class="col-sm-1"> <p class="hour">' + formatAMPM(i) + '</p>');
        // Create second column to record appointments
        var appointment = $('<div class="col-sm-10 past"><textarea id=text${i} class="appointment"></textarea>');        
        // Create third column for save button
        var saveBtn = $('<div class="col-sm-1"><button class="saveBtn" id=`${i}`><i class="fas fa-save"></i></button>');
        // append hour
        hourlyRow.append(hour);
        //append appointment
        hourlyRow.append(appointment);
        //append save button
        hourlyRow.append(saveBtn);
        // append hourlyRow to .container div
        $(".container").append(hourlyRow);
    }


});