function tagalog(){
var toTranslate = textArr.join(' ');
console.log(toTranslate);
$.ajax({
 url: 'http://www.frengly.com/',
 data: {
   src: 'en',
   dest: 'tl',
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
   console.log('damn estonian aint workin')
 }
});
};

function hindi(){
var toTranslate = textArr.join(' ');
console.log(toTranslate);
$.ajax({
 url: 'http://www.frengly.com/',
 data: {
   src: 'en',
   dest: 'hi',
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
   console.log('damn hindi aint workin')
 }
});
};

function icelandic(){
var toTranslate = textArr.join(' ');
console.log(toTranslate);
$.ajax({
 url: 'http://www.frengly.com/',
 data: {
   src: 'en',
   dest: 'is',
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
   console.log('damn chart aint workin')
 }
});
};

function thai(){
var toTranslate = textArr.join(' ');
console.log(toTranslate);
$.ajax({
 url: 'http://www.frengly.com/',
 data: {
   src: 'en',
   dest: 'th',
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
   console.log('damn thai aint workin')
 }
});
};

function turkish(){
var toTranslate = textArr.join(' ');
console.log(toTranslate);
$.ajax({
 url: 'http://www.frengly.com/',
 data: {
   src: 'en',
   dest: 'tr',
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
   console.log('damn turkish aint workin')
 }
});
};

function vietnamese(){
var toTranslate = textArr.join(' ');
console.log(toTranslate);
$.ajax({
 url: 'http://www.frengly.com/',
 data: {
   src: 'en',
   dest: 'vi',
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
   console.log('damn vietnamese aint workin')
 }
});
};
