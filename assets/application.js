    console.log('first')
    // product details page image zoom effect
    function zoom(e) {
      var zoomer = e.currentTarget;
      e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
      e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
      x = offsetX / zoomer.offsetWidth * 100
      y = offsetY / zoomer.offsetHeight * 100
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }
    // bootstrap tooltip
    document.addEventListener('DOMContentLoaded', function () {
        const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
        });
      });


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

// function currentTarget(event , activeClass){
//   console.log('inside function')
//   const currentElement = event.currentTarget;
//   if(currentElement.classList.contains(activeClass)){
//     currentElement.classList.remove(activeClass);
//   }else{
//     currentElement.classList.add(activeClass);
//   }
// }

  // Add to cart Quantity js;
  function incrementQuantity(button){
    const currentButton = button.currentTarget;
    const quantityInput = currentButton.closest("form").querySelector(".quantity");
    const currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
  }
  function decrementQuantity(button){
    const currentButton = button.currentTarget;
    const quantityInput = currentButton.closest("form").querySelector(".quantity");
    const currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }
