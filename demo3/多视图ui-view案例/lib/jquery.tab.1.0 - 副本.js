/*
*说明
功能：
作者：
邮箱：
*/

;(function($) {
	$.fn.extend({
		tabs:function(options) {
			var defaults={
				evt:'click',
				index:0,
				target:'.tatContent',
				speed:600,
				setHight:'high',
				direction:"left",
				autoPlay:false
			};
			
			var opts=$.extend({},defaults,options),
				_this=this,
				len=_this.length,
				target=$(opts.target),
				divchildren=target.children(),
				w=divchildren.width(),
				h=divchildren.height();
				
			if(opts.direction=="left") {
			   target.css('width',w*len)
			}else if(opts.direction=="top") {
				target.css('height',h*len)
			}
			
			
			//移动函数
			function move() {
			_this.eq(opts.index).addClass(opts.setHight).siblings().removeClass(opts.setHight); 
//target.animate({"margin-left":-opts.index*w},opts.speed);	
				
			if(opts.direction=="left") {
			  target.animate({"margin-left":-opts.index*w},opts.speed);	
			}else if(opts.direction=="top") {
			 target.animate({"margin-top":-opts.index*h},opts.speed);
			}	
			
}
			
			
			return _this.each(function(i,element) {
				  //alert(element==this);
				  $(this).on(opts.evt,function() {
				     opts.index=i;					 
					 move();
				  
				  })
			
			});
			
			
			
		}
		
		
		
	
	});






})(jQuery);

