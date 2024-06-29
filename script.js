let loader = document.querySelector(".loadPage");
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");

cards.forEach(function(card){
  card.addEventListener("click", function(){
     console.log(card);

     document.querySelector("body").innerHTML="";
     let div = document.createElement("div");
     div.classList.add("foodDetail");
     div.innerHTML=`
     <img src=${card.firstElementChild.src} alt="">
       <div class="detailText">
           <h1>Foods You Like</h1>
           <h2>Upto 40% OFF</h2>
           <p>Pay on delivery might be available</p>
           <p>Pay on delivery might be available</p>
           <p>Pay on delivery might be available</p>
           <p>Pay on delivery might be available</p>
           <button>Buy Now</button>
           <button>Add To Cart</button>
           <a href="">Back</a>
       </div>
     `
     document.querySelector("body").appendChild(div)
  })
})

container.style.display="none";

  setInterval(function(){
     container.style.display="block";
    
        loader.style.display="none"
     },2000)



     document.addEventListener("DOMContentLoaded", () => {
        // Cart items array
        let cart = [];
    
        // Add to cart buttons
        const addToCartButtons = document.querySelectorAll(".add-to-cart");
    
        // Cart display elements
        const cartItemsContainer = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");
    
        // Add event listeners to "Add to Cart" buttons
        addToCartButtons.forEach(button => {
            button.addEventListener("click", function() {
                const card = this.closest(".card");
                const itemName = card.dataset.name;
                const itemPrice = parseFloat(card.dataset.price);
    
                addItemToCart(itemName, itemPrice);
            });
        });
    
        // Add item to cart
        function addItemToCart(name, price) {
            // Check if item already exists in cart
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCartUI();
        }
    
        // Remove item from cart
        function removeItemFromCart(name) {
            cart = cart.filter(item => item.name !== name);
            updateCartUI();
        }
    
        // Update cart UI
        function updateCartUI() {
            // Clear current cart items
            cartItemsContainer.innerHTML = "";
    
            // Render updated cart items
            cart.forEach(item => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
                    <button class="remove-from-cart">Remove</button>
                `;
    
                // Add event listener to remove button
                listItem.querySelector(".remove-from-cart").addEventListener("click", function() {
                    removeItemFromCart(item.name);
                });
    
                cartItemsContainer.appendChild(listItem);
            });
    
            // Update total price
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
        }
    });
    


























// let cart = [];
// const cartContainer = document.createElement('div');
// cartContainer.classList.add('cart-container');
// document.body.appendChild(cartContainer);

// const updateCart = () => {
//     cartContainer.innerHTML = '<h2>Cart</h2>';
//     if (cart.length === 0) {
//         cartContainer.innerHTML += '<p>Your cart is empty.</p>';
//     } else {
//         const cartItems = document.createElement('ul');
//         cartItems.classList.add('cart-items');
//         let total = 0;
//         cart.forEach(item => {
//             const cartItem = document.createElement('li');
//             cartItem.classList.add('cart-item');
//             cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
//             cartItems.appendChild(cartItem);
//             total += item.price * item.quantity;
//         });
//         cartContainer.appendChild(cartItems);
//         const cartTotal = document.createElement('p');
//         cartTotal.classList.add('cart-total');
//         cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
//         cartContainer.appendChild(cartTotal);
//         const checkoutButton = document.createElement('button');
//         checkoutButton.classList.add('cart-button');
//         checkoutButton.textContent = 'Checkout';
//         cartContainer.appendChild(checkoutButton);
//     }
//     cartContainer.style.display = 'block';
// };

// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', (e) => {
//         const card = e.target.closest('.card');
//         const id = card.dataset.id;
//         const name = card.dataset.name;
//         const price = parseFloat(card.dataset.price);

//         const existingItem = cart.find(item => item.id === id);
//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             cart.push({ id, name, price, quantity: 1 });
//         }
//         updateCart();
//     });
// });
