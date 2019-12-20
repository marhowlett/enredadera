//Remover los title de los a

window.onload = function () {
    
    
    
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.onmouseover = function () {
            this.setAttribute("org_title", this.title);
            this.title = "";
        };
        link.onmouseout = function () {
            this.title = this.getAttribute("org_title");
        };
    }
};

// JavaScript
window.sr = ScrollReveal({
    reset: false
});

var hero = {
    origin: "top",
    distance: "24px",
    duration: 900,
    scale: 1.05,
}


var clientes = {
    origin: "top",
    distance: "24px",
    duration: 1200,
    scale: 1.05,
    delay: 900,
}

var intro = {
    origin: "bottom",
    distance: "64px",
    duration: 900,
    delay: 800,
    scale: 1,
}

var resaltado = {
    origin: "left",
    distance: "32px",
    duration: 1200,
    delay: 400,
    scale: 0,
}


var aplicaciones = {
    origin: "top",
    distance: "24px",
    duration: 1000,
    scale: 1.05,
    delay: 900
}


var titulo = {
    origin: "bottom",
    distance: "32px",
    duration: 1000,
    delay: 0,
    scale: 0,
}

var subtituloH3 = {
    origin: "bottom",
    distance: "32px",
    duration: 900,
    delay: 200,
    scale: 0,
}

var subtituloH4 = {
    origin: "bottom",
    distance: "32px",
    duration: 900,
    delay: 300,
    scale: 0,
}

var imagenes = {
    origin: "left",
    distance: "32px",
    duration: 800,
    delay: 400,
    scale: 0,
}

var contenido = {
    origin: "bottom",
    distance: "32px",
    duration: 1000,
    delay: 400,
    scale: 0,
}

/*
//Animación en general
sr.reveal('.template-section h1, .template-section h2', titulo);
sr.reveal('.template-section h3', subtituloH3);
sr.reveal('.template-section h4', subtituloH4);
sr.reveal('.template-section img, .template-section input', imagenes);
sr.reveal('.template-section p, .template-section ul', contenido);
sr.reveal('.template-section .btn', contenido);
*/
function addCommasToNum(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


//smooth scroll
jQuery(function ($) {

    // Smooth scrolling when clicking on a hash link
    $('a[href*="#"]').on('click', function (e) {
        

        var target = this.hash;
        var $target = $(target);
        var clase = $(target).attr("class");

        if (clase == "template-section") {
            e.preventDefault();
            
            if ($(window).width() > 1023) {
                var $scrollTop = $target.offset().top - 140;
            } else {
                var $scrollTop = $target.offset().top;
            }

            $('html, body').stop().animate({
                'scrollTop': $scrollTop
            }, 900, 'swing');
        }
    });
        
    var contador=0, contador2=0;
    var ban1=0, ban2=0, ban3=0, ban4=0, ban5=0, ban6=0, ban7=0, ban8=0, ban9=0;
    function cambiarfondo (src,pos) {
        var posicion=pos;
         $('div.banner1').addClass("agregar");
            celda = ".banner"+pos;
            //console.log(celda);
            $(celda).css("background-image", src); 
         //   var n = $( ".fondo" ).length;
        
                // if (contador<2){
                 
                    console.log("Hola2");
                      //
                    // n = $( ".fondo"+contador2 ).length;
                  //   console.log(contador2+"Estoyaqui");
                     
                    // contador=contador+1;
                     
                
                    if(contador>0){
                    //     $(celda).addClass("fondo"+contador2);
                   // contador=contador+1;
                 //  console.log(contador);
                    }
                    if(contador>7){
                       console.log("Entre2");
                        contador2=contador2+1;
                         console.log(contador2);
                        contador=0;
                        console.log(contador);
                        ban1=0;
                        ban2=0;
                        ban3=0;
                        ban4=0;
                        ban5=0;
                        ban6=0;
                        ban7=0;
                        ban8=0;
                        ban9=0;
                    }
               
                        if(contador2>0){
                            
                             console.log(ban9+"Entre");
                    //      $(celda).addClass("fondo"+contador2);
                         contador2=contador2-1;
                         $(celda).removeClass("fondo"+contador2);
                         console.log("fondo"+contador2);
                         console.log(contador+"Estoy soy");
                         contador2=contador2+1;
                        console.log(contador2+"Nuevovalor");
                        if(contador>6){
                            ban1=0;
                        ban2=0;
                        ban3=0;
                        ban4=0;
                        ban5=0;
                        ban6=0;
                        ban7=0;
                        ban8=0;
                        ban9=0;
                        }
                     
                         if (contador2>8){
                         contador2=0;
                            }
                            
                     
               //  
        }
            
       
    }
  
   
$('.banner1').on('click', function ()  {
   
   
        
         $('div.banner1').addClass("fondo"+contador2);
        console.log(contador);
             console.log(contador2);
            if(ban1==0){
        if($('div.banner1').hasClass("fondo"+0)){
                cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)",1);
                ban1=1;
                contador=contador+1;
                if(contador2>0){
                    contador=contador-1;
                }
                }
        if($('div.banner1').hasClass("fondo"+1)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)",1);
            ban1=1;
            contador=contador+1;
            if(contador2>0){
                    contador=contador-1;
                }
        }
    
        if($('div.banner1').hasClass("fondo"+2)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)",1);
            ban1=1;
            contador=contador+1;
            if(contador2>0){
                    contador=contador-1;
                }
        }
        
        if($('div.banner1').hasClass("fondo"+3)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+4)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+5)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
            }});
$('.banner2').on('click', function ()  {
        
         $('div.banner2').addClass("fondo"+contador2);
        console.log(contador);
             console.log(contador2);
            if(ban2==0){
        if($('div.banner2').hasClass("fondo"+0)){
                cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)",2);
                ban2=1;
                contador=contador+1;
                    if(contador2>0){
                    contador=contador-1;
                }
                
                }
        if($('div.banner2').hasClass("fondo"+1)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)",2);
            ban2=1;
            contador=contador+1;
        }
    
        if($('div.banner2').hasClass("fondo"+2)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)",2);
            ban2=1;
            contador=contador+1;
        }
        
        if($('div.banner2').hasClass("fondo"+3)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)",2);
            ban2=1;
            contador=contador+1;
        }
        
        if($('div.banner2').hasClass("fondo"+4)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)",2);
            ban2=1;
            contador=contador+1;
        }
        
        if($('div.banner2').hasClass("fondo"+5)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)",2);
            ban2=1;
            contador=contador+1;
        }
            }});
$('.banner3').on('click', function ()  {
        
         $('div.banner3').addClass("fondo"+contador2);
        console.log(contador);
             console.log(contador2);
            if(ban3==0){
        if($('div.banner3').hasClass("fondo"+0)){
                cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)",3);
                ban3=1;
                contador=contador+1;
            if(contador2>0){
                    contador=contador-1;
                }
                
                }
        if($('div.banner3').hasClass("fondo"+1)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)",3);
            ban3=1;
            contador=contador+1;
        }
    
        if($('div.banner3').hasClass("fondo"+2)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)",3);
            ban3=1;
            contador=contador+1;
        }
        
        if($('div.banner3').hasClass("fondo"+3)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)",3);
            ban3=1;
            contador=contador+1;
        }
        
        if($('div.banner3').hasClass("fondo"+4)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)",3);
            ban3=1;
            contador=contador+1;
        }
        
        if($('div.banner3').hasClass("fondo"+5)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)",3);
            ban3=1;
            contador=contador+1;
        }
            }});
$('.banner4').on('click', function ()  {
        
         $('div.banner4').addClass("fondo"+contador2);
        console.log(contador);
             console.log(contador2);
            if(ban4==0){
        if($('div.banner4').hasClass("fondo"+0)){
                cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)",4);
                ban4=1;
                contador=contador+1;
            if(contador2>0){
                    contador=contador-1;
                }
                }
        if($('div.banner4').hasClass("fondo"+1)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)",4);
            ban4=1;
            contador=contador+1;
        }
    
        if($('div.banner4').hasClass("fondo"+2)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)",4);
            ban4=1;
            contador=contador+1;
        }
        
        if($('div.banner4').hasClass("fondo"+3)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)",4);
            ban4=1;
            contador=contador+1;
        }
        
        if($('div.banner4').hasClass("fondo"+4)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)",4);
            ban4=1;
            contador=contador+1;
        }
        
        if($('div.banner4').hasClass("fondo"+5)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)",4);
            ban4=1;
            contador=contador+1;
        }
            }});
$('.banner5').on('click', function ()  {
        
         $('div.banner5').addClass("fondo"+contador2);
        console.log(contador);
             console.log(contador2);
            if(ban5==0){
        if($('div.banner5').hasClass("fondo"+0)){
                cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)",5);
                ban5=1;
                contador=contador+1;
            if(contador2>0){
                    contador=contador-1;
                }
                }
        if($('div.banner5').hasClass("fondo"+1)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)",5);
            ban5=1;
            contador=contador+1;
        }
    
        if($('div.banner5').hasClass("fondo"+2)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)",5);
            ban5=1;
            contador=contador+1;
        }
        
        if($('div.banner5').hasClass("fondo"+3)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)",5);
            ban5=1;
            contador=contador+1;
        }
        
        if($('div.banner5').hasClass("fondo"+4)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)",5);
            ban5=1;
            contador=contador+1;
        }
        
        if($('div.banner5').hasClass("fondo"+5)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)",5);
            ban5=1;
            contador=contador+1;
        }
            }});
$('.banner6').on('click', function ()  {
         $('div.banner6').addClass("fondo"+contador2);
        console.log(contador);
             console.log(contador2);
            if(ban6==0){
        if($('div.banner6').hasClass("fondo"+0)){
                cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)",6);
                ban6=1;
                contador=contador+1;
            if(contador2>0){
                    contador=contador-1;
                }
                }
        if($('div.banner6').hasClass("fondo"+1)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)",6);
            ban6=1;
            contador=contador+1;
        }
    
        if($('div.banner1').hasClass("fondo"+2)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+3)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+4)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+5)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
            }});
$('.banner7').on('click', function ()  {
        
         $('div.banner7').addClass("fondo"+contador2);
        console.log(contador);
             console.log(contador2);
            if(ban7==0){
        if($('div.banner7').hasClass("fondo"+0)){
                cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)",7);
                ban7=1;
                contador=contador+1;
            if(contador2>0){
                    contador=contador-1;
                }
                }
        if($('div.banner7').hasClass("fondo"+1)){
        console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)",7);
            ban7=1;
            contador=contador+1;
        }
    
        if($('div.banner7').hasClass("fondo"+2)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)",7);
            ban7=1;
            contador=contador+1;
        }
        
        if($('div.banner7').hasClass("fondo"+3)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)",7);
            ban7=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+4)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+5)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
            }});
$('.banner8').on('click', function ()  {
         $('div.banner8').addClass("fondo"+contador2);
        console.log(contador);
             console.log(contador2);
            if(ban8==0){
        if($('div.banner8').hasClass("fondo"+0)){
                cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)",8);
                ban8=1;
                contador=contador+1;
            if(contador2>0){
                    contador=contador-1;
                }
                }
        if($('div.banner8').hasClass("fondo"+1)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)",8);
            ban8=1;
            contador=contador+1;
        }
    
        if($('div.banner8').hasClass("fondo"+2)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)",8);
            ban8=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+3)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+4)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+5)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
            }});
$('.banner9').on('click', function ()  {
          $('div.banner9').addClass("fondo"+contador2);
        console.log(contador);
             console.log(contador2);
    console.log(ban9);
            if(ban9==0){
                console.log("entreaquí");
        if($('div.banner9').hasClass("fondo"+0)){
                cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)",9);
                ban9=1;
                contador=contador+1;
            if(contador2>0){
                    contador=contador-1;
                }
                }
       if($('div.banner9').hasClass("fondo"+1)){
        
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3.jpg)",9);
            ban9=1;
            contador=contador+1;
           if(contador2>0){
                    contador=contador-1;
                }
        }
    
        if($('div.banner9').hasClass("fondo"+2)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4.jpg)",9);
            ban9=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+3)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+4)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
        
        if($('div.banner1').hasClass("fondo"+5)){
       // console.log("entre");
        cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)",1);
            ban1=1;
            contador=contador+1;
        }
            }});
    
    
    
    function cambiarfondo2 (src) {
        for (x=1; x<=9; x++) {
            celda = ".banner_lap"+x;
            //console.log(celda);
            $(celda).css("background-image", src); 
           
       }
    }
  
   
  $('.banner_lap1').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)");}
  );
      $('.banner_lap2').toggle(
   function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)");}
  );
      $('.banner_lap3').toggle(
   function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)");}
  );
      $('.banner_lap4').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)");}
  );
      $('.banner_lap5').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)");}
  );
      $('.banner_lap6').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)");}
  );
      $('.banner_lap7').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)");}
  );
      $('.banner_lap8').toggle(
   function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)");}
  );
      $('.banner_lap9').toggle(
   function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)");},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)");}
  );

    
    
     /*   $('.banner1').toggle(function (e) {
    cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2.jpg)");
}, function () {
    cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");
});
        
      */  
   
  
/*    $('.banner2').on('click', function (e)  {
    cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner.jpg)");
    } );
*/


});
