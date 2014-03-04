$(document).ready(function() {

  // Fullpage scroll

  $.fn.fullpage({
    verticalCentered: true,
    css3: true,
    slidesColor: ['#32b9b1', '#f15a5a', '#a6ce59', '#0fa6db', '#f19849'],
    navigation: true,
    navigationPosition: 'right',
    anchors: ['intro', 'problem', 'themes', 'drops', 'finished', 'signup'],
    scrollingSpeed: 0,
    fixedElements: '.shoe-small',
    onLeave: function(index){
      if(index == '1'){
        $('.shoe-small').delay(800).animate({right: '15px'}, 400, 'easeOutExpo');
      }
    },
    afterLoad: function(anchorLink){
      if(anchorLink == 'intro'){
        $('.shoe-small').delay(400).animate({right: '-50px'}, 300, 'easeInExpo');
      }
      if(anchorLink == 'themes'){
        $('.theme-1').delay(1000).animate({'margin-left': '-420px'}, 300, 'easeOutBack');
        $('.theme-2').delay(1000).animate({'margin-left': '-350px'}, 300, 'easeOutBack');
        $('.theme-3').delay(1000).animate({'margin-left': '-150px'}, 300, 'easeOutBack');
        $('.theme-4').delay(1000).animate({'margin-left': '-80px'}, 300, 'easeOutBack');
      }
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
      }
    });
  });
});