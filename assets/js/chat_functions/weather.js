//define the city and state variables, so we can insert them into our JSON call.

var state = ;
var city = ;

$.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
   //plug in where to populate the html here! $('target').smthing(json target);
})
