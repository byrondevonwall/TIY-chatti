//define the city and state variables, so we can insert them into our JSON call.

//look for @

var check = 'rabble';
<<<<<<< HEAD

=======
function test(){
console.log(cityArr);
console.log(textArr);
}
var cityArr = textArr
>>>>>>> ce7e6f17f91c0a7d6e23b79036e66b47448696f7
var city = textArr[0];
var state = textArr[1];
var weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
   console.log(json.current_observation.temp_f);
});

// var weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
//    json.current_observation.temp_f;
// });





// ***********warning! I have deleted the script tag for weather in the HTML!!


// var weather = $.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
//    json.current_observation.temp_f;
// }); //end of weather var
