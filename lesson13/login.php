<?php

     $user = $_POST["user"];
     $pass = $_POST["pass"];

	$servername = "localhost";
	$username = "root";
	$password = "asdqwe123";
	$dbname= "user";
	// 创建连接
	$conn = mysqli_connect($servername, $username, $password,$dbname);

    //读取数据库数据
    $result = mysqli_query($conn,"SELECT user,pass FROM user_reg");

    while($row = mysqli_fetch_array($result))
    {
        if($user == $row["user"] && $pass == $row["pass"]){
            echo "1";
            return false;
        }else{
            echo "0";
        }
        //echo $row['user'] . " " . $row['pass'];
        //echo "<br>";
    }


	// 检测连接
	if (!$conn) {
    		die("Connection failed: " . mysqli_connect_error());
	}

	//关闭数据库
	mysqli_close($conn);
?>