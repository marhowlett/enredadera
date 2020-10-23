<?php
    /* Template Name: Acerca */ 
    get_header();
?>
 <!--
  <div class="men">
<ul>
 <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">Acerca de<br>
La Enredadera</a></li>
  <li><a href="#contact">Proyectos</a></li>
  <li><a href="#about">Entre miradas</a></li>
   <li><a href="#about">Blog</a></li>
   <li><a href="#about">Contacto</a></li>
   <li><a href="#about"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/youtube.png" alt="youtube"></a></li>
 
<li><a href="#about"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/facebook.png" alt="fb"></a></li>
<li><a href="#about"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/twitter.png" alt="tw"></a></li>
<li><a href="#about"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/soundcloud_logo.png" alt="sound"></a></li>
</ul>
</div>
  -->
   <section id="acerca" class="template-section contenedor">
   
       <div class="grid grid2">
       
       <div class="col col5 primero">
          <div id="imagen" class="logo2">
   <div id="info">
    
     <p id="descripcion">
     <?php echo get_custom('laenredadera_texto_1'); ?>
     </p>
   </div>
 </div>
        
       </div>
       
       
        
       
       
       <div class="col col5">
          <div id="imagen" class="logo2">
   <div id="info">
    
     <p id="descripcion">
     <?php echo get_custom('laenredadera_texto_2'); ?>
     </p>
   </div>
 </div>
        
       </div>
       
       
       
        </div>
      <div class="grid grid2 dos">
      
      <div class="col">
          <div id="imagen" class="logo3">
   <div id="info">
    
     <p id="descripcion">
     <?php echo get_custom('laenredadera_texto_3'); ?>
     </p>
   </div>
 </div>
        
       </div>
       
       
        <div class="col">
          <div id="imagen" class="logo4">
   <div id="info">
    
     <p id="descripcion">
     <?php echo get_custom('laenredadera_texto_4'); ?>     
     </p>
   </div>
 </div>
        
       </div>
      
       
       </div>
       

       
        
       
</section>

<?php 
    get_footer();
?>