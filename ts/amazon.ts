import {cart, addToCart, loadFromStorage} from '../data/cart.js'
import { formatPrice } from './utils/money.js';
import { loadProducts, products } from '../data/products.js'
import {CartItem} from "./types/index.js"


loadProducts(renderAmazon)


function renderAmazon(): void{

const productsContainers  = document.querySelector('.products-grid')

if (!productsContainers) {
  console.error('products container not locaateed')
  return 
}

// Build HTML string first - MUCH faster than innerHTML +=
let productsHTML = ''

products.forEach(product  => {

    productsHTML += `

        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}"
              loading="lazy"
              alt="${product.name}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name} 
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getURL()}"
              alt="Rating: ${product.rating.stars} stars"
              loading="lazy">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${formatPrice(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class='js-quantity-selector-${product.id}'>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          ${product.extraInfo()}

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" alt="Added to cart" loading="lazy">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id='${product.id}'>
            Add to Cart
          </button>
        </div>
    `
});

// Set innerHTML once - this is MUCH faster
productsContainers.innerHTML = productsHTML

// Attach event listeners AFTER DOM is updated
attachEventListeners()
updateCartQuantity()

}

function updateCartQuantity(){
    let cartQuantityTotal = 0
    cart.forEach((cartItem: CartItem) => {
        cartQuantityTotal += cartItem.quantity
    })

    const cartNumber = document.querySelector<HTMLElement>('.js-cart-quantity')

    if (cartNumber) {
      cartNumber.innerHTML = String(cartQuantityTotal) 
    }

    
}

function attachEventListeners(){
    const buttonElement = document.querySelectorAll<HTMLButtonElement>('.js-add-to-cart')

    buttonElement.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId

            if (!productId) return 

            const productQuantityValue = document.querySelector<HTMLSelectElement>(`.js-quantity-selector-${productId}`)

            if (!productQuantityValue) return 

            const quantityVal = Number(productQuantityValue.value)

            addToCart(productId, quantityVal)
            updateCartQuantity()
        })
    })
}

