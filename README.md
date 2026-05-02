# 🍔 Feane - Fast Food Restaurant Website

A responsive multi-page fast food restaurant website built with pure HTML, CSS, and JavaScript.

## 🌐 Live Demo
[View Live Site](https://shabanasheerin.github.io/feane-website/)

## 📸 Preview
![Feane Homepage](https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80)

## 📁 Project Structure
feane-website/
├── index.html         # Home page
├── menu.html          # Full menu page
├── about.html         # About us page
├── book.html          # Book a table page
├── css/
│   └── style.css      # All styles
└── js/
├── cart.js        # Shared cart logic & menu data
├── index.js       # Hero slider & testimonials
├── menu.js        # Menu filter & render
├── book.js        # Booking form
└── about.js       # About page init

## ✨ Features
- 🏠 **Home** — Hero slider, offer cards, menu preview, about preview, book a table, testimonials
- 🍕 **Menu** — Full menu with category filters (All, Burger, Pizza, Pasta, Fries)
- 👨‍🍳 **About** — Our story, achievement stats, meet the team
- 📅 **Book Table** — Reservation form with Google Maps
- 🛒 **Cart** — Add to cart, quantity control, remove items, checkout
- 💾 **Persistent Cart** — Cart saves across pages using localStorage
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🎨 **Smooth Animations** — Hover effects, floating image, hero slider

## 🛠️ Built With
- HTML5
- CSS3 (CSS Variables, Flexbox, Grid, Animations)
- Vanilla JavaScript (no frameworks)
- Font Awesome Icons
- Google Fonts (Dancing Script, Poppins)

## 🚀 Getting Started

### Run Locally
1. Clone the repository
```bash
git clone https://github.com/yourusername/feane-website.git
```
2. Navigate to the project folder
```bash
cd feane-website
```
3. Open `index.html` in your browser

### Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yourusername/feane-website.git
git push -u origin main
```
Then go to **Settings → Pages → Deploy from main branch**

## 📄 Pages
| Page | Description |
|------|-------------|
| `index.html` | Landing page with hero, offers, menu preview |
| `menu.html` | Full menu with category filter tabs |
| `about.html` | Story, stats, and team section |
| `book.html` | Table reservation form + map |

## 🎨 Color Palette
| Name | Hex |
|------|-----|
| Gold | `#fdc632` |
| Dark | `#1c1c1c` |
| Card Dark | `#222831` |
| White | `#ffffff` |
