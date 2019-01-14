<?php

	$servername = "localhost";
	$username = "root";
	$password = "asdqwe123";
	$dbname= "user";
	// 创建连接
	$conn = mysqli_connect($servername, $username, $password,$dbname);

    //读取数据库数据
   $result = mysqli_query($conn,"SELECT title,content FROM user_blog LIMIT 0 ,3");

    $json = '';

  	while ($row = mysqli_fetch_array($result)) {
  		$json .= json_encode($row).',';
  	}

  	echo '['.substr($json, 0 , strlen($json) - 1).']';

	// 检测连接
	if (!$conn) {
    		die("Connection failed: " . mysqli_connect_error());
	}

	//关闭数据库
	mysqli_close($conn);
?>
