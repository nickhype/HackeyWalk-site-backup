<?php
/*
 Template Name: Home page old
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
            
            
            
            <!--
            <section id="homepage-opening-content">
	            <div class="container-fluid">
	            	<div class="row overlay-content first-row">  
			         	<div class="col-xs-10 col-850-two-thirds col-sm-4 n1">  
						 	Hackney Walk is a hidden gem for discerning fashion shoppers, located in one of London's most vibrant and bohemian neighbourhoods.
			         	</div>
	            	</div>
	            	
	            	<div class="row third-row">
			                
		                <div class="col-480-full-width col-xs-two-thirds col-850-two-thirds col-sm-4 col-480-no-offset col-xs-offset-one-third col-sm-offset-2 col-850-offset-3 n1">  
		                    <div class="inner-col-right-padding">
			                    <p>Chapter One of Hackney Walk can be enjoyed right now, with five leading fashion brands offering the outlet shopping experience: <strong>Aquascutum, Anya Hindmarch, Bally, Joseph</strong> and <strong>Pringle</strong>.</p>
			                    
			                    <p>Chapter Two will follow later in 2015, where 14 more leading brands will join this exciting development.</p>
			                    <p>Become a <a href="">Hackney Walk VIP</a> to get exclusive news and offers.</p>
		                    </div>
		                </div>
		            </div>

	            </div>    	
            </section>
            -->
            
            <section id="homepage-opening-content">
	            <div class="overlay-content first-row">  
		         	<div class="p shim n1">  
					 	Hackney Walk is a hidden gem for discerning fashion shoppers, located in one of London's most vibrant and bohemian neighbourhoods.
		         	</div>
            	</div>
	            	
            	<div class="row third-row">      
            		<div class="p"></div>
	                <div class="p shim n1">  
	                    <div class="inner-col-right-padding">
		                    <p>Chapter One of Hackney Walk can be enjoyed right now, with five leading fashion brands offering the outlet shopping experience: <strong>Aquascutum, Anya Hindmarch, Bally, Joseph</strong> and <strong>Pringle</strong>.</p>
		                    
		                    <p>Chapter Two will follow later in 2015, where 14 more leading brands will join this exciting development.</p>
		                    <p>Become a <a href="">Hackney Walk VIP</a> to get exclusive news and offers.</p>
	                    </div>
	                </div>
	            </div>
            </section>
            
            
            <section id="content">
            	<div class="container-fluid">
	            	<nav role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
						<?php wp_nav_menu(array(
						         'container_class' => 'menu cf',                 // class of container (should you choose to use it)
						         'menu' => __( 'The Main Menu', 'bonestheme' ),  // nav name
						         'menu_class' => 'nav top-nav cf',               // adding custom nav class
						)); ?>
	
					</nav>
	
	            
					<div id="home-content">
			            <div class="row overlay-content first-row">  
			            	<div class="col-xs-10 col-850-two-thirds col-sm-4 n1">  
			                	<div class="inner-col-right-padding">
			                		<?php the_field('intro_block_one'); ?>
			                	</div>
			                </div>
			            </div>
			            
			            <div class="row second-row">
			                <div class="col-xs-10 col-850-two-thirds col-sm-4 n">  
			                    <div class="inner-col-right-padding">
				                    <?php the_field('intro_block_two'); ?>
			                    </div>
			                </div>
		                </div>
			            
			            <div class="row third-row">
			                
			                <div class="col-480-full-width col-xs-two-thirds col-850-two-thirds col-sm-4 col-480-no-offset col-xs-offset-one-third col-sm-offset-2 col-850-offset-3 n">  
			                    <div class="inner-col-right-padding">
				                    <?php the_field('intro_block_three'); ?>
			                    </div>
			                </div>
			            </div>
			            
			            <div class="row fourth-row footer-row">			                
			                <div class="col-xs-one-third col-850-one-third col-sm-2 n foot">
			                    <div class="inner-col-right-padding">
				                    <h3>Where to find us</h3>
				                    The Arches<br/>
				                    Morning Lane<br/>
				                    London E9 6ND<br/>
				                    <a href="https://www.google.co.uk/maps/place/194+Morning+Ln/@51.5472895,-0.0504059,18z/data=!3m1!4b1!4m2!3m1!1s0x48761cfcda404c39:0xcf0c76c596b54369" target="_blank">Launch Map</a>
			                    </div>
			                </div>
			
			                <div class="col-xs-one-third col-850-one-third col-sm-2 n foot">
			                    <div class="inner-col-right-padding">
				                    <h3>Work with us</h3>
				                    Please get in touch if <br/>you'd like to work with <br/>Hackney Walk.<br/>
				                    <a href="mailto:&#100;&#101;&#098;&#121;&#064;&#109;&#097;&#110;&#104;&#097;&#116;&#116;&#097;&#110;&#108;&#111;&#102;&#116;&#046;&#099;&#111;&#046;&#117;&#107;">Contact us</a>
			                    </div>
			                </div>
			
			                <div class="col-xs-one-third col-850-one-third col-sm-2 n foot">
			                    <div class="inner-col-right-padding">
				                    <h3>Keep in touch</h3>
				                    <a href="https://www.facebook.com/hackney.walk" target="_blank"><i class='fb'></i></a><a href="https://twitter.com/hackneywalk" target="_blank"><i class='tw'></i></a><a href="mailto:&#100;&#101;&#098;&#121;&#064;&#109;&#097;&#110;&#104;&#097;&#116;&#116;&#097;&#110;&#108;&#111;&#102;&#116;&#046;&#099;&#111;&#046;&#117;&#107;"><i class='em'></i></a>
			                    </div>
			                </div>
			                
			                <div class="col-xs-two-thirds col-850-two-thirds col-sm-2 n foot">
			                	<div class="half-at-850 next-row-at-850">
				                    <div class="inner-col-right-padding">
					                    <h3>Newsletter</h3>
					                    Join the Hackney <br/>Walk Community.<br/>
					                    <input type="text" class="email" placeholder="Email address">
					                    <div class="submit">Submit</div>
				                    </div>
			                	</div>
			                </div>
			                
			                <div class="col-xs-one-third col-850-one-third col-sm-2 n foot">
			                    <div class="inner-col-right-padding next-row-at-850">
				                    <div class="inner footer-advert-image">
				                        <img src="<?php echo get_template_directory_uri() ?>/library/images/barbican.gif"></div>
				                    </div>
								</div>
			                </div>
			                <div class="p"></div>
						</div>
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
