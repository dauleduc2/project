function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ----------------------------------------------------------------------------------------------------
function villager(_nickName) {
  var nickName = _nickName;
  var func = "villiager";
  this.setName = function (_nickName) {
    nickName = _nickName;
  };
  this.getName = function () {
    return nickName;
  };
  this.getFunction = function () {
    return func;
  };
}

function aura(_nickName) {
  var nickName = _nickName;
  var func = "aura";
  this.setName = function (_nickName) {
    nickName = _nickName;
  };
  this.getName = function () {
    return nickName;
  };
  this.getFunction = function () {
    return func;
  };
}

function wolf(_nickName) {
  var nickName = _nickName;
  var func = "wolf";
  this.setName = function (_nickName) {
    nickName = _nickName;
  };
  this.getName = function () {
    return nickName;
  };
  this.getFunction = function () {
    return func;
  };
}
// ---------------setting section ---------------------------------------
var listRole = ["Wolf", "Villager", "Villager", "Villager", "Aura"];
var listBotName = [];
let yourNumber = randomNumber(1, 5) - 1;
var yourRole = listRole[yourNumber];
// var yourRole = "Aura";
console.log("your role is " + yourRole);
listRole.splice(yourNumber, 1);
for (let i = 0; i < 4; i++) {
  let botNumber = randomNumber(0, 3 - i);
  listBotName[i] = listRole[botNumber];
  listRole.splice(botNumber, 1);
  // console.log(listBotName[i]);
}
console.log(listBotName);
function displayYourRole() {
  $(".yourRole").text("role : " + yourRole);
  $(".announcement-box .announcement-area").append(function () {
    return (
      '<li class="announcement-text first-line">You are ' + yourRole + "</li>"
    );
  });
  if (yourRole == "Villager") {
    $(".announcement-box .announcement-area").append(function () {
      return '<li class="announcement-text">Your function : <span>nothing</span></li>';
    });
  } else if (yourRole == "Wolf") {
    $(".announcement-box .announcement-area").append(function () {
      return '<li class="announcement-text">Your function : <span>Each night you can kill 1 person you want</span></li>';
    });
    $(".announcement-box .announcement-area").append(function () {
      return '<li class="announcement-text">Choose one person that you want to kill in first night</li>';
    });
  } else if (yourRole == "Aura") {
    $(".announcement-box .announcement-area").append(function () {
      return '<li class="announcement-text">Your function : <span>Each night you can choose 1 person that you want to know their real role</span></li>';
    });
    $(".announcement-box .announcement-area").append(function () {
      return '<li class="announcement-text">Choose one person who you want to know their actually role</li>';
    });
  }
}
// code for function of each role
$(".player-box .blur-layer").unbind();
if (yourRole == "Aura") {
  $(document).ready(function () {
    $(".player-box .blur-layer").click(function () {
      clicked = $(this)[0];
      let locationOfClick = $(this).index(".player-box .blur-layer") + 1;
      // console.log("location of player u have clicked is : " + locationOfClick);
      $(this)
        .next()
        .next()
        .next()
        .text("role : " + listBotName[locationOfClick - 1]);
      $(this).css("display", "unset");
      $(this).unbind("click");
      $(".announcement-box .announcement-area").append(function () {
        return (
          '<li class="red-text">Aura detected : player' +
          locationOfClick +
          " is " +
          listBotName[locationOfClick - 1] +
          "</li>"
        );
      });
    });
    $(".player-box").addClass("aura");
    $(".player-box .blur-layer i").addClass("aura-icon");
  });
}

if (yourRole == "Wolf") {
  $(document).ready(function () {
    $(".player-box").addClass("wolf");
    $(".player-box .blur-layer").click(function () {
      clicked = $(this)[0];
      let locationOfClick = $(this).index(".player-box .blur-layer") + 1;
      // console.log("location of player u have clicked is : " + locationOfClick);
      $(this).css("display", "unset");
      $(".line1, .line2").css("display", "unset ");
      // alert("clicked");
      $(this).unbind("click");
      $(".announcement-area").append(function () {
        return (
          '<li class="red-text">You has killed playler' +
          locationOfClick +
          "</li>"
        );
      });
    });
  });
}
var numberList = [1, 2, 3, 4, 5];
console.log(numberList);
let numberOfWolf = listBotName.indexOf("Wolf") + 2;
numberList.splice(numberList.indexOf(numberOfWolf), 1);
function botAction() {
  if (yourRole !== "Wolf") {
    let numberOfVictim = randomNumber(1, 5);

    while (
      numberOfVictim == numberOfWolf ||
      numberList.indexOf(numberOfVictim) == -1
    ) {
      numberOfVictim = randomNumber(1, 5);
    }
    let numberToAnnoun = numberOfVictim - 1;
    if (numberOfVictim == 1) {
      $(".announcement-box .announcement-area").append(function () {
        return '<li class="red-text">You have been killed by wolf</li>';
      });
    }
    numberList.splice(numberList.indexOf(numberOfVictim), 1);
    $(".player-box:nth-child(" + numberOfVictim + ")")
      .children(".target")
      .addClass("killed");
    if (numberToAnnoun !== 0) {
      $(".announcement-box .announcement-area").append(function () {
        return (
          '<li class="red-text"> Wolf has killed player' +
          numberToAnnoun +
          "</li>"
        );
      });
    }
  }
}
function announcementMorningCome() {
  $(".announcement-box .announcement-area").append(function () {
    return '<li class="yellow-text">Morning, wake up everyone and discuss about who is the wolf.</li>';
  });
  $(".announcement-box .announcement-area").append(function () {
    return '<li class="yellow-text">You have 30 seconds to discuss with other people in this day.</li>';
  });
}
function announcementEndADay() {
  $(".announcement-box .announcement-area").append(function () {
    return '<li class="yellow-text">The night is comming!!! All the people  stop discussing and sleep now!</li>';
  });
}
var countDay = 0;
function announcementStartANight() {
  $(".announcement-box .announcement-area").append(function () {
    countDay++;
    if (countDay == 1) {
      botAction();
    }
    return '<li class="yellow-text"> Day ' + countDay + " : </li>";
  });
}

function sleep(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) {}
}
function count(time) {
  time--;
  $(".spiner").addClass("spiner-animation");
  var countDown = setInterval(function () {
    $(".remain-time").text(time);
    time--;
    if (time < 0) {
      clearInterval(countDown);
      $(".remain-time").text("30");
      // $(".spiner").removeClass("spiner-animation");
    }
  }, 1000);
}
