function getGithub(){

var userName = textArr[0];

$.ajax({
   url: 'https://api.github.com/users/'+userName+'',
   method: "GET",
   dataType: "json",
   success: function(json){
      name = JSON.stringify(json.name);
      profilePic = JSON.stringify(json.avatar_url);
      $(".chatbody").append('<div class = "returnedinput"><img src = '+profilePic+'></img><p>'+name+'</p></div>');
   }
});
};



// "https://api.github.com/users/"+userName, function(json) {
//
//      var profilePic = _.template('<img src = <%- m.pic %> ></img>', {variable: 'm'});
//      var userPic = profilePic({ pic: json.avatar_url });
//      $(".profile-pic").append(userPic);
//
//    });
