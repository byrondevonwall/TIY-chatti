function arabic(){
var toTranslate = textArr.join(' ');
console.log(toTranslate);
$.ajax({
 url: 'http://www.frengly.com/',
 data: {
   src: 'en',
   dest: 'ar',
   text: toTranslate,
   outformat: 'json',
   email: 'byronssupersweetdevacct@gmail.com',
   password: 'apassword'
 },
 success: function(data){
   $(".chatbody").append('<div class = "returnedinput">'+data.translation+'</div>');
   doWhatMyHeartTellsMe();
 },
 error: function (errormessage) {
   console.log('damn arabic aint workin')
 }
});
};
