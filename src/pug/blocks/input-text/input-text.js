$(function() {
    $("#birthday-id").mask("99.99.9999",{completed:function(){alert("You typed the following: "+this.val());}});
});