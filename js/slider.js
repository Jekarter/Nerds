var sliderList = document.querySelectorAll('.slider-list');
var buttonList = document.querySelectorAll('.slider-controls')

var switcher = function (slide, btn) {
btn.addEventListener('click', function () {
  slide.classList.add('slide-current')
  });
}
  
for (var i = 0; i < sliderList.length; i++ ) {
  switcher(sliderList[i], buttonList[i]);
  }
