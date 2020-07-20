$(document).ready(function () {
  var activeLocation = $(".active").index() + 1;
  $(
    ".slide .control-button .button:nth-child(" + activeLocation + ")"
  ).addClass("btn-scale");
  $(".control-button .button").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var clickLocation = $(this).index() + 1;
    var currentLocation = $(".active").index() + 1;
    // current slide location < wishes slide location
    if (currentLocation < clickLocation) {
      $(".active")
        .addClass("mid-bottom")
        .stop(true, true)
        .one("webkitAnimationEnd", function () {
          $(this).removeClass("active mid-bottom");
        });
      $(".slide .content:nth-child(" + clickLocation + ")")
        .stop(true, true)
        .addClass("active-copy top-mid")
        .one("webkitAnimationEnd", function () {
          $(this).removeClass("active-copy top-mid").addClass("active");
        });
    }
    if (currentLocation > clickLocation) {
      $(".active")
        .stop(true, true)
        .addClass("mid-top")
        .one("webkitAnimationEnd", function () {
          $(this).removeClass("active mid-top");
        });
      $(".slide .content:nth-child(" + clickLocation + ")")
        .stop(true, true)
        .addClass("active-copy bottom-mid")
        .one("webkitAnimationEnd", function () {
          $(this).removeClass("active-copy bottom-mid").addClass("active");
        });
    }
    if (currentLocation == clickLocation) {
      // alert("do nothing");
    }
    $(".control-button .button").removeClass("btn-scale");
    $(".control-button .button:nth-child(" + clickLocation + ")").addClass(
      "btn-scale"
    );
  });
  var setIn = setInterval(function () {
    var nextButton = $(".control-button .btn-scale").next();
    // console.log(nextButton);
    if (nextButton.length == 1) {
      nextButton.click();
    } else {
      $(".control-button .button").removeClass("btn-scale");
      $(".control-button .button:first-child()").addClass("btn-scale");
      $(".active")
        .css("zIndex", "1")
        .addClass("mid-bottom")
        .one("webkitAnimationEnd", function () {
          $(this).removeClass("active mid-bottom");
          $(this).css("zIndex", "unset");
        });
      $(".slide .content:first-child()")
        .css("zIndex", "2")
        .addClass("active-copy top-mid")
        .one("webkitAnimationEnd", function () {
          $(this).removeClass("active-copy top-mid").addClass("active");
          $(this).css("zIndex", "unset");
        });
    }
  }, 4000);
  $(".control-button .button").mousedown(function () {
    clearInterval(setIn);
  });
  // code for love icon
  function addLove(currentLove) {
    currentLove += 1;
    return currentLove;
  }
  function subtractionLove(currentLove) {
    currentLove -= 1;
    return currentLove;
  }
  // console.log(typeof String(addLove(0)));
  $(".half-heart").click(function () {
    clicked = $(this)[0];
    $(this).addClass("hide");
    $(this).next().removeClass("hide");
    var currentNumberOfLove = $(this).parent().next().text();
    var thisCountLove = $(this).parent().next();
    // console.log(typeof currentNumberOfLove);
    thisCountLove.text(String(addLove(Number(currentNumberOfLove))));
  });
  $(".full-heart").click(function () {
    clicked = $(this)[0];
    $(this).addClass("hide");
    $(this).prev().removeClass("hide");
    var currentNumberOfLove = $(this).parent().next().text();
    var thisCountLove = $(this).parent().next();
    thisCountLove.text(String(subtractionLove(Number(currentNumberOfLove))));
  });
  // code for switch change between login area and register area
  $('.change-area input[value="register"]').click(function (e) {
    e.preventDefault();
    $(".login-area")
      .addClass("go-out")
      .one("webkitAnimationEnd", function () {
        $(this).css("display", "none");
        $(this).removeClass("go-out");
      });
    $(".register-area")
      .css("display", "unset")
      .addClass("go-in")
      .one("webkitAnimationEnd", function () {
        $(this).removeClass("go-in");
      });
  });
  $('.btn-row input[value="login"]').click(function () {
    $(".login-area")
      .css("display", "unset")
      .addClass("go-in")
      .one("webkitAnimationEnd", function () {
        $(this).removeClass("go-in");
      });
    $(".register-area")
      .addClass("go-out")
      .one("webkitAnimationEnd", function () {
        $(this).css("display", "none");
        $(this).removeClass("go-out");
      });
  });
  // for change eye
  $(".fa-eye").click(function (e) {
    e.preventDefault();
    $(this).parent().prev().attr("type", "text");
    $(this).next().removeClass("hide");
    $(this).addClass("hide");
  });
  $(".fa-eye-slash").click(function (e) {
    e.preventDefault();
    $(this).parent().prev().attr("type", "password");
    $(this).prev().removeClass("hide");
    $(this).addClass("hide");
  });
});
