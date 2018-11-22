function event1() {
    var text = document.getElementById("event-on-text").value;
    fetch('/search?query='+text)
    .then(response => {
      return response.json();
    })
    .then(function (data){
     console.log(data);
      let arrayofres = findMatch(data, text)
    
        console.log(JSON.stringify(data));
        var ul = document.createElement("ul");
        ul.setAttribute('id', 'ulid');
        for (var i =0; i < arrayofres.length; i++){
            var li = document.createElement("li");
            li.setAttribute('class', 'licss');
            var valueofarray=document.createTextNode(arrayofres[i]);
            li.appendChild(valueofarray);
            ul.appendChild(li);
  }
  var sec=document.getElementById("section-res");
  sec.innerHTML="";
  sec.appendChild(ul)
});
}
function findMatch(data, text){
if(typeof text === "string"){
  text = text.toLowerCase();
}
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
