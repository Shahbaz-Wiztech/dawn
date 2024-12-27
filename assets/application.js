    console.log('first')
    // bootstrap tooltip
    // document.addEventListener('DOMContentLoaded', function () {
    //     const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    //     const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //       return new bootstrap.Tooltip(tooltipTriggerEl);
    //     });
    //   });
  
  
      // image modal
      const modal = document.getElementById('myModal');
      const closeModal = document.querySelector('.close');
      const carouselInner = document.getElementById('carouselInner');
      const images = document.querySelectorAll('.modal-trigger');
      images.forEach((img, index) => {
        img.onclick = function () {
            console.log('inside the function');
          modal.style.display = "block";
        //   carouselInner.innerHTML = "";
        //   images.forEach((carouselImg, carouselIndex) => {
        //     const carouselItem = document.createElement('div');
        //     carouselItem.className = `carousel-item ${carouselIndex === index ? 'active' : ''}`;
        //     carouselItem.innerHTML = `
        //      <img src="${carouselImg.src}" class="d-block modal-content" alt="${carouselImg.alt}">`;
        //     carouselInner.appendChild(carouselItem);
        //   });
        };
      });
      closeModal.onclick = function () {
        modal.style.display = "none";
      };
  
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
// ///////////////////////////////////////////////////////////////////////////////////////////////////


//     // price range slider
//     const track = document.querySelector('.slider-track');
//     const range = document.getElementById('slider-range');
//     const thumbMin = document.getElementById('thumb-min');
//     const thumbMax = document.getElementById('thumb-max');
//     const priceMin = document.getElementById('price-min');
//     const priceMax = document.getElementById('price-max');
//     const resetBtn = document.getElementById('reset-btn');

//     let min = 263;
//     let max = 960;
//     const step = 10;
//     const trackWidth = track.offsetWidth;

//     const updateRange = () => {
//       const minPercent = ((min - 0) / 1000) * 100;
//       const maxPercent = ((max - 0) / 1000) * 100;
//       thumbMin.style.left = `${minPercent}%`;
//       thumbMax.style.left = `${maxPercent}%`;
//       range.style.left = `${minPercent}%`;
//       range.style.width = `${maxPercent - minPercent}%`;
//       priceMin.textContent = min;
//       priceMax.textContent = max;
//     };

//     const onMouseMove = (e, isMin) => {
//       const rect = track.getBoundingClientRect();
//       const offset = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
//       const value = Math.round((offset / rect.width) * 1000 / step) * step;

//       if (isMin) {
//         min = Math.min(value, max - step);
//       } else {
//         max = Math.max(value, min + step);
//       }
//       updateRange();
//     };

//     const addMouseListeners = (thumb, isMin) => {
//       const onMouseUp = () => {
//         document.removeEventListener('mousemove', onMouseMoveHandler);
//         document.removeEventListener('mouseup', onMouseUp);
//       };
//       const onMouseMoveHandler = (e) => onMouseMove(e, isMin);

//       thumb.addEventListener('mousedown', () => {
//         document.addEventListener('mousemove', onMouseMoveHandler);
//         document.addEventListener('mouseup', onMouseUp);
//       });
//     };

//     addMouseListeners(thumbMin, true);
//     addMouseListeners(thumbMax, false);

//     resetBtn.addEventListener('click', () => {
//       min = 263;
//       max = 960;
//       updateRange();
//     });

//     updateRange();
// // price range slider end

//     // filter selectors
//     document.querySelectorAll('.filter-brand ul li a, .average-rating ul li a').forEach((link) => {
//         link.addEventListener('click', (event) => {
//           event.currentTarget.classList.toggle('active');
//         });
//       });
  
// product card header button

function gridListToggle(event){
    const clickedButton = event.currentTarget;
    const productContainer = document.querySelector('#product-cards-container');
    const buttons = document.querySelectorAll('.grid-list-view');
    if(buttons){
        buttons.forEach((card) => {card.classList.remove('active')});
        clickedButton.classList.add('active');
    }

    if(productContainer.classList.contains('product-list')){
        productContainer.classList.remove('product-list');
    }else{   
        productContainer.classList.add('product-list');
    }
}