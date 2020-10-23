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
    function showWidth( ele, w ) {
    var resu;
       
        console.log(w);
        resu = w*224;
        resu = resu/1418;
    console.log(resu);
        
         $(".altura").css("min-height", resu+ 'px');
        $(".altura2").css("min-height", resu+ 'px');
         $(".altura3").css("min-height", resu+ 'px');
    
    }
$( "#getid" ).click(function() {
  showWidth( "paragraph", $( "p" ).width() );
});

  showWidth( "document", $( document ).width() );

$("#getw").click(function() {
  showWidth( "window", $( window ).width() );

console.log(w);
});
    
   

    
    var contador=0;
    function cambiarfondo (src,pos) {
        var posicion=pos;
            celda = ".banner"+pos;
            //console.log(celda);
            $(celda).css("background-image", src); 
            var n = $( ".fondo" ).length;
        console.log(n);
                 
        $(celda).addClass("fondo");
            
       
    }
  
   
  $('.banner1').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG1/I1.png)",1);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG2/I1.png)",1);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG3/I1.png)",1);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG4/I1.png)",1);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG5/I1.png)",1);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG6/I1.jpg)",1);}
  );
      $('.banner2').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG1/I2.png)",2);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG2/I2.png)",2);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG3/I2.png)",2);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG4/I2.png)",2);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG5/I2.png)",2);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG6/I2.jpg)",2);}
  );
      $('.banner3').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG1/I3.png)",3);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG2/I3.png)",3);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG3/I3.png)",3);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG4/I3.png)",3);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG5/I3.png)",3);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG6/I3.jpg)",3);}
  );
      $('.banner4').toggle(
   function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG1/I4.png)",4);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG2/I4.png)",4);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG3/I4.png)",4);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG4/I4.png)",4);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG5/I4.png)",4);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG6/I4.jpg)",4);}
  );
      $('.banner5').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG1/I5.png)",5);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG2/I5.png)",5);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG3/I5.png)",5);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG4/I5.png)",5);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG5/I5.png)",5);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG6/I5.jpg)",5);}
  );
      $('.banner6').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG1/I6.png)",6);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG2/I6.png)",6);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG3/I6.png)",6);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG4/I6.png)",6);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG5/I6.png)",6);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG6/I6.jpg)",6);}
  );
      $('.banner7').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG1/I7.png)",7);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG2/I7.png)",7);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG3/I7.png)",7);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG4/I7.png)",7);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG5/I7.png)",7);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG6/I7.jpg)",7);}
  );
      $('.banner8').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG1/I8.png)",8);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG2/I8.png)",8);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG3/I8.png)",8);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG4/I8.png)",8);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG5/I8.png)",8);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG6/I8.jpg)",8);}
  );
      $('.banner9').toggle(
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG1/I9.png)",9);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG2/I9.png)",9);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG3/I9.png)",9);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG4/I9.png)",9);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG5/I9.png)",9);},
    function(){cambiarfondo("url(https://laenredadera.art/wp-content/themes/enredadera/img/IMG6/I9.jpg)",9);}
  );
    

    
    function cambiarfondo2 (src,pos) {
        var posicion=pos;
            celda = ".banner_lap"+pos;
            //console.log(celda);
            $(celda).css("background-image", src); 
            var n = $( ".fondo" ).length;
        console.log(n);
                 
        $(celda).addClass("fondo");
            
       
    }
  
   
  $('.banner_lap1').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)",1);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)",1);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)",1);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)",1);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)",1);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)",1);}
  );
      $('.banner_lap2').toggle(
   function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)",2);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)",2);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)",2);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)",2);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)",2);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)",2);}
  );
      $('.banner_lap3').toggle(
   function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)",3);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)",3);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)",3);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)",3);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)",3);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)",3);}
  );
      $('.banner_lap4').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)",4);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)",4);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)",4);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)",4);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)",4);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)",4);}
  );
      $('.banner_lap5').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)",5);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)",5);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)",5);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)",5);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)",5);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)",5);}
  );
      $('.banner_lap6').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)",6);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)",6);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)",6);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)",6);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)",6);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)",6);}
  );
      $('.banner_lap7').toggle(
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)",7);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)",7);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)",7);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)",7);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)",7);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)",7);}
  );
      $('.banner_lap8').toggle(
   function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)",8);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)",8);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)",8);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)",8);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)",8);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)",8);}
  );
      $('.banner_lap9').toggle(
   function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2_lap.jpg)",9);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3_lap.jpg)",9);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4_lap.jpg)",9);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5_lap.jpg)",9);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6_lap.jpg)",9);},
    function(){cambiarfondo2("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner_lap.jpg)",9);}
  );

      
    function cambiarfondo3 (src,pos) {
        var posicion=pos;
            celda = ".banner_movil"+pos;
            //console.log(celda);
            $(celda).css("background-image", src); 
            var n = $( ".fondo" ).length;
        console.log(n);
                 
        $(celda).addClass("fondo");
            
       
    }
  
   
  $('.banner_movil1').toggle(
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2movil.jpg)",1);},
      function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3movil.jpg)",1);},
      function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4movil.jpg)",1);},
      function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5movil.jpg)",1);},
      function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6movil.jpg)",1);},
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/bannermovil.jpg)",1);}
  );
      $('.banner_movil2').toggle(
   function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2movil.jpg)",2);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3movil.jpg)",2);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4movil.jpg)",2);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5movil.jpg)",2);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6movil.jpg)",2);},
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/bannermovil.jpg)",2);}
  );
      $('.banner_movil3').toggle(
   function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2movil.jpg)",3);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3movil.jpg)",3);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4movil.jpg)",3);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5movil.jpg)",3);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6movil.jpg)",3);},
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/bannermovil.jpg)",3);}
  );
      $('.banner_movil4').toggle(
   function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2movil.jpg)",4);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3movil.jpg)",4);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4movil.jpg)",4);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5movil.jpg)",4);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6movil.jpg)",4);},
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/bannermovil.jpg)",4);}
  );
      $('.banner_movil5').toggle(
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2movil.jpg)",5);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3movil.jpg)",5);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4movil.jpg)",5);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5movil.jpg)",5);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6movil.jpg)",5);},
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/bannermovil.jpg)",5);}
  );
      $('.banner_movil6').toggle(
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2movil.jpg)",6);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3movil.jpg)",6);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4movil.jpg)",6);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5movil.jpg)",6);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6movil.jpg)",6);},
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/bannermovil.jpg)",6);}
  );
      $('.banner_movil7').toggle(
   function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2movil.jpg)",7);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3movil.jpg)",7);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4movil.jpg)",7);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5movil.jpg)",7);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6movil.jpg)",7);},
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/bannermovil.jpg)",7);}
  );
      $('.banner_movil8').toggle(
   function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2movil.jpg)",8);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3movil.jpg)",8);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4movil.jpg)",8);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5movil.jpg)",8);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6movil.jpg)",8);},
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/bannermovil.jpg)",8);}
  );
      $('.banner_movil9').toggle(
   function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner2movil.jpg)",9);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner3movil.jpg)",9);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner4movil.jpg)",9);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner5movil.jpg)",9);},
          function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/banner6movil.jpg)",9);},
    function(){cambiarfondo3("url(https://laenredadera.art/wp-content/themes/enredadera/img/bannermovil.jpg)",9);}
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
