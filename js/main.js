$(document).ready(function () {
  $(".button-collapse").sideNav();

  $("#measurementsCheck").change(function () {
    if (this.checked) {
      $("#measurementsOverlay").removeClass("fade-in");
      $("#measurementsOverlay").addClass("fade-out");
    } else {
      $("#measurementsOverlay").removeClass("fade-out");
      $("#measurementsOverlay").addClass("fade-in");
    }
  });

});

function transitionToR() {
  calculate();
  $("#loading-overlay").css("display", "flex");
  $("#transitionBtnR").addClass("disabled");

  setTimeout(
    function () {
      $("#main-right-panel").css("display", "grid");
      $("#loading-overlay").css("display", "none");
      $("#main-left-panel").removeClass("lTransitioningToL")
      $("#main-left-panel").addClass("lTransitioningToR")
      $("#main-right-panel").removeClass("rTransitioningToL")
      $("#main-right-panel").addClass("rTransitioningToR")
      $("#transitionBtnL").removeClass("disabled");
    },
  2000);

  setTimeout(
    function () {
      $("#main-left-panel").css("display", "none");
    }, 
  2000);

}

function transitionToL() {
  $("#main-left-panel").css("display", "grid");
  $("#main-left-panel").removeClass("lTransitioningToR")
  $("#main-left-panel").addClass("lTransitioningToL")
  $("#main-right-panel").removeClass("rTransitioningToR")
  $("#main-right-panel").addClass("rTransitioningToL")
  $("#transitionBtnR").removeClass("disabled");
  $("#transitionBtnL").addClass("disabled");

  setTimeout(
    function () {
      $("#main-right-panel").css("display", "none");
    }, 
  500)
}