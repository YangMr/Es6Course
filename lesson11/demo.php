<?php

    echo "hello";

    $userName = $_POST["name"];
    $userAge = $_POST["age"];

   if($userName === "jack" && $userAge === 28){
	echo "jack";
    }else{
	echo "not jack";
   }
?>
