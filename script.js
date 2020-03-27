$(document).ready(function (){
    var now = moment();
    $("#displayTime").text(now);




        $(".Btn").on("click", function (event) {
            var article=  $("#userSearch").val();
            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=The_New_York_Times&api-key=n8xLpEukj4EQb8z6k8jUxwAp3L9xE2SN&q=" + article ;
            console.log(queryURL);
            // check event.target FIRST on events like this ^^
           // console.log(event);
           // LUCKILY a tutor explained to me why I would have to add 
           // the replace method below...
           // to remove all whitespace! 
           // because ID'S can't have white space in them (o:
    
            // var task = event.target.previousElementSibling.value;
            // var time = event.target.parentNode.innerText.trim().replace(" ", "");
            // //sets the local storage with time and task arguments.
            // localStorage.setItem(time, task);
    
        $(".Btn").prepend("<br><hr>" + event);

      });







});