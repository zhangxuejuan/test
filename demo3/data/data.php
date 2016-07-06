<?php

$callback=$_GET['callback'];

$arr=array(
   "success"=>1,
    "books"=>array(
	     array(
		   "name"=>"javascript高级程序设计111223445454565678",
			"price"=>50,
			"publishion"=>"清华大学出版社2222",
			"info"=>array(
				array('edition'=>"第二版111","author"=>"张三丰111")
			)
		 ),
		array(
		"name"=>"javascript权威指南2222",
		"price"=>60,
		"publishion"=>"人民邮电出版社",
		"info"=>array(
				array('edition'=>"第二版22","author"=>"张三丰22")
				
			)
		),
		array( 
		"name"=>"javascript设计模式",
		"price"=>40,
		"publishion"=>"高等教育出版社",
		"info"=>array(
				array('edition'=>"第二版33","author"=>"张三丰333")
			)
		),
		array(
		"name"=>"锋利的jQuery（第2版）",
		"price"=>30,
		"publishion"=>"清华大学出版社",
		"info"=>array(
				array('edition'=>"第二版444","author"=>"张三丰444")
			)
		),
		array(
			"name"=>"编写可维护的JavaScript",
			"price"=>50,
			"publishion"=>"人民邮电出版社",
			"info"=>array(
				array('edition'=>"第二版555","author"=>"张三丰555")
			)
		)	
	)

);

$json=json_encode($arr);

//sleep(3);

echo $callback."(".$json.")";


?>