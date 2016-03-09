

function weather(){

city = textArr[0];
state = textArr[1];

// console.log(textArr);
// console.log(city);
// console.log(state);
$.ajax({
url: 'http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json',
method: 'GET',
dataType : "json",
success : function(json) {
  weather = JSON.stringify(json.current_observation.weather);
  weatherIcon = JSON.stringify(json.current_observation.icon_url);
  $('.chatbody').append('<div class="returnedinput"><p>The weather in '+city+' '+state+' is '+weather+'</p><img src='+weatherIcon+'></img></div>');
}

});
};
