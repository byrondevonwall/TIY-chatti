



var textArr = [];
var entered;
var city;
var state;
var temp;
var weather;
var gif;
var shinypoke;
var switchText;



$(function(){
   'use strict';

   //hit enter in chatbox to start chat
   $('.chatbox').keyup(function(e) {
     if(e.which === 13) {
      doTheThing();
      }
    });

    //click on chat icon to start chat
    $('.fa-comment').on("click", function(){
      doTheThing();
    });

    //adds user input to the screen
     function applyUserText (){
       $('.chatbody').append('<div class="userinput">'+userInput+'</div>');
       $('.chatbox').val("");
     };

   function doTheThing(){
     var userInput = $(".chatbox").val()
     textArr = userInput.split(" ");
     switchText = textArr.splice(0, 1);
     switchText = switchText.join();

     //this calls different functions for AI functionality
     switch(switchText){

        case '@temp':
           weather();
           applyUserText();
        break;

        case '@help':
           getHelp();
           applyUserText();
        break;


       case '@github':

       break;

       case '@gif':
           giphy();
           applyUserText();
       break;

       case '@pokedex':
           pokedex();
           applyUserText();
       default:
           applyUserText();
       break;
     };//end of switch statement
   }//end of do the thing
})// end of if statement

// 
// <<<<<<< HEAD
// =======
// $('.chatbox').keyup(function(e) {
//     if(e.which === 13) {
//       //this parses user input for switch statement
//       var userInput = $(".chatbox").val()
//       textArr = userInput.split(" ");
//       switchText = textArr.splice(0, 1);
//       switchText = switchText.join();
//
//       //this calls different functions for AI functionality
//       switch(switchText){
//
//          case '@temp':
//             weather();
//             applyUserText();
//          break;
//
//          case '@help':
//             getHelp();
//             applyUserText();
//          break;
//
//
//         case '@github':
//
//         break;
//
//         case '@gif':
//             giphy();
//             applyUserText();
//         break;
//
//         case '@pokedex':
//             pokedex();
//             applyUserText();
//         default:
//             applyUserText();
//         break;
//       };//end of switch statement
//     }// end of if statement
//    });
// });
// >>>>>>> 031efe588d1f5dd30b85e8bf53cb53f7ad290a72
