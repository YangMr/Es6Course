<?php
  //接收前台传递过来的数据
  	$user = $_POST["user"];
  	$pass = $_POST["pass"];
  	$notPass = $_POST["notpass"];
  	$email = $_POST["email"];
  	$ps = $_POST["ps"];


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




	//插入数据
	$sql = "INSERT INTO user_reg (user, pass, notpass,email, ps) VALUES ('$user','$pass', '$notPass','$email','$ps')";
 
	if (mysqli_query($conn, $sql)) {
    		echo "success";
	} else {
    		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	//关闭数据库
	mysqli_close($conn);
 
?>