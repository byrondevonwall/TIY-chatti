



var textArr = [];
var entered;
var city;
var state;
var temp;
var weather;
var gif;
var shinypoke;


$(function(){
   'use strict';
var text;

//need to get text, chop into an array, and find what position 0 is

function getTextArray(){
   textArr = $(".chatbox").val().split(" ");
};

$('.chatbox').keyup(function(e) {
    if(e.which === 13) {
      console.log($(".chatbox").val());
      getTextArray();
      if (textArr) {
         switch(textArr){
          case textArr[0] = '@temp':
          weather();
            break;

         case '@help':
            getHelp();
            // for(var i = 0; i <= commands.length - 1; i++){
            //    this.chats.push({text: commands[i]});
            // };
            break;

            case '@github':

            break;

            case '@gif':
            console.log(textArr[0])
            giphy();
            this.chats.push({text: gif});
            this.newChat = '';
            break;

            default:
            this.chats.push({ text: entered });
            this.newChat = '';
            break;
            };//end of switch statement
         }// end of if statement
   };
});
});//end use strict
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
