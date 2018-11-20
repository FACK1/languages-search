function event1() {
    var text = document.getElementById("event-on-text").value;
    console.log(text);
    document.getElementById("test").innerHTML = "You wrote: " + text;
}
