$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("VPI43mp9YFkDdJiyRSSrxXxBwj86sWFf113Z35El", "PWWYqub8rtiDDHVOdWyZliM3cuThAUWRRT6z2pQ4");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});