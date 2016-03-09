//look for @help
var commands = [
   "@help",
   "@temp",
   "@gif",
   "@picture",
   "@pokedex"
];

var commandDescription = [
   "@help brings these up. You know this, you just typed it in. A++",
   "@temp, followed by City and State, will return the current temperature of that location.",
   "@gif followed by a keyword will return an amusing .gif for your entertainment.",
   "@picture followed by a keyword will return an amazing picture that will astound you",
   "@pokedex followed by a pokemon name will return a sweet pokemon picture",
];

function getHelp(){

   for(var i = 0; i < commands.length; i++){
      $(".chatbody").append("<div class = ''>"+commandDescription[i]+"</div>");
   }

};
