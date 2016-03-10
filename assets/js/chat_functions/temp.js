
var check = 'you are talking to the weather';



function temp(){
  city = textArr[0];
  state = textArr[1];

// console.log(textArr);
// console.log(city);
// console.log(state);
$.ajax({
url : 'http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/'+state+'/'+city+'.json',
method: 'GET',
dataType : "json",
success : function(json) {
  temp = JSON.stringify(json.current_observation.temp_f);
  $('.chatbody').append('<div class="returnedinput">The temperature in '+city+' '+state+' is '+temp+' degrees</div>');
  doWhatMyHeartTellsMe();
}
});

};

//
// this.chats.push({ text: "The weather in "+ city +" "+ state +" is "+ temp +" degrees" });
// this.newChat = '';
