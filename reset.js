function resetModal() {
    document.getElementById('quantity').value = 1;
}

function closeProductModal() {
    productModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    resetModal();
}

// Or directly reset when opening new modal
function openProductModal(container) {
    const productImg = container.querySelector('.product-img').src;
    const productName = container.querySelector('.product-name').textContent;
    const productPrice = container.querySelector('.product-price').textContent;
    
    // Reset quantity first
    document.getElementById('quantity').value = 1;
    
    // Set modal content
    document.getElementById('modal-img').src = productImg;
    document.getElementById('modal-name').textContent = productName;
    document.getElementById('modal-price').textContent = productPrice;
    document.getElementById('modal-description').textContent = `Premium quality ${productName.toLowerCase()} designed for comfort and durability. Perfect addition to your home furniture collection.`;
    
    productModal.classList.add('active');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}