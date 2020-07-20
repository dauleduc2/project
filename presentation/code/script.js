$(document).ready(function () {
  // welcome-section animate
  $(".welcome-section").click(function (e) {
    e.preventDefault();
    $(".welcome-section h1").addClass("appear");
  });
  //click to next slide
  $(".next").click(function (e) {
    e.preventDefault();
    $(".turn").removeClass("visible appear");
    $(".active .active-copy").stop(true, true);
    $(".active").next().addClass("active-copy");
    $(".active")
      .addClass("mid-left")
      .one("webkitAnimationEnd", function () {
        $(this).removeClass("mid-left active");
      });
    $(".active-copy")
      .addClass("right-mid")
      .one("webkitAnimationEnd", function () {
        $(this).removeClass("right-mid active-copy").addClass("active");
      });
    $(".welcome-section h1").removeClass("appear");
  });
  // click to show last slide
  $(".previous").click(function (e) {
    e.preventDefault();
    $(".turn").removeClass("visible appear");
    $(".active .active-copy").stop(true, true);
    $(".active").prev().addClass("active-copy");
    $(".active")
      .addClass("mid-right")
      .one("webkitAnimationEnd", function () {
        $(this).removeClass("mid-right active");
      });
    $(".active-copy").removeClass("active-copy").addClass("active");
  });
  //---------------------- animate for content-------------------------------

  // defineselfhelp-section
  $(".defineSelfHelp-section").click(function (e) {
    e.preventDefault();
    // $(".progress").stop(true, true);
    $(".defineSelfHelp-section .progress")
      .finish()
      .addClass("visible appear")
      .one("webkitAnimationEnd", function () {
        $(this).removeClass("progress");
        $(this).next().addClass("progress");
      });
  });
  // book-section
  $(".book-section").click(function (e) {
    e.preventDefault();
    $(".book-section .content-1").addClass("appear");
  });
  // benefit and hamrfull of self-help book animate for content
  $(".benefitAndHarmfull").click(function (e) {
    e.preventDefault();
    $(".benefitAndHarmfull .progress")
      .addClass("visible appear")
      .one("webkitAnimationEnd", function () {
        $(this).removeClass("progress");
        $(this).next().addClass("progress");
      });
  });
  // benefit of self-help section animate for content
  $(".benefitOfSelfHelp").click(function (e) {
    e.preventDefault();
    $(".benefitOfSelfHelp .progress")
      .addClass("visible appear")
      .one("webkitAnimationEnd", function () {
        $(this).removeClass("progress");
        $(this).next().addClass("progress");
      });
  });
  // harmfullOfSelfHelp section animate for content
  $(".harmfullOfSelfHelp").click(function (e) {
    e.preventDefault();
    $(".harmfullOfSelfHelp .progress")
      .addClass("visible appear")
      .one("webkitAnimationEnd", function () {
        $(this).removeClass("progress");
        $(this).next().addClass("progress");
      });
  });
});
