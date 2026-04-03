// Function to handle adding an item to the cart
function addToCart(event) {
  const button = event.target;
  const productId = button.getAttribute('data-product-id');
  
  // In a real application, you would add the product to your cart object/array
  console.log('Product with ID ' + productId + ' added to cart!');
  alert('Product added to cart!');
  
  // Example: Update a simple cart counter (not included in the HTML above)
  // const cartCounter = document.getElementById('cart-count');
  // cartCounter.textContent = parseInt(cartCounter.textContent) + 1;
}

// Get all "add to cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add a click event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
