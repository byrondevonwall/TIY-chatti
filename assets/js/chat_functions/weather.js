//define the city and state variables, so we can insert them into our JSON call.

//look for @

var check = 'rabble';

function test(){
console.log(cityArr);
console.log(textArr);
}
// var cityArr = textArr;
var city = textArr[0];
var state = textArr[1];
var weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
   json.current_observation.temp_f;
});

// var weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
//    json.current_observation.temp_f;
// });





// ***********warning! I have deleted the script tag for weather in the HTML!!


// var weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
//    json.current_observation.temp_f;
// }); //end of weather var
