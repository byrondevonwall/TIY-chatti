function getUser(){

var userName = textArr[1];//check array number

$.getJSON("https://api.github.com/users/"+userName+"", function(json) {

     var profilePic = _.template('<img src = <%- m.pic %> ></img>', {variable: 'm'});
     var userPic = profilePic({ pic: json.avatar_url });
     $(".profile-pic").append(userPic);

   });
};
