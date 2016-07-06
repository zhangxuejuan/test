var myApp=angular.module("myApp",[]);
    myApp.controller('ctr',['$scope',function($scope) {
	
	
	}]);


   myApp.directive("newslist",function() {
   		return {
		   restrict:"EACM",
		   replace:true,
		   template:"<div class='box'>这是由自定义指令生成的内容111</div>"
		
		}
   
   });