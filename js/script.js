function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

$(document).ready(function () {
  $(".faq__title").click(function (event) {
    if ($(".faq").hasClass("one")) {
      $(".faq__title").not($(this)).removeClass("active");
      $(".faq__text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
