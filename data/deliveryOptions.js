import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"
import {cents_to_dollars} from "../scripts/utils/money.js"
import {cart, save_cart_to_local_storage} from "./cart.js"

const deliveryOptions = [
    {
        id: 1,
        deliveryDays: 7,
        priceCents: 0
    },
    {
        id: 2,
        deliveryDays: 3,
        priceCents: 499
    },
    {
        id: 3,
        deliveryDays: 1,
        priceCents: 999
    }
];


export function make_delivery_options(Cartitem){
    const today = dayjs();
    let delivery_date;
    let delivery_date_price;
    let deliveryOptionsHTML = '';
    let is_checked;
    deliveryOptions.forEach((option) => {
        delivery_date = today.add(option.deliveryDays, 'day').format("dddd, MMMM, DD");
        delivery_date_price = (option.priceCents === 0) ? `FREE Shipping` : `${cents_to_dollars(option.priceCents)}$ - Shipping`;
        let is_checked = (option.id === Cartitem.deliveryOption) ? 'checked' : null;
        // console.log(option.id, Cartitem.deliveryOption)
        deliveryOptionsHTML += 
            `
            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                <div class="delivery-option">
                    <input type="radio" ${is_checked}
                    class="delivery-option-input"
                    name="delivery-option-${Cartitem.productId}"
                    data-delivery-duration="${option.deliveryDays}"
                    data-product-id="${Cartitem.productId}">
                    <div>
                    <div class="delivery-option-date">
                        ${delivery_date}
                    </div>
                    <div class="delivery-option-price">
                        ${delivery_date_price}
                    </div>
                    </div>
                </div>
            </div>
            `
            // console.log(deliveryOptionsHTML)
    });

    return deliveryOptionsHTML;
}


export function setDeliveryOption(){
    const radios = document.querySelectorAll('.delivery-option-input');
    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const delivertOption = (Number(radio.dataset.deliveryDuration) === 7) ? 1 :
                                   (Number(radio.dataset.deliveryDuration) === 3) ? 2 : 3;
            cart.forEach(item => {
                (item.productId === radio.dataset.productId) && (item.deliveryOption = delivertOption);
            });
            save_cart_to_local_storage();
            display_delivery_text();
        });
    });
}


export function display_delivery_text(){
    cart.forEach(item => {

        let delivery_duration;
        deliveryOptions.forEach(option => {
            console.log(item.deliveryOption, option.id);
            (option.id === item.deliveryOption) && (delivery_duration = option.deliveryDays);
        });
        // console.log(delivery_duration)

        const today = dayjs()
        const delivey_date = today.add(delivery_duration, 'day').format("dddd, MMMM DD");
        
        document.querySelector(`.js-delivery-date-${item.productId}`).innerHTML = `Delivery date: ${delivey_date}`
    });
}