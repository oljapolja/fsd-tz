$(function() {
   $(".sf-menu").superfish({
    delay: 200,
    speed: "fast",
    cssArrows:  false
    })
    .after('<div id="mobile-menu">').clone().appendTo("#mobile-menu");// клонируем меню для плагина mmenu

    $("#mobile-menu").find('*').attr("style", "");// отчищаем инлайновые стилти
    $("#mobile-menu").children("ul").removeClass("sf-menu sf-js-enabled");// удаляем классы плагина superfish
    $("#mobile-menu .sf-with-ul .expand-more-icon").html('');

    $("#mobile-menu").mmenu({
        extensions :  {
           "all" : ['theme-white', "pagedim-black", "fx-listitems-slide", "fx-menu-slide"],
           "(max-width: 576px)": ["fullscreen"]
        },
        navbars : {
           content : ["prev", "title", "close"],
        },
        navbar: {
            title: "Меню"
        }
    });  
  
    $(".toggle-mnu").click(function() {
        $(this).addClass("on");
        
        
    });

    var api = $("#mobile-menu").data("mmenu");

    api.bind( "close:finish", function() {      
       $('.toggle-mnu').removeClass('on'); 
    });

    
});