$(document).ready(function(){
var result = [];
function total(name){
  var counter=0;
  $("input:checkbox[name = "+name+"]:checked").each(function(){
    counter+= 1;
  });
  result.push(counter);
}

$("form").submit(function(event){
  total("unlucky");
  total("lucky");
  var score = result[1]-result[0];
  if (score >0){
    alert("you are lucky")
  }
  else {
    alert("do something to get lucky")
  }

});

});
