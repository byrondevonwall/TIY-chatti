$(function(){
   'use strict';




new Vue({
  el: '.bodywrap',
  data: {
    newChat: '',
    chats: [

   ]
  },
  methods: {
    addChat: function () {
      var text = this.newChat.trim()
      if (text) {
        this.chats.push({ text: text })
        this.newChat = ''
      }
   }, //end addChat
   removeChat: function(index){
      this.chats.splice(index,1)
   }


} // end of Methods
}); //end of new Vue


}) //end of line
