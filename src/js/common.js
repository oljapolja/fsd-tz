$(function() {

    var lazyLoadInsrance = new LazyLoad({
      elements_selector: ".lazy"
   });

   $("#phone").mask("+7 (999) 999-99-99",{completed:function(){alert("You typed the following: "+this.val());}});





});