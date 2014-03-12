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
    fixedElements: '.logo, .bottom-buttons',
    onLeave: function(index, direction){
      if(index == '1' && direction =='down'){
        $('.logo .text').delay(800).animate({'margin-top': '-200px'}, 300, 'easeInBack');
        $('.intro').addClass('intro-hidden');
      }
      if(index == '5' && direction =='up'){
        $('.bottom-buttons').delay(800).animate({'bottom': '15px'}, 300, 'easeOutBack');
      }
    },
    afterLoad: function(anchorLink){
      if(anchorLink == 'intro'){
        $('.logo .text').delay(800).animate({'margin-top': '0px'}, 200, 'easeOutBack');
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
        $('.drops .text').addClass('animated bounceInLeft');
      }
      if(anchorLink == 'signup'){
        $('.bottom-buttons').delay(600).animate({'bottom': '-100px'}, 300, 'easeInBack');
        $('.signup .text').addClass('animated bounceInDown');
        $('.signup .share-btns').addClass('animated bounceInUp');
        $('.signup .subscribe-form').addClass('animated bounceInLeft');
      }
    }
  });


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

        if ($('.browser-content .complete').length === 6) {
          $('.drops').addClass('completed');
        }
      }
    });
  });

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