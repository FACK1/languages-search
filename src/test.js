var test = require('tape')
var event1 = require('../public/main.js')

test('testing text value', function(t){
    var expected = document.getElementById("event-on-text").value;
    var actual = arrayofres[0];
    t.equal((actual == "Arabic"),(expected == "ar"), "test ")
    t.end();
})