const products = [
  { name: "Veladora Paz Interior", price: 150, description: "Armoniza el ambiente con energía pura.", image: "https://via.placeholder.com/300x200?text=Veladora+1" },
  { name: "Veladora Luz Divina", price: 180, description: "Ideal para momentos de meditación.", image: "https://via.placeholder.com/300x200?text=Veladora+2" },
  { name: "Veladora Amor Infinito", price: 200, description: "Atrae amor y buenas vibras.", image: "https://via.placeholder.com/300x200?text=Veladora+3" },
  { name: "Veladora Prosperidad Dorada", price: 220, description: "Invoca abundancia y éxito.", image: "https://via.placeholder.com/300x200?text=Veladora+4" },
  { name: "Veladora Protección Celestial", price: 190, description: "Escudo contra malas energías.", image: "https://via.placeholder.com/300x200?text=Veladora+5" },
  { name: "Veladora Sanación Ancestral", price: 210, description: "Sana cuerpo y espíritu.", image: "https://via.placeholder.com/300x200?text=Veladora+6" },
  { name: "Veladora Fortaleza Espiritual", price: 170, description: "Brinda fuerza interior.", image: "https://via.placeholder.com/300x200?text=Veladora+7" },
  { name: "Veladora Camino Abierto", price: 230, description: "Abre puertas y oportunidades.", image: "https://via.placeholder.com/300x200?text=Veladora+8" },
  { name: "Veladora Serenidad Azul", price: 160, description: "Inspira calma y tranquilidad.", image: "https://via.placeholder.com/300x200?text=Veladora+9" },
  { name: "Veladora Magia de Luna", price: 250, description: "Potencia la intuición femenina.", image: "https://via.placeholder.com/300x200?text=Veladora+10" },
  { name: "Veladora Fe Renovada", price: 140, description: "Renueva la esperanza.", image: "https://via.placeholder.com/300x200?text=Veladora+11" },
  { name: "Veladora Llama de Gratitud", price: 180, description: "Agradece con luz sagrada.", image: "https://via.placeholder.com/300x200?text=Veladora+12" },
  { name: "Veladora Bendición Eterna", price: 210, description: "Atrae bendiciones constantes.", image: "https://via.placeholder.com/300x200?text=Veladora+13" },
  { name: "Veladora Corazón Puro", price: 170, description: "Purifica sentimientos.", image: "https://via.placeholder.com/300x200?text=Veladora+14" },
  { name: "Veladora Equilibrio Vital", price: 200, description: "Balancea emociones.", image: "https://via.placeholder.com/300x200?text=Veladora+15" },
  { name: "Veladora Sueños Luminosos", price: 190, description: "Ayuda a soñar con claridad.", image: "https://via.placeholder.com/300x200?text=Veladora+16" },
  { name: "Veladora Alma Serena", price: 160, description: "Relaja la mente y el alma.", image: "https://via.placeholder.com/300x200?text=Veladora+17" },
  { name: "Veladora Esperanza Viva", price: 150, description: "Mantén viva la fe en tiempos difíciles.", image: "https://via.placeholder.com/300x200?text=Veladora+18" },
  { name: "Veladora Renacimiento Interior", price: 220, description: "Potencia nuevos comienzos.", image: "https://via.placeholder.com/300x200?text=Veladora+19" },
  { name: "Veladora Luz de Ángeles", price: 250, description: "Invoca la guía celestial.", image: "https://via.placeholder.com/300x200?text=Veladora+20" }
];

const productList = document.getElementById('product-list');
const cartButton = document.getElementById('cart-button');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const closeCart = document.getElementById('close-cart');
const checkoutButton = document.getElementById('checkout-button');

let cartData = [];

function renderProducts() {
  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>$${product.price.toFixed(2)}</strong></p>
      <button class="add-to-cart" data-index="${index}">Agregar al carrito</button>
    `;
    productList.appendChild(card);
  });
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cartData.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cartData.length;
}

productList.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart')) {
    const index = e.target.getAttribute('data-index');
    cartData.push(products[index]);
    updateCart();
  }
});

cartButton.addEventListener('click', () => {
  cart.classList.toggle('hidden');
});

closeCart.addEventListener('click', () => {
  cart.classList.add('hidden');
});

checkoutButton.addEventListener('click', () => {
  alert('¡Gracias por su compra!');
  cartData = [];
  updateCart();
  cart.classList.add('hidden');
});

renderProducts();
