/**
 * Mosaico
 * ------------
 * Version : 1.0.0
 * Website : esbrillante.mx *
 * Author  : Jesús Velasco (@jesusjvc)
 */


jQuery(function($) {

    // Setup

    var total_fondos = 6; // Cantidad de fondos a rotar
    var fondo_actual = 1; // Bandera para indicar que fondo se está armando
    var grid = 9; // Cantidad de celdas del grid
    var url_base = "https://laenredadera.art/wp-content/themes/enredadera/img/";


    // Inicializar con el fondo #1 a todas las celdas 

    $("#mosaico").find(".celda").attr('data-fondo_actual', '1');

    // Función que se encarga de cambiar la imagen

    function CambiarFondo($celda) {

        // -------------------------------------------
        // Comprobar que se haya completado el mosaico
        // -------------------------------------------

        // Cantidad de celdas que tienen el fondo actual

        var total = $("#mosaico").find("[data-fondo_actual='" + fondo_actual + "']").length;

        if (total == grid) {
            fondo_actual++; // Continuar con el siguiente fondo              

            if (fondo_actual > total_fondos) {
                fondo_actual = 1; // Reiniciar el ciclo    
            }

        }

        $celda.attr("data-fondo_actual", fondo_actual); // bandera en celda

        // Establecer fondo a la celda
        if ($(document).width() < 760) {
            path = url_base + "banner" + fondo_actual + "movil.jpg";
        } else {
            path = url_base + "IMG" + fondo_actual + "/I" + $celda.data('celda') + ".jpg";
        }


        $celda.css("background-image", "url(" + path + ")");

        console.log(path);


    }

    //Agregar el evento clic a cada celda

    $(".celda").click(function(e) {
        e.preventDefault();

        CambiarFondo($(this));

    });

    // ------------------------------
    // Ajusta el tamaño de las celdas
    // ------------------------------

    function fixWidth(ele, viewport) {
        var resu;

        if (viewport < 700) {

            resu = viewport / 352;
            resu = (630 * resu) / 3;

        } else if (viewport > 701 && viewport < 900) {
            resu = viewport / 900;
            resu = (535 * resu) / 3;
        } else {
            resu = viewport * 224;
            resu = resu / 1418;
        }

        $(".altura").css("min-height", resu + 'px');
        $(".altura2").css("min-height", resu + 'px');
        $(".altura3").css("min-height", resu + 'px');

    }

    $("#getid").click(function() {
        fixWidth("document", $(document).width());
    });

    fixWidth("document", $(document).width());

    // Ajusta las celdas en cada cambio de tamaño de la pantalla
    $(window).resize(function() {
        fixWidth("document", $(document).width());
    });


});