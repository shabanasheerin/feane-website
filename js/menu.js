let currentFilter = 'all';

function getFiltered() {
  return currentFilter === 'all' ? menuItems : menuItems.filter(i => i.cat === currentFilter);
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  const items = getFiltered();
  if (items.length === 0) { grid.innerHTML = '<p class="no-results">No items found.</p>'; return; }
  grid.innerHTML = items.map(item => `
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

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderMenu();
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderMenu();
    });
  });
});
