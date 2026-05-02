/* ── HERO SLIDER ── */
const heroSlides = [
  { title:'Fast Food Restaurant', desc:'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde.', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80' },
  { title:'Taste The Difference', desc:'Experience the best flavors crafted with fresh ingredients. Our chefs prepare every dish with passion and precision.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80' },
  { title:'Order Your Favorites', desc:'From crispy fries to loaded burgers and authentic pizzas — we have everything to satisfy your cravings.', img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=80' },
];
let currentSlide = 2;

function changeSlide(idx) {
  currentSlide = idx;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  const slide = heroSlides[idx];
  document.getElementById('hero-title').textContent = slide.title;
  document.getElementById('hero-desc').textContent = slide.desc;
  document.getElementById('hero-img').src = slide.img;
}

/* ── TESTIMONIALS ── */
const testimonials = [
  { name:'Mike Hamell', role:'Regular Customer', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { name:'Moana Michell', role:'Food Blogger', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
  { name:'James Torres', role:'Chef', text:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
  { name:'Sara Lee', role:'Food Critic', text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
];
let testiIndex = 0;

function renderTestimonials() {
  const track = document.getElementById('testi-track');
  if (!track) return;
  const visible = [testimonials[testiIndex % testimonials.length], testimonials[(testiIndex + 1) % testimonials.length]];
  track.innerHTML = visible.map(t => `
    <div class="testimonial-card">
      <p>${t.text}</p>
      <div class="testimonial-author"><h4>${t.name}</h4><span>${t.role}</span></div>
      <img class="testi-avatar" src="${t.img}" alt="${t.name}"/>
    </div>
  `).join('');
}

function changeTestimonial(dir) {
  testiIndex = (testiIndex + dir + testimonials.length) % testimonials.length;
  renderTestimonials();
}

/* ── MENU PREVIEW ── */
function renderMenuPreview() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  grid.innerHTML = menuItems.slice(0, 6).map(item => `
    <div class="menu-card">
      <div class="menu-card-img"><img src="${item.img}" alt="${item.name}" loading="lazy"/></div>
      <div class="menu-card-body">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-price">$${item.price}</span>
          <button class="btn-cart" onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── BOOKING ── */
function handleBooking() {
  const name = document.getElementById('book-name').value.trim();
  const phone = document.getElementById('book-phone').value.trim();
  const email = document.getElementById('book-email').value.trim();
  const persons = document.getElementById('book-persons').value;
  const date = document.getElementById('book-date').value;
  if (!name || !phone || !email || !persons || !date) { showToast('Please fill in all fields!'); return; }
  showToast(`Table booked for ${name} on ${date}! ✅`);
  ['book-name','book-phone','book-email','book-date'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('book-persons').value = '';
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderMenuPreview();
  renderTestimonials();
  setInterval(() => changeSlide((currentSlide + 1) % heroSlides.length), 5000);
});
