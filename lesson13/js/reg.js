$(function () {
    //点击注册,让注册框显示
    $(".reg").click(function () {
       $("#reg").show();
    });
    //点击关闭,注册框隐藏
    $("#reg .close").click(function () {
        $("#reg").hide();
    });
    //让注册框水平垂直居中
    $("#reg").css({
        left : ($(window).width() - $("#reg").outerWidth())/2 + "px",
        top : ($(window).height() - $("#reg").outerHeight())/2 + "px"
    });

    $(window).resize(function () {
        $("#reg").css({
            left : ($(window).width() - $("#reg").outerWidth())/2 + "px",
            top : ($(window).height() - $("#reg").outerHeight())/2 + "px"
        });
    });

    //点击注册按钮,发送ajax请求
    $("#reg .submit").click(function () {
        //表单序列化
        var form_data = $("#reg form").serialize();
        console.log(form_data)
        // send ajax
        $.ajax({
            type : "POST",
            url : "http://localhost/Es6Course/lesson13/user.php",
            data : form_data,
            success : function (response) {
               if(response == "success"){
                   alert("注册成功");
                   $("#reg").hide()
               }
            },
            error : function (error) {
                throw error;
            }
        })
    });

});