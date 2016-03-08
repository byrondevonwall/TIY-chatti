
var commands =
  "Available commands include:",
   "@help",
   "@temp",
   "@gif<br>@picture"
var textArr = []
var entered
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
    // console.log(textArr);
    var text = textArr.splice(0,1).join()
    // console.log(text)
    // console.log(textArr)
      if (text) {
         switch(text){
          case '@temp':
          test();
            this.chats.push({ text: check });
            this.newChat = '';
            break;
            case '@help':
            for(var i = 0; i <= commands.length - 1; i++){
               this.chats.push({text: commands[i]});
            };
            break;
            default:
            this.chats.push({ text: text });
            this.newChat = '';
            break;
         };//end of switch statement


         }
       }, //end addChat
         removeChat: function(index){
            this.chats.splice(index,1);
         }

        }
      })
}); //end of new Vue

 //end of line
