$(".slide-nav").on("click", function (e) {
  e.preventDefault();
  // get current slide
  var current = $(".flex--active").data("slide"),
    // get button data-slide
    next = $(this).data("slide");

  $(".slide-nav").removeClass("active");
  $(this).addClass("active");

  if (current === next) {
    return false;
  } else {
    $(".home-slider")
      .find(".slider-container[data-slide=" + next + "]")
      .addClass("flex--preStart");
    $(".flex--active").addClass("animate--end");
    setTimeout(function () {
      $(".flex--preStart").removeClass("slide-animation flex--preStart").addClass("flex--active");
      $(".animate--end").addClass("slide-animation").removeClass("animate--end flex--active");
    }, 800);
  }
});

// Animation

AOS.init();
