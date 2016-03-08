
var commands = [
  "Available commands include:",
   "@help",
   "@temp",
   "@gif",
   "@picture",
   "@github"

];

var commandDescription = [
   "@help brings these up. You know this, you just typed it in. A++",
   "@temp, followed by City and State, will return the current temperature of your location.",
   "@gif followed by a keyword will return an amusing .gif for your entertainment.",
   "@picture followed by a keyword will return an amazing picture that will astound you",
   "@github followed by a username will return the person's email, name, and picture"
];

var textArr = [];
var entered;
var city;
var state;
var temp;
var weather;
var gif;
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

   },
        //end addChat
         removeChat: function(index){
            this.chats.splice(index,1);
         }
      }
      })//end of new Vue
var myComponent = Vue.extend({
   template: '<p>component</p>'
})

Vue.component('my-component', myComponent)

new Vue({
   el: '#example'
})

});  //end of line
