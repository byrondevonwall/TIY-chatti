//define the city and state variables, so we can insert them into our JSON call.

//look for @

var check = 'you are talking to the weather';


function weather(){
  city = textArr[0];
  state = textArr[1];
console.log(textArr);
console.log(city);
console.log(state);
weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
   console.log(json.current_observation.temp_f);
});
temp = JSON.toString(weather);
};




// var weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
//    json.current_observation.temp_f;
// });





// ***********warning! I have deleted the script tag for weather in the HTML!!


// var weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
//    json.current_observation.temp_f;
// }); //end of weather var
