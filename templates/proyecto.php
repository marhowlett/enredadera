<?php
    /* Template Name: Proyecto */ 
    get_header();
?>
 <section id="proyectos" class="template-section contenedor">
<!--
 <div class="grid grid2">
       
       <div class="col2 hvr-wobble-to-bottom-right fot1">
           <a href="https://laenredadera.art/proyecto-columpios-2"> <img  src="<?php echo get_stylesheet_directory_uri(); ?>/img/DSC_0036.png" alt="Columpios"></a>
       </div>
       <div class="col2">
           &nbsp;&nbsp;
       </div>
       <div class="col2 hvr-wobble-to-bottom-right fot2">
          <a href="https://laenredadera.art/proyecto-polvadera-2/"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/DSC_0035.png" alt="Polvadera"></a>
       </div>
       
</div>

 <div class="grid grid2">
       
       <div class="col2">
           &nbsp;&nbsp;
       </div>
       <div class="col2 hvr-wobble-to-bottom-right fot3">
            <a href="#about"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Rectángulo 16.png" alt="fb"></a>
       </div>
       <div class="col2">
           &nbsp;&nbsp;
       </div>
       
</div>
 <div class="grid grid2">
       
       <div class="col2 hvr-wobble-to-bottom-right fot4">
          <a href="https://laenredadera.art/proyecto-bajamar-2/"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/BotónProyBajamar.jpg" alt="Baja Mar"></a>
       </div>
       <div class="col2">
           &nbsp;&nbsp;
       </div>
       <div class="col2 hvr-wobble-to-bottom-right fot5">
          <a href="https://laenredadera.art/proyecto-otono-de-cempasuchil/"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/IMG_3243.png" alt="Otoño de Cempasuchil"></a>
       </div>
       
</div>
 
-->
<?php echo do_shortcode( '[rev_slider alias="slider-1"]' ); ?>

</section>
<?php 
    get_footer();
?>