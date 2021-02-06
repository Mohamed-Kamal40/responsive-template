window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByTagName("nav")[0].classList.add("shadow");
  } else {
    document.getElementsByTagName("nav")[0].classList.remove("shadow");
  }
}