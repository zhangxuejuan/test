/*
*说明
*/

;(function($){
	$.fn.extend({
		setStyle:function(options) {
			var defaults={
				 bg:'#ccc',
				 textColor:'#0f0',
				 w:300,
				 h:50
			}
			
			var opts=$.extend({},defaults,options),_this=this;
			
			//  this == $(this)			
			_this.css({
				width:opts.w,
				height:opts.h,
				background:opts.bg,
				color:opts.textColor
			});
			
			
		}
	
	});

})(jQuery);