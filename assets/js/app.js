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
      var text = this.newChat.trim()
      if (text) {
        this.chats.push({ text: text });
        this.newChat = '';
//chops up the input into words in the check array, will let us access them later.
        var check = [];
        check = text.split(" ");
        console.log(check);

//look for @. This will be the ultimate parent function
           switch (check[0]){
             case '@help':
             for(var i = 0; i <= commands.length - 1; i++){
                this.chats.push({text: commands[i]});
             };

          };//end of switch statement

     }//end of if(text) statement

   }, //end addChat
   removeChat: function(index){
      this.chats.splice(index,1);
   }

} // end of Methods
}); //end of new Vue

}) //end of line
