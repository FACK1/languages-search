function event1() {
    var text = document.getElementById("event-on-text").value;
    fetch('/search?query='+text)
    .then(response => {
      return response.json();
    })
    .then(function (data){

      let arrayofres = findMatch(data, text)

        console.log(arrayofres);
        var ul = document.createElement("ul");
        ul.setAttribute('id', 'ulid');
        for (var i =0; i < arrayofres.length; i++){
            var li = document.createElement("li");
            li.setAttribute('class', 'item');
            var valueofarray=document.createTextNode(arrayofres[i]);
            li.appendChild(valueofarray);
            ul.appendChild(li);
  }
  var sec=document.getElementById("section-res");
  sec.innerHTML="";
  sec.appendChild(ul)
  if (text=='')
{
ul.innerHTML="";
}

});
}
function findMatch(data, text){
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
       return arrayofres;
}
if (typeof module !== 'undefined') {
  module.exports = findMatch;
}
