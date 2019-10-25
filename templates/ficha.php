<?php
    /* Template Name: Ficha */ 
    get_header();
?>
   

   <section id="slider_catalogo" class="template-section">
    <h1>Nuestros Productos</h1>
   <div class="buscar2"><?php echo do_shortcode( '[smart_search id="2"]' ); ?></div>
</section>

  <section id="ficha" class="template-section">

        <div class="contenedor">
            <div class="grid">
                <div class="col">
                    <img class="prin" src="<?php echo get_stylesheet_directory_uri(); ?>/img/ficha_1.png" alt="Acerca">
                </div>
                <div class="col">
                   <h2>TILMICOSIL-25</h2>
                    <p >
                  Nombre de la materia prima <br>
                        Registro <strong>SAGARPA</strong>
                       
                    </p>
                     <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/iconos.png" alt="Iconos">
                  
                    
                </div>
                </div>
                <div class="formula">
                <h2>FORMULACIÓN</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <hr>
                <h2>INDICACIONES</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
               <hr>
                <h2>DOSIS Y ADMINISTRACIÓN</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
               <hr>
                <h2>PRESENTACIÓN COMERCIAL</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <hr>
                <h2>ADVERTENCIA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="#" class="btn">Descarga la ficha técnica</a>
                </div>
                 
        </div>

    </section>
    <?php include 'contacto.php'; ?>