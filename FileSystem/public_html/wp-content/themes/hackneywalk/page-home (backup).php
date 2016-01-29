<?php
/*
 Template Name: Home page backup
 *
*/
?>

<?php get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		
        <section id="scroller">
        <section id="page">
            <section id="images">
                
            </section>
            <div class="box box-text">
                <div class="inner">
                    <div class="date">-</div>
                    <div class="username">-</div>
                    <div class="message">-</div>
                </div>
            </div>
            <section id="cover">
            </section>
            <section id="header">
                <div class="logo"></div>
            </section>
            
            <section id="content">
            	<nav role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
					<?php wp_nav_menu(array(
					         'container_class' => 'menu cf',                 // class of container (should you choose to use it)
					         'menu' => __( 'The Main Menu', 'bonestheme' ),  // nav name
					         'menu_class' => 'nav top-nav cf',               // adding custom nav class
					)); ?>

				</nav>

            
                <!--
                <div class="p p1">
                	This is a high-fashion outlet hub – where Hackney’s disused arches find new purpose as a destination for iconic labels, food and events. It’s new for London and it changes retail.<br/><br/>
                #HackneyWalk
                </div>
                -->
                <div class="p p1">
                	<?php the_content(); ?>
                </div>
                
                <div class="p shim"></div>
                <div class="p"></div>
                
                <div class="p p2">
                    "Working with local designers, authorities and the community, Hackney Walk will provide an exceptional shopping district in the City’s creative hub; it will deliver a shopping experience to be enjoyed and celebrated."<br/><br/>
                    <span class="small">
                        <b>Harry Handelsman</b><br/>
                        Founder, Hackney Walk
                    </span>
                </div>
                
                <div class="p shim"></div>
                
                <div class="p shim"></div>
                <div class="p shim"></div>
                <div class="p shim extra"></div>
                <div class="p">
                    "Hackney Walk has been conceived to express the subtleties of Hackney's unique urban DNA, resonating with the area's historic associations with the fashion industry. The historic arches are carefully preserved and celebrated – so there is a dialogue between old and new that ties the essence of Hackney to an exciting future trajectory as London's fashion hub."<br/><br/>
                    <span class="small">
                    <b>David Adjaye</b><br/>
                    Architect, Hackney Walk
                     </span>
                </div>
                <div class="p shim extra"></div>
                <div class="p shim"></div>
                
                <div class="p foot">
                    <h3>Where to find us</h3>
                    The Arches<br/>
                    Morning Lane<br/>
                    London E9 6ND<br/>
                    <a href="https://www.google.co.uk/maps/place/194+Morning+Ln/@51.5472895,-0.0504059,18z/data=!3m1!4b1!4m2!3m1!1s0x48761cfcda404c39:0xcf0c76c596b54369" target="_blank">Launch Map</a>
                </div>

                <div class="p foot">
                    <h3>Work with us</h3>
                    Please get in touch if <br/>you'd like to work with <br/>Hackney Walk.<br/>
                    <a href="mailto:&#100;&#101;&#098;&#121;&#064;&#109;&#097;&#110;&#104;&#097;&#116;&#116;&#097;&#110;&#108;&#111;&#102;&#116;&#046;&#099;&#111;&#046;&#117;&#107;">Contact us</a>
                </div>

                <div class="p foot">
                    <h3>Keep in touch</h3>
                    <a href="https://www.facebook.com/hackney.walk" target="_blank"><i class='fb'></i></a><a href="https://twitter.com/hackneywalk" target="_blank"><i class='tw'></i></a><a href="mailto:&#100;&#101;&#098;&#121;&#064;&#109;&#097;&#110;&#104;&#097;&#116;&#116;&#097;&#110;&#108;&#111;&#102;&#116;&#046;&#099;&#111;&#046;&#117;&#107;"><i class='em'></i></a>
                </div>
                <div class="p foot">
                    <h3>Newsletter</h3>
                    Join the Hackney <br/>Walk Community.<br/>
                    <input type="text" class="email" placeholder="Email address">
                    <div class="submit">Submit</div>
                </div>
                <div class="p foot">
                    <div class="inner footer-advert-image">
                        <img src="<?php echo get_template_directory_uri() ?>/library/images/barbican.gif"></div>
                    </div>
                </div>
            </section>
        </section>
        </section>
        <div class="toggle">
            <i></i>
        </div>

        				
	<?php endwhile; else : ?>
	<?php endif; ?>

	

<?php get_footer(); ?>
