function event1() {
    var text = document.getElementById("event-on-text").value;

fetch('/search?query='+text)
.then(response => {

return response.json();
})
.then(function (data){
console.log(data);
var arrayofres=[];
var counter=0;
for (var i = 0; i < data.length; i++) {
  if(data[i].startsWith(text))
  {
    arrayofres.push(data[i]);
    counter++;
    if(counter==5)
    {
      break;
    }
  }
}
console.log(arrayofres);


})
}
