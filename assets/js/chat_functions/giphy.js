

function giphy(){
   var gifSubject = textArr[0];
   $.ajax({
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+gifSubject+'',
      method: "GET",
      dataType: "json",
      success: function(json){
         gif = '<img src="'+json.data.url+'"></img>';
      }
   });
};//end giphy function
