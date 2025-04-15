$(window).scroll(function () {
    if ($(this).scrollTop() > 50){
        $("nav").addClass("scrolled")
    } else{
        $("nav").removeClass("scrolled")
    }
});



$("#localizaçao").click(function () { 
    $("#mapa").attr(
        "src" , "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6438582060796!2d-46.476804123788654!3d-23.545308461004318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66dec98fb855%3A0xf2b061ffbcd2ecf8!2sNeo%20Qu%C3%ADmica%20Arena!5e0!3m2!1spt-BR!2sbr!4v1744740706831!5m2!1spt-BR!2sbr"
        );
    $("#mapa").css({
        "height" : "350px",
        "width" : "500px",
        "filter" : "grayscale(100%)",
    })
        
});

$("#fechar").click(function () { 
    $("#mapa").removeAttr("src" , "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6438582060796!2d-46.476804123788654!3d-23.545308461004318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66dec98fb855%3A0xf2b061ffbcd2ecf8!2sNeo%20Qu%C3%ADmica%20Arena!5e0!3m2!1spt-BR!2sbr!4v1744740706831!5m2!1spt-BR!2sbr"
    );
    $("#mapa").css({
        "height" : "0",
        "width" : "0",
        
    })
});
