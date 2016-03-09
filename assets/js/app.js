
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
var shinypoke;
$(function(){
   'use strict';
new Vue({
  el: '.bodywrap',
  data: {
    newChat: '',
    chats: []

  },
  methods: {
    addChat: function () {
    entered = this.newChat;
    textArr = entered.split(' ');
    var text = textArr.splice(0,1).join()
      if (text) {
         switch(text){
          case '@temp':
            weather();
            this.chats.push({ text: "The weather in "+ city +" "+ state +" is "+ temp +" degrees" });
            this.newChat = '';
            break;

          case '@help':
            for(var i = 0; i <= commands.length - 1; i++){
               this.chats.push({text: commands[i]});
            };
              this.newChat = '';
            break;

          case '@pokedex':
            pokedex();
            this.chats.push({text: shinypoke});
            this.newChat = '';

          default:
            this.chats.push({ text: entered });
            this.newChat = '';
            break;
         };//end of switch statement
      }



         }
       }, //end addChat
         removeChat: function(index){
            this.chats.splice(index,1);
         }

       })
     });
// }); //end of new Vue

 //end of line
