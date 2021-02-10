$(document).ready(() => {
    // Current day and time in Jumbotron
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

    // Array of hours from 9am to 5pm
    const nineToFive = [ , , , , , , , , , "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    
    // For loop iterating rows in .container div
    for (let i = 9; i < 18; i++) {
        // Template literal 
        const hourlyRow = $(`<div data-time='${i}' id='${i}' class="row hourlyRow">
        <div class="col-sm-1 hour">${nineToFive[i]}</div>
        <textarea class="col-sm-10 past description${i}" data-time='${i}' id='textarea${i}' placeholder='Add appointment...'>
        </textarea>
        <button class="col-sm-1 saveBtn" id='${i}'><i class="fas fa-save"></i></button>`);

        //Appends template literal to empty div and increments each hour
        $(".hourly-planner").append(hourlyRow);


    }

    // Function updates color of textarea depending if the textarea is taking place in the past, present, or future.
    function updateColors() {
        let currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) {
            if (currentTime === $(`#${i}`).data("time")){
                $(`#textarea${i}`).addClass( "present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#textarea${i}`).addClass( "future");
            } else {
                $(`#textarea${i}`).addClass("past");
            }
        }
    }

    updateColors();

    //so i think we are going to try to get stuff from local storage and shove that in the textarea 
    function retrieveLocalStorage () {
        for (let i = 9; i < 18; i++) {
            let savedAppt = localStorage.getItem(`${i}`);
            $(`.col-sm-10.past.description${i}`).append(savedAppt);
        }
    }

    retrieveLocalStorage();
   

    // Function to save appointments to local storage
    function saveLocalStorage () {
            let apptTime = $(this).prev().data("time");
            let apptDescription = $(this).prev().val().trim();
            localStorage.setItem(apptTime,apptDescription);


    };

    $('.saveBtn').click(saveLocalStorage);


});