$(document).ready(function() {

  // Fullpage scroll

  $.fn.fullpage({
    verticalCentered: true,
    css3: true,
    slidesColor: ['#32b9b1', '#f15a5a', '#a6ce59', '#0fa6db', '#ab65e6'],
    navigation: true,
    navigationPosition: 'right',
    anchors: ['intro', 'problem', 'themes', 'drops', 'signup'],
    menu: '#menu',
    navigationTooltips: ['Intro', 'Problem', 'Themes', 'Drops', 'Signup'],
    scrollingSpeed: 300,
    fixedElements: '.logo.fixed, .bottom-buttons',
    onLeave: function(index, direction){
      if(index == '1' && direction =='down'){
        $('.logo .logo-text').delay(800).animate({'margin-top': '-200px'}, 300, 'easeInBack');
        $('.intro').addClass('intro-hidden');
      }
      if(index == '5' && direction =='up'){
        $('.bottom-buttons').delay(800).animate({'bottom': '15px'}, 300, 'easeOutBack');
      }
    },
    afterLoad: function(anchorLink){
      if(anchorLink == 'intro'){
        $('.logo .logo-text').delay(800).animate({'margin-top': '0px'}, 200, 'easeOutBack');
        $('.intro').removeClass('intro-hidden');
      }
      if(anchorLink == 'problem'){
        $('.problem .text').addClass('animated bounceInRight');
      }
      if(anchorLink == 'themes'){
        $('.themes .text').addClass('animated bounceInDown');
        $('.themes .logos').addClass('animated bounceInUp');
        $('.theme-1').delay(800).animate({'margin-left': '-420px'}, 300, 'easeOutBack');
        $('.theme-2').delay(800).animate({'margin-left': '-350px'}, 300, 'easeOutBack');
        $('.theme-3').delay(800).animate({'margin-left': '-150px'}, 300, 'easeOutBack');
        $('.theme-4').delay(800).animate({'margin-left': '-80px'}, 300, 'easeOutBack');
      }
      if(anchorLink == 'drops'){
        $('.drops .left-col .text').addClass('animated bounceInLeft');
        $('.drops .text.mobile').addClass('animated bounceInLeft');
      }
      if(anchorLink == 'signup'){
        $('.bottom-buttons').delay(600).animate({'bottom': '-100px'}, 300, 'easeInBack');
        $('.signup .text').addClass('animated bounceInDown');
        $('.signup .share-btns').addClass('animated bounceInUp');
        $('.signup .subscribe-form').addClass('animated bounceInLeft');
        setTimeout(function(){
          $('.bottom-buttons .share-btns, .bottom-buttons .share').removeClass('active');
        }, 600);
      }
    }
  });


  // Fittext headers
  // jQuery("h1").fitText();


  // Logo animation
  $('.logo').mouseenter(function(){
    if($(".intro").is('.intro-hidden')){
      $('.logo .text').animate({'margin-top': '0px'}, 200, 'easeOutBack');
    }
  });

  $('.logo').mouseleave(function(){
    if($(".intro").is('.intro-hidden')){
      $('.logo .text').stop().animate({'margin-top': '-200px'}, 300, 'easeInBack');
    }
  });


  // Share button js
  $('.bottom-buttons .share').click(function(){
    $(this).toggleClass('active');
    $('.bottom-buttons .share-btns').toggleClass('active');
    return false;
  });


  // Drag and drop widgets
  $(".widgets .widget").each(function(){
    $(this).mousedown(function(){
      var boxClass = $(this).attr('title');
      $(".box." + boxClass + "").addClass('active animated rubberBand');
    });

    $(this).mouseup(function(){
      var boxClass = $(this).attr('title');
      $(".box." + boxClass + "").removeClass('active animated rubberBand');
    });
  });

  $(".widgets .widget").draggable({
    revert: "invalid",
    revertDuration: 500,
  });

  $(".box").each(function(){
    var widgetClass = $(this).attr('title');
    $(this).droppable({
      tolerance: "touch",
      accept: function(e){
        if(e.hasClass(widgetClass)) return true;
      },
      drop: function( event, ui ) {
        $(".widget." + widgetClass + "").addClass("animated tada");
        $(".widget." + widgetClass + "").draggable("disable");
        $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
        $(this).addClass('complete');

        if ($('.browser-content .complete').length == 1) {
          $('.drops').addClass('completed');
          $('.drops .text.ipad').addClass('bounceOutUp');
        }
      }
    });
  });


  // Outer space elements animated
  var $spaceship = $('.spaceship');
  var $rocket = $('.rocket');
  var $planet = $('.planet');
  var $satellite = $('.satellite');
  function spaceAnim(){
    $rocket.delay(400).animate({
      top: "-20%",
      left: "20%"
    }, 5000, 'linear', function(){
      $rocket.removeAttr("style");
      setTimeout(function(){
        spaceAnim();
      }, 35000);
    });

    $spaceship.delay(8200).animate({
      left: "-10%"
    }, 7000, 'linear', function(){
      $spaceship.removeAttr("style");
      setTimeout(function(){
        spaceAnim();
      }, 35000);
    });

    $satellite.delay(17000).animate({
      left: "105%"
    }, 10000, 'linear', function(){
      $satellite.removeAttr("style");
      setTimeout(function(){
        spaceAnim();
      }, 35000);
    });

    $planet.delay(26000).animate({
      left: "-10%"
    }, 14000, 'linear', function(){
      $planet.removeAttr("style");
      setTimeout(function(){
        spaceAnim();
      }, 35000);
    });
  }

  spaceAnim();


  // Share buttons popup js
  $('.twitter').click(function(event) {
    var width  = 575,
        height = 400,
        left   = (screen.width  - width)  / 2,
        top    = (screen.height - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitter', opts);
    return false;
  });
});

function fbShare(url, title, descr, image, winWidth, winHeight) {
  var winTop = (screen.height / 2) - (winHeight / 2);
  var winLeft = (screen.width / 2) - (winWidth / 2);
  window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function googleShare(w,h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  return window.open("https://plus.google.com/share?url=http://kickdrop.me,'','toolbar=no, menubar=no, scrollbars=yes, resizable=yes, width="+w+", height="+h+", top="+top+", left="+left);
}