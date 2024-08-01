import React from 'react'

const Section1 = () => {

   
   (function($) {
   
       "use strict";
   
       var isMobile = {
           Android: function() {
               return navigator.userAgent.match(/Android/i);
           },
               BlackBerry: function() {
               return navigator.userAgent.match(/BlackBerry/i);
           },
               iOS: function() {
               return navigator.userAgent.match(/iPhone|iPad|iPod/i);
           },
               Opera: function() {
               return navigator.userAgent.match(/Opera Mini/i);
           },
               Windows: function() {
               return navigator.userAgent.match(/IEMobile/i);
           },
               any: function() {
               return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
           }
       };
   
   
       $(window).stellar({
       responsive: true,
       parallaxBackgrounds: true,
       parallaxElements: true,
       horizontalScrolling: false,
       hideDistantElements: false,
       scrollProperty: 'scroll'
     });
   
   
       var fullHeight = function() {
   
           $('.js-fullheight').css('height', $(window).height());
           $(window).resize(function(){
               $('.js-fullheight').css('height', $(window).height());
           });
   
       };
       fullHeight();
   
       // loader
       var loader = function() {
           setTimeout(function() { 
               if($('#ftco-loader').length > 0) {
                   $('#ftco-loader').removeClass('show');
               }
           }, 1);
       };
       loader();
   
       // Scrollax
      $.Scrollax();
   
       var carousel = function() {
           $('.home-slider').owlCarousel({
           loop:true,
           autoplay: true,
           margin:0,
           animateOut: 'fadeOut',
           animateIn: 'fadeIn',
           nav:false,
           dots: false,
           autoplayHoverPause: false,
           items: 1,
           navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
           responsive:{
             0:{
               items:1
             },
             600:{
               items:1
             },
             1000:{
               items:1
             }
           }
           });
           $('.properties-slider').owlCarousel({
               autoplay: true,
               loop: true,
               items:1,
               margin: 30,
               stagePadding: 0,
               nav: true,
               dots: true,
               navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
               responsive:{
                   0:{
                       items: 1
                   },
                   600:{
                       items: 2
                   },
                   1000:{
                       items: 3
                   }
               }
           });
           $('.carousel-testimony').owlCarousel({
               autoplay: true,
               loop: true,
               items:1,
               margin: 0,
               stagePadding: 0,
               nav: false,
               navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
               responsive:{
                   0:{
                       items: 1
                   },
                   600:{
                       items: 1
                   },
                   1000:{
                       items: 1
                   }
               }
           });
   
           $('.single-slider').owlCarousel({
               animateOut: 'fadeOut',
           animateIn: 'fadeIn',
               autoplay: true,
               loop: true,
               items:1,
               margin: 0,
               stagePadding: 0,
               nav: true,
               dots: true,
               navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
               responsive:{
                   0:{
                       items: 1
                   },
                   600:{
                       items: 1
                   },
                   1000:{
                       items: 1
                   }
               }
           });
   
       };
       carousel();
   
       $('nav .dropdown').hover(function(){
           var $this = $(this);
           // 	 timer;
           // clearTimeout(timer);
           $this.addClass('show');
           $this.find('> a').attr('aria-expanded', true);
           // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
           $this.find('.dropdown-menu').addClass('show');
       }, function(){
           var $this = $(this);
               // timer;
           // timer = setTimeout(function(){
               $this.removeClass('show');
               $this.find('> a').attr('aria-expanded', false);
               // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
               $this.find('.dropdown-menu').removeClass('show');
           // }, 100);
       });
   
   
       $('#dropdown04').on('show.bs.dropdown', function () {
         console.log('show');
       });
   
       // scroll
       var scrollWindow = function() {
           $(window).scroll(function(){
               var $w = $(this),
                       st = $w.scrollTop(),
                       navbar = $('.ftco_navbar'),
                       sd = $('.js-scroll-wrap');
   
               if (st > 150) {
                   if ( !navbar.hasClass('scrolled') ) {
                       navbar.addClass('scrolled');	
                   }
               } 
               if (st < 150) {
                   if ( navbar.hasClass('scrolled') ) {
                       navbar.removeClass('scrolled sleep');
                   }
               } 
               if ( st > 350 ) {
                   if ( !navbar.hasClass('awake') ) {
                       navbar.addClass('awake');	
                   }
                   
                   if(sd.length > 0) {
                       sd.addClass('sleep');
                   }
               }
               if ( st < 350 ) {
                   if ( navbar.hasClass('awake') ) {
                       navbar.removeClass('awake');
                       navbar.addClass('sleep');
                   }
                   if(sd.length > 0) {
                       sd.removeClass('sleep');
                   }
               }
           });
       };
       scrollWindow();
   
       var isMobile = {
           Android: function() {
               return navigator.userAgent.match(/Android/i);
           },
               BlackBerry: function() {
               return navigator.userAgent.match(/BlackBerry/i);
           },
               iOS: function() {
               return navigator.userAgent.match(/iPhone|iPad|iPod/i);
           },
               Opera: function() {
               return navigator.userAgent.match(/Opera Mini/i);
           },
               Windows: function() {
               return navigator.userAgent.match(/IEMobile/i);
           },
               any: function() {
               return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
           }
       };
   
       
       var counter = function() {
           
           $('#section-counter').waypoint( function( direction ) {
   
               if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
   
                   var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                   $('.number').each(function(){
                       var $this = $(this),
                           num = $this.data('number');
                           console.log(num);
                       $this.animateNumber(
                         {
                           number: num,
                           numberStep: comma_separator_number_step
                         }, 7000
                       );
                   });
                   
               }
   
           } , { offset: '95%' } );
   
       }
       counter();
   
       var contentWayPoint = function() {
           var i = 0;
           $('.ftco-animate').waypoint( function( direction ) {
   
               if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
                   
                   i++;
   
                   $(this.element).addClass('item-animate');
                   setTimeout(function(){
   
                       $('body .ftco-animate.item-animate').each(function(k){
                           var el = $(this);
                           setTimeout( function () {
                               var effect = el.data('animate-effect');
                               if ( effect === 'fadeIn') {
                                   el.addClass('fadeIn ftco-animated');
                               } else if ( effect === 'fadeInLeft') {
                                   el.addClass('fadeInLeft ftco-animated');
                               } else if ( effect === 'fadeInRight') {
                                   el.addClass('fadeInRight ftco-animated');
                               } else {
                                   el.addClass('fadeInUp ftco-animated');
                               }
                               el.removeClass('item-animate');
                           },  k * 50, 'easeInOutExpo' );
                       });
                       
                   }, 100);
                   
               }
   
           } , { offset: '95%' } );
       };
       contentWayPoint();
   
   
       // navigation
       var OnePageNav = function() {
           $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
                e.preventDefault();
   
                var hash = this.hash,
                        navToggler = $('.navbar-toggler');
                $('html, body').animate({
               scrollTop: $(hash).offset().top
             }, 700, 'easeInOutExpo', function(){
               window.location.hash = hash;
             });
   
   
             if ( navToggler.is(':visible') ) {
                 navToggler.click();
             }
           });
           $('body').on('activate.bs.scrollspy', function () {
             console.log('nice');
           })
       };
       OnePageNav();
   
   
       // magnific popup
       $('.image-popup').magnificPopup({
       type: 'image',
       closeOnContentClick: true,
       closeBtnInside: false,
       fixedContentPos: true,
       mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
       },
       image: {
         verticalFit: true
       },
       zoom: {
         enabled: true,
         duration: 300 // don't foget to change the duration also in CSS
       }
     });
   
     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
       disableOn: 700,
       type: 'iframe',
       mainClass: 'mfp-fade',
       removalDelay: 160,
       preloader: false,
   
       fixedContentPos: false
     });
   
   
     $('#checkin_date, #checkout_date').datepicker({
         'format': 'm/d/yyyy',
         'autoclose': true
       });
   
   
   
   
   })();
   
  return (
   <>
   <section className="home-slider owl-carousel">
<div className="slider-item bg1">
<div className="overlay"></div>
<div className="container">
<div className="row no-gutters slider-text align-items-md-end align-items-center justify-content-end">
<div className="col-md-6 text p-4 ftco-animate">
<h1 className="mb-3">Florida 5, Pinecrest, FL</h1>
<span className="location d-block mb-3"><i className="icon-my_location"></i> Melbourne, Vic 3004</span>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<span className="price">$28,000</span>
<a href="#" className="btn-custom p-3 px-4 bg-primary">View Details <span className="icon-plus ml-1"></span></a>
</div>
</div>
</div>
</div>
<div className="slider-item bg2" >
<div className="overlay"></div>
<div className="container">
<div className="row no-gutters slider-text align-items-md-end align-items-center justify-content-end">
<div className="col-md-6 text p-4 ftco-animate">
<h1 className="mb-3">3015 Grand Avenue, CocoWalk</h1>
<span className="location d-block mb-3"><i className="icon-my_location"></i> Melbourne, Vic 3004</span>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<span className="price">$28,000</span>
<a href="#" className="btn-custom p-3 px-4 bg-primary">View Details <span className="icon-plus ml-1"></span></a>
</div>
</div>
</div>
</div>
</section>
<section className="ftco-search">
<div className="container">
<div className="row">
<div className="col-md-12 search-wrap">
<h2 className="heading h5 d-flex align-items-center pr-4"><span className="ion-ios-search mr-3"></span> Search Property</h2>
<form action="#" className="search-property">
<div className="row">
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Keyword</label>
<div className="form-field">
<div className="icon"><span className="icon-pencil"></span></div>
<input type="text" className="form-control" placeholder="Keyword"/>
</div>
</div>
</div>
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Location</label>
<div className="form-field">
<div className="icon"><span className="icon-pencil"></span></div>
<input type="text" className="form-control" placeholder="City/Locality Name"/>
</div>
</div>
</div>
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Property Type</label>
<div className="form-field">
<div className="select-wrap">
<div className="icon"><span className="ion-ios-arrow-down"></span></div>
<select name id className="form-control">
<option value>Type</option>
<option value>Commercial</option>
<option value>- Office</option>
<option value>Residential</option>
<option value>Villa</option>
<option value>Condominium</option>
<option value>Apartment</option>
</select>
</div>
</div>
</div>
</div>
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Property Status</label>
<div className="form-field">
<div className="select-wrap">
<div className="icon"><span className="ion-ios-arrow-down"></span></div>
<select name id className="form-control">
<option value>Type</option>
<option value>Rent</option>
<option value>Sale</option>
</select>
</div>
</div>
</div>
</div>
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Agents</label>
<div className="form-field">
<div className="select-wrap">
<div className="icon"><span className="ion-ios-arrow-down"></span></div>
<select name id className="form-control">
<option value>Any</option>
<option value>Jonh Doe</option>
<option value>Doe Mags</option>
<option value>Kenny Scott</option>
<option value>Emily Storm</option>
</select>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Min Beds</label>
<div className="form-field">
<div className="select-wrap">
<div className="icon"><span className="ion-ios-arrow-down"></span></div>
<select name id className="form-control">
<option value>1</option>
<option value>2</option>
<option value>3</option>
<option value>4</option>
<option value>5</option>
</select>
</div>
</div>
</div>
</div>
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Min Bathroom</label>
<div className="form-field">
<div className="select-wrap">
<div className="icon"><span className="ion-ios-arrow-down"></span></div>
<select name id className="form-control">
<option value>1</option>
<option value>2</option>
<option value>3</option>
<option value>4</option>
<option value>5</option>
</select>
</div>
</div>
</div>
</div>
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Min Price</label>
<div className="form-field">
<div className="select-wrap">
<div className="icon"><span className="ion-ios-arrow-down"></span></div>
<select name id className="form-control">
<option value>Min Price</option>
<option value>$1,000</option>
<option value>$5,000</option>
<option value>$10,000</option>
<option value>$50,000</option>
<option value>$100,000</option>
<option value>$200,000</option>
<option value>$300,000</option>
<option value>$400,000</option>
<option value>$500,000</option>
<option value>$600,000</option>
<option value>$700,000</option>
<option value>$800,000</option>
<option value>$900,000</option>
<option value>$1,000,000</option>
</select>
</div>
</div>
</div>
</div>
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Min Price</label>
<div className="form-field">
<div className="select-wrap">
<div className="icon"><span className="ion-ios-arrow-down"></span></div>
<select name id className="form-control">
<option value>Min Price</option>
<option value>$5,000</option>
<option value>$10,000</option>
<option value>$50,000</option>
<option value>$100,000</option>
<option value>$200,000</option>
<option value>$300,000</option>
<option value>$400,000</option>
<option value>$500,000</option>
<option value>$600,000</option>
<option value>$700,000</option>
<option value>$800,000</option>
<option value>$900,000</option>
<option value>$1,000,000</option>
<option value>$2,000,000</option>
</select>
</div>
</div>
</div>
</div>
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Min Area <span>(sq ft)</span></label>
<div className="form-field">
<div className="icon"><span className="icon-pencil"></span></div>
<input type="text" className="form-control" placeholder="Min Area"/>
</div>
</div>
</div>
<div className="col-md align-items-end">
<div className="form-group">
<label for="#">Max Area <span>(sq ft)</span></label>
<div className="form-field">
<div className="icon"><span className="icon-pencil"></span></div>
<input type="text" className="form-control" placeholder="Max Area"/>
</div>
</div>
</div>
<div className="col-md align-self-end">
<div className="form-group">
<div className="form-field">
<input type="submit" value="Search" className="form-control btn btn-primary"/>
</div>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</section>
<section className="ftco-section bg-light">
<div className="container">
<div className="row d-flex">
<div className="col-md-3 d-flex align-self-stretch ftco-animate">
<div className="media block-6 services py-4 d-block text-center">
<div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-pin"></span></div></div>
<div className="media-body p-2 mt-2">
<h3 className="heading mb-3">Find Places Anywhere In The World</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div className="col-md-3 d-flex align-self-stretch ftco-animate">
<div className="media block-6 services py-4 d-block text-center">
<div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-detective"></span></div></div>
<div className="media-body p-2 mt-2">
<h3 className="heading mb-3">We Have Agents With Experience</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div className="col-md-3 d-flex align-sel Searchf-stretch ftco-animate">
<div className="media block-6 services py-4 d-block text-center">
<div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-house"></span></div></div>
<div className="media-body p-2 mt-2">
<h3 className="heading mb-3">Buy &amp; Rent Modern Properties</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
<div className="col-md-3 d-flex align-self-stretch ftco-animate">
<div className="media block-6 services py-4 d-block text-center">
<div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-purse"></span></div></div>
<div className="media-body p-2 mt-2">
<h3 className="heading mb-3">Making Money</h3>
<p>A small river named Duden flows by their place and supplies.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="ftco-section ftco-properties">
<div className="container">
<div className="row justify-content-center mb-5 pb-3">
<div className="col-md-7 heading-section text-center ftco-animate">
<span className="subheading">Recent Posts</span>
<h2 className="mb-4">Recent Properties</h2>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="properties-slider owl-carousel ftco-animate">
<div className="item">
<div className="properties">
<a href="#" className="img d-flex justify-content-center align-items-center bg3" >
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<span className="status sale">Sale</span>
<div className="d-flex">
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$20,000</span>
</div>
</div>
</div>
</div>
</div>
<div className="item">
<div className="properties">
<a href="#" className="img d-flex justify-content-center align-items-center bg4" >
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<div className="d-flex">
<span className="status rent">Rent</span>
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$2,000 <small>/ month</small></span>
</div>
</div>
</div>
</div>
</div>
<div className="item">
<div className="properties">
<a href="#" className="img d-flex justify-content-center align-items-center bg5" >
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<span className="status sale">Sale</span>
<div className="d-flex">
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$20,000</span>
</div>
</div>
</div>
</div>
</div>
<div className="item">
<div className="properties">
<a href="#" className="img d-flex justify-content-center align-items-center bg6" >
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<span className="status sale">Sale</span>
<div className="d-flex">
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$20,000</span>
</div>
</div>
</div>
</div>
</div>
<div className="item">
<div className="properties">
<a href="#" className="img d-flex justify-content-center align-items-center bg7" >
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<span className="status rent">Rent</span>
<div className="d-flex">
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$900 <small>/ month</small></span>
</div>
</div>
</div>
</div>
</div>
<div className="item">
<div className="properties">
<a href="#" className="img d-flex justify-content-center align-items-center bg8" >
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<span className="status sale">Sale</span>
<div className="d-flex">
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$20,000</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="ftco-section bg-light">
<div className="container">
<div className="row justify-content-center mb-5 pb-3">
<div className="col-md-7 heading-section text-center ftco-animate">
<span className="subheading">Special Offers</span>
<h2 className="mb-4">Most Recommended Properties</h2>
</div>
</div>
</div>
<div className="container-fluid">
<div className="row">
<div className="col-sm col-md-6 col-lg ftco-animate">
<div className="properties">
<a href="#" className="img img-2 d-flex justify-content-center align-items-center bh3">
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<span className="status sale">Sale</span>
<div className="d-flex">
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$20,000</span>
</div>
</div>
<p>Far far away, behind the word mountains, far from the countries</p>
<hr/>
<p className="bottom-area d-flex">
<span><i className="flaticon-selection"></i> 250sqft</span>
<span className="ml-auto"><i className="flaticon-bathtub"></i> 3</span>
<span><i className="flaticon-bed"></i> 4</span>
</p>
</div>
</div>
</div>
<div className="col-sm col-md-6 col-lg ftco-animate">
<div className="properties">
<a href="#" className="img img-2 d-flex justify-content-center align-items-center bg4" >
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<span className="status sale">Sale</span>
<div className="d-flex">
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$20,000</span>
</div>
</div>
<p>Far far away, behind the word mountains, far from the countries</p>
<hr/>
<p className="bottom-area d-flex">
<span><i className="flaticon-selection"></i> 250sqft</span>
<span className="ml-auto"><i className="flaticon-bathtub"></i> 3</span>
<span><i className="flaticon-bed"></i> 4</span>
</p>
</div>
</div>
</div>
<div className="col-sm col-md-6 col-lg ftco-animate">
<div className="properties">
<a href="#" className="img img-2 d-flex justify-content-center align-items-center bg5" >
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<span className="status rent">Rent</span>
<div className="d-flex">
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$800 <small>/ month</small></span>
</div>
</div>
<p>Far far away, behind the word mountains, far from the countries</p>
<hr/>
<p className="bottom-area d-flex">
<span><i className="flaticon-selection"></i> 250sqft</span>
<span className="ml-auto"><i className="flaticon-bathtub"></i> 3</span>
<span><i className="flaticon-bed"></i> 4</span>
</p>
</div>
</div>
</div>
<div className="col-sm col-md-6 col-lg ftco-animate">
<div className="properties">
<a href="#" className="img img-2 d-flex justify-content-center align-items-center bg6" >
<div className="icon d-flex justify-content-center align-items-center">
<span className="icon-search2"></span>
</div>
</a>
<div className="text p-3">
<span className="status sale">Sale</span>
<div className="d-flex">
<div className="one">
<h3><a href="#">North Parchmore Street</a></h3>
<p>Apartment</p>
</div>
<div className="two">
<span className="price">$20,000</span>
</div>
</div>
<p>Far far away, behind the word mountains, far from the countries</p>
<hr/>
<p className="bottom-area d-flex">
<span><i className="flaticon-selection"></i> 250sqft</span>
<span className="ml-auto"><i className="flaticon-bathtub"></i> 3</span>
<span><i className="flaticon-bed"></i> 4</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="ftco-section ftco-counter img bg1" id="section-counter">
<div className="container">
<div className="row justify-content-center mb-3 pb-3">
<div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
<h2 className="mb-4">Some fun facts</h2>
</div>
</div>
<div className="row justify-content-center">
<div className="col-md-10">
<div className="row">
<div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
<div className="block-18 text-center">
<div className="text">
<strong className="number" data-number="9000">0</strong>
<span>Happy Customers</span>
</div>
</div>
</div>
<div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
<div className="block-18 text-center">
<div className="text">
<strong className="number" data-number="10000">0</strong>
<span>Properties</span>
</div>
</div>
</div>
<div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
<div className="block-18 text-center">
<div className="text">
<strong className="number" data-number="1000">0</strong>
<span>Agents</span>
</div>
</div>
</div>
<div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
<div className="block-18 text-center">
<div className="text">
<strong className="number" data-number="100">0</strong>
<span>Awards</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="ftco-section testimony-section bg-light">
<div className="container">
<div className="row justify-content-center">
<div className="col-md-8 ftco-animate">
<div className="row ftco-animate">
<div className="col-md-12">
<div className="carousel-testimony owl-carousel ftco-owl">
<div className="item">
<div className="testimony-wrap py-4 pb-5">
<div className="user-img mb-4 bg9" >
<span className="quote d-flex align-items-center justify-content-center">
<i className="icon-quote-left"></i>
</span>
</div>
<div className="text text-center">
<p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<p className="name">Roger Scott</p>
<span className="position">Clients</span>
</div>
</div>
</div>
<div className="item">
<div className="testimony-wrap py-4 pb-5">
<div className="user-img mb-4 bg10" >
<span className="quote d-flex align-items-center justify-content-center">
<i className="icon-quote-left"></i>
</span>
</div>
<div className="text text-center">
<p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<p className="name">Roger Scott</p>
<span className="position">Agent</span>
</div>
</div>
</div>
<div className="item">
<div className="testimony-wrap py-4 pb-5">
<div className="user-img mb-4 bg11">
<span className="quote d-flex align-items-center justify-content-center">
<i className="icon-quote-left"></i>
</span>
</div>
<div className="text text-center">
<p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<p className="name">Roger Scott</p>
<span className="position">Client</span>
</div>
</div>
</div>
<div className="item">
<div className="testimony-wrap py-4 pb-5">
<div className="user-img mb-4 bg9">
<span className="quote d-flex align-items-center justify-content-center">
<i className="icon-quote-left"></i>
</span>
</div>
<div className="text text-center">
<p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<p className="name">Roger Scott</p>
<span className="position">Client</span>
</div>
</div>
</div>
<div className="item">
<div className="testimony-wrap py-4 pb-5">
<div className="user-img mb-4 bg9" >
<span className="quote d-flex align-items-center justify-content-center">
<i className="icon-quote-left"></i>
</span>
</div>
<div className="text text-center">
<p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<p className="name">Roger Scott</p>
<span className="position">Client</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="ftco-section">
<div className="container">
<div className="row justify-content-center mb-5 pb-3">
<div className="col-md-7 heading-section text-center ftco-animate">
<span className="subheading">Read Articles</span>
<h2>Recent Blog</h2>
</div>
</div>
<div className="row d-flex">
<div className="col-md-3 d-flex ftco-animate">
<div className="blog-entry align-self-stretch">
<a href="blog-single.html" className="block-20 bg12" >
</a>
<div className="text mt-3 d-block">
<h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
<div className="meta mb-3">
<div><a href="#">Dec 6, 2018</a></div>
<div><a href="#">Admin</a></div>
<div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
</div>
</div>
</div>
</div>
<div className="col-md-3 d-flex ftco-animate">
<div className="blog-entry align-self-stretch">
<a href="blog-single.html" className="block-20 bg13" >
</a>
<div className="text mt-3">
<h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
<div className="meta mb-3">
<div><a href="#">Dec 6, 2018</a></div>
<div><a href="#">Admin</a></div>
<div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
</div>
</div>
</div>
</div>
<div className="col-md-3 d-flex ftco-animate">
<div className="blog-entry align-self-stretch">
<a href="blog-single.html" className="block-20  bg14">
</a>
<div className="text mt-3">
<h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
<div className="meta mb-3">
<div><a href="#">Dec 6, 2018</a></div>
<div><a href="#">Admin</a></div>
<div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
</div>
</div>
</div>
</div>
<div className="col-md-3 d-flex ftco-animate">
<div className="blog-entry align-self-stretch">
<a href="blog-single.html" className="block-20 bg15" >
</a>
<div className="text mt-3">
<h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
<div className="meta mb-3">
<div><a href="#">Dec 6, 2018</a></div>
<div><a href="#">Admin</a></div>
<div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="ftco-section-parallax">
<div className="parallax-img d-flex align-items-center">
<div className="container">
<div className="row d-flex justify-content-center">
<div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
<h2>Subcribe to our Newsletter</h2>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
<div className="row d-flex justify-content-center mt-5">
<div className="col-md-8">
<form action="#" className="subscribe-form">
<div className="form-group d-flex">
<input type="text" className="form-control" placeholder="Enter email address"/>
<input type="submit" value="Subscribe" className="submit px-3"/>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
   </>
  )
}

export default Section1