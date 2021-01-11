!function(e,t,n,i){var o=e(t);e.fn.lazyload=function(r){function f(){var t=0;l.each(function(){var n=e(this);if(!h.skip_invisible||n.is(":visible"))if(e.abovethetop(this,h)||e.leftofbegin(this,h));else if(e.belowthefold(this,h)||e.rightoffold(this,h)){if(++t>h.failure_limit)return!1}else n.trigger("appear"),t=0})}var a,l=this,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(i!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),i!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(h,r)),a=h.container===i||h.container===t?o:e(h.container),0===h.event.indexOf("scroll")&&a.bind(h.event,function(){return f()}),this.each(function(){var t=this,n=e(t);t.loaded=!1,n.attr("src")!==i&&n.attr("src")!==!1||n.is("img")&&n.attr("src",h.placeholder),n.one("appear",function(){if(!this.loaded){if(h.appear){var i=l.length;h.appear.call(t,i,h)}e("<img />").bind("load",function(){var i=n.attr("data-"+h.data_attribute);n.hide(),n.parent().is(".flex_ori")?n.attr("src",i):n.parent().css("background-image","url('"+i+"')"),n[h.effect](h.effect_speed),t.loaded=!0;var o=e.grep(l,function(e){return!e.loaded});if(l=e(o),h.load){var r=l.length;h.load.call(t,r,h)}}).attr("src",n.attr("data-"+h.data_attribute))}}),0!==h.event.indexOf("scroll")&&n.bind(h.event,function(){t.loaded||n.trigger("appear")})}),o.bind("resize",function(){f()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&o.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(n).ready(function(){f()}),this},e.belowthefold=function(n,r){var f;return f=r.container===i||r.container===t?(t.innerHeight?t.innerHeight:o.height())+o.scrollTop():e(r.container).offset().top+e(r.container).height(),f<=e(n).offset().top-r.threshold},e.rightoffold=function(n,r){var f;return f=r.container===i||r.container===t?o.width()+o.scrollLeft():e(r.container).offset().left+e(r.container).width(),f<=e(n).offset().left-r.threshold},e.abovethetop=function(n,r){var f;return f=r.container===i||r.container===t?o.scrollTop():e(r.container).offset().top,f>=e(n).offset().top+r.threshold+e(n).height()},e.leftofbegin=function(n,r){var f;return f=r.container===i||r.container===t?o.scrollLeft():e(r.container).offset().left,f>=e(n).offset().left+r.threshold+e(n).width()},e.inviewport=function(t,n){return!(e.rightoffold(t,n)||e.leftofbegin(t,n)||e.belowthefold(t,n)||e.abovethetop(t,n))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);


/* scroll script */
$(document).ready(function(){
  "use strict";
  $(window).resize(function(e){
    console.log(e);                   
  });
  
  var all_scroll = function(){	
	$(window).scroll(function(){
	  var scroll_position = $(window).scrollTop();
	  
	  if(scroll_position >= 1){
		$('#btt').show();	
	  }
	  
	  else{
	    $('#btt').hide();
	  }
    });  
  };
  
  $(document).ready(function(){
    all_scroll();
  });
});
/* end scroll script */

var back_to_top = function(){
  "use strict";
  $('.btt-button').click(function(){
	$('body,html').animate({scrollTop:0},800);
  });	
};


var choose_option_button = function(){
  "use strict";
  $(".search-box-container > ul > li > a").click(function(){
	var myClass = $(this).parent().attr("class");
    $(this).parents().eq(2).find(".sbc-result > #" + myClass).show();
	$(this).parent().addClass('sbc-curr');
	$(".search-box-container > ul > li > a").not(this).parent().removeClass('sbc-curr');
	$(".search-box-container > .sbc-result > div").not("#" + myClass).hide();
  });
};

var popup_box = function(){
  "use strict";
  $(".popup-link").click(function(){
    var getAlt = $(this).parent().attr('title');
    $('*[title="' + getAlt +'"] > .popup-link').toggleClass('popup-link-open');
    $(".popup-link").not('*[title="' + getAlt +'"] > .popup-link').removeClass('popup-link-open');
  	$("#" + getAlt).slideToggle();
  	$(".popup-box").not("#" + getAlt).slideUp();
  });
  
  $(".pbc-overlay, .pbc-close").click(function(){
    $(".popup-link").removeClass('popup-link-open');
  	$(".popup-box").slideUp();
  });
};


var reloadup = function(){
  "use strict";
  var scroll = $(window).scrollTop();
  $("html").scrollTop(scroll);
  $('body').delay(1).animate({
    'scrollTop': $(window).scrollTop()-1
  },100);
};



$(document).ready(function(){
  "use strict";
  back_to_top();
  choose_option_button();
  popup_box();
  reloadup();
});


$(".flex_ori > img").lazyload({effect:"fadeIn"});
$(".column .flex_ori > img").lazyload({effect:"fadeIn"});
$(".porto-img .flex_ori > img").lazyload({effect:"fadeIn"});
$(".rightcolumn .flex_ori > img").lazyload({effect:"fadeIn"});
$(".flex_lazy > img").lazyload({});
$(".column .flex_lazy > img").lazyload({});
$(".porto-img .flex_lazy > img").lazyload({});
$(".rightcolumn .flex_lazy > img").lazyload({});