"use strict";
//code from internet -> stackoverflow
/////////////////////////////////////
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
///////code from internet -> stackoverflow
///////////////////////////////////////////////////////////////

if (isMobile.any()) {
  ///code from internet -> stackoverflow
  document.body.classList.add("_touch"); ///code from internet -> stackoverflow
  let menuArrows = document.querySelectorAll(".menu_arrow"); //через селектор querySelectorAll въберем объектъ для селекции как menu_arrow
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  ///code from internet -> stackoverflow
  document.body.classList.add("_pc"); ///code from internet -> stackoverflow
}
