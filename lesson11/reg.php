<?php
	//主机名
	$servername = "localhost";
	//数据库用户名
	$username = "root";
	//数据库密码
	$password = "asdqwe123";
 
	// 创建连接
	$conn = mysqli_connect($servername, $username, $password);

	// 检测连接
	if (!$conn) {
    		die("Connection failed: " . mysqli_connect_error());
	}

	// 创建数据库
	$sql = "CREATE DATABASE user";
	if ($conn->query($sql) === TRUE) {
    		echo "数据库创建成功";
	} else {
    		echo "Error creating database: " . $conn->error;
	}

	// 使用 sql 创建数据表
	$sql = "CREATE TABLE reg (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
		userName VARCHAR(30) NOT NULL,
		userPass VARCHAR(30) NOT NULL,
		userSex VARCHAR(50),
		userEmail  VARCHAR(50)
	)";
 
	if ($conn->query($sql) === TRUE) {
   		 echo "Table MyGuests created successfully";
	} else {
   		 echo "创建数据表错误: " . $conn->error;
	}
	
	$name = $_POST["userName"];
	$pass = $_POST["userPass"];
	$sex = $_POST["userSex"];
	$email = $_POST["userEmail"];


	$sql = "INSERT INTO MyGuests (userName, userPass, userSex,userEmail)
VALUES ($name, $pass, $sex,$email)";
 
	if ($conn->query($sql) === TRUE) {
   		 echo "新记录插入成功";
	} else {
    		echo "Error: " . $sql . "<br>" . $conn->error;
	}
 

	
	echo $name;
	echo $pass;
	echo $sex;
	echo $email;
?>