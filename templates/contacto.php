<?php
    /* Template Name: Contacto */ 
    get_header();
    $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
?>

<section id="contacto" class="template-section contenedor">
    <div class="grid">
        <div class="col3" style="background-image: url('<?php echo $featured_img_url; ?>');">
            &nbsp;&nbsp;
        </div>
        <div class="col4">
            <div class="men2">
                <ul>
                    <!--<li><a href="<?php echo get_custom('facebook'); ?>"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/facebook.png" alt="fb"></a></li>-->

                    <li><a href="<?php echo get_custom('instagram'); ?>"> <img
                                src="<?php echo get_stylesheet_directory_uri(); ?>/img/IG.png" alt="instagram"></a></li>
                    <li><a href="<?php echo get_custom('soundcloud'); ?>"> <img
                                src="<?php echo get_stylesheet_directory_uri(); ?>/img/soundcloud_logo.png"
                                alt="sound"></a></li>
                    <li><a href="<?php echo get_custom('twitter'); ?>"> <img
                                src="<?php echo get_stylesheet_directory_uri(); ?>/img/twitter.png" alt="tw"></a></li>
                    <li><a href="<?php echo get_custom('youtube'); ?>"> <img
                                src="<?php echo get_stylesheet_directory_uri(); ?>/img/youtube.png" alt="youtube"></a>
                    </li>
                </ul>
            </div>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a class="cursiva" href="/acerca">laenredadera</a></li>
                <li><a href="/proyectos">Proyectos</a></li>
                <li><a href="/entre">Entre miradas</a></li>
                <li><a href="/blog2">Blog</a></li>
                <li><a href="/contacto" class="primero">Contacto</a></li>
            </ul>
            <p>Escríbenos:<br>
                <span><a href="mailto:<?php echo get_custom('correo'); ?>"
                        title="enviar mensaje"><?php echo get_custom('correo'); ?></a></span></p>
        </div>
    </div>
</section>


<?php 
    get_footer();
?>