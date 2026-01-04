import { cart, updateCartDelivery } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatPrice } from "../utils/money.js";
import { removeFromCart } from "../../data/cart.js";
//import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
//import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

import dayjs from "../vendor/index.js";

import { deliveryOption, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";

  
export function renderOrderSummary() {
  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    


    const matchingProduct = getProduct(productId);

    const deliveryId = cartItem.deliveryOptionId;

    const deliveryOpt = getDeliveryOption(deliveryId);


    

    



    const today = dayjs();
    const deliveryDate = today.add(deliveryOpt?.deliveryDays || 7, "day");
    const formattedDate = deliveryDate.format("dddd, MMMM D");

    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container-${productId}">
        <div class="delivery-date">Delivery date: ${formattedDate}</div>

        <div class="cart-item-details-grid">
          <img
            class="product-image"
            src="${matchingProduct.image}"
          />

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">$${matchingProduct.getFormattedPrices()}</div>

            <div class="product-quantity">
              <span>Quantity: <span class="quantity-label">${cartItem.quantity}</span></span>

              <span 
                class="update-quantity-link link-primary js-update-link update-text-display"
                data-product-id="${matchingProduct.id}"
              >
                Update
              </span>

              <input class="quantity-input" />
              <span class="save-quantity-link link-primary">Save</span>

              <span 
                class="delete-quantity-link link-primary js-delete-link"
                data-product-id="${matchingProduct.id}"
              >
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>

            ${deliveryOptionsHtml(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );

      if (container){
        container.remove();
      } 

      renderPaymentSummary()

      

      updateCartQuantity();
      
    });
  });

  document.querySelectorAll(".js-update-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.add("is-editing-quantity");
    });
  });

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateCartDelivery(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary()
      
    });
  });

  updateCartQuantity();
}

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  document.querySelector(".js-check-quantity").innerHTML = cartQuantity;
}




function deliveryOptionsHtml(matchingProduct, cartItem) {
  let html = "";

  deliveryOption.forEach((option) => {
    const today = dayjs();
    const deliveryDate = today.add(option.deliveryDays, "day");
    const formattedDate = deliveryDate.format("dddd, MMMM D");

    const payAmount =
      option.priceCents === 0 ? "FREE" : '$'+formatPrice(option.priceCents);

    const isChecked = option.id === cartItem.deliveryOptionId;

    html += `
      <div 
        class="delivery-option js-delivery-option"
        data-product-id="${matchingProduct.id}"
        data-delivery-option-id="${option.id}"
      >
        <input
          type="radio"
          ${isChecked ? "checked" : ""}
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}"
        />
        <div>
          <div class="delivery-option-date">${formattedDate}</div>
          <div class="delivery-option-price">${payAmount}</div>
        </div>
      </div>
    `;
  });

  return html;
}

