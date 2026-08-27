const cartIcon =document.querySelector('#cart-icon')
const cart =document.querySelector('.cart')
const cartClose =document.querySelector('#cart-close')
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".price-and-cart img");
addCartButtons.forEach(button => {
    button.addEventListener("click", event =>{
        const productBox =event.target.closest(".product-box");
        addToCart(productBox);
    })
})

const cartContent = document.querySelector(".cart-content");
const addToCart = productBox => {
  const productImgsrc = productBox.querySelector(".img-box img").src;
  const productTitle = productBox.querySelector(".product-title").textContent; 
  const productPrice = productBox.querySelector(".price").textContent;
 
  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.innerHTML = `<img src="${productImgsrc}" class="cart-img">
            <div class="cart-detail">
                <h2 class="cart-product-title">${productTitle}</h2>
                <span class="cart-price">${productPrice}</span>
                <div class="cart-quantity">
                    <button id="decrement">-</button>
                    <span class="number">1</span>
                    <button id="increment">+</button>
                </div>
            </div>
           
           <img src="delete-bin-6-line.png"> `;
           cartContent.appendChild(cartBox);
};
