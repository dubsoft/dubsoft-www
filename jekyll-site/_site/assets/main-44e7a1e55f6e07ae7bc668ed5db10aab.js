$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(window).resize(function(){$(window).width()<976&&$(".navbar-collapse a").click(function(){$(".navbar-collapse").collapse("toggle")})}),$(function(){$(".page-scroll a").bind("click",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()})}),$(document).ready(function(){$("#featured-list").owlCarousel({items:4,itemsDesktop:[1e3,4],itemsDesktopSmall:[900,2],itemsTablet:[600,1],itemsMobile:!1})}),$(document).ready(function(){$().UItoTop({easingType:"easeOutQuart"})}),$(window).load(function(){$(".preloader").length>0&&$(".preloader").fadeOut(1e3)}),$(document).ready(function(){$("#video-modal").on("hide.bs.modal",function(e){var t=$(e.target).find("iframe"),s=t.prop("src");t.prop("src",""),t.prop("src",s)})}),$("body.bg-slider").backstretch(["images/bg7.jpg","images/bg8.jpg","images/bg9.jpg"],{duration:5e3,fade:1e3}),$(".gallery-item").magnificPopup({type:"image",gallery:{enabled:!0}}),$(document).ready(function(){wow=new WOW({animateClass:"animated",offset:150}),wow.init()}),$(document).ready(function(e){e("span.count").length>0&&e("span.count").counterUp({delay:10,time:1e3})}),$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(){},submitSuccess:function(e,t){t.preventDefault();var s=$("input#name").val(),a=$("input#email").val(),r=$("textarea#message").val(),n=s;n.indexOf(" ")>=0&&(n=s.split(" ").slice(0,-1).join(" ")),$.ajax({url:"contact_me.php",type:"POST",data:{name:s,email:a,message:r},cache:!1,success:function(){$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contactForm").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry "+n+" it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!"),$("#success > .alert-danger").append("</div>"),$("#contactForm").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(e){e.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")}),$(function(){$("input").jqBootstrapValidation({preventSubmit:!0,submitError:function(){},submitSuccess:function(e,t){t.preventDefault();var s=$("input#email_subscribe").val();$.ajax({url:"subscribe.php",type:"POST",data:{email:s},cache:!1,success:function(){$("#SubscribeForm #success_newsletter").html("<div class='alert alert-success'>"),$("#SubscribeForm #success_newsletter > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#SubscribeForm #success_newsletter > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#SubscribeForm #success_newsletter > .alert-success").append("</div>"),$("#SubscribeForm").trigger("reset")},error:function(){$("#SubscribeForm #success_newsletter").html("<div class='alert alert-danger'>"),$("#SubscribeForm #success_newsletter > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#SubscribeForm #success_newsletter > .alert-danger").append("<strong>Sorry "+firstName+" it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!"),$("#SubscribeForm #success_newsletter > .alert-danger").append("</div>"),$("#SubscribeForm").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(e){e.preventDefault(),$(this).tab("show")})}),$("#email_subscribe").focus(function(){$("#SubscribeForm #success_newsletter").html("")});