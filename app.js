
document.getElementById('slider').addEventListener('input', function () {
    console.log("input changed")
    changeWidth();
});

  function changeWidth() {
    const elem = document.getElementById('slider');
    const sliderPos = elem.value
    const foreground = document.getElementById('foreground')
    foreground.style.width = `${sliderPos}%`;

    const sliderButton = document.querySelectorAll(".container .slider-button")[0];
    console.log(sliderButton.style);
    sliderButton.style.left = `calc(${sliderPos}% - 18px)`;

  }