$(function () {
    $(".login").click(function () {
        $("#login").show()
    })
    
    $("#login .close").click(function () {
        $("#login").hide();
    })

    $("#login .submit").click(function () {
        var login_data = $("#login form").serialize();
        $.ajax({
            type : "POST",
            url : "http://localhost/Es6Course/lesson13/login.php",
            data : login_data,
            success : function (response) {
                if(response == "1"){
                    $("#login").hide();
                    var name = $("#login input:eq(0)").val();
                    $(".login").html(name);
                };
            },
            error : function (error) {
                throw error;
            }
        })
    })

});