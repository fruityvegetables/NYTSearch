$(document).ready(function (){
    var now = moment();
    $("#displayTime").text(now);



        $("#generate").on("click", function (event) {
            event.preventDefault();
            // check event.target FIRST on events like this ^^
           console.log(event);
           // LUCKILY a tutor explained to me why I would have to add 
           // the replace method below...
           // to remove all whitespace! 
           // because ID'S can't have white space in them (o:
    
            // var task = event.target.previousElementSibling.value;
            // var time = event.target.parentNode.innerText.trim().replace(" ", "");
            // //sets the local storage with time and task arguments.
            // localStorage.setItem(time, task);
    
        $(".addSearch").prepend("<br><hr>" + event);

      });







});