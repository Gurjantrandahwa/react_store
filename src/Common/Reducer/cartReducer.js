const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let {id, color, amount, product} = action.payload;

        let existingProduct = state.cart.find((
            value) => value.id === id + color)

        if (existingProduct) {
            let updatedProduct = state.cart.map((value) => {
                if (value.id === id + color) {
                    let newAmount = value.amount + amount

                    if (newAmount >= value.max) {
                        newAmount = value.max
                    }
                    return {
                        ...value,
                        amount: newAmount,
                    }
                } else {
                    return value;
                }
            });
            return {
                ...state,
                cart: updatedProduct
            }


        } else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }
    if (action.type === "REMOVE_ITEM") {

        let updatedCart = state.cart.filter((value) => value.id !== action.payload)
        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === "DECREASE") {
        let updatedProduct = state.cart.map((value) => {
                if (value.id === action.payload) {
                    let decAmount = value.amount - 1;
                    if (decAmount <= 1) {
                        decAmount = 1
                    }
                    return {
                        ...value,
                        amount: decAmount,
                    }
                } else {
                    return value;
                }
            }
        );
        return {
            ...state,
            cart: updatedProduct
        }
    }
    if (action.type === "INCREASE") {
        let updatedProduct = state.cart.map((value) => {
                if (value.id === action.payload) {
                    let incAmount = value.amount + 1;
                    if (incAmount >= value.max) {
                        incAmount = value.max
                    }
                    return {
                        ...value,
                        amount: incAmount,
                    }
                } else {
                    return value;
                }
            }
        );
        return {
            ...state,
            cart: updatedProduct
        }
    }
    // if (action.type === "CART_TOTAL") {
    //     let updatedItemVal = state.cart.reduce((initial, value) => {
    //         let {amount} = value;
    //         initial = initial + amount
    //         return initial
    //     }, 0);
    //
    //     return {
    //         ...state,
    //         total_item: updatedItemVal,
    //     }
    // }
    // if (action.type === "CART_TOTAL_PRICE") {
    //     let updatedPrice = state.cart.reduce((initial, value) => {
    //         let {price, amount} = value;
    //         initial = initial + price * amount
    //         return initial
    //     }, 0);
    //     return {
    //         ...state,
    //         total_price: updatedPrice,
    //     }
    // }
    if (action.type === "CART_TOTAL_AND_PRICE") {
        let {total_item, total_price} = state.cart.reduce((
            accum, value) => {
                let {price, amount} = value;

                accum.total_item  += amount;
                accum.total_price  += price * amount

                return accum;
            },
            {
                total_item: 0,
                total_price:0,
            }
            );

        return {
            ...state,
            total_item,
            total_price,
        }
    }

    return state;
}

export default cartReducer;