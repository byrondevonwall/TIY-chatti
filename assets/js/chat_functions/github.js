$.getJSON("https://api.github.com/users/dankb82", function(json) {

     var profilePic = _.template('<img src = <%- m.pic %> ></img>', {variable: 'm'});
     var userPic = profilePic({ pic: json.avatar_url });
     $(".profile-pic").append(userPic);

   });
