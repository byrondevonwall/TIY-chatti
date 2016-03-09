
var commands = [
  "Available commands include:",
   "@help",
   "@temp",
   "@gif",
   "@picture",
   "@pokedex"

];

var commandDescription = [
   "@help brings these up. You know this, you just typed it in. A++",
   "@temp, followed by City and State, will return the current temperature of your location.",
   "@gif followed by a keyword will return an amusing .gif for your entertainment.",
   "@picture followed by a keyword will return an amazing picture that will astound you"
]

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
   textArr = $(".input").val().split(" ");
};

$(".submit").on("click", function(){
   getTextArray;
   if (textArr) {
      switch(textArr){
       case textArr[0] = '@temp':
       weather();
         break;

      case '@help':
         for(var i = 0; i <= commands.length - 1; i++){
            this.chats.push({text: commands[i]});
         };
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
});

function removeChat(index){
   this.chats.splice(index,1);
         }
}) //end use strict


 //end of line
