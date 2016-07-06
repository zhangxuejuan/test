/*
*插件功能：实现创建n个li
*插件版本;1.0
*参数：target:要设置的目标dom元素,n代表要创建li数量
*作者：1406E
*/


;(function($) {
   /*  $.extend({
	 	createli:function(options) {
		   var  defaults={
			   		target:'.box',
					n:5
		   
		   }
		   var opts=$.extend({},defaults,options);
		   var ohtml="";
		   for(var i=0;i<opts.n;i++) {
		   		ohtml+="<li>列表"+(i+1)+"</li>";
		   }
			
		   $(opts.target).html(ohtml);	
		
		}
	 });*/
	
	$.createli=function(options) {
		   var  defaults={
			   		target:'.box',
					n:5
		   
		   }
		   var opts=$.extend({},defaults,options);
		   var ohtml="";
		   for(var i=0;i<opts.n;i++) {
		   		ohtml+="<li>列表"+(i+1)+"</li>";
		   }
			
		   $(opts.target).html(ohtml);	
		
		}






})(jQuery);