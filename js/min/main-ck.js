function fbShare(e,t,a,n,o,i){var s=screen.height/2-i/2,r=screen.width/2-o/2;window.open("http://www.facebook.com/sharer.php?s=100&p[title]="+t+"&p[summary]="+a+"&p[url]="+e+"&p[images][0]="+n,"sharer","top="+s+",left="+r+",toolbar=0,status=0,width="+o+",height="+i)}function googleShare(e,t){var a=screen.width/2-e/2,n=screen.height/2-t/2;return window.open("https://plus.google.com/share?url=http://kickdrop.me,'','toolbar=no, menubar=no, scrollbars=yes, resizable=yes, width="+e+", height="+t+", top="+n+", left="+a)}$(document).ready(function(){function e(){t.animate({left:"-110%"},8e3,"linear",function(){t.removeAttr("style"),setTimeout(function(){e()},2e3)})}$.fn.fullpage({verticalCentered:!0,css3:!0,slidesColor:["#32b9b1","#f15a5a","#a6ce59","#0fa6db","#ab65e6"],navigation:!0,navigationPosition:"right",anchors:["intro","problem","themes","drops","signup"],menu:"#menu",navigationTooltips:["Intro","Problem","Themes","Drops","Signup"],scrollingSpeed:300,fixedElements:".logo, .bottom-buttons",onLeave:function(e,t){"1"==e&&"down"==t&&($(".logo .text").delay(800).animate({"margin-top":"-200px"},300,"easeInBack"),$(".intro").addClass("intro-hidden")),"5"==e&&"up"==t&&$(".bottom-buttons").delay(800).animate({bottom:"15px"},300,"easeOutBack")},afterLoad:function(e){"intro"==e&&($(".logo .text").delay(800).animate({"margin-top":"0px"},200,"easeOutBack"),$(".intro").removeClass("intro-hidden")),"problem"==e&&$(".problem .text").addClass("animated bounceInRight"),"themes"==e&&($(".themes .text").addClass("animated bounceInDown"),$(".themes .logos").addClass("animated bounceInUp"),$(".theme-1").delay(800).animate({"margin-left":"-420px"},300,"easeOutBack"),$(".theme-2").delay(800).animate({"margin-left":"-350px"},300,"easeOutBack"),$(".theme-3").delay(800).animate({"margin-left":"-150px"},300,"easeOutBack"),$(".theme-4").delay(800).animate({"margin-left":"-80px"},300,"easeOutBack")),"drops"==e&&$(".drops .text").addClass("animated bounceInLeft"),"signup"==e&&($(".bottom-buttons").delay(600).animate({bottom:"-100px"},300,"easeInBack"),$(".signup .text").addClass("animated bounceInDown"),$(".signup .share-btns").addClass("animated bounceInUp"),$(".signup .subscribe-form").addClass("animated bounceInLeft"))}}),$(".logo").mouseenter(function(){$(".intro").is(".intro-hidden")&&$(".logo .text").animate({"margin-top":"0px"},200,"easeOutBack")}),$(".logo").mouseleave(function(){$(".intro").is(".intro-hidden")&&$(".logo .text").stop().animate({"margin-top":"-200px"},300,"easeInBack")}),$(".bottom-buttons .share").click(function(){return $(this).toggleClass("active"),$(".bottom-buttons .share-btns").toggleClass("active"),!1}),$(".widgets .widget").each(function(){$(this).mousedown(function(){var e=$(this).attr("title");$(".box."+e).addClass("active animated rubberBand")}),$(this).mouseup(function(){var e=$(this).attr("title");$(".box."+e).removeClass("active animated rubberBand")})}),$(".widgets .widget").draggable({revert:"invalid",revertDuration:500}),$(".box").each(function(){var e=$(this).attr("title");$(this).droppable({tolerance:"touch",accept:function(t){return t.hasClass(e)?!0:void 0},drop:function(t,a){$(".widget."+e).addClass("animated tada"),$(".widget."+e).draggable("disable"),$(a.draggable).detach().css({top:0,left:0}).appendTo(this),$(this).addClass("complete"),6===$(".browser-content .complete").length&&$(".drops").addClass("completed")}})});var t=$(".spaceship");e(),$(".twitter").click(function(e){var t=575,a=400,n=(screen.width-t)/2,o=(screen.height-a)/2,i=this.href,s="status=1,width="+t+",height="+a+",top="+o+",left="+n;return window.open(i,"twitter",s),!1})});