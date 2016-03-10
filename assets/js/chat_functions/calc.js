


function calc (){
   var calcElements = textArr.join();
   var calcFinished = eval(calcElements);
   $(".chatbody").append('<div class = "returnedinput">'+calcFinished+'</div>');
   doWhatMyHeartTellsMe();
};//end function
