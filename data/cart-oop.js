function Cart(localStorageKey){
    const cart = {
        cart_items : (JSON.parse(localStorage.getItem(localStorageKey))) || [],
        
        add_to_cart(productId){
            let flag = 0;
            cart.forEach((item) => {
                (item.productId===productId) && (item.Quantity += 1) && (flag = 1);
            });
        
            (flag === 0) && (this.cart_items.push({productId, Quantity:1, deliveryOption: 1}));
        
            save_cart_to_local_storage();
            cart_quanity();
        },
    
        cart_quanity(){
            let num_items_in_cart = 0;
            this.cart_items.forEach((item) => {
                num_items_in_cart += item.Quantity;
            });
            document.querySelector('.js-cart-quantity').innerHTML = num_items_in_cart;
            console.log(num_items_in_cart);
        },
    
        delete_item_from_cart(productId){
          let newCart = []
          this.cart_items.forEach((item) => {
            (item.productId !== productId) && newCart.push(item);
          });
        
          this.cart_items = newCart;
          save_cart_to_local_storage();
        },
    
        save_cart_to_local_storage(){
            localStorage.setItem(localStorageKey, JSON.stringify(this.cart_items));
        }
    };
    return cart;
};

const cart = Cart();
const businessCart = Cart();


console.log(cart);
console.log(businessCart);