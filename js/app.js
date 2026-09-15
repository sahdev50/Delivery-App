
const DB_KEYS = {
  FOODS: 'cts_foods',
  CUSTOMERS: 'cts_customers',
  ORDERS: 'cts_orders',
  SEEDED: 'cts_seeded_v2'
};

const ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };

function seedIfNeeded(){
  if (localStorage.getItem(DB_KEYS.SEEDED)) return;

  const foods = [
    {
      fid: 'F001',
      foodname: 'Wood-fired Margherita Pizza',
      price: 11.50,
      description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil leaves.',
      image: "https://images.unsplash.com/photo-1705079895550-60f462c08461?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fid: 'F002',
      foodname: 'Smoky Black Bean Burger',
      price: 9.75,
      description: 'A hearty black bean patty with smoky spices, served with lettuce, tomato, and avocado.',
      image: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fid: 'F003',
      foodname: 'Roasted Vegetable Buddha Bowl',
      price: 10.25,
      description: 'A healthy bowl filled with roasted vegetables and a variety of grains.',
      image: "https://images.unsplash.com/photo-1595786802596-baa6f6d61ce7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fid: 'F004',
      foodname: 'Classic Chicken Caesar Salad',
      price: 8.90,
      description: 'Crisp romaine lettuce with grilled chicken, parmesan cheese, and Caesar dressing.',
      image: "https://images.unsplash.com/photo-1605291535065-e1d52d2b264a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fid: 'F005',
      foodname: 'Slow-braised Beef Tacos (3pc)',
      price: 12.00,
      description: 'Tender beef slow-braised in a spicy sauce, served in soft corn tortillas.',
      image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=1194&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fid: 'F006',
      foodname: 'Truffle & Parmesan Fries',
      price: 6.50,
      description: 'Crispy fries tossed in truffle oil and topped with parmesan cheese.',
      image: "https://images.unsplash.com/photo-1579065934361-0a0c8771812a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fid: 'F007',
      foodname: 'Sticky Toffee Pudding',
      price: 5.75,
      description: 'Rich and sticky toffee pudding served with vanilla ice cream.',
      image: "https://images.unsplash.com/photo-1531098924838-714ca6ec6234?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      fid: 'F008',
      foodname: 'Fresh Watermelon & Mint Cooler',
      price: 4.25,
      description: 'A refreshing cooler made with fresh watermelon and mint.',
      image: "https://images.unsplash.com/photo-1424591093900-514bab956faf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  localStorage.setItem(DB_KEYS.FOODS, JSON.stringify(foods));
  localStorage.setItem(DB_KEYS.CUSTOMERS, JSON.stringify([]));
  localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify([]));
  localStorage.setItem(DB_KEYS.SEEDED, '1');
}
seedIfNeeded();

function getFoods(){ return JSON.parse(localStorage.getItem(DB_KEYS.FOODS) || '[]'); }
function saveFoods(list){ localStorage.setItem(DB_KEYS.FOODS, JSON.stringify(list)); }

function getCustomers(){ return JSON.parse(localStorage.getItem(DB_KEYS.CUSTOMERS) || '[]'); }
function saveCustomers(list){ localStorage.setItem(DB_KEYS.CUSTOMERS, JSON.stringify(list)); }

function getOrders(){ return JSON.parse(localStorage.getItem(DB_KEYS.ORDERS) || '[]'); }
function saveOrders(list){ localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(list)); }

function nextId(prefix, existingIds){
  let n = existingIds.length + 1;
  let id = prefix + String(n).padStart(3, '0');
  while (existingIds.includes(id)){
    n += 1;
    id = prefix + String(n).padStart(3, '0');
  }
  return id;
}

function money(n){
  return '$' + Number(n).toFixed(2);
}
function formatDateTime(iso){
  const d = new Date(iso);
  return d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}

function getSession(){
  return JSON.parse(sessionStorage.getItem('cts_session') || 'null');
}
function setSession(session){
  sessionStorage.setItem('cts_session', JSON.stringify(session));
}
function clearSession(){
  sessionStorage.removeItem('cts_session');
  sessionStorage.removeItem('cts_cart');
}

function loginAdmin(username, password){
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password){
    setSession({ role: 'admin', username });
    return true;
  }
  return false;
}

function loginCustomer(email, password){
  const customers = getCustomers();
  const match = customers.find(c => c.email.toLowerCase() === email.toLowerCase() && c.password === password);
  if (match){
    setSession({ role: 'customer', cid: match.cid, customerName: match.customerName, email: match.email });
    return match;
  }
  return null;
}

function registerCustomer({ customerName, phone, email, password }){
  const customers = getCustomers();
  if (customers.some(c => c.email.toLowerCase() === email.toLowerCase())){
    return { ok: false, message: 'An account with this email already exists. Try logging in instead.' };
  }
  const cid = nextId('C', customers.map(c => c.cid));
  const record = { cid, customerName, phone, email, password };
  customers.push(record);
  saveCustomers(customers);
  return { ok: true, customer: record };
}

function requireAdmin(){
  const s = getSession();
  if (!s || s.role !== 'admin'){
    window.location.href = 'login.html';
    return null;
  }
  return s;
}
function requireCustomer(){
  const s = getSession();
  if (!s || s.role !== 'customer'){
    window.location.href = 'login.html';
    return null;
  }
  return s;
}

function getCart(){
  return JSON.parse(sessionStorage.getItem('cts_cart') || '[]');
}
function saveCart(cart){
  sessionStorage.setItem('cts_cart', JSON.stringify(cart));
  ;
}
function clearCart(){
  sessionStorage.removeItem('cts_cart');
  ;
}
function addToCart(fid){
  const foods = getFoods();
  const food = foods.find(f => f.fid === fid);
  if (!food) return;
  const cart = getCart();
  const existing = cart.find(i => i.fid === fid);
  if (existing){
    existing.qty += 1;
  } else {
    cart.push({ fid: food.fid, foodname: food.foodname, price: food.price, image: food.image, qty: 1 });
  }
  saveCart(cart);
}
function setCartQty(fid, qty){
  let cart = getCart();
  if (qty <= 0){
    cart = cart.filter(i => i.fid !== fid);
  } else {
    const item = cart.find(i => i.fid === fid);
    if (item) item.qty = qty;
  }
  saveCart(cart);
}
function cartTotal(cart){
  return cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
}
function cartCount(cart){
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

function placeOrder(cid){
  const cart = getCart();
  if (cart.length === 0) return { ok: false, message: 'Your cart is empty.' };
  const orders = getOrders();
  const ordID = nextId('ORD', orders.map(o => o.ordID));
  const order = {
    ordID,
    cid,
    orderitems: cart.map(i => ({ fid: i.fid, foodname: i.foodname, price: i.price, qty: i.qty })),
    orderdatetime: new Date().toISOString()
  };
  orders.push(order);
  saveOrders(orders);
  clearCart();
  return { ok: true, order };
}
function ordersForCustomer(cid){
  return getOrders().filter(o => o.cid === cid).sort((a,b) => new Date(b.orderdatetime) - new Date(a.orderdatetime));
}

function showToast(message, variant){
  variant = variant || 'primary';
  const wrap = document.createElement('div');
  wrap.className = 'ed-toast';
  wrap.innerHTML = `
    <div class="ed-toast-card ed-toast-${variant}">
      <span class="material-icons-outlined">${variant === 'danger' ? 'error_outline' : 'check_circle'}</span>
      <span>${message}</span>
    </div>`;
  document.body.appendChild(wrap);
  setTimeout(() => wrap.remove(), 2600);
}

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str == null ? '' : str;
  return div.innerHTML;
}

function renderSessionNav(){
  const s = getSession();
  const slot = document.getElementById('navLinks');
  if (!slot) return;

  if (!s){
    slot.innerHTML = `
      <li><a href="login.html">Login</a></li>
      <li><button class="signup-button" onclick="location.href='register.html'">Sign Up</button></li>`;
  } else if (s.role === 'admin'){
    slot.innerHTML = `
      <li><a href="admin.html">Kitchen console</a></li>
      <li><span class="nav-username"><span class="material-icons-outlined">admin_panel_settings</span>${escapeHtml(s.username)}</span></li>
      <li><button class="signup-button signup-button--ghost" onclick="clearSession(); location.href='index.html'">Log out</button></li>`;
  } else {
    slot.innerHTML = `
      <li><a href="customer.html">Menu</a></li>
      <li><a href="customer.html#cart" class="nav-cart"><span class="material-icons-outlined">shopping_bag</span><span id="cartBadge" class="cart-badge">0</span></a></li>
      <li><span class="nav-username"><span class="material-icons-outlined">person</span>${escapeHtml(s.customerName)}</span></li>
      <li><button class="signup-button signup-button--ghost" onclick="clearSession(); location.href='index.html'">Log out</button></li>`;
  }
  ;
}

document.addEventListener('DOMContentLoaded', () => {
  renderSessionNav();
});
