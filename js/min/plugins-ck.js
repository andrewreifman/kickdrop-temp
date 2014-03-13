!function(){for(var e,n=function(){},i=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=i.length,t=window.console=window.console||{};o--;)e=i[o],t[e]||(t[e]=n)}(),function(e){e.fn.fullpage=function(n){function i(i){if(n.autoScrolling){i.preventDefault();var o=i.originalEvent;if(i=e(".section.active"),!M&&!L)if(o=C(o),V=o.y,q=o.x,i.find(".slides").length&&Math.abs(B-q)>Math.abs(D-V))Math.abs(B-q)>e(window).width()/100*n.touchSensitivity&&(B>q?i.find(".controlArrow.next:visible").trigger("click"):i.find(".controlArrow.prev:visible").trigger("click"));else if(i=i.find(".slides").length?i.find(".slide.active").find(".scrollable"):i.find(".scrollable"),Math.abs(D-V)>e(window).height()/100*n.touchSensitivity)if(D>V)if(0<i.length){if(!f("bottom",i))return!0;e.fn.fullpage.moveSectionDown()}else e.fn.fullpage.moveSectionDown();else if(V>D)if(0<i.length){if(!f("top",i))return!0;e.fn.fullpage.moveSectionUp()}else e.fn.fullpage.moveSectionUp()}}function o(e){n.autoScrolling&&(e=C(e.originalEvent),D=e.y,B=e.x)}function t(i){if(n.autoScrolling){i=window.event||i,i=Math.max(-1,Math.min(1,i.wheelDelta||-i.detail));var o;if(o=e(".section.active"),!M)if(o=o.find(".slides").length?o.find(".slide.active").find(".scrollable"):o.find(".scrollable"),0>i)if(0<o.length){if(!f("bottom",o))return!0;e.fn.fullpage.moveSectionDown()}else e.fn.fullpage.moveSectionDown();else if(0<o.length){if(!f("top",o))return!0;e.fn.fullpage.moveSectionUp()}else e.fn.fullpage.moveSectionUp();return!1}}function a(i,o,t){var a={},l=i.position();if("undefined"!=typeof l){var l=l.top,s=u(i),r=i.data("anchor"),f=i.index(".section"),v=i.find(".slide.active"),p=e(".section.active");if(v.length)var h=v.data("anchor"),m=v.index();if(n.autoScrolling&&n.continuousVertical&&"undefined"!=typeof t&&(!t&&"up"==s||t&&"down"==s)){t?e(".section.active").before(p.nextAll(".section")):e(".section.active").after(p.prevAll(".section").get().reverse()),y(e(".section.active").position().top);var w=p,l=i.position(),l=l.top,s=u(i)}p=p.index(".section")+1,i.addClass("active").siblings().removeClass("active"),M=!0,"undefined"!=typeof r&&b(m,h,r),n.autoScrolling?(a.top=-l,i="#superContainer"):(a.scrollTop=l,i="html, body");var S=function(){w&&w.length&&(t?e(".section:first").before(w):e(".section:last").after(w),y(e(".section.active").position().top))};n.css3&&n.autoScrolling?(e.isFunction(n.onLeave)&&n.onLeave.call(this,p,s),g("translate3d(0px, -"+l+"px, 0px)",!0),setTimeout(function(){S(),e.isFunction(n.afterLoad)&&n.afterLoad.call(this,r,f+1),setTimeout(function(){M=!1,e.isFunction(o)&&o.call(this)},T)},n.scrollingSpeed)):(e.isFunction(n.onLeave)&&n.onLeave.call(this,p,s),e(i).animate(a,n.scrollingSpeed,n.easing,function(){S(),e.isFunction(n.afterLoad)&&n.afterLoad.call(this,r,f+1),setTimeout(function(){M=!1,e.isFunction(o)&&o.call(this)},T)})),F=r,n.autoScrolling&&(d(r),c(r,f))}}function l(i,o){var t=o.position(),a=i.find(".slidesContainer").parent(),l=o.index(),s=i.closest(".section"),r=s.index(".section"),c=s.data("anchor"),d=s.find(".fullPage-slidesNav"),f=o.data("anchor"),u=E;if(n.onSlideLeave){var v=s.find(".slide.active").index(),p;p=v>l?"left":"right",u||e.isFunction(n.onSlideLeave)&&n.onSlideLeave.call(this,c,r+1,v,p)}o.addClass("active").siblings().removeClass("active"),"undefined"==typeof f&&(f=l),s.hasClass("active")&&(n.loopHorizontal||(s.find(".controlArrow.prev").toggle(0!=l),s.find(".controlArrow.next").toggle(!o.is(":last-child"))),b(l,f,c)),n.css3?(t="translate3d(-"+t.left+"px, 0px, 0px)",i.find(".slidesContainer").addClass("easing").css({"-webkit-transform":t,"-moz-transform":t,"-ms-transform":t,transform:t}),setTimeout(function(){u||e.isFunction(n.afterSlideLoad)&&n.afterSlideLoad.call(this,c,r+1,f,l),L=!1},n.scrollingSpeed,n.easing)):a.animate({scrollLeft:t.left},n.scrollingSpeed,n.easing,function(){u||e.isFunction(n.afterSlideLoad)&&n.afterSlideLoad.call(this,c,r+1,f,l),L=!1}),d.find(".active").removeClass("active"),d.find("li").eq(l).find("a").addClass("active")}function s(){E=!0;var i=e(window).width();A=e(window).height(),n.resize&&r(A,i),e(".section").each(function(){if(parseInt(e(this).css("padding-bottom")),parseInt(e(this).css("padding-top")),n.scrollOverflow){var i=e(this).find(".slide");i.length?i.each(function(){v(e(this))}):v(e(this))}n.verticalCentered&&e(this).find(".tableCell").css("height",h(e(this))+"px"),e(this).css("height",A+"px"),i=e(this).find(".slides"),i.length&&l(i,i.find(".slide.active"))}),e(".section.active").position(),i=e(".section.active"),i.index(".section")&&a(i),E=!1}function r(n,i){var o=825,t=n;825>n||900>i?(900>i&&(t=i,o=900),o=(100*t/o).toFixed(2),e("body").css("font-size",o+"%")):e("body").css("font-size","100%")}function c(i,o){n.navigation&&(e("#fullPage-nav").find(".active").removeClass("active"),i?e("#fullPage-nav").find('a[href="#'+i+'"]').addClass("active"):e("#fullPage-nav").find("li").eq(o).find("a").addClass("active"))}function d(i){n.menu&&(e(n.menu).find(".active").removeClass("active"),e(n.menu).find('[data-menuanchor="'+i+'"]').addClass("active"))}function f(e,n){return"top"===e?!n.scrollTop():"bottom"===e?n.scrollTop()+n.innerHeight()>=n[0].scrollHeight:void 0}function u(n){var i=e(".section.active").index(".section");return n=n.index(".section"),i>n?"up":"down"}function v(e){e.css("overflow","hidden");var i=e.closest(".section"),o=e.find(".scrollable");if(o.length)var t=e.find(".scrollable").get(0).scrollHeight;else t=e.get(0).scrollHeight,n.verticalCentered&&(t=e.find(".tableCell").get(0).scrollHeight);i=A-parseInt(i.css("padding-bottom"))-parseInt(i.css("padding-top")),t>i?o.length?o.css("height",i+"px").parent().css("height",i+"px"):(n.verticalCentered?e.find(".tableCell").wrapInner('<div class="scrollable" />'):e.wrapInner('<div class="scrollable" />'),e.find(".scrollable").slimScroll({height:i+"px",size:"10px",alwaysVisible:!0})):(e.find(".scrollable").children().first().unwrap().unwrap(),e.find(".slimScrollBar").remove(),e.find(".slimScrollRail").remove()),e.css("overflow","")}function p(e){e.addClass("table").wrapInner('<div class="tableCell" style="height:'+h(e)+'px;" />')}function h(e){var i=A;return(n.paddingTop||n.paddingBottom)&&(i=e,i.hasClass("section")||(i=e.closest(".section")),e=parseInt(i.css("padding-top"))+parseInt(i.css("padding-bottom")),i=A-e),i}function g(n,i){e("#superContainer").toggleClass("easing",i),e("#superContainer").css({"-webkit-transform":n,"-moz-transform":n,"-ms-transform":n,transform:n})}function m(n,i){"undefined"==typeof i&&(i=0);var o=isNaN(n)?e('[data-anchor="'+n+'"]'):e(".section").eq(n-1);n===F||o.hasClass("active")?w(o,i):a(o,function(){w(o,i)})}function w(e,n){if("undefined"!=typeof n){var i=e.find(".slides"),o=i.find('[data-anchor="'+n+'"]');o.length||(o=i.find(".slide").eq(n)),o.length&&l(i,o)}}function S(e,i){e.append('<div class="fullPage-slidesNav"><ul></ul></div>');var o=e.find(".fullPage-slidesNav");o.addClass(n.slidesNavPosition);for(var t=0;i>t;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass("active")}function b(e,i,o){var t="";n.anchors.length&&(e?("undefined"!=typeof o&&(t=o),"undefined"==typeof i&&(i=e),k=i,location.hash=t+"/"+i):("undefined"!=typeof e&&(k=i),location.hash=o))}function x(){var e=document.createElement("p"),n,i={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(e,null);for(var o in i)void 0!==e.style[o]&&(e.style[o]="translate3d(1px,1px,1px)",n=window.getComputedStyle(e).getPropertyValue(i[o]));return document.body.removeChild(e),void 0!==n&&0<n.length&&"none"!==n}function C(e){var n=[];return window.navigator.msPointerEnabled?(n.y=e.pageY,n.x=e.pageX):(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function y(i){n.css3?g("translate3d(0px, -"+i+"px, 0px)",!1):e("#superContainer").css("top",-i)}n=e.extend({verticalCentered:!0,resize:!0,slidesColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",menu:!1,navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],slidesNavigation:!1,slidesNavPosition:"bottom",controlArrowColor:"#fff",loopBottom:!1,loopTop:!1,loopHorizontal:!0,autoScrolling:!0,scrollOverflow:!1,css3:!1,paddingTop:0,paddingBottom:0,fixedElements:null,normalScrollElements:null,keyboardScrolling:!0,touchSensitivity:5,continuousVertical:!1,animateAnchor:!0,afterLoad:null,onLeave:null,afterRender:null,afterSlideLoad:null,onSlideLeave:null},n),n.continuousVertical&&(n.loopTop||n.loopBottom)&&(n.continuousVertical=!1,console&&console.log&&console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));var T=600;e.fn.fullpage.setAutoScrolling=function(i){n.autoScrolling=i,i=e(".section.active"),n.autoScrolling?(e("html, body").css({overflow:"hidden",height:"100%"}),i.length&&y(i.position().top)):(e("html, body").css({overflow:"auto",height:"auto"}),y(0),e("html, body").scrollTop(i.position().top))},e.fn.fullpage.setScrollingSpeed=function(e){n.scrollingSpeed=e},e.fn.fullpage.setMouseWheelScrolling=function(e){e?document.addEventListener?(document.addEventListener("mousewheel",t,!1),document.addEventListener("DOMMouseScroll",t,!1)):document.attachEvent("onmousewheel",t):document.addEventListener?(document.removeEventListener("mousewheel",t,!1),document.removeEventListener("DOMMouseScroll",t,!1)):document.detachEvent("onmousewheel",t)},e.fn.fullpage.setAllowScrolling=function(n){n?(e.fn.fullpage.setMouseWheelScrolling(!0),P&&(e(document).off("touchstart MSPointerDown").on("touchstart MSPointerDown",o),e(document).off("touchmove MSPointerMove").on("touchmove MSPointerMove",i))):(e.fn.fullpage.setMouseWheelScrolling(!1),P&&(e(document).off("touchstart MSPointerDown"),e(document).off("touchmove MSPointerMove")))},e.fn.fullpage.setKeyboardScrolling=function(e){n.keyboardScrolling=e};var L=!1,P=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/),A=e(window).height(),M=!1,E=!1,F,k;if(e.fn.fullpage.setAllowScrolling(!0),n.css3&&(n.css3=x()),e("body").wrapInner('<div id="superContainer" />'),n.navigation){e("body").append('<div id="fullPage-nav"><ul></ul></div>');var I=e("#fullPage-nav");I.css("color",n.navigationColor),I.addClass(n.navigationPosition)}e(".section").each(function(i){var o=e(this).find(".slide"),t=o.length;if(i||0!==e(".section.active").length||e(this).addClass("active"),e(this).css("height",A+"px"),(n.paddingTop||n.paddingBottom)&&e(this).css("padding",n.paddingTop+" 0 "+n.paddingBottom+" 0"),"undefined"!=typeof n.slidesColor[i]&&e(this).css("background-color",n.slidesColor[i]),"undefined"!=typeof n.anchors[i]&&e(this).attr("data-anchor",n.anchors[i]),n.navigation){var a="";n.anchors.length&&(a=n.anchors[i]),i=n.navigationTooltips[i],"undefined"==typeof i&&(i=""),I.find("ul").append('<li data-tooltip="'+i+'"><a href="#'+a+'"><span></span></a></li>')}if(t>0){var a=100*t,l=100/t;o.wrapAll('<div class="slidesContainer" />'),o.parent().wrap('<div class="slides" />'),e(this).find(".slidesContainer").css("width",a+"%"),e(this).find(".slides").after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>'),"#fff"!=n.controlArrowColor&&(e(this).find(".controlArrow.next").css("border-color","transparent transparent transparent "+n.controlArrowColor),e(this).find(".controlArrow.prev").css("border-color","transparent "+n.controlArrowColor+" transparent transparent")),n.loopHorizontal||e(this).find(".controlArrow.prev").hide(),n.slidesNavigation&&S(e(this),t),o.each(function(i){i||e(this).addClass("active"),e(this).css("width",l+"%"),n.verticalCentered&&p(e(this))})}else n.verticalCentered&&p(e(this))}).promise().done(function(){e.fn.fullpage.setAutoScrolling(n.autoScrolling),n.fixedElements&&n.css3&&e(n.fixedElements).appendTo("body"),n.navigation&&(I.css("margin-top","-"+I.height()/2+"px"),I.find("li").eq(e(".section.active").index(".section")).find("a").addClass("active")),n.menu&&n.css3&&e(n.menu).appendTo("body"),n.scrollOverflow?e(window).on("load",function(){e(".section").each(function(){var n=e(this).find(".slide");n.length?n.each(function(){v(e(this))}):v(e(this))}),e.isFunction(n.afterRender)&&n.afterRender.call(this)}):e.isFunction(n.afterRender)&&n.afterRender.call(this);var i=window.location.hash.replace("#","").split("/")[0];if(i.length){var o=e('[data-anchor="'+i+'"]');!n.animateAnchor&&o.length&&(y(o.position().top),e.isFunction(n.afterLoad)&&n.afterLoad.call(this,i,o.index(".section")+1),o.addClass("active").siblings().removeClass("active"))}e(window).on("load",function(){var e=window.location.hash.replace("#","").split("/"),n=e[0],e=e[1];n&&m(n,e)})});var z,N=!1;e(window).scroll(function(i){if(!n.autoScrolling){var o=e(window).scrollTop();if(i=e(".section").map(function(){return e(this).offset().top<o+100?e(this):void 0}),i=i[i.length-1],!i.hasClass("active")){N=!0;var t=u(i);e(".section.active").removeClass("active"),i.addClass("active");var a=i.data("anchor");e.isFunction(n.onLeave)&&n.onLeave.call(this,i.index(".section"),t),e.isFunction(n.afterLoad)&&n.afterLoad.call(this,a,i.index(".section")+1),d(a),c(a,0),n.anchors.length&&!M&&(F=a,location.hash=a),clearTimeout(z),z=setTimeout(function(){N=!1},100)}}});var D=0,B=0,V=0,q=0;if(e.fn.fullpage.moveSectionUp=function(){var i=e(".section.active").prev(".section");i.length||!n.loopTop&&!n.continuousVertical||(i=e(".section").last()),i.length&&a(i,null,!0)},e.fn.fullpage.moveSectionDown=function(){var i=e(".section.active").next(".section");i.length||!n.loopBottom&&!n.continuousVertical||(i=e(".section").first()),(0<i.length||!i.length&&(n.loopBottom||n.continuousVertical))&&a(i,null,!1)},e.fn.fullpage.moveTo=function(n,i){var o="",o=isNaN(n)?e('[data-anchor="'+n+'"]'):e(".section").eq(n-1);"undefined"!==i?m(n,i):0<o.length&&a(o)},e(window).on("hashchange",function(){if(!N){var e=window.location.hash.replace("#","").split("/"),n=e[0],e=e[1],i="undefined"==typeof F,o="undefined"==typeof F&&"undefined"==typeof e;(n&&n!==F&&!i||o||!L&&k!=e)&&m(n,e)}}),e(document).keydown(function(i){if(n.keyboardScrolling&&!M)switch(i.which){case 38:case 33:e.fn.fullpage.moveSectionUp();break;case 40:case 34:e.fn.fullpage.moveSectionDown();break;case 37:e(".section.active").find(".controlArrow.prev:visible").trigger("click");break;case 39:e(".section.active").find(".controlArrow.next:visible").trigger("click")}}),e(document).on("click","#fullPage-nav a",function(n){n.preventDefault(),n=e(this).parent().index(),a(e(".section").eq(n))}),e(document).on({mouseenter:function(){var i=e(this).data("tooltip");e('<div class="fullPage-tooltip '+n.navigationPosition+'">'+i+"</div>").hide().appendTo(e(this)).fadeIn(200)},mouseleave:function(){e(this).find(".fullPage-tooltip").fadeOut().remove()}},"#fullPage-nav li"),n.normalScrollElements&&(e(document).on("mouseover",n.normalScrollElements,function(){e.fn.fullpage.setMouseWheelScrolling(!1)}),e(document).on("mouseout",n.normalScrollElements,function(){e.fn.fullpage.setMouseWheelScrolling(!0)})),e(".section").on("click",".controlArrow",function(){if(!L){L=!0;var n=e(this).closest(".section").find(".slides"),i=n.find(".slide.active"),o=null,o=e(this).hasClass("prev")?i.prev(".slide"):i.next(".slide");o.length||(o=i.siblings(e(this).hasClass("prev")?":last":":first")),l(n,o)}}),e(".section").on("click",".toSlide",function(n){n.preventDefault(),n=e(this).closest(".section").find(".slides"),n.find(".slide.active");var i=null,i=n.find(".slide").eq(e(this).data("index")-1);0<i.length&&l(n,i)}),!P){var O;e(window).resize(function(){clearTimeout(O),O=setTimeout(s,500)})}e(window).bind("orientationchange",function(){s()}),e(document).on("click",".fullPage-slidesNav a",function(n){n.preventDefault(),n=e(this).closest(".section").find(".slides");var i=n.find(".slide").eq(e(this).closest("li").index());l(n,i)})}}(jQuery),function(e){e.fn.fitText=function(n,i){var o=n||1,t=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},i);return this.each(function(){var n=e(this),i=function(){n.css("font-size",Math.max(Math.min(n.width()/(10*o),parseFloat(t.maxFontSize)),parseFloat(t.minFontSize)))};i(),e(window).on("resize.fittext orientationchange.fittext",i)})}}(jQuery);