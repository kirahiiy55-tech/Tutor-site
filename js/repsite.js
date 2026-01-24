$(document).ready(function () {
  $('.reviews-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    center: true,
    slideBy: 1,

    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
});

const input = document.getElementById('start-date');
const error = document.getElementById('start-date-error');

const today = new Date();
today.setDate(today.getDate() + 1);

const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');

input.min = `${yyyy}-${mm}-${dd}`;

input.addEventListener('change', () => {
  const selected = new Date(input.value);
  const day = selected.getDay();

  if (day === 0) {
    alert('Please choose my work days starting the day after tomorrow')
    input.value = '';
  } else {
    error.style.display = 'none';
  }
});

