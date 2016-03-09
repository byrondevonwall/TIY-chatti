

function giphy(){
   var gifSubject = textArr[0];//this array number may be different
   $.ajax({
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+gifSubject+'',
      method: "GET",
      dataType: "json",
      success: function(json){
         gif = JSON.stringify(json.data.image_original_url);
         $(".chatbody").append('<div class = "returnedinput"><img src='+gif+'></img></div>');
      }
   });
};//end giphy function
