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

const reveals = document.querySelectorAll('.contact-reveal');

const isMobile = window.matchMedia(
  '(max-width: 768px), (hover: none)'
).matches;

if (isMobile) {
  reveals.forEach(reveal => {
    reveal.addEventListener('click', () => {
      const isActive = reveal.classList.contains('active');

      reveals.forEach(r => {
        r.classList.remove('active');
        r.querySelector('.contact-text').style.maxWidth = '0';
        r.querySelector('.contact-text').style.opacity = '0';
        r.querySelector('.contact-text').style.marginLeft = '0';
        r.style.display = 'flex';
      });

      document.querySelectorAll('.footer-container > a').forEach(a => {
        a.style.display = 'flex';
      });

      if (!isActive) {
        reveal.classList.add('active');

        document.querySelectorAll('.footer-container > a').forEach(a => {
          a.style.display = 'none';
        });
        reveals.forEach(r => {
          if (r !== reveal) r.style.display = 'none';
        });

        const text = reveal.querySelector('.contact-text');
        text.style.maxWidth = '70vw';
        text.style.opacity = '1';
        text.style.marginLeft = '0.5rem';
      }
    });
  });
}