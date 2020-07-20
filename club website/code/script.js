$(document).ready(function() {
  // code for wow + animate
  new WOW().init();
  $(window).scroll(function() {
    var locationBody = $(window).scrollTop();
    if (locationBody >= 600) {
      $(".nav-bar").addClass("sticky");
    } else {
      $(".nav-bar").removeClass("sticky");
    }
    if (locationBody >= 600) {
      $(".up-icon").addClass("visible");
    } else {
      $(".up-icon").removeClass("visible");
    }
    $(".up-icon").click(function(e) {
      $("html,body").animate({ scrollTop: $("html,body").offset().top }, 1);
      e.preventDefault();
      return 0;
    });
  });

  // scroll smonth
  $("a[href*=\\#]").on("click", function(event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
  //-------------------------------- animate for slide----------------------------
  // next
  $(".next").click(function(e) {
    e.preventDefault();
    if ($(".on").next().length == 1) {
      $(".on")
        .addClass("mid-left")
        .one("webkitAnimationEnd", function() {
          $(this).removeClass("on mid-left");
        });
      $(".on")
        .next()
        .addClass("on-copy")
        .addClass("right-mid")
        .one("webkitAnimationEnd", function() {
          $(this)
            .removeClass("on-copy right-mid")
            .addClass("on");
        });
    } else {
      $(".on")
        .addClass("mid-left")
        .one("webkitAnimationEnd", function() {
          $(this).removeClass("on mid-left");
        });
      $(".slide .choose:first-child")
        .addClass("on-copy")
        .addClass("right-mid")
        .one("webkitAnimationEnd", function() {
          $(this)
            .removeClass("on-copy right-mid")
            .addClass("on");
        });
    }
  });
  // previous button
  $(".previous").click(function(e) {
    e.preventDefault();
    if ($(".on").prev().length == 1) {
      $(".on")
        .addClass("mid-right")
        .one("webkitAnimationEnd", function() {
          $(this).removeClass("mid-right on");
        });
      $(".on")
        .prev()
        .addClass("left-mid on-copy")
        .one("webkitAnimationEnd", function() {
          $(this)
            .removeClass("left-mid on-copy")
            .addClass("on");
        });
    } else {
      $(".on")
        .addClass("mid-right")
        .one("webkitAnimationEnd", function() {
          $(this).removeClass("mid-right on");
        });
      $(".slide .one-slide:last-child")
        .addClass("left-mid on-copy")
        .one("webkitAnimationEnd", function() {
          $(this)
            .removeClass("left-mid on-copy")
            .addClass("on");
        });
    }
  });
  // --------------------------animate for button-------------------------//
  // when click on control-icon
  $(".next").click(function(e) {
    e.preventDefault();
    if ($(".active").next().length == 1) {
      $(".active")
        .next()
        .addClass("active-copy");
      $(".active").removeClass("active");
      $(".active-copy")
        .addClass("active")
        .removeClass("active-copy");
    } else {
      $(".control-button .fas:first-child").addClass("active-copy");
      $(".active").removeClass("active");
      $(".control-button .fas:first-child")
        .addClass("active")
        .removeClass("active-copy");
    }
  });
  // when click previous button-icon
  $(".previous").click(function(e) {
    e.preventDefault();
    if ($(".active").prev().length == 1) {
      $(".active")
        .prev()
        .addClass("active-copy");

      $(".active").removeClass("active");
      $(".active-copy")
        .addClass("active")
        .removeClass("active-copy");
    } else {
      $(".control-button .fas:last-child").addClass("active-copy");
      $(".active").removeClass("active");
      $(".active-copy")
        .addClass("active")
        .removeClass("active-copy");
    }
  });
});
