// Java.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.agregar-carrito');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productId = button.getAttribute('data-id');
            const productName = button.closest('.product-txt').querySelector('h3').textContent;
            const productPrice = button.closest('.product-txt').querySelector('.precio').textContent;
            const productImage = button.closest('.product').querySelector('img').src;
            addToCart(productId, productName, productPrice, productImage);
        });
    });

    // Añadir funcionalidad al botón para vaciar el carrito
    const clearCartButton = document.getElementById('vacia-carrito');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', (event) => {
            event.preventDefault();
            clearCart();
        });
    }

    updateCartUI();
});

function addToCart(productId, productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === productId && item.name === productName);
    if (existingProductIndex > -1) {
        // Incrementar la cantidad si el producto ya existe
        cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
    } else {
        // Agregar el producto al carrito si no existe
        const product = {
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        };
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('#lista-carrito tbody');
    cartTableBody.innerHTML = '';

    cart.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}" style="width: 50px;"></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button class="quantity-btn decrease" data-index="${index}">-</button>
                ${product.quantity || 1}
                <button class="quantity-btn increase" data-index="${index}">+</button>
            </td>
            <td><button class="remove-item" data-index="${index}">Eliminar</button></td>
        `;
        cartTableBody.appendChild(row);
    });

    // Añadir eventos a los botones de eliminar
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = button.getAttribute('data-index');
            removeFromCart(index);
        });
    });

    // Añadir eventos a los botones de cantidad
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = button.getAttribute('data-index');
            if (button.classList.contains('increase')) {
                changeQuantity(index, 1);
            } else if (button.classList.contains('decrease')) {
                changeQuantity(index, -1);
            }
        });
    });
}

function changeQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart[index];
    if (product) {
        product.quantity = (product.quantity || 1) + change;
        if (product.quantity <= 0) {
            removeFromCart(index);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
        }
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartUI();
}

