
var check = 'you are talking to the weather';


function weather(callback){
  city = textArr[0];
  state = textArr[1];
  var blah;
// console.log(textArr);
// console.log(city);
// console.log(state);
$.ajax({
url : 'http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json',
method: 'GET',
dataType : "json",
success : function(json) {
  temp = JSON.stringify(json.current_observation.temp_f);
}
});
};
