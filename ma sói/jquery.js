$(document).ready(function () {
  $(".welcome-section button").click(function (e) {
    $(".welcome-section").addClass("fade-out");
  });
  $(".announcement-box button").click(function (e) {
    e.preventDefault();
    $(".announcement-box button").css("display", "none");
    displayYourRole();
  });
  $(".player-box .blur-layer").click(function (e) {
    e.preventDefault();
    announcementStartANight();
    announcementMorningCome();
    count(30);
    // $(".player-box .blur-layer").unbind("click");
    setTimeout(function () {
      announcementEndADay();
      botAction();
      // $(".player-box .blur-layer").bind("click");
    }, 30000);
  });

  $(".text-area input").click(function (e) {
    e.preventDefault();
    var text = document.getElementById("textBox").value;
    $(".announcement-area").append(function () {
      return '<li class="announcement-text">you : ' + text + "</li>";
    });
    $(".text-area textarea").val("");
  });
  $("textarea").keydown(function (e) {
    if (e.keyCode == 13) {
      $(".text-area input").click();
    }
  });
});
