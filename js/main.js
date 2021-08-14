(function($){

	jQuery(document).ready(function(){


		// meanmenu
		jQuery('#mobile-menu').meanmenu({
			meanMenuContainer: '.mobile-menu',
			meanScreenWidth: "991"
		});
    
    	/** main-slider **/	
		$('.best-selling-products').slick({
			infinite: true,
			dots: false,
			arrows: true,
			slidesToShow: 3,
			autoplay: false,
			autoplaySpeed: 10000,
			slidesToScroll: 1,
			nextArrow: '<i class="fas fa-chevron-left"></i>',
			prevArrow: '<i class="fas fa-chevron-right"></i>',
			responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
            ]
		});
    
    	/** main-slider **/	
		$('.best-selling-products-style-2').slick({
			infinite: true,
			dots: false,
			arrows: true,
			slidesToShow: 4,
			autoplay: false,
			autoplaySpeed: 10000,
			slidesToScroll: 1,
			nextArrow: '<i class="fas fa-chevron-left"></i>',
			prevArrow: '<i class="fas fa-chevron-right"></i>',
			responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
            ]
		});

        // portfolio active
        $('.portfolio-area').imagesLoaded( function() {
            var grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item'
                }
            })

            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                grid.isotope({ filter: filterValue });
            });

            //for portfolio menu active class
            $('.portfolio-menu button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

        });



        /** code by Fatima */
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            autoplay: false
          });
          $('.slider-nav').slick({
            asNavFor: '.slider-for',
            dots:false,
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            centerPadding: '0px',
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
          });



        // services slider having two parts / sections
        $('.service-item-active').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			infinite: true,
			asNavFor: '.services-nav',
			prevArrow:'<i class="fas fa-chevron-left"></i>',
			nextArrow:'<i class="fas fa-chevron-right"></i>',
      	});

		$('.services-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.service-item-active',
			dots: false,
			arrows: false,
			focusOnSelect: true,
			centerPadding:0,
			infinite: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 375,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
			]
		});

    	// nice select
    	$('select').niceSelect();

		/** active class on last item */
		$(document).on('mouseover','.single-service-item',function() {
			$(this).addClass('active');
			$('.single-service-item').removeClass('active');
			$(this).addClass('active');
		});

      // magnificPopup
      $('.popup-img').magnificPopup({
          type: 'iframe',
          gallery: {
              enabled: true
          }
      });

	});

}(jQuery));