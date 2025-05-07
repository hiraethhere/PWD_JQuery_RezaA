$(function(){

    $("#Hide").click(function(){
        $("#test").hide();
    });

        $("#Show").click(function(){
            $("#test").show();
        });

            $("#Hide2").click(function(){
                $("#test2").hide(100);
            });

            $("#Show2").click(function(){
                $("#test2").show(100);
            });

                $("#Hide3").click(function(){
                    $("#test3").hide(300);
                });

                $("#Show3").click(function(){
                        $("#test3").show(300);
                });

                    $("#Toggle1").click(function(){
                        $("#hsToggle").toggle(500);
                    });
    


    $("#fadebtn1").click(function(){
        $("#fade1").fadeIn(400);
    });

        $("#fadebtn2").click(function(){
            $("#fade2").fadeOut(1000);
        });

            $("#fadebtn3").click(function(){
                $("#fade3").fadeToggle(500);
            });

                $("#fadebtn4").click(function(){
                    $("#fade4").fadeTo(500, 0.5);
                });


    $("#slidebtn1").click(function(){
        $("#slide1").slideDown(500);
    });

        $("#slidebtn2").click(function(){
            $("#slide2").slideUp(700);
        });

            $("#slidebtn3").click(function(){
                $("#slide3").slideToggle(400);
            });

                $("#slidebtn4").click(function(){
                    $("#slide4").slideToggle(600),
                    $("#slide5").slideToggle(600);
                });


    $("#animatebtn1").click(function(){
        $("#animate1").animate({
            left: '68px'
        });
    });  

        $("#animatebtn2").click(function(){
            $("#animate2").animate({
                left: '86px',
                height: '100px',
                width: '50px',
                opacity: '0.5'
            });
        }); 

            $("#animatebtn3").click(function(){
                $("#animate3").animate({
                    opacity: 'hide',
                    height: 'toggle'
                });
            });

                $("#animatebtn4").click(function(){
                    var div = $("#animate4");
                    div.animate({height: '30px'}, 500, function(){
                        div.animate({width: '150px'}, 500, function(){
                            div.animate({left: '70px'}, 500, function(){
                                div.animate({width: '100px'}, 500, function(){
                                    div.animate({left: '0px'}, 500, function(){
                                        div.animate({height: '50px'}, 500);
                                });            
                            });
                        });
                    });
                });
            });
                
        $("#stop3").click(function(){
            $("#stp1").slideToggle(3000);
        });
        $("#stopbtn").click(function(){
            $("#stp1").stop();
        });


        $("#hidec").click(function(){
            $("#c1").hide(700, function(){
                alert("Callback");
            });
        });

        $("#chain").click(function(){
            $("#ch1").css("color", "green").slideUp(1000).slideDown(1000).fadeTo(1000, 0.3);
        });


});