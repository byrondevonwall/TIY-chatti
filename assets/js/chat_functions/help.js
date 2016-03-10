//look for @help
var commands = [
  "Chat commands include",
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
   '@hk'

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
      $(".chatbody").append("<div class = 'returnedhelp'>"+commands.join(', ')+"</div>");

      $(".chatbody").append("<div class = 'returnedhelp'>@morehelp + command (i.e. @morehelp @temp) - describe each command</div>");
doWhatMyHeartTellsMe();
};

function getMoreHelp(){
  var helpText = textArr[0];

  switch(helpText){

     case '@temp':
        $(".chatbody").append("<div class = 'returnedhelp'>@temp, followed by City and State, will return the current temperature of that location.</div>");
     break;

     case '@weather':
       $(".chatbody").append("<div class = 'returnedhelp'> @weather followed by the city and state will give the weather forecast for that day</div>");
      break;

     case '@morehelp':
        $(".chatbody").append("<div class = 'returnedhelp'> @morehelp brings these up. You know this, you just typed it in. A++</div>");
     break;

    case '@github':
           $(".chatbody").append("<div class = 'returnedhelp'>@github followed by a github username will return that user's avatar and name </div>");
    break;

    case '@gif':
    $(".chatbody").append("<div class = 'returnedhelp'>@gif followed by a keyword will return an amusing .gif for your entertainment. </div>");
    break;

    case '@calc':
           $(".chatbody").append("<div class = 'returnedhelp'> @calc followed by an equation will solve that equation</div>");
      break;

    case '@pokedex':
        $(".chatbody").append("<div class = 'returnedhelp'>@pokedex followed by a pokemon name will return a sweet shiny pokemon </div>");
     break;

     case '@fr':
         $(".chatbody").append("<div class = 'returnedhelp'>@fr followed by a phrase translates that phrase into French </div>");
     break;

     case '@ar':
         $(".chatbody").append("<div class = 'returnedhelp'>@ar followed by a phrase translates that phrase into Arabic </div>");
     break;

     case '@cn':
         $(".chatbody").append("<div class = 'returnedhelp'>@cn followed by a phrase translates that phrase into Simplified Chinese </div>");
     break;

     case '@hk':
      $(".chatbody").append("<div class = 'returnedhelp'>@hk followed by a phrase translates that phrase into Traditional Chinese </div>");
     break;

     case '@hr':
         $(".chatbody").append("<div class = 'returnedhelp'>@hr followed by a phrase translates that phrase into Croatian </div>");
     break;

     case '@et':
        $(".chatbody").append("<div class = 'returnedhelp'> @et followed by a phrase translates that phrase into Estonian</div>");
     break;

     case '@tl':
        $(".chatbody").append("<div class = 'returnedhelp'>@tl followed by a phrase translates that phrase into Tagalog </div>");
     break;

     case '@hi':
        $(".chatbody").append("<div class = 'returnedhelp'>@hi followed by a phrase translates that phrase into Hindi</div>");
     break;

     case '@is':
       $(".chatbody").append("<div class = 'returnedhelp'>@is followed by a phrase translates that phrase into Icelandic </div>");
     break;

     case '@th':
       $(".chatbody").append("<div class = 'returnedhelp'>@th followed by a phrase translates that phrase into Thai </div>");
     break;

     case '@tr':
       $(".chatbody").append("<div class = 'returnedhelp'> @tr followed by a phrase translates that phrase into Turkish</div>");
     break;

     case '@vi':
       $(".chatbody").append("<div class = 'returnedhelp'>@vi followed by a phrase translates that phrase into Vietnamese</div>");
     break;
       $(".chatbody").append("<div class = 'returnedhelp'></div>");

    default:
         $(".chatbody").append("<div class = 'returnedhelp'>"+helpText+" is not a valid command</div>");
    break;

  };
};
