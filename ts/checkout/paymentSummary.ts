import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatPrice } from "../utils/money.js";
import { addToOrders } from "../../data/orders.js";

export function renderPaymentSummary(){


  let productPrice = 0;
  let deliveryPriceTotal = 0;
  let itemCount = 0;

  cart.forEach((item) => {
    const product = getProduct(item.productId);
    productPrice += product.priceCents * item.quantity;
    itemCount += item.quantity;

    const deliveryOption = getDeliveryOption(item.deliveryOptionId);
    if (deliveryOption) {
      deliveryPriceTotal += deliveryOption.priceCents;
    }
  });


  const preTax = productPrice + deliveryPriceTotal;
  const tax = preTax * 0.1;
  const totalPrice = preTax + tax;

  const orderSummaryHtml = `       
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
      <div>Items (${itemCount}):</div>
      <div class="payment-summary-money">$${formatPrice(productPrice)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatPrice(deliveryPriceTotal)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatPrice(preTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatPrice(tax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatPrice(totalPrice)}</div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `;

  document.querySelector('.payment-summary').innerHTML = orderSummaryHtml;

  
    document.querySelector('.js-place-order').addEventListener('click', async () => {

    const response = await fetch('https://supersimplebackend.dev/orders', {
      method: 'POST', 
      headers: {
        'Content-type' : 'application/json'
      }, 
      body : JSON.stringify({
        cart: cart
      })
    })

    const order = await response.json()

    addToOrders(order)


    window.location.href = 'orders.html'






  })
  

  
  
}







