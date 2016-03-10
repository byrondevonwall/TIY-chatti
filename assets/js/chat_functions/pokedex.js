function pokedex(){
  var pokemon = textArr[0];
  $.ajax({
  url : 'http://pokeapi.co/api/v2/pokemon/'+pokemon,
  method: 'GET',
  dataType : "json",
  success : function(json) {
    shinypoke =  JSON.stringify(json.sprites.front_shiny);
    pokeType = JSON.stringify(json.types[0].type.name);

    $(".chatbody").append('<div class="returnedinput"><img class="returnedimage" src='+shinypoke+'></img><p>'+pokeType+'</p></div>');
    doWhatMyHeartTellsMe();
  }

  });

  };
