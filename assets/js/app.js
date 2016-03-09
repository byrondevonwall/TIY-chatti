



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

$('.chatbox').keyup(function(e) {
    if(e.which === 13) {
      //this parses user input for switch statement
      var userInput = $(".chatbox").val()
      textArr = userInput.split(" ");
      switchText = textArr.splice(0, 1);
      switchText = switchText.join();
//adds user input to the screen
      function applyUserText (){
         $('.chatbody').append('<div class="userinput">'+userInput+'</div>');
         $('.chatbox').val("");
      };
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
    }// end of if statement
   });
});
// });//end use strict
//
// $(".submit").on("click", function(){
//    getTextArray();
//    if (textArr) {
//       switch(textArr){
//        case textArr[0] = '@temp':
//        weather();
//          break;
//
//       case '@help':
//          for(var i = 0; i <= commands.length - 1; i++){
//             this.chats.push({text: commands[i]});
//          };
//          break;
//
//          case '@github':
//
//          break;
//
//          case '@gif':
//          console.log(textArr[0])
//          giphy();
//          this.chats.push({text: gif});
//          this.newChat = '';
//          break;
//
//          default:
//          this.chats.push({ text: entered });
//          this.newChat = '';
//          break;
//          };//end of switch statement
//       }// end of if statement
// });
//
// function removeChat(index){
//    this.chats.splice(index,1);
//          }
// }) //end use strict
//
//
//  //end of line
