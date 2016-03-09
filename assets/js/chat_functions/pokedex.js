function pokedex(){
  var pokemon = textArr[0];
  $.ajax({
  url : 'http://pokeapi.co/api/v2/pokemon/'+pokemon,
  method: 'GET',
  dataType : "json",
  success : function(json) {
    shinypoke =  '<img src="'+json.sprites.front_shiny+ '"alt="'+pokemon+'">';
  }
  });
  };
