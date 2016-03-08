
var commands = [
   "@help",
   "@temp",
   "@gif",
   "@picture",
];

var commandDescription = [
   "@help brings these up. You know this, you just typed it in. A++",
   "@temp, followed by City and State, will return the current temperature of your location.",
   "@gif followed by a keyword will return an amusing .gif for your entertainment.",
   "@picture followed by a keyword will return an amazing picture that will astound you"
]
var textArr = []

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
    textArr = entered.split(' ');
    // console.log(textArr);
    var text = textArr.splice(0,1).join()
    console.log(text)
    console.log(textArr)

// Weather API Call!
    var city = textArr[0];
    var state = textArr[1];
    var weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
       json.current_observation.temp_f;
    });
    console.log(weather);


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



         }
       }, //end addChat
         removeChat: function(index){
            this.chats.splice(index,1);
         }

        }
      })
}); //end of new Vue

 //end of line
