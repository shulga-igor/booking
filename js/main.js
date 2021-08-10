$(document).ready(function(e){

    $('.mobile-burger').on('click', function(e){
        $(this).toggleClass('close');
        $('.header .navigation').toggle();
    })

    $( ".js-date-start" ).datepicker({
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
        dateFormat: "M d, yy",
        minDate: '-0d',
        onSelect: function( selectedDate ) {
            $( ".js-date-end" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    

    $( ".js-date-end" ).datepicker({
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
        dateFormat: "M d, yy",
        minDate: '-0d'
        
    });
    
    $('.js-time-start, .js-time-end').on('focus', function(e){
        $(this).siblings('.time-blc-popup').addClass('show');
    })
    $('.js-close-time').on('click', function(e){
        $(this).parents('.time-blc-popup').removeClass('show');
        var valueSelect = $(this).siblings('.wrap-select').find('.select-time').val();
        $(this).parents('.time-blc-popup').prev('.input-time').val(valueSelect);

    })
    

    var startStep = 0;
    var stepsValue = [];

    $('.js-step-select').on('change', function(e){
        startStep++;
        changeStep(startStep);
        changeTopBullets(startStep, 'next');

    });

    function changeStep(step){
      $('.slider-item').hide();
      $('.slider-item').eq(step).show();

    
    }

    function changeTopBullets(step, test){
        if(test == 'prev'){
            if(step != 0){

                var currentStep = $('.slider-top .list-item').eq(step); 
                var prevStep = $('.slider-top .list-item').eq(step + 1);
                var selectStep = $('.slider-top .list-item').eq(step - 1);

                $(currentStep).removeClass('select');
                $(currentStep).addClass('active');

                $(prevStep).removeClass('active');

                $(selectStep).addClass('select');

            }else{
                var currentStep = $('.slider-top .list-item').eq(step); 
                var prevStep = $('.slider-top .list-item').eq(step + 1);

                $(currentStep).removeClass('select');
                $(currentStep).addClass('active');

                $(prevStep).removeClass('active');
            }
            

        } else {
            var selectStep = $('.slider-top .list-item').eq(step - 1);
            var activeStep = $('.slider-top .list-item').eq(step);

            $(selectStep).removeClass('active');
            $(selectStep).addClass('select');
            $(activeStep).addClass('active');
        }

    }


    $('.js-prev-btn').on('click', function(e){
        e.preventDefault();
        startStep--;
        changeStep(startStep);
        changeTopBullets(startStep, 'prev');
    });
    $('.js-next-btn').on('click', function(e){
        e.preventDefault();
        
        if(startStep == '1'){
            if($('.js-date-start').val() == '' || 
            $('.js-time-start').val() == '' ||
            $('.js-date-end').val() == '' || 
            $('.js-time-end').val() == ''){
                return false;
            }else{
                startStep++;
                changeStep(startStep);
                changeTopBullets(startStep, 'next');
            }
            
        }else{
            startStep++;
            changeStep(startStep);
            changeTopBullets(startStep, 'next');
        }
        
    })


})