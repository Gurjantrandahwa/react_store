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
    if (action.type==="INCREASE"){
        return {
            ...state,
            amount: +1
        }
    }
    if (action.type==="DECREASE"){
        return {
            ...state
        }
    }


    return state;
}

export default cartReducer;