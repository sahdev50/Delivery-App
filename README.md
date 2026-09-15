# 🍔 Eat Dash — Online Food Ordering App

A responsive food delivery / ordering web app built with **HTML, CSS, and vanilla JavaScript** — no frameworks, no backend. Customers can browse the menu, build an order, and check out; admins can manage the menu and track incoming orders. Data is stored locally in the browser via `localStorage`.

**🔗 Live site:** [sahdev50.github.io/Delivery-App](https://sahdev50.github.io/Delivery-App/index.html)

---

## ✨ Features

**Customers**
- Register an account and log in with email + password
- Browse the full menu with photos, descriptions, and prices
- Add items to a running order, adjust quantities, and see a live total
- Place an order and view past order history

**Administrators**
- Fixed admin login
- Add, update, and remove menu items (name, price, description, photo)
- View every order placed, with customer details and itemized totals

## 🛠️ Built With

- HTML5
- CSS3 (custom design system — no CSS framework)
- Vanilla JavaScript
- Google Fonts (Poppins) & Material Icons Outlined
- Browser `localStorage` / `sessionStorage` for data persistence — no server or database required

## 📁 Project Structure

```
Delivery-App/
├── index.html          # Landing page
├── login.html           # Customer / Admin login
├── register.html        # Customer sign up
├── admin.html            # Admin console: manage menu & view orders
├── customer.html        # Customer menu, cart & order history
├── favicon/              # Site icons
├── js/
│   └── app.js             # Data layer: auth, menu, cart, and order logic
├── public/                # Images used across the site
└── styles/
    └── index.css          # Global styles and design system
```

## 🚀 Getting Started

No build step or server required.

1. Clone the repo:
   ```bash
   git clone https://github.com/sahdev50/Delivery-App.git
   ```
2. Open `index.html` in your browser (or use a tool like VS Code's Live Server extension).

## 🔑 Demo Credentials

| Role  | Username / Email | Password   |
|-------|-------------------|------------|
| Admin | `admin`            | `admin123` |
| Customer | Register your own via the **Sign Up** page | — |

## 📦 Data & Storage

This app has no backend — all data (menu items, customer accounts, orders) is stored in the browser's `localStorage`, and the active login session in `sessionStorage`. Clearing your browser's site data will reset the app back to its seeded demo menu.

## 📄 License

This project is open source and available for personal or educational use.
