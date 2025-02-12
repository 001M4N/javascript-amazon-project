import { cart, delete_item_from_cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import {cents_to_dollars} from "../utils/money.js";
import {make_delivery_options} from "../../data/deliveryOptions.js"
import {setDeliveryOption, display_delivery_text} from "../../data/deliveryOptions.js"

export function show_cart_items(){
  let checkout_html = '';

  cart.forEach((Cartitem) => {
    const productId = Cartitem.productId;

    let matchingProduct;
    products.forEach((product) =>{
        if (product.id === Cartitem.productId){
            matchingProduct = product;
        }
    });
    // console.log(matchingProduct.image);
    checkout_html += `
          <div class="cart-item-container js-cart-item-container-${Cartitem.productId}">
            <div class="delivery-date js-delivery-date-${Cartitem.productId}">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">
              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${cents_to_dollars(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${Cartitem.Quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${Cartitem.productId}">
                    Delete
                  </span>
                </div>
              </div>
              
              <div class="delivery-options">
                ${make_delivery_options(Cartitem)}
              </div>

            </div>
          </div>
    `
    // console.log(checkout_html)
    });

  document.querySelector('.js-order-summary').innerHTML = checkout_html;

  document.querySelectorAll('.js-delete-quantity-link').forEach(element => {
    element.addEventListener('click', () =>{
      const productId = element.dataset.productId;
      delete_item_from_cart(productId);
      document.querySelector(`.js-cart-item-container-${productId}`).remove();
    });
  });

  display_delivery_text();
  setDeliveryOption();
}




