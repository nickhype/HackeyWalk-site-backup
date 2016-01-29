<?php
/*
 Template Name: Home page
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
            
          
            <section id="homepage-opening-content" class="animated fadeInUpBig">
	            <div class="overlay-content first-row">  
		         	<div class="col-xs-10 col-850-two-thirds col-sm-4 n1 n1">  
					 	<?php the_field('homepage_text_block_one'); ?>
		         	</div>
            	</div>
	            	
            	<div class="row third-row">      
            		<div class="col-480-full-width col-xs-two-thirds col-850-two-thirds col-sm-4 col-480-no-offset col-xs-offset-one-third col-sm-offset-2 col-850-offset-3 n1">  
	                    <div class="inner-col-right-padding">
		                    <?php the_field('homepage_text_block_two'); ?>
	                    </div>
	                </div>
	            </div>
            </section>
           
            <section id="content">
            	<div class="container-fluid">
	            	<nav role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement" >
						<ul id="menu-the-main-menu-1" class="tab-menu">  
					        <li id="home-tab-btn">HOME</li>  
					        <li id="about-tab-btn">ABOUT US</li>  
					        <li id="brands-tab-btn">THE BRANDS</li>  
					        <li id="location-tab-btn">LOCATION</li>  
					        <li id="vip-tab-btn">HW SELECT</li>  
					        <li id="celeb-tab-btn">ABOUT HACKNEY</li>  
					    </ul> 
						
						<?php /*
						wp_nav_menu(array(
						         'container_class' => 'menu cf',                 
						         'menu' => __( 'The Main Menu', 'bonestheme' ),  
						         'menu_class' => 'nav top-nav cf',               
						));
						*/ ?>
						
					</nav>
					
										    	
	            
					<!-- INTRO PAGE - TAB CONTAINER -->
					<div id="home-content">
						
						<!-- INTRO TAB -->
						<div id="homeTab" class="tab-content active">
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
				            
				        <?php // get_sidebar('footer-sidebar'); ?>			        
					    <?php include("sidebar-footer-sidebar.php"); ?>
					    <!--//- INTRO TAB -->
					    
					    
					    
					    
					    <!-- ABOUT TAB -->
					    <?php
					    $aboutus = new WP_Query( 'page_id=19' );
							
						while ($aboutus->have_posts()) : $aboutus->the_post(); 
						?>
							<div id="aboutTab" class="tab-content">
						        <div class="row overlay-content first-row">  
					            	<div class="col-xs-10 col-850-two-thirds col-sm-4 n1">  
					                	<div class="inner-col-right-padding">
					                		<?php the_field('content_area_1'); ?>
					                	</div>
					                </div>
					            </div>
					            
					            <div class="row second-row">
					                <div class="col-480-full-width col-xs-two-thirds col-850-two-thirds col-sm-4 col-480-no-offset col-xs-offset-one-third col-sm-offset-2 col-850-offset-3 n1">  
					                    <div class="inner-col-right-padding">
						                    <?php the_field('content_area_2'); ?>
					                    </div>
					                </div>
				                </div>
					            
					            <div class="row third-row">				                
					                <div class="col-480-full-width col-sm-one-third n">  
					                    <div class="about-us-three-col-inner-padding">
						                    <?php the_field('lower_content_area_1'); ?>
					                    </div>
					                </div>
									<div class="col-480-full-width col-sm-one-third n">  
					                    <div class="about-us-three-col-inner-padding">
						                    <?php the_field('lower_content_area_2'); ?>
						                </div>
					                </div>
					                <div class="col-480-full-width col-sm-one-third n">  
					                    <div class="about-us-three-col-inner-padding">
						                    <?php the_field('lower_content_area_3'); ?>
					                    </div>
					                </div>
					            </div>
					            <!-- <div class="p"></div> -->
					            
					            <?php include("sidebar-footer-sidebar.php"); ?>
						    <!-- </div> -->
						    
						<?php endwhile; ?>
						<!--//- ABOUT TAB -->
					    
					    
					    
					    
					    
					    <!-- BRANDS TAB -->
					    <?php
					    $brands = new WP_Query( 'page_id=11' );
							
						while ($brands->have_posts()) : $brands->the_post(); 
						?>
							<div id="brandsTab" class="tab-content">  
						    	<div class="row overlay-content first-row">  
					            	<div class="col-xs-10 col-850-two-thirds col-sm-4 n1">  
					                	<div class="inner-col-right-padding">
					                		<?php the_content(); ?>
					                	</div>
					                </div>
					            </div>
					            
					            <div class="row second-row">
					                <div class="col-480-half-width col-xs-one-third col-850-one-third col-sm-2 n">  
					                    <div class="inner-col-right-padding">
						                    <div class="brand-img brand-one" id="brand-link-one">
						                    	<img src="<?php echo get_template_directory_uri() ?>/library/images/brand-blank.png" alt="" />
						                    </div>					                    
					                    </div>
					                </div>
					                
					                <div class="col-480-half-width col-xs-one-third col-850-one-third col-sm-2 col-480-no-offset col-sm-offset-2 col-850-offset-3 n">  
					                    <div class="inner-col-right-padding">
						                    <div class="brand-img brand-two" id="brand-link-two">
						                    	<img src="<?php echo get_template_directory_uri() ?>/library/images/brand-blank.png" alt="" />
						                    </div>
						                </div>
					                </div>
					            </div>
					            
					            <div class="row third-row">				                
					                <div class="col-480-half-width col-xs-one-third col-850-one-third col-sm-2 col-480-no-offset col-sm-offset-2 col-850-offset-3 col-850-push-right n">  
					                    <div class="inner-col-right-padding">
						                	<div class="brand-img brand-three" id="brand-link-three">
						                    	<img src="<?php echo get_template_directory_uri() ?>/library/images/brand-blank.png" alt="" />
						                    </div>
						                </div>
					                </div>
					                <div class="col-480-half-width col-xs-one-third col-850-one-third col-sm-2 col-480-no-offset col-sm-offset-2 col-850-no-offset n">  
					                    <div class="inner-col-right-padding">
						                    <div class="brand-img brand-four" id="brand-link-four">
						                    	<img src="<?php echo get_template_directory_uri() ?>/library/images/brand-blank.png" alt="" />
						                    </div>
					                    </div>
					                </div>
					            </div>
					            
					            <div class="row fourth-row">
					            	<div class="col-480-half-width col-xs-one-third col-850-one-third col-sm-2 col-480-no-offset col-sm-offset-8 col-850-offset-3 n">  
					                    <div class="inner-col-right-padding">
						                    <div class="brand-img brand-five" id="brand-link-five">
						                    	<img src="<?php echo get_template_directory_uri() ?>/library/images/brand-blank.png" alt="" />
						                    </div>
					                    </div>
					                </div>
					            </div>
					            <!-- <div class="p"></div> -->
					            
					            
					            <style>
					            .brand-one {
									background-image: url('<?php the_field('brand_1_image'); ?>');
								}
								.brand-two {
									background-image: url('<?php the_field('brand_2_image'); ?>');
								}
								.brand-three {
									background-image: url('<?php the_field('brand_3_image'); ?>');
								}
								.brand-four {
									background-image: url('<?php the_field('brand_4_image'); ?>');
								}
								.brand-five {
									background-image: url('<?php the_field('brand_5_image'); ?>');
								}
								.brand-one:hover {
									background-image: url('<?php the_field('brand_1_image_o'); ?>');
								}
								.brand-two:hover {
									background-image: url('<?php the_field('brand_2_image_o'); ?>');
								}
								.brand-three:hover {
									background-image: url('<?php the_field('brand_3_image_o'); ?>');
								}
								.brand-four:hover {
									background-image: url('<?php the_field('brand_4_image_o'); ?>');
								}
								.brand-five:hover {
									background-image: url('<?php the_field('brand_5_image_o'); ?>');
								}
					            </style>  
					            
					            <?php include("sidebar-footer-sidebar.php"); ?>  
						   
						<?php endwhile; ?>
					    <!--//- BRANDS TAB -->
					    
					    
					    
					    <!-- BRANDS TAB - THREE -->
					    <?php
					    $brands_one = new WP_Query( 'page_id=97' );
							
						while ($brands_one->have_posts()) : $brands_one->the_post(); 
						?>
							<div id="brandThreeTab" class="tab-content indiv-brand-tab">  
						        <div class="row overlay-content first-row">  
					            	<div class="col-xs-10 col-850-two-thirds col-sm-4 n1">  
					                	<div class="inner-col-right-padding">
					                		<div class="indiv-brand-title"><?php the_title(); ?></div>
					                	</div>
					                </div>
					            </div>
					            
					            						        
						        <div class="row below-map">
					            	<div class="col-480-full-width col-xs-12 col-850-full-width col-sm-6 n indiv-brand-image">  
					            		<div class="inner-col-right-padding">
					            			<img src="<?php the_field('image'); ?>" />
					            		</div>
					            	</div>
					            	
					            	<!--
					            	<div class="col-480-full-width col-xs-two-thirds col-850-one-third col-sm-4 n">  
					                    <div class="inner-col-right-padding">
						                    <?php the_field('lower_content_left_column'); ?>
					                    </div>
					                </div>
					                -->
					                
					                <div class="col-480-full-width col-xs-two-thirds col-850-one-third col-sm-4 n">  
					                    <div class="inner-col-right-padding">
						                    <div class="indiv-brand-content"><?php the_content(); ?></div>
						                </div>
					                </div>
					            </div>
					            
					            <?php include("sidebar-footer-sidebar.php"); ?>
						   
						<?php endwhile; ?>
					    <!--//- BRANDS TAB - THREE -->
					    
					    
					    
					    
					    
					    <!-- LOCATION TAB -->
					    <?php
					    $location = new WP_Query( 'page_id=9' );
							
						while ($location->have_posts()) : $location->the_post(); 
						?>
							<div id="locationTab" class="tab-content">  
						        <div class="row overlay-content first-row location-content-replacement-padding">  
					            	<div class="col-xs-10 col-850-two-thirds col-sm-4 n1">  
					                	<div class="inner-col-right-padding">
					                		<?php // the_content(); ?>
					                	</div>
					                </div>
					            </div>
					            
					            						        
						        <div class="row below-map new-location">
					            	<div class="col-480-full-width col-xs-12 col-850-full-width col-sm-6 n location-map">  
					            		<img src="<?php echo get_template_directory_uri() ?>/library/images/NewHackneyMap.svg" alt="Hackey Walk map" onerror="this.onerror=null; this.src='library/images/NewHackneyMap.png'" />
					            	</div>
					            	
					            	<div class="col-480-full-width col-xs-12 col-850-two-thirds col-sm-4 n">  
					                    <div class="inner-col-right-padding">
						                    <?php the_field('lower_content_left_column'); ?>
					                    </div>
					                </div>
					                
					                <!--
					                <div class="col-480-full-width col-xs-two-thirds col-850-one-third col-sm-4 n">  
					                    <div class="inner-col-right-padding">
						                    <?php the_field('lower_content_right_column'); ?>
						                </div>
					                </div>
					                -->
					            </div>
					            
					            <?php include("sidebar-footer-sidebar.php"); ?>
						    
						<?php endwhile; ?>
					    <!--//- LOCATION TAB -->



						<!-- VIP TAB -->
					    <?php
					    $vip = new WP_Query( 'page_id=13' );
							
						while ($vip->have_posts()) : $vip->the_post(); 
						?>
							<div id="vipTab" class="tab-content">  
						        <div class="row overlay-content first-row">  
					            	<div class="col-xs-10 col-850-two-thirds col-sm-4 n1">  
					                	<div class="inner-col-right-padding">
					                		<?php the_content(); ?>
					                	</div>
					                </div>
					            </div>
					            
					            <div class="contact-form">
					            	<?php // echo do_shortcode( '[contact-form-7 id="22" title="Contact form 1"]' ) ?>
					            	
				            	 	<!-- Begin MailChimp Signup Form -->
									<div id="mc_embed_signup-2">
									<form action="//hackneywalk.us10.list-manage.com/subscribe/post?u=855213ea7e785b3b176c36d2a&amp;id=42933ba137" method="post" id="mc-embedded-subscribe-form-2" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
									    <div id="mc_embed_signup_scroll-2">
										
									
									<div class="form-group-row">
										<span class="mc-field-group">
											<label for="mce-FNAME" id="first-name">First Name: </label>
											<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
										</span>
										<span class="mc-field-group">
											<label for="mce-LNAME" id="last-name">Last Name: </label>
											<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
										</span>
									</div>
									<div class="second-form-row">
										<div class="mc-field-group">
											<label id="email-addr">Email Address: </label>
											<input type="email" value="" name="EMAIL" class="required email email-addr-input" id="mce-EMAIL-2">
										</div>
								    </div>
										<div id="mce-responses-2" class="clear">
											<div class="response" id="mce-error-response-2" style="display:none"></div>
											<div class="response" id="mce-success-response-2" style="display:none"></div>
										</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
									    <div style="position: absolute; left: -5000px;"><input type="text" name="b_855213ea7e785b3b176c36d2a_42933ba137" tabindex="-1" value=""></div>
									    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe-2" class="button"></div>
									    </div>
									</form>
									</div>
									<!--End mc_embed_signup-->
						            
					            </div>
					            
					            <?php include("sidebar-footer-sidebar.php"); ?>
						    </div>
						<?php endwhile; ?>
					    <!--//- VIP TAB -->
					    
					    
					    
					    
					    <!-- CELEB TAB -->
					    <?php
					    $celeb = new WP_Query( 'page_id=67' );
							
						while ($celeb->have_posts()) : $celeb->the_post(); 
						?>
							<div id="celebTab" class="tab-content">  
						        <div class="row overlay-content first-row">  
					            	<div class="col-xs-10 col-850-two-thirds col-sm-4 n1">  
					                	<div class="inner-col-right-padding">
					                		<?php the_content(); ?>
					                	</div>
					                </div>
					            </div>
					            
					           
					            <div class="row second-row">
					                <div class="col-480-full-width col-xs-two-thirds col-850-one-third col-sm-2 n1">  
					                    <div class="inner-col-right-padding">
						                    <img src="<?php the_field('row_2_image'); ?>" alt="" />
					                    </div>
					                </div>
				                </div>
				                
				                <div class="row third-row">
					                <div class="col-480-full-width col-xs-two-thirds col-850-one-third col-sm-2 col-480-no-offset col-xs-offset-one-third col-sm-offset-2 col-850-offset-3 n1">  
					                    <div class="inner-col-right-padding">
						                    <img src="<?php the_field('row_3_image'); ?>" alt="" />
					                    </div>
					                </div>
					                <div class="col-xs-10 col-850-two-thirds col-sm-4 col-480-no-offset col-850-no-offset n1 celeb-row-3-text">  
					                	<div class="inner-col-right-padding no-top-p">
					                		<?php the_field('row_3_text'); ?>
					                	</div>
					                </div>
				                </div>
				                
				                
				                <div class="row fourth-row">
					                <div class="col-xs-10 col-850-two-thirds col-sm-4 n1">  
					                	<div class="inner-col-right-padding no-top-p">
					                		<?php the_field('row_4_text'); ?>
					                	</div>
					                </div>
					                
					                <div class="col-480-full-width col-xs-two-thirds col-850-two-thirds col-sm-4 col-480-no-offset col-850-no-offset n1">  
					                    <div class="inner-col-right-padding">
						                    <img src="<?php the_field('row_4_image'); ?>" alt="" />
					                    </div>
					                </div>
				                </div>
				                
				                
				                <div class="row fifth-row">
					                <div class="col-480-full-width col-xs-two-thirds col-850-one-third col-sm-2 col-480-no-offset col-xs-offset-one-third col-sm-offset-2 col-850-offset-3 n1">  
					                    <div class="inner-col-right-padding">
						                    <img src="<?php the_field('row_5_image'); ?>" alt="" />
					                    </div>
					                </div>
				                </div>
				                
				                
				                <div class="row sixth-row">
					                <div class="col-480-full-width col-xs-two-thirds col-850-one-third col-sm-2 n1">  
					                    <div class="inner-col-right-padding">
						                    <img src="<?php the_field('row_6_image'); ?>" alt="" />
					                    </div>
					                </div>
					                
					                <div class="col-480-full-width col-xs-two-thirds col-850-one-third col-sm-2 col-480-no-offset col-xs-offset-one-third col-sm-offset-2 col-850-offset-3 n1">
					                    <div class="inner-col-right-padding">
						                    <img src="<?php the_field('row_7_image'); ?>" alt="" />
					                    </div>
					                </div>
				                </div>
					            
					            <?php include("sidebar-footer-sidebar.php"); ?>
						    </div>
						<?php endwhile; ?>
					    <!--//- CELEB TAB -->
					</div>
					    
					    
					    
					    
			            
						
					
					
						
						
						
					
					
					
					
					<!--//- INTRO PAGE - TAB CONTAINER -->
					
				
            </section>
        </section>
        </section>
        <div class="toggle">
            <!-- <i></i> -->
            <i class="fa fa-bars"></i>
        </div>
        
        
        				
	<?php endwhile; else : ?>
	<?php endif; ?>

	

<?php get_footer(); ?>
