$(function(){
   'use strict';

var commands = [
   "@help",
   "@temp",
   "@gif",
   "@picture",
]


new Vue({
  el: '.bodywrap',
  data: {
    newChat: '',
    chats: []
  },
  methods: {
    addChat: function () {
    var  entered = this.newChat;
    var textArr = entered.split(' ');
    // console.log(textArr);
    var text = textArr.splice(0,1).join()
    console.log(text)
    console.log(textArr)
      if (text) {

        this.chats.push({ text: text });
        this.newChat = '';
//chops up the input into words in the check array, will let us access them later.
        var check = [];
        check = text.split(" ");
        console.log(check);

//look for @. This will be the ultimate parent function
         switch(text){
          case '@temp':
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


   }, //end addChat
   removeChat: function(index){
      this.chats.splice(index,1);
   }

        }
      }
    }
 //end addChat
  //  removeChat: function(index){
  //     this.chats.splice(index,1);
  //  }


// end of Methods
}); //end of new Vue

}) //end of line
