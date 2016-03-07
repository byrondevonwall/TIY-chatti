//define the city and state variables, so we can insert them into our JSON call.

var state = 'NC';
var city = 'Durham';

$.getJSON('http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json', function(json){
   $("target").html();

})
