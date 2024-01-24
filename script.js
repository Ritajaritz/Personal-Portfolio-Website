document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('ul');

    menuBtn.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('ul');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', function () {
    //   navList.classList.toggle('show');
      overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', function () {
      navList.classList.remove('show');
      overlay.classList.remove('show');
    });
    document.querySelectorAll('.navlink').forEach(function (navlink) {
        navlink.addEventListener('click', function () {
          if (window.innerWidth <= 768) {
            navList.classList.remove('show');
            overlay.classList.remove('show');
          }
        });
    });
});
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var flipImages = document.querySelectorAll('.flip');
  if (scrollPosition > 300) {
      flipImages.forEach(function(image) {
          image.classList.add('flipped');
      });
  } else {
      flipImages.forEach(function(image) {
          image.classList.remove('flipped');
      });
  }
});
window.addEventListener('scroll', function() {
  var scrollPosition1 = window.scrollY;
  var flipImages1 = document.querySelectorAll('.flip1');
  if (scrollPosition1 > 1600) {
      flipImages1.forEach(function(image) {
          image.classList.add('flipped');
      });
  } else {
      flipImages1.forEach(function(image) {
          image.classList.remove('flipped');
      });
  }
});
function changeTitle(newTitle) {
  document.title = newTitle;
}