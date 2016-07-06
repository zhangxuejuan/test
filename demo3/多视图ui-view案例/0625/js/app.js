var myApp=angular.module('myApp',['ui.router']);

	myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
		
	$urlRouterProvider.otherwise('/index/news');
    $stateProvider
	     .state('index',{
	          url:"/index",
		      views:{
			  	 "aa":{templateUrl:"home.html"},
				 "topbar@index":{
					 templateUrl:"header.html",
					 controller:function($scope,$state) {					 
						// $state.go("index.product.dianzi");
						 
					 }
				 },
				 "bottom@index":{
				   templateUrl:"bottom.html",
				   controller:function($scope,$state) {					 
						$scope.info="底部版权@1407W";
						 
					 }
				 }
			  }		
	
	     })	
	     .state('index.news',{
	          url:"/news",
		      templateUrl:"news.html"
	
	     })
		.state('index.product',{
	          url:"/product",
		      templateUrl:"product.html",
		      controller:function($scope,$state) {
			  	$state.go("index.product.dianzi");
			  }
	
	     })
	       .state('index.product.fuzhuang',{
				url:"/fuzhuang",
		        templateUrl:"pro_list.html",
		        controller:function($scope) {
					  $scope.shuju={
					  	  info:[
							  {name:"ipad",price:3000,num:10},
							  {name:"ipad22",price:1000,num:30},
							  {name:"ipad333",price:2000,num:5},
							  {name:"ipad444",price:2300,num:20}
						  
						  ]
					  
					  }
				}	
		
	})

	  .state('index.product.dianzi',{
				url:"/dianzi",
		        templateUrl:"pro_list.html",
		        controller:function($scope,$http) {
					
					  $scope.shuju={
					  	  info:[
							  {name:"aaaa",price:3000,num:10},
							  {name:"bbbb",price:1000,num:30},
							  {name:"ccc",price:2000,num:5},
							  {name:"eeee",price:2300,num:20}
						  
						  ]
					  
					  }
				}	
	
	
	})

	
		
		
	}]);