



var textArr = [];
var entered;
var city;
var state;
var temp;
var weather;
var gif;
var shinypoke;
var switchText;


//push the scroll
function doWhatMyHeartTellsMe(){
  var position = $(".chatbody").prop('scrollHeight');
  $(".chatbody").scrollTop(position);
}

$(function(){
   'use strict';


   //hit enter in chatbox to start chat
   $('.chatbox').keyup(function(e) {
     if(e.which === 13) {
      doTheThing();
      doWhatMyHeartTellsMe();
      }
    });

    //click on chat icon to start chat
    $('.fa-comment').on("click", function(){
      doTheThing();
      doWhatMyHeartTellsMe();
    });


   function doTheThing(){
     var userInput = $(".chatbox").val()
     textArr = userInput.split(" ");
     switchText = textArr.splice(0, 1);
     switchText = switchText.join();

     //adds user input to the screen
      function applyUserText (){
        $('.chatbody').append('<div class="userinput">'+userInput+'</div>');
        $('.chatbox').val("");
      };

      doWhatMyHeartTellsMe();
     //this calls different functions for AI functionality
     switch(switchText){

        case '@temp':
           temp();
           applyUserText();
           doWhatMyHeartTellsMe();
        break;

        case '@weather':
            weather();
            applyUserText();
         break;

        case '@help':
           getHelp();
           applyUserText();
           doWhatMyHeartTellsMe();
        break;


       case '@github':
            getGithub();
            applyUserText();
       break;

       case '@gif':
           giphy();
           applyUserText();
           doWhatMyHeartTellsMe();
       break;

       case '@pokedex':
           pokedex();
           doWhatMyHeartTellsMe();
          //  applyUserText();
        break;
       default:
           applyUserText();
           doWhatMyHeartTellsMe();
       break;
     };//end of switch statement
   }//end of do the thing
})// end of if statement
