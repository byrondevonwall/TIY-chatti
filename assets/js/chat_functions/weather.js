
var check = 'you are talking to the weather';



function weather(){
  city = textArr[1];
  state = textArr[2];

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
$('.chatbody').append('<div class="returnedinput">"The temperature in "'+city+'" "'+state+'" is "'+temp+'</div>')
};

//
// this.chats.push({ text: "The weather in "+ city +" "+ state +" is "+ temp +" degrees" });
// this.newChat = '';
