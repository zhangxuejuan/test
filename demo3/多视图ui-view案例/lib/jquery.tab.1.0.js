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
				autoPlay:false,
				time:2000
			};			
			var opts=$.extend({},defaults,options),
				_this=this,
				len=_this.length,
				target=$(opts.target),
				divchildren=target.children(),
				w=divchildren.width(),
				h=divchildren.height(),
				timer=null;
				
			if(opts.direction=="left") {
			   target.css('width',w*len)
			}else if(opts.direction=="top") {
				target.css('height',h*len)
			}
			
			//是否自动播放
			function isPlay() {
				if(opts.autoPlay) {
				
				timer=setInterval(function() {
					opts.index++
					if(opts.index>len-1) {
						opts.index=0;
					}
					move()
				},opts.time);				
			
			}
			}			
			isPlay();			
			//移动函数
			function move() {
			_this.eq(opts.index).addClass(opts.setHight).siblings().removeClass(opts.setHight); 
//target.animate({"margin-left":-opts.index*w},opts.speed);	
				
			if(opts.direction=="left") {
			  target.animate({"margin-left":-opts.index*w},opts.speed);	
			}else if(opts.direction=="top") {
			 target.animate({"margin-top":-opts.index*h},opts.speed);
			}	
			
}			return _this.each(function(i,element) {
				  //alert(element==this);
				  $(this).on(opts.evt,function() {
					 clearInterval(timer); 
				     opts.index=i;					 
					 move();
				  
				  }).on('mouseout',function() {
				  	 isPlay();
				  });
			
			});
		}
	
	});
})(jQuery);

