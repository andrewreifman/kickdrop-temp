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
    scrollingSpeed: 100,
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
      if(anchorLink == 'themes'){
        $('.theme-1').delay(1000).animate({'margin-left': '-420px'}, 300, 'easeOutBack');
        $('.theme-2').delay(1000).animate({'margin-left': '-350px'}, 300, 'easeOutBack');
        $('.theme-3').delay(1000).animate({'margin-left': '-150px'}, 300, 'easeOutBack');
        $('.theme-4').delay(1000).animate({'margin-left': '-80px'}, 300, 'easeOutBack');
      }
      if(anchorLink == 'signup'){
        $('.bottom-buttons').delay(600).animate({'bottom': '-100px'}, 300, 'easeInBack');
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
      $('.logo .text').animate({'margin-top': '-200px'}, 300, 'easeInBack');
    }
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
});