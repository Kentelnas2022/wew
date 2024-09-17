function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const productData = JSON.parse(localStorage.getItem('productData'));

    if (productData) {
        const productItems = document.getElementById('productItems');

        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        // Create and append image element
        const img = document.createElement('img');
        img.src = URL.createObjectURL(productData.productImage); // Display the image
        productItem.appendChild(img);

        // Create and append product details
        const details = document.createElement('div');

        const productName = document.createElement('h3');
        productName.textContent = `Product Name: ${productData.productName}`;
        details.appendChild(productName);

        const brand = document.createElement('p');
        brand.textContent = `Brand: ${productData.brand}`;
        details.appendChild(brand);

        const price = document.createElement('p');
        price.textContent = `Price: $${productData.price}`;
        details.appendChild(price);

        const weightVolume = document.createElement('p');
        weightVolume.textContent = `Weight/Volume: ${productData.weightVolume}`;
        details.appendChild(weightVolume);

        const quantity = document.createElement('p');
        quantity.textContent = `Quantity: ${productData.quantity}`;
        details.appendChild(quantity);

        const store = document.createElement('p');
        store.textContent = `Store: ${productData.store}`;
        details.appendChild(store);

        productItem.appendChild(details);
        productItems.appendChild(productItem);
    }
});
