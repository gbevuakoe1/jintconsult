const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelector(".nav-wrapper");

openBtn.addEventListener("click", () =>{
    links.classList.add("menu-open");
});
closeBtn.addEventListener("click", () =>{
    links.classList.remove("menu-open")
});


window.addEventListener("scroll", () => {
    navbar = document.getElementById("navbar");

    if(window.scrollY > 100){
        navbar.classList.add("nav-fixed");
    }
    else{
        navbar.classList.remove("nav-fixed")
    }
});

    // fixed nav bar

window.addEventListener("scroll", () => {
    navbar = document.getElementById("navbar");

    if(window.scrollY > 100){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav")
    }
});




// services.js - small interactions for the services section
document.addEventListener('DOMContentLoaded', () => {
  const filter = document.getElementById('filter');
  const cards = Array.from(document.querySelectorAll('#cards .card'));
  const btns = Array.from(document.querySelectorAll('.btn-more'));

  // Filter logic
  filter.addEventListener('change', (e) => {
    const cat = e.target.value;
    cards.forEach(card => {
      if (cat === 'all' || card.dataset.category === cat) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // Toggle details show/hide and manage aria-expanded
  btns.forEach(btn => {
    btn.addEventListener('click', (ev) => {
      const controlId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(controlId);
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (panel) {
        if (expanded) {
          panel.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
          btn.textContent = 'Learn more';
        } else {
          panel.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
          btn.textContent = 'Show less';
        }
      }
    });
  });

  // Keyboard: allow Enter/Space on card to toggle its first 'Learn more' button
  cards.forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const btn = card.querySelector('.btn-more');
        if (btn) btn.click();
      }
    });
  });
});