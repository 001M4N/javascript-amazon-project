import { add_to_cart, cart } from "../../data/cart.js";

describe("test suite: add_to_cart", () => {
    it('adding new item to the cart', () => {
        const id = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
        const cart_len_old = cart.length;
        add_to_cart(id);
        const cart_len_new = cart.length;
        expect(cart_len_new).toEqual(cart_len_old + 1);
    });

    it('adding existing item to the cart', () => {

    });
});
