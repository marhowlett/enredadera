<?php
    /* Template Name: Quienes_Somos*/ 
    get_header();
?>

  

    <section id="quienes_somos" class="template-section">
      
        <div class="grid invertido">
            <div class="col col_quienes">
                <h1>¿Quiénes<br>Somos?</h1>
                <p class="primera">
                    Laboratorios PROSERVET se fundó en el 2002,con la misión de ofrecer productos farmacéuticos para uso animal en aves y cerdos.</p>

                <p>Desde que inicia operaciones PROSERVET se ha empeñado en crear socios comerciales, y acompañarlos durante todo el proceso venta y post venta.
                </p>
            </div>
            <div class="col fondo">
                
            </div>
       
         </div>

    </section>
         <section id="calidad" class="template-section">

        <div class="contenedor">
            <div class="grid">
                <div class="col">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/calidad_confianza.png" alt="Acerca">
                </div>
                <div class="col">
                    <p >
                       Nuestros productos ofrecen <span>calidad y confianza</span> a los productores agropecuarios, para el tranquilo desarrollo de sus animales.
                       
                    </p>
                  
                    
                </div>
            </div>
        </div>

    </section>
        <section id="mision" class="template-section">

        <div class="contenedor">
            <div class="grid">
                <div class="col">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/mision.png" alt="Acerca">
                </div>
                <div class="col">
                   <h2>Misión</h2>
                    <p >
                     <span>PROSERVET</span>  es una empresa privada de capital 100% mexicano encargada de proveer salud animal con la mayor <span>tecnología y calidad</span>, brindando soluciones efectivas a un precio justo.
                    </p>
                  
                    
                </div>
            </div>
        </div>

    </section>
        <section id="vision" class="template-section">

        <div class="contenedor">
            <div class="grid invertido">
                <div class="col colvision">
                   <h2>Visión</h2>
                    <p >
                     Ser una empresa líder en salud animal en el país, reconocida por trabajar con la mayor calidad y ética en el mercado.
                    </p>
                  
                    
                </div>
                 <div class="col">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/vision.png" alt="Acerca">
                </div>
            </div>
        </div>

    </section>


  <?php include 'contacto.php'; ?>

<?php 
    get_footer();
?>
