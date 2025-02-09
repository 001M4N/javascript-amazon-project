import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"
import {cents_to_dollars} from "../scripts/utils/money.js"

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
    deliveryOptions.forEach(option => {
        delivery_date = today.add(option.deliveryDays, 'day').format("dddd, MMMM, DD");
        delivery_date_price = (option.priceCents === 0) ? `FREE Shipping` : `${cents_to_dollars(option.priceCents)} Shipping`;
        // is_checked = ()
        deliveryOptionsHTML += 
            `
            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                <div class="delivery-option">
                    <input type="radio" ${}
                    class="delivery-option-input"
                    name="delivery-option-${Cartitem.productId}">
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
    });

    return deliveryOptionsHTML;
}