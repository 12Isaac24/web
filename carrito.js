document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('#lista-carrito tbody');
    const totalSumElement = document.querySelector('#total-sum');
    
    let total = 0;

    // Limpiar el contenido previo de la tabla del carrito para evitar duplicados
    cartTableBody.innerHTML = '';

    // Renderizar los productos del carrito
    cart.forEach((product, index) => {
        // Extraer el precio, eliminando 'L.' y posibles espacios
        const productPriceString = product.price.replace('L.', '').trim();
        const productPrice = parseFloat(productPriceString.replace(',', '.')) || 0; // Convertir el precio a número, manejar decimales con punto

        if (isNaN(productPrice)) {
            console.error(`El precio del producto '${product.name}' no es válido: ${product.price}`);
            return; // Saltar el producto si el precio no es válido
        }

        const productQuantity = product.quantity || 1;
        const productTotalPrice = (productPrice * productQuantity).toFixed(2);
        total += parseFloat(productTotalPrice);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}" style="width: 50px;"></td>
            <td>${product.name}</td>
            <td>L.${productPrice.toFixed(2)}</td>
            <td>${productQuantity}</td>
            <td>L.${productTotalPrice}</td>
            <td><button class="remove-item" data-index="${index}">Eliminar</button></td>
        `;
        cartTableBody.appendChild(row);
    });

    // Mostrar el total
    totalSumElement.textContent = `L.${total.toFixed(2)}`;

    // Añadir eventos a los botones de eliminar
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = button.getAttribute('data-index');
            removeFromCart(index);
            location.reload(); // Recargar para actualizar el carrito
        });
    });

    // Añadir evento al botón de pagar
    document.getElementById('pagar').addEventListener('click', () => {
        alert('Página en mantenimiento');
    });
});

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
}
