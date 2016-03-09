function pokedex(){
  var pokemon = textArr[0];
  $.ajax({
  url : 'http://pokeapi.co/api/v2/pokemon/'+pokemon,
  method: 'GET',
  dataType : "json",
  success : function(json) {
    shinypoke =  JSON.stringify(json.sprites.front_shiny);
    pokeType = JSON.stringify(json.types[0].type.name);

    $(".chatbody").append('<div class = "returnedinput"><img src='+shinypoke+'></img><br><p>'+pokeType+'</p></div>');
  }
  });

  };
