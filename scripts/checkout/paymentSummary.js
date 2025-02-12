import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { cents_to_dollars } from "../utils/money.js"
import {deliveryOptions} from "../../data/deliveryOptions.js"

export function render_payment_summary(){
    const payment_summary_html = `        
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${number_of_items()}):</div>
            <div class="payment-summary-money">$${cost_of_cart_items()}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${cost_of_shipping_and_handling()}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${total_cost()}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${estimated_tax()}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${total_cost_after_tax()}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;

        document.querySelector('.payment-summary').innerHTML = payment_summary_html;
}


function number_of_items(){
    let num = 0;
    cart.forEach(item => {
        num += item.Quantity;
    });
    return num;
}

function cost_of_cart_items(){
    let cost = 0;
    let price_item;
    cart.forEach(item =>{
        products.forEach(product => {
           (item.productId === product.id) && (price_item = product.priceCents);
        });
        cost += price_item * item.Quantity;
    });
    return cents_to_dollars(cost);
}

function cost_of_shipping_and_handling(){
    let cost = 0;
    let price_shippingHandling;
    cart.forEach(item => {
        deliveryOptions.forEach(option => {
            (option.id === item.deliveryOption) && (price_shippingHandling = option.priceCents);
        });
        cost += price_shippingHandling;
    });
    return cents_to_dollars(cost);
}

function total_cost(){
    return cents_to_dollars((cost_of_cart_items() * 100) + (cost_of_shipping_and_handling() * 100));
}

function estimated_tax(tax_rate=10){
    const totalCost = total_cost();
    return cents_to_dollars(((totalCost * 100)/tax_rate));
}

function total_cost_after_tax(){
    const totalCost = total_cost();
    return cents_to_dollars((totalCost * 100) + (estimated_tax()*100));
}