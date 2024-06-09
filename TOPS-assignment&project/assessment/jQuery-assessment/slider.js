
      const leftBnt = document.getElementsByClassName("left")[0];
      const rightBnt = document.getElementsByClassName("right")[0];
      const sliderImg = document.getElementsByClassName("slider")[0].children;
      const indicator = document.getElementsByClassName("indctr")
      let sliderImgIndex = 1;
      let indicatorIndex = 2;
      indicator[2].style.backgroundColor="red";
      leftBnt.addEventListener("click", (e) => {
        e.preventDefault();
        sliderImgIndex++;
        indicatorIndex++
        if (sliderImgIndex <= 5) {
          slideLeft();
          indicator[indicatorIndex].style.backgroundColor='red';
        } else {
          sliderImgIndex = 1;
          indicatorIndex = 0;
        }
      });
      rightBnt.addEventListener("click", (e) => {
        console.log(indicatorIndex);
        e.preventDefault();
        sliderImgIndex--;
        if (sliderImgIndex >= 0) {
          slideLeft();
          indicator[indicatorIndex].style.backgroundColor='red';
          } else {
            sliderImgIndex = 5;
            indicatorIndex = 4;
            }
          indicatorIndex--
            
      });
      function slideLeft() {
        for (let i = 0; i < sliderImg.length; i++) {
          indicator[i].style.backgroundColor='gray'
          sliderImg[i].style.transform = `translateX(-${
            sliderImgIndex * 500
          }px)`;
        }
      }
      function slideright() {
        for (let i = 0; i < sliderImg.length; i++) {
          indicator[i].style.backgroundColor='gray'
          sliderImg[i].style.transform = `translateX(${
            sliderImgIndex * 500
          }px)`;
        }
      }
    