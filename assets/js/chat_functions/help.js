//look for @help
var commands = [

   "@help",
   "@temp",
   '@weather',
   "@gif",
   "@picture",
   "@pokedex",
   "@calc",
   '@github',
   '@ar',
   '@fr',
   '@cn',
   '@hk',
   '@hr',
   '@et',
   '@tl',
   '@hi',
   '@is',
   '@th',
   '@tr',
   '@vi'

];

function getHelp(){
      $(".chatbody").append("<div class = 'returnedhelp'>Chat commands include: <br>"+commands.join(', ')+"</div>");

      $(".chatbody").append("<div class = 'returnedhelp'>@morehelp + command (i.e. @morehelp @temp) - describe each command</div>");
doWhatMyHeartTellsMe();
};

function getMoreHelp(){
  var helpText = textArr[0];

  switch(helpText){

     case '@temp':
        $(".chatbody").append("<div class = 'returnedhelp'>@temp, followed by City and State, will return the current temperature of that location.</div>");
        doWhatMyHeartTellsMe();
     break;

     case '@weather':
       $(".chatbody").append("<div class = 'returnedhelp'> @weather followed by the city and state will give the weather forecast for that day</div>");
       doWhatMyHeartTellsMe();
      break;

     case '@morehelp':
        $(".chatbody").append("<div class = 'returnedhelp'> @morehelp brings these up. You know this, you just typed it in. A++</div>");
        doWhatMyHeartTellsMe();
     break;

    case '@github':
           $(".chatbody").append("<div class = 'returnedhelp'>@github followed by a github username will return that user's avatar and name </div>");
           doWhatMyHeartTellsMe();
    break;

    case '@gif':
    $(".chatbody").append("<div class = 'returnedhelp'>@gif followed by a keyword will return an amusing .gif for your entertainment. </div>");
    doWhatMyHeartTellsMe();
    break;

    case '@calc':
        $(".chatbody").append("<div class = 'returnedhelp'> @calc followed by an equation will solve that equation</div>");
        doWhatMyHeartTellsMe();
      break;

    case '@pokedex':
        $(".chatbody").append("<div class = 'returnedhelp'>@pokedex followed by a pokemon name will return a sweet shiny pokemon </div>");
        doWhatMyHeartTellsMe();
     break;

     case '@fr':
         $(".chatbody").append("<div class = 'returnedhelp'>@fr followed by a phrase translates that phrase into French </div>");
         doWhatMyHeartTellsMe();
     break;

     case '@ar':
         $(".chatbody").append("<div class = 'returnedhelp'>@ar followed by a phrase translates that phrase into Arabic </div>");
         doWhatMyHeartTellsMe();
     break;

     case '@cn':
         $(".chatbody").append("<div class = 'returnedhelp'>@cn followed by a phrase translates that phrase into Simplified Chinese </div>");
         doWhatMyHeartTellsMe();
     break;

     case '@hk':
      $(".chatbody").append("<div class = 'returnedhelp'>@hk followed by a phrase translates that phrase into Traditional Chinese </div>");
      doWhatMyHeartTellsMe();
     break;

     case '@hr':
         $(".chatbody").append("<div class = 'returnedhelp'>@hr followed by a phrase translates that phrase into Croatian </div>");
         doWhatMyHeartTellsMe();
     break;

     case '@et':
        $(".chatbody").append("<div class = 'returnedhelp'> @et followed by a phrase translates that phrase into Estonian</div>");
        doWhatMyHeartTellsMe();
     break;

     case '@tl':
        $(".chatbody").append("<div class = 'returnedhelp'>@tl followed by a phrase translates that phrase into Tagalog </div>");
        doWhatMyHeartTellsMe();
     break;

     case '@hi':
        $(".chatbody").append("<div class = 'returnedhelp'>@hi followed by a phrase translates that phrase into Hindi</div>");
        doWhatMyHeartTellsMe();
     break;

     case '@is':
       $(".chatbody").append("<div class = 'returnedhelp'>@is followed by a phrase translates that phrase into Icelandic </div>");
       doWhatMyHeartTellsMe();
     break;

     case '@th':
       $(".chatbody").append("<div class = 'returnedhelp'>@th followed by a phrase translates that phrase into Thai </div>");
       doWhatMyHeartTellsMe();
     break;

     case '@tr':
       $(".chatbody").append("<div class = 'returnedhelp'> @tr followed by a phrase translates that phrase into Turkish</div>");
       doWhatMyHeartTellsMe();
     break;

     case '@vi':
       $(".chatbody").append("<div class = 'returnedhelp'>@vi followed by a phrase translates that phrase into Vietnamese</div>");
       doWhatMyHeartTellsMe();
     break;

    default:
         $(".chatbody").append("<div class = 'returnedhelp'>"+helpText+" is not a valid command</div>");
         doWhatMyHeartTellsMe();
    break;

  };
};
