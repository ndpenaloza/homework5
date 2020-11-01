
    console.log(moment());
    // Display current day and time
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

        function updateColors(){
            var currentTime = new Date().getHours();
            for (var i = 9; i < 18; i++) { 
            console.log(currentTime, $(`#${i}`).data("time"));
            if ($(`#${i}`).data("time") == currentTime){
                $(`#text${i}`).addClass( "present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#text${i}`).addClass( "future");
        }
    }
}
    
    // Create row to display hour, info to save per hour, and a save button


    //eventListener for save button
    var saveBtn = $(".saveBtn");
    saveBtn.on("click", function() {
        var eventId = $(this).attr("id");
        var eventText = $(this).find(".appointment").val();
        localStorage.setItem(eventId, eventText);
    })

    // setAttribute to make every past hour gray, the current hour red, and future hour green

    // Get Local Data
    // var timeBlockArray = $(".hourly-row");
    // timeBlockArray.each(function(index) {
    //     var $timeBlock = $(timeBlockArray[index]).
    //     // get the id
    //     var id = $timeBlock.find("textarea").attr("id");
    //     // get that data associated with the id
    //     var data = localStorage.getItem(`hour-${id}`);
    //     //update the textarea
    //     if (data) {
    //         timeBlockArray.find("textarea").val(data);
    //     }   else {
    //         timeBlockArray.find("textarea").val();
    //     }
    // });
//$(document).ready(function() {
//});