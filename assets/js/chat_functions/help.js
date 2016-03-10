//look for @help
var commands = [
   "@help",
   "@temp",
   '@weather',
   "@gif",
   "@picture",
   "@pokedex",
   "@calc",
   '@ar',
   '@fr',
   '@cn',
   '@hk',
   '@morehelp - describe each command'

];

var commandDescription = [
   "@morehelp brings these up. You know this, you just typed it in. A++",
   "@temp, followed by City and State, will return the current temperature of that location.",
   "@weather followed by the city and state will give the weather forecast for that day",
   "@gif followed by a keyword will return an amusing .gif for your entertainment.",
   "@picture followed by a keyword will return an amazing picture that will astound you",
   "@pokedex followed by a pokemon name will return a sweet pokemon picture",
   "@calc followed by an equation will solve that equation",
   "@fr followed by a phrase translates that phrase into French",
   "@ar followed by a phrase translates that phrase into Arabic",
   "@cn followed by a phrase translates that phrase into Simplified Chinese",
   "@hk followed by a phrase translates that phrase into Traditional Chinese",

];

function getHelp(){

   for(var i = 0; i < commands.length; i++){
      $(".chatbody").append("<div class = 'returnedinput'>"+commands[i]+"</div>");

   }
doWhatMyHeartTellsMe();
};

function getMoreHelp(){

  for(var i = 0; i < commandDescription.length; i++){
     $(".chatbody").append("<div class = 'returnedinput'>"+commandDescription[i]+"</div>");

  }
doWhatMyHeartTellsMe();
};
