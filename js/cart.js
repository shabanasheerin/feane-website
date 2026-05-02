/* ── DATA ── */
const menuItems = [
  { id:1, name:'Delicious Pizza', cat:'pizza', price:20, img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80', desc:'Fresh ingredients, crispy crust, loaded with toppings and baked to perfection.' },
  { id:2, name:'Delicious Burger', cat:'burger', price:15, img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80', desc:'Juicy beef patty with fresh lettuce, tomato, and our signature sauce.' },
  { id:3, name:'Veggie Pizza', cat:'pizza', price:17, img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80', desc:'Garden-fresh vegetables on a golden crust with rich tomato sauce.' },
  { id:4, name:'Delicious Pasta', cat:'pasta', price:18, img:'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300&q=80', desc:'Al dente pasta tossed in a rich, slow-cooked tomato-basil sauce.' },
  { id:5, name:'French Fries', cat:'fries', price:10, img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&q=80', desc:'Golden crispy fries seasoned with sea salt and served piping hot.' },
  { id:6, name:'Classic Pizza', cat:'pizza', price:15, img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80', desc:'The timeless classic — mozzarella, tomato sauce, and fresh basil.' },
  { id:7, name:'Tasty Burger', cat:'burger', price:12, img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&q=80', desc:'Double stacked patty with caramelized onions and smoky BBQ sauce.' },
  { id:8, name:'Spicy Burger', cat:'burger', price:14, img:'https://images.unsplash.com/photo-1586816001966-79b736744398?w=300&q=80', desc:'Fiery jalapeños, pepper jack cheese, and spicy mayo on a brioche bun.' },
  { id:9, name:'Creamy Pasta', cat:'pasta', price:10, img:'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=300&q=80', desc:'Silky cream sauce with garlic, parmesan, and fresh herbs.' },
];

/* ── CART STATE ── */
let cart = JSON.parse(localStorage.getItem('feane-cart') || '[]');

function saveCart() {
  localStorage.setItem('feane-cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const total = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = total;
  if (total > 0) badge.classList.add('visible');
  else badge.classList.remove('visible');
}

function addToCart(id) {
  const item = menuItems.find(m => m.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  saveCart();
  updateCartBadge();
  showToast(`${item.name} added to cart!`);
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  modal.classList.toggle('open');
  if (modal.classList.contains('open')) renderCartItems();
}

function renderCartItems() {
  const list = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer');
  if (!list) return;
  if (cart.length === 0) {
    list.innerHTML = `<div class="empty-cart"><i class="fa-solid fa-cart-shopping"></i><p>Your cart is empty</p></div>`;
    if (footer) footer.style.display = 'none';
    return;
  }
  if (footer) footer.style.display = 'block';
  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}"/>
      <div class="cart-item-info">
        <h5>${item.name}</h5>
        <span>$${item.price} each</span>
      </div>
      <div class="cart-qty">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <span class="cart-item-price">$${item.price * item.qty}</span>
      <button class="remove-item" onclick="removeItem(${item.id})"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cart-total-price').textContent = `$${total}`;
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart(); updateCartBadge(); renderCartItems();
}

function removeItem(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart(); updateCartBadge(); renderCartItems();
}

function checkout() {
  showToast('Order placed successfully! 🎉');
  cart = []; saveCart(); updateCartBadge(); renderCartItems(); toggleCart();
}

/* ── TOAST ── */
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ── SHARED NAV INIT ── */
function initNav() {
  updateCartBadge();
  const cartIcon = document.getElementById('cart-icon');
  if (cartIcon) cartIcon.addEventListener('click', toggleCart);
  const cartModal = document.getElementById('cart-modal');
  if (cartModal) cartModal.addEventListener('click', e => { if (e.target === cartModal) toggleCart(); });
  const hamburger = document.getElementById('hamburger');
  if (hamburger) hamburger.addEventListener('click', () => document.getElementById('nav-links').classList.toggle('open'));
}
