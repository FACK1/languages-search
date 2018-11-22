let test=require('tape')
let Language=require('./main.js')

test('testing tape is working',function(t){
  t.equal(2,2,'2=2');
  t.end();
});

test('search',function(t){
  var actual=Language('');
  var expected=[""];
  t.deepEqual(actual,expected,'make search');
  t.end();
});
