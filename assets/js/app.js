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
    var  entered = this.newChat;
    var textArr = entered.split(' ');
    // console.log(textArr);
    var text = textArr.splice(0,1).join()
    console.log(text)
    console.log(textArr)
      if (text) {
        switch(text){
          case '@temp':
            this.chats.push({ text: check });
            this.newChat = '';
            break;
            default:
            this.chats.push({ text: text });
            this.newChat = '';
            break;
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
