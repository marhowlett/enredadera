<?php
    /* Template Name: Contacto */ 
    get_header();
    $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
?>

<section id="contacto" class="template-section contenedor">
    <div class="main-grid">

        <div class="principal" style="background-image: url('<?php echo $featured_img_url; ?>');">
            &nbsp;&nbsp;
        </div>

        <div class="menu">
            <div class="box">
                <nav class="iconos">
                    <a href="<?php echo get_custom('instagram'); ?>"> 
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/IG.png" alt="instagram">
                    </a>
                    
                    <a href="<?php echo get_custom('soundcloud'); ?>"> 
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/soundcloud_logo.png" alt="sound">
                    </a>

                    <a href="<?php echo get_custom('twitter'); ?>"> 
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/twitter.png" alt="tw">
                    </a>

                    <a href="<?php echo get_custom('youtube'); ?>"> 
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/youtube.png" alt="youtube">
                    </a>                        
                </nav>
           
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a class="cursiva" href="/acerca">laenredadera</a></li>
                    <li><a href="/proyectos">Proyectos</a></li>
                    <li><a href="/entre">Entre miradas</a></li>
                    <li><a href="/blog2">Blog</a></li>
                    <li><a href="/contacto" class="primero">Contacto</a></li>
                </ul>

                <p>Escríbenos:<br>
                    <span>
                        <a href="mailto:<?php echo get_custom('correo'); ?>"
                            title="enviar mensaje"><?php echo get_custom('correo'); ?>
                        </a>
                    </span>
                </p>

            </div><!--box!-->                
        </div><!--menu!-->

    </div><!--main-grid!-->
</section>

<?php 
    get_footer();
?>