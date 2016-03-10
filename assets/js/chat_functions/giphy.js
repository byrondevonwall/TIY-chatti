

function giphy(){
   var gifSubject = textArr.join('+');//this array number may be different
   $.ajax({
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+gifSubject+'',
      method: "GET",
      dataType: "json",
      success: function(json){
         gif = JSON.stringify(json.data.image_original_url);
         $(".chatbody").append('<div class = "returnedinput"><img class="returnedimage" src='+gif+'></img></div>');
         doWhatMyHeartTellsMe();
      }
   });
};//end giphy function
