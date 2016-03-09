//look for @help
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
];

function getHelp(){

   for(var i = 0; i <= commands.length; i++){
      $(/*target for chat*/).append("<li class = ''>"+commandDescription[i]+"</li>");
   }

};
