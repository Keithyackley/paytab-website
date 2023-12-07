// cart.js
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const tipInput = document.getElementById('tip');
    const tipAmountElement = document.getElementById('tip-total');
  
    let cart = [];
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });
  
    tipInput.addEventListener('input', updateTip);
  
    function addToCart(event) {
      const drinkName = event.target.getAttribute('data-drink');
      const drinkPrice = parseFloat(event.target.getAttribute('data-price'));
      const quantityInputId = `quantity${cart.length + 1}`;
      const quantityInput = document.getElementById(quantityInputId);
      const quantity = parseInt(quantityInput.value);
  
      if (quantity > 0) {
        const cartItem = {
          drink: drinkName,
          price: drinkPrice,
          quantity: quantity
        };
  
        cart.push(cartItem);
        updateCartDisplay();
      }
    }
  
    function updateTip() {
      const tipAmount = parseFloat(tipInput.value) || 0;
      tipAmountElement.textContent = tipAmount.toFixed(2);
      updateCartDisplay();
    }
  
    function updateCartDisplay() {
      cartItemsContainer.innerHTML = '';
      let totalPrice = 0;
  
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.drink} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price * item.quantity;
      });
  
      const tipAmount = parseFloat(tipInput.value) || 0;
      const totalWithTip = totalPrice + tipAmount;
  
      totalElement.textContent = totalWithTip.toFixed(2);
    }
  });
  // cart.js
document.addEventListener('DOMContentLoaded', function () {
    // ... (previous JavaScript content) ...
  
    // Button to go to the payment screen
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', goToPaymentScreen);
  
    function goToPaymentScreen() {
      // Assuming you want to navigate to the payment screen (payment-screen.html)
      window.location.href = 'paymentscreen.html';
    }
  });
 function goToPaymentScreen() {
    // Assuming you want to navigate to the payment screen (payment-screen.html)
    window.location.href = 'ThankYou.html'; // Update the URL to point to the thank-you page
  }
