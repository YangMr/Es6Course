<?php
	$servername = "localhost";
	$username = "root";
	$password = "asdqwe123";
	$dbname= "user";
	// 创建连接
	$conn = mysqli_connect($servername, $username, $password,$dbname);
 
	// 检测连接
	if (!$conn) {
    		die("Connection failed: " . mysqli_connect_error());
	}
	echo "连接成功";

	//接收前台传递过来的数据
	$user = $_POST["userName"];
	$pass = $_POST["userPass"];
	$sex = $_POST["userSex"];
	$email = $_POST["userEmail"];

	//插入数据
	$sql = "INSERT INTO reg (userName, userPass, userSex, userEmail) VALUES ('$user','$pass', '$sex','$email')";
 
	if (mysqli_query($conn, $sql)) {
    		echo "新记录插入成功";
	} else {
    		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}


	//关闭数据库
	mysqli_close($conn);
 
?>