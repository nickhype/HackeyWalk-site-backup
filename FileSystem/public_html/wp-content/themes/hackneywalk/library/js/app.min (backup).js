/*! DO NOT EDIT THIS FILE */
/*! File Minified by grunt @ 2014-06-06 15:25 */
/*!
 * DO NOT EDIT THIS FILE
 * File concatatenated by grunt @ 2014-06-06 15:25
 * HackneyWalk
 * 
 * 
 * @author Nic Mulvaney
 * @version 0.0.1
 * Copyright 2014. MIT licensed.
 */


var App=App||{},scripts=[{nprogress:"library/js/vendor/nprogress.js"},{moment:"library/js/vendor/moment.min.js"},{raphael:"library/js/vendor/raphael-min.js"},{placeholders:"library/js/vendor/placeholders.min.js"},{jquery:"library/js/vendor/jquery-2.1.1.min.js"},{transparency:"library/js/vendor/transparency.min.js"},{gray:"library/js/vendor/jquery.gray.min.js"}],mobile,event_down,event_move,event_release,mobile,transition="transitionend webkitTransitionEnd",animation="animationend webkitAnimationEnd";App.view=function(){var body,images,scroller,imageData,imageCount,imageTotal,boxText,header,pageGrid,ad,content,init=function(){console.log(scripts.length+" scripts loaded"),body=$("body"),boxText=$(".box-text"),header=$("#header"),page=$("#page"),scroller=$("#scroller"),content=$("#content"),ad=$("#content .p.advert"),body.toggleClass("mobile",mobile?!0:!1),-1!==navigator.userAgent.indexOf("Safari")&&-1!==navigator.userAgent.indexOf("Mac")&&-1===navigator.userAgent.indexOf("Chrome")&&body.addClass("safari-mac"),setTimeout(function(){getWindowSize(),App.logo.init(),positionAd()},200),loadImages(),actions(),setTimeout(function(){App.logo.animate()},2e3)},validateEmail=function(email){var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email)},sizes=function(){return pageGrid},getWindowSize=function(){var o={w:$(window).width(),h:scroller.height(),name:"large",columns:5,box:$("#content .p:first")[0].offsetHeight};o.rows=Math.ceil(o.h/o.box),o.w<=850&&(o.name="tablet",o.columns=3),o.w<=480&&(o.name="mobile",o.columns=1),o.inner=o.rows*o.box,o.paginate=o.columns*o.rows,pageGrid=o},positionAd=function(){ad.css({top:(pageGrid.box-1)*("tablet"===pageGrid.name?4:3),left:pageGrid.box*(pageGrid.columns-1),height:"auto",position:"absolute"}),"tablet"===pageGrid.name?(content.css({top:2*pageGrid.box}),App.logo.leftLogo()):"mobile"===pageGrid.name?(content.css({top:250}),ad.css({top:"0px",left:"0px",position:"relative",height:320}),App.logo.leftLogo()):(content.css({top:0}),App.logo.rightLogo()),App.logo.done()&&App.logo.animate(void 0,0,0),page.css({"min-height":5*pageGrid.box})},checkResized=function(){images&&images.length<pageGrid.paginate&&($("#images").empty(),images=null,setImages())},loadImages=function(){NProgress.configure({showSpinner:!1}),imageCount=0,App.api.get("images",null,setImages)},setImages=function(data,offset){getWindowSize(),offset=images?images.length:0,pageSize=pageGrid.paginate,data=data?data.result:imageData,imageData=data;for(var html="",t=offset;offset+pageSize>t;t++)t<data.length&&(html+='<div class="box"></div>');$("#images").append(html),images=$("#images .box"),imageTotal=images.length;for(var i=offset;offset+pageSize>i;i++)if(i<data.length){var d=data[i];preloadImage(d.image,images.eq(i))}},preloadImage=function(url,el){if(!url)return!1;var img=new Image;img.onload=function(){imageCount++,NProgress.set(imageCount/imageTotal);var div=$("<div/>");div.addClass("grayscale inner"),div.html(img),el.html(div),imageCount===imageTotal&&body.removeClass("loading")},img.src=url},showBox=function(e){var that=$(this);if(that.hasClass("selected"))return images.removeClass("selected"),header.removeClass("hide"),void boxText.removeClass("show");if(!cancelTap){var id=$("#images .box").index(that),pos=that.position(),h=that[0].offsetHeight,pageH=$("#page").height();images.removeClass("selected"),that.addClass("selected");var pos2={};pos2.top=pos.top+h,pos2.left=pos.left,Math.ceil(pos2.top)>=pageH&&(pos2.top=pos.top,pos2.left=pos.left+h),header.toggleClass("hide",Math.ceil(pos.left)>=header.position().left&&0===pos.top?!0:!1);var directives={date:{html:function(){return moment(this.date,"D-M-YYYY H-m-s").fromNow()}},username:{html:function(){return'<a href="'+this.link+'" target="_blank">'+this.username+"</a>"}}};boxText.render(imageData[id],directives),boxText.css(pos2).addClass("show"),e.preventDefault()}},clearHoverStates=function(){$("#images .box").removeClass("selected"),header.removeClass("hide"),boxText.removeClass("show")},prevent=function(e){e.preventDefault(),e.stopPropagation()},closeDetails=function(e){cancelTap||(clearHoverStates(),body.removeClass("showcontent"),prevent(e))},actions=function(){$(".toggle").on(event_release,function(e){clearHoverStates(),body.toggleClass("showcontent"),body.hasClass("showcontent")&&scroller.animate({scrollTop:0},500,"swing"),prevent(e)}).on(event_release,prevent),$("#images").on(event_release,".box:not(.box-text)",showBox).on(event_down,function(){cancelTap=!1}),scroller.on("scroll",function(){cancelTap=!0;var top=$(this).scrollTop(),h=$("#page")[0].offsetHeight;h-top<pageGrid.h+10&&setImages()}),$("#cover, .shim").on(event_release,closeDetails),$("body").on(event_down,function(){cancelTap=!1}),$(".advert").on(event_release,function(){cancelTap||window.open("http://www.barbican.org.uk/artgallery/event-detail.asp?ID=16304","_blank")}),$(".submit").on(event_release,function(){var email=$(".email").val();email&&!cancelTap&&(validateEmail(email)||alert("Please enter a valid email."))}),$(window).resize(function(){clearHoverStates(),getWindowSize(),positionAd(),checkResized()})};return{init:init,sizes:sizes}}(),App.logo=function(){var interval,size,animtype,logo,hasAnimated,animating,init=function(){logo=$("#header .logo")[0],logo.innerHTML="",size=App.view.sizes(),$("#header .logo").show(),animtype=2},leftLogo=function(){if(!animating){size=App.view.sizes(),logo.innerHTML="";var rsr=Raphael(logo,size.w<480?355:355,size.w<480?71:71);group_a=rsr.set();var path_c=rsr.path("M0,0.817h9.045v13.849h12.827V0.817h9.045v36.538h-9.045V22.127H9.045v15.229H0V0.817z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_c"),path_d=rsr.path("M53.653,0.817h7.665l12.878,36.538h-7.717l-2.453-7.768H50.843l-2.402,7.768h-7.512L53.653,0.817z    M52.58,23.915h9.658l-3.271-10.526c-0.613-1.942-1.482-5.621-1.482-5.621h-0.102c0,0-0.92,3.679-1.533,5.621L52.58,23.915z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_d"),path_e=rsr.path("M83.034,19.061C83.034,8.329,89.473,0,100.357,0c8.534,0,13.695,4.905,14.667,11.65h-4.497   c-0.869-4.548-4.497-7.665-10.271-7.665c-8.023,0-12.521,6.49-12.521,15.075c0,8.943,4.957,14.973,12.571,14.973   c6.898,0,10.169-4.701,10.629-10.066h4.548c-0.051,3.628-1.788,7.716-4.395,10.271c-2.555,2.504-6.285,3.832-10.936,3.832   C89.779,38.07,83.034,30.149,83.034,19.061z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_e"),path_f=rsr.path("M128.563,0.817h3.424v19.47l19.726-19.47h4.445l-15.279,14.87l16.199,21.668h-4.088l-14.462-19.316   l-6.541,6.438v12.878h-3.424V0.817z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_f"),path_g=rsr.path("M167.857,0.817h2.964l16.966,25.806c2.197,3.322,4.242,6.899,4.242,6.899h0.102V0.817h2.556v36.538   h-2.811l-16.762-25.244c-2.044-3.066-4.6-7.309-4.6-7.309h-0.102v32.553h-2.556V0.817z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_g"),path_h=rsr.path("M209.759,17.732h20.645v1.43h-20.645v16.711h22.944v1.482h-24.529V0.817h24.019v1.431h-22.434   V17.732z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_h"),path_i=rsr.path("M256.053,20.134l13.286-19.316h0.869l-13.747,19.98v16.558h-0.766V20.798l-13.747-19.98h0.869   L256.053,20.134z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_i"),path_j=rsr.path("M315.945,0.817l9.352,33.932h0.052l9.606-33.932h1.585l-10.374,36.538h-1.737l-9.352-33.932h-0.052   l-9.249,33.932h-1.788L293.512,0.817h1.636l9.709,33.88h0.051l9.301-33.88H315.945z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_j"),path_k=rsr.path("M353.656,0.817h3.015l14.155,36.538h-2.76l-4.497-11.703h-16.812l-4.497,11.703h-2.708   L353.656,0.817z M347.626,23.404h15.075l-5.52-14.514c-0.817-2.094-1.993-5.416-1.993-5.416h-0.102c0,0-1.022,3.117-1.891,5.416   L347.626,23.404z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_k"),path_l=rsr.path("M381.555,0.817h4.6v32.296h19.163v4.242h-23.763V0.817z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_l"),path_m=rsr.path("M415.892,0.817h7.41v14.563l14.053-14.563h9.198l-14.309,14.614l15.229,21.924h-8.688   l-11.753-17.068l-3.73,3.781v13.287h-7.41V0.817z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_m");group_a.attr({name:"group_a"}),group_b=rsr.set();var path_n=rsr.path("M0.306,64.631H2.48v8.91h5.04v1.814H0.306V64.631z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_n"),path_o=rsr.path("M13.777,70.016c0-3.21,2.01-5.595,5.175-5.595c3.164,0,5.159,2.385,5.159,5.595   s-1.995,5.58-5.159,5.58C15.787,75.596,13.777,73.226,13.777,70.016z M21.892,70.016c0-2.145-0.96-3.81-2.925-3.81   s-2.97,1.665-2.97,3.81c0,2.13,1.005,3.795,2.97,3.795S21.892,72.146,21.892,70.016z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_o"),path_p=rsr.path("M31.33,64.631h2.205l3.569,5.984c0.345,0.585,0.75,1.5,0.75,1.5h0.03c0,0-0.061-1.109-0.061-1.859   v-5.625h2.146v10.725h-2.101l-3.659-5.925c-0.345-0.57-0.766-1.485-0.766-1.485h-0.029c0,0,0.06,1.125,0.06,1.875v5.535H31.33   V64.631z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_p"),path_q=rsr.path("M47.683,64.631h4.185c2.865,0,4.71,2.31,4.71,5.475c0,1.74-0.585,3.271-1.71,4.215   c-0.795,0.66-1.83,1.035-3.18,1.035h-4.005V64.631z M51.537,73.48c2.04,0,2.835-1.245,2.835-3.375s-0.93-3.614-2.774-3.614h-1.74   v6.989H51.537z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_q"),path_r=rsr.path("M63.319,70.016c0-3.21,2.01-5.595,5.175-5.595c3.164,0,5.159,2.385,5.159,5.595   s-1.995,5.58-5.159,5.58C65.329,75.596,63.319,73.226,63.319,70.016z M71.434,70.016c0-2.145-0.96-3.81-2.925-3.81   s-2.97,1.665-2.97,3.81c0,2.13,1.005,3.795,2.97,3.795S71.434,72.146,71.434,70.016z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_r"),path_s=rsr.path("M80.871,64.631h2.205l3.569,5.984c0.345,0.585,0.75,1.5,0.75,1.5h0.03c0,0-0.061-1.109-0.061-1.859   v-5.625h2.146v10.725H87.41l-3.659-5.925c-0.345-0.57-0.766-1.485-0.766-1.485h-0.029c0,0,0.06,1.125,0.06,1.875v5.535h-2.145   V64.631z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_s"),path_t=rsr.path("M97.115,64.631H98.9v3.765h-1.785V64.631z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_t"),path_u=rsr.path("M105.967,72.041h2.13c0.15,1.289,0.886,1.8,2.415,1.8c1.11,0,2.085-0.391,2.085-1.38   c0-1.051-1.02-1.261-2.655-1.636c-1.92-0.435-3.675-0.944-3.675-3.18c0-2.114,1.726-3.21,4.11-3.21c2.415,0,3.975,1.186,4.14,3.346   h-2.085c-0.12-1.08-0.96-1.62-2.069-1.62c-1.17,0-1.936,0.495-1.936,1.26c0,0.87,0.75,1.125,2.34,1.47   c2.205,0.48,4.005,1.005,4.005,3.315c0,2.175-1.755,3.39-4.17,3.39C107.692,75.596,106.042,74.306,105.967,72.041z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_u"),path_v=rsr.path("M0.306,83.631h7.68v1.845H2.48v2.58h4.665v1.86H2.48v4.439H0.306V83.631z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_v"),path_w=rsr.path("M17.127,83.631h2.249l3.78,10.725h-2.265l-0.72-2.28h-3.87l-0.705,2.28h-2.205L17.127,83.631z    M16.812,90.41h2.835l-0.96-3.09c-0.18-0.569-0.435-1.649-0.435-1.649h-0.03c0,0-0.271,1.08-0.45,1.649L16.812,90.41z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_w"),path_x=rsr.path("M29.279,91.041h2.13c0.15,1.289,0.886,1.8,2.415,1.8c1.11,0,2.085-0.391,2.085-1.38   c0-1.051-1.02-1.261-2.655-1.636c-1.92-0.435-3.675-0.944-3.675-3.18c0-2.114,1.726-3.21,4.11-3.21c2.415,0,3.975,1.186,4.14,3.346   h-2.085c-0.12-1.08-0.96-1.62-2.069-1.62c-1.17,0-1.936,0.495-1.936,1.26c0,0.87,0.75,1.125,2.34,1.47   c2.205,0.48,4.005,1.005,4.005,3.315c0,2.175-1.755,3.39-4.17,3.39C31.005,94.596,29.354,93.306,29.279,91.041z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_x"),path_y=rsr.path("M45.382,83.631h2.175v4.2h4.215v-4.2h2.175v10.725h-2.175v-4.725h-4.215v4.725h-2.175V83.631z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_y"),path_z=rsr.path("M61.667,83.631h2.175v10.725h-2.175V83.631z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_z"),path_aa=rsr.path("M71.059,89.016c0-3.21,2.01-5.595,5.175-5.595c3.164,0,5.159,2.385,5.159,5.595   s-1.995,5.58-5.159,5.58C73.068,94.596,71.059,92.226,71.059,89.016z M79.173,89.016c0-2.145-0.96-3.81-2.925-3.81   s-2.97,1.665-2.97,3.81c0,2.13,1.005,3.795,2.97,3.795S79.173,91.146,79.173,89.016z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_aa"),path_ab=rsr.path("M88.611,83.631h2.205l3.569,5.984c0.345,0.585,0.75,1.5,0.75,1.5h0.03c0,0-0.061-1.109-0.061-1.859   v-5.625h2.146v10.725H95.15l-3.659-5.925c-0.345-0.57-0.766-1.485-0.766-1.485h-0.029c0,0,0.06,1.125,0.06,1.875v5.535h-2.145   V83.631z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_ab"),path_ac=rsr.path("M113.421,83.631h2.175v4.2h4.215v-4.2h2.175v10.725h-2.175v-4.725h-4.215v4.725h-2.175V83.631z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_ac"),path_ad=rsr.path("M129.636,90.905v-7.274h2.175v7.274c0,1.11,0.555,1.891,2.01,1.891c1.38,0,2.024-0.811,2.024-1.92   v-7.245h2.175v7.274c0,2.295-1.409,3.63-4.154,3.63C131.09,94.535,129.636,93.23,129.636,90.905z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_ad"),path_ae=rsr.path("M145.67,83.631h4.8c1.154,0,2.04,0.285,2.595,0.78c0.585,0.524,0.854,1.17,0.854,2.01   c0,1.095-0.675,1.8-1.68,2.145v0.045c1.186,0.346,1.995,1.335,1.995,2.655c0,1.005-0.315,1.695-0.945,2.235   c-0.614,0.539-1.56,0.854-2.699,0.854h-4.92V83.631z M150.199,87.951c0.945,0,1.59-0.45,1.59-1.29c0-0.795-0.585-1.261-1.545-1.261   h-2.399v2.551H150.199z M147.845,92.556h2.505c1.05,0,1.68-0.585,1.68-1.455c0-1.02-0.75-1.545-1.74-1.545h-2.444V92.556z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_ae");group_b.attr({name:"group_b"});group_a.push(path_c,path_d,path_e,path_f,path_g,path_h,path_i,path_j,path_k,path_l,path_m),group_b.push(path_n,path_o,path_p,path_q,path_r,path_s,path_t,path_u,path_v,path_w,path_x,path_y,path_z,path_aa,path_ab,path_ac,path_ad,path_ae);var scale="mobile"===size.name?.5:.75;group_a.transform("s"+scale+","+scale+",0,0"),group_b.transform("s"+scale+","+scale+",0,0")}},rightLogo=function(){if(!animating){size=App.view.sizes(),logo.innerHTML="";var rsr=Raphael(logo,size.w<480?355:355,size.w<480?71:71);group_a=rsr.set();var path_c=rsr.path("M0,0.716h0.767v16.71h25.091V0.716h0.767v36.538h-0.767V18.142H0.767v19.112H0V0.716z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_c"),path_d=rsr.path("M61.37,24.785H44.302l-4.804,12.469h-1.686L51.916,0.716h1.84L67.86,37.254h-1.687L61.37,24.785z    M44.813,23.404h15.994L52.887,2.658h-0.051L44.813,23.404z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_d"),path_e=rsr.path("M76.545,19.061C76.545,7.818,82.678,0,92.643,0c7.205,0,12.213,3.884,13.644,10.731h-2.657   C102.606,5.775,98.724,2.3,92.643,2.3c-8.994,0-13.338,7.513-13.338,16.761c0,9.25,4.292,16.506,13.185,16.506   c7.205,0,11.344-5.059,12.009-11.549h2.504c-0.307,3.578-1.431,6.797-3.373,9.097c-2.555,3.065-6.49,4.804-11.14,4.804   C82.524,37.918,76.545,30.304,76.545,19.061z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_e"),path_f=rsr.path("M119.672,0.716h3.424v19.47l19.726-19.47h4.445l-15.279,14.87l16.199,21.668h-4.088l-14.462-19.316   l-6.541,6.438v12.878h-3.424V0.716z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_f"),path_g=rsr.path("M159.222,0.716h4.854l16.659,25.397c1.227,1.891,2.657,4.701,2.657,4.701h0.103V0.716h4.292v36.538   h-4.701l-16.761-25.449c-1.176-1.789-2.709-4.548-2.709-4.548h-0.102v29.997h-4.293V0.716z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_g"),path_h=rsr.path("M201.02,0.716h26.88V6.95h-19.47v8.177h17.067v6.08H208.43v9.863h19.623v6.184H201.02V0.716z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_h"),path_i=rsr.path("M249.104,23.763L236.736,0.716h9.863l4.701,9.454c1.227,2.504,2.401,5.57,2.401,5.57h0.103   c0,0,1.277-3.066,2.504-5.57l4.65-9.454h9.556l-12.366,23.047v13.491h-9.045V23.763z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_i"),path_j=rsr.path("M292.95,0.716h7.562l4.753,18.142c0.715,3.117,1.584,7.971,1.584,7.971h0.103   c0,0,0.919-4.547,1.686-7.768l3.986-18.345h7.154l3.986,18.294c0.766,3.22,1.686,7.818,1.686,7.818h0.103   c0,0,1.073-4.854,1.788-8.022l4.6-18.09h7.308l-10.425,36.538h-6.898l-4.446-19.572c-0.613-2.657-1.277-6.49-1.277-6.49h-0.103   c0,0-0.562,3.833-1.175,6.49l-4.497,19.572h-6.848L292.95,0.716z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_j"),path_k=rsr.path("M355.495,0.716h5.161l13.49,36.538h-5.008l-3.884-11.141h-14.563l-3.936,11.141h-4.701   L355.495,0.716z M352.02,22.383h11.958l-4.19-12.264c-0.715-2.045-1.635-5.162-1.635-5.162h-0.103c0,0-0.971,3.066-1.687,5.162   L352.02,22.383z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_k"),path_l=rsr.path("M384.927,0.716h3.424v33.369h19.47v3.169h-22.894V0.716z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_l"),path_m=rsr.path("M418.855,0.716h2.657v20.39l20.901-20.441h3.525L430.354,15.74l16.302,21.514h-3.22l-14.973-19.675   l-6.95,6.797v12.878h-2.657V0.716z").attr({parent:"group_a",fill:"#FFFFFF","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_m");group_a.attr({name:"group_a"}),group_b=rsr.set();var path_n=rsr.path("M238.366,64.529h2.175v8.91h5.04v1.814h-7.215V64.529z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_n"),path_o=rsr.path("M251.838,69.914c0-3.21,2.01-5.595,5.175-5.595c3.164,0,5.159,2.385,5.159,5.595   s-1.995,5.58-5.159,5.58C253.848,75.494,251.838,73.124,251.838,69.914z M259.952,69.914c0-2.145-0.96-3.81-2.925-3.81   s-2.97,1.665-2.97,3.81c0,2.13,1.005,3.795,2.97,3.795S259.952,72.044,259.952,69.914z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_o"),path_p=rsr.path("M269.391,64.529h2.205l3.569,5.984c0.345,0.585,0.75,1.5,0.75,1.5h0.03c0,0-0.061-1.109-0.061-1.859   v-5.625h2.146v10.725h-2.101l-3.659-5.925c-0.345-0.57-0.766-1.485-0.766-1.485h-0.029c0,0,0.06,1.125,0.06,1.875v5.535h-2.145   V64.529z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_p"),path_q=rsr.path("M285.743,64.529h4.185c2.865,0,4.71,2.31,4.71,5.475c0,1.74-0.585,3.271-1.71,4.215   c-0.795,0.66-1.83,1.035-3.18,1.035h-4.005V64.529z M289.598,73.379c2.04,0,2.835-1.245,2.835-3.375s-0.93-3.614-2.774-3.614h-1.74   v6.989H289.598z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_q"),path_r=rsr.path("M301.38,69.914c0-3.21,2.01-5.595,5.175-5.595c3.164,0,5.159,2.385,5.159,5.595   s-1.995,5.58-5.159,5.58C303.39,75.494,301.38,73.124,301.38,69.914z M309.494,69.914c0-2.145-0.96-3.81-2.925-3.81   s-2.97,1.665-2.97,3.81c0,2.13,1.005,3.795,2.97,3.795S309.494,72.044,309.494,69.914z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_r"),path_s=rsr.path("M318.932,64.529h2.205l3.569,5.984c0.345,0.585,0.75,1.5,0.75,1.5h0.03c0,0-0.061-1.109-0.061-1.859   v-5.625h2.146v10.725h-2.101l-3.659-5.925c-0.345-0.57-0.766-1.485-0.766-1.485h-0.029c0,0,0.06,1.125,0.06,1.875v5.535h-2.145   V64.529z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_s"),path_t=rsr.path("M335.064,67.844c0.465-0.149,1.02-0.63,1.02-1.364h-0.99v-1.95h2.025v1.77   c0,1.365-1.05,2.085-2.055,2.25V67.844z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_t"),path_u=rsr.path("M344.001,71.939h2.13c0.15,1.289,0.885,1.8,2.415,1.8c1.11,0,2.085-0.391,2.085-1.38   c0-1.051-1.02-1.261-2.654-1.636c-1.92-0.435-3.676-0.944-3.676-3.18c0-2.114,1.726-3.21,4.11-3.21c2.415,0,3.975,1.186,4.14,3.346   h-2.085c-0.12-1.08-0.96-1.62-2.069-1.62c-1.17,0-1.936,0.495-1.936,1.26c0,0.87,0.75,1.125,2.34,1.47   c2.205,0.48,4.005,1.005,4.005,3.315c0,2.175-1.755,3.39-4.17,3.39C345.727,75.494,344.076,74.204,344.001,71.939z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_u"),path_v=rsr.path("M238.366,83.529h7.68v1.845h-5.505v2.58h4.665v1.86h-4.665v4.439h-2.175V83.529z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_v"),path_w=rsr.path("M255.188,83.529h2.249l3.78,10.725h-2.265l-0.72-2.28h-3.87l-0.705,2.28h-2.205L255.188,83.529z    M254.872,90.309h2.835l-0.96-3.09c-0.18-0.569-0.435-1.649-0.435-1.649h-0.03c0,0-0.271,1.08-0.45,1.649L254.872,90.309z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_w"),path_x=rsr.path("M267.34,90.939h2.13c0.15,1.289,0.886,1.8,2.415,1.8c1.11,0,2.085-0.391,2.085-1.38   c0-1.051-1.02-1.261-2.655-1.636c-1.92-0.435-3.675-0.944-3.675-3.18c0-2.114,1.726-3.21,4.11-3.21c2.415,0,3.975,1.186,4.14,3.346   h-2.085c-0.12-1.08-0.96-1.62-2.069-1.62c-1.17,0-1.936,0.495-1.936,1.26c0,0.87,0.75,1.125,2.34,1.47   c2.205,0.48,4.005,1.005,4.005,3.315c0,2.175-1.755,3.39-4.17,3.39C269.065,94.494,267.415,93.204,267.34,90.939z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_x"),path_y=rsr.path("M283.442,83.529h2.175v4.2h4.215v-4.2h2.175v10.725h-2.175v-4.725h-4.215v4.725h-2.175V83.529z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_y"),path_z=rsr.path("M299.728,83.529h2.175v10.725h-2.175V83.529z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_z"),path_aa=rsr.path("M309.119,88.914c0-3.21,2.01-5.595,5.175-5.595c3.164,0,5.159,2.385,5.159,5.595   s-1.995,5.58-5.159,5.58C311.129,94.494,309.119,92.124,309.119,88.914z M317.233,88.914c0-2.145-0.96-3.81-2.925-3.81   s-2.97,1.665-2.97,3.81c0,2.13,1.005,3.795,2.97,3.795S317.233,91.044,317.233,88.914z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_aa"),path_ab=rsr.path("M326.672,83.529h2.205l3.569,5.984c0.345,0.585,0.75,1.5,0.75,1.5h0.03c0,0-0.061-1.109-0.061-1.859   v-5.625h2.146v10.725h-2.101l-3.659-5.925c-0.345-0.57-0.766-1.485-0.766-1.485h-0.029c0,0,0.06,1.125,0.06,1.875v5.535h-2.145   V83.529z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_ab"),path_ac=rsr.path("M351.481,83.529h2.175v4.2h4.215v-4.2h2.175v10.725h-2.175v-4.725h-4.215v4.725h-2.175V83.529z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_ac"),path_ad=rsr.path("M367.696,90.804v-7.274h2.175v7.274c0,1.11,0.555,1.891,2.01,1.891c1.38,0,2.024-0.811,2.024-1.92   v-7.245h2.175v7.274c0,2.295-1.409,3.63-4.154,3.63C369.15,94.434,367.696,93.129,367.696,90.804z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_ad"),path_ae=rsr.path("M383.73,83.529h4.8c1.154,0,2.04,0.285,2.595,0.78c0.585,0.524,0.854,1.17,0.854,2.01   c0,1.095-0.675,1.8-1.68,2.145v0.045c1.186,0.346,1.995,1.335,1.995,2.655c0,1.005-0.315,1.695-0.945,2.235   c-0.614,0.539-1.56,0.854-2.699,0.854h-4.92V83.529z M388.26,87.85c0.945,0,1.59-0.45,1.59-1.29c0-0.795-0.585-1.261-1.545-1.261   h-2.399v2.551H388.26z M385.905,92.454h2.505c1.05,0,1.68-0.585,1.68-1.455c0-1.02-0.75-1.545-1.74-1.545h-2.444V92.454z").attr({parent:"group_b",fill:"#C4986B","fill-opacity":0,"stroke-width":"0","stroke-opacity":"1"}).data("id","path_ae");group_b.attr({name:"group_b"});group_a.push(path_c,path_d,path_e,path_f,path_g,path_h,path_i,path_j,path_k,path_l,path_m),group_b.push(path_n,path_o,path_p,path_q,path_r,path_s,path_t,path_u,path_v,path_w,path_x,path_y,path_z,path_aa,path_ab,path_ac,path_ad,path_ae);var scale=.75;group_a.transform("s"+scale+","+scale+",0,0"),group_b.transform("s"+scale+","+scale+",0,0")}},done=function(){return hasAnimated},animate=function(group,s,fs){animating=!0;var isLogo=group;group=void 0!==group?group:group_a,s=void 0!==s?s:150;var path,count=0,speed=void 0!==fs?fs:600,easing="ease-in-out";if(window.clearInterval(interval),hasAnimated){for(var i in group_a)path=group_a[i],path.type&&path.attr({"fill-opacity":1});for(var z in group_b)path=group_b[z],path.type&&path.attr({"fill-opacity":1})}else interval=setInterval(function(){path=group[count],path.type&&path.animate({"fill-opacity":1},speed,easing),count++,count>=group.length&&(window.clearInterval(interval),isLogo?(hasAnimated=!0,animating=!1):animate(group_b,hasAnimated?0:50))},s)};return{init:init,animate:animate,leftLogo:leftLogo,rightLogo:rightLogo,done:done}}(),App.api=function(){var xhr,urls={images:"http://hackneywalk.com/jsonp/images.php"},get=function(type,data,success,error){var url=urls[type];xhr=$.ajax({url:url,data:data,dataType:"jsonp",type:"GET",crossDomain:!0,cache:!1,timeout:15e3,success:function(data){success&&success(data)},error:function(data){"timeout"===data.statusText?console.log("Connection timed out."):"abort"!==data.statusText&&console.log("Connection error!"),error&&error(data)}})},abort=function(){xhr&&4!==xhr.readyState&&xhr.abort()};return{get:get,abort:abort}}(),head.js.apply(window,scripts).ready("gray",App.view.init),window.console||(console={log:function(){}}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(event_down="touchstart",event_move="touchmove",event_release="touchend",mobile=!0):(event_down="mousedown",event_move="mousemove",event_release="mouseup"),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return window.setTimeout(callback,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}();