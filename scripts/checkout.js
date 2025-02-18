import {show_cart_items} from "./checkout/orderSummary.js"
import {render_payment_summary} from "./checkout/paymentSummary.js"
// import "../data/cart-oop.js"
import { load_products_from_backend } from "../data/products.js"

load_products_from_backend(() => {
    show_cart_items();
    render_payment_summary();
});
