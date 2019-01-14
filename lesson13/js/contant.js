$(function () {
   $(".member").hover(function () {
       $(".member_ul").show().animate({
           height : "120px",
           opacity : 1
       })
   },function () {
       $(".member_ul").animate({
           height : "0",
           opacity : 0
       },function () {
           $(this).hide()
       })
   });


   $(".member_ul li:eq(0)").click(function () {
        $("#blog").show();
   });
   $("#blog .close").click(function () {
       $("#blog").hide();
   });
   
   $("#blog .submit").click(function () {
      var blog_data = $("#blog form").serialize();
      $.ajax({
          type : "POST",
          url : "http://localhost/Es6Course/lesson13/blog.php",
          data : blog_data,
          success : function (response) {
              console.log(response);
          },
          error : function (error) {
              throw error;
          }
      })
   });

   $.ajax({
       type : "POST",
        url : "http://localhost/Es6Course/lesson13/read_content.php",
        success : function (response) {
            console.log(response)
           var json = JSON.parse(response);
            var html = '';
            for (var i = 0; i < json.length; i ++) {
                html += '<div class="content"><h2>' + json[i].title + '</h2><p>' + json[i].content + '</p></div>';
            }
            $('#index').html(html);
            for (var i = 0; i < json.length; i ++) {
                $('#index .content').eq(i).animate({
                   opacity : 1
                });
            }
        }
   })

});