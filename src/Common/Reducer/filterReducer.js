const filterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((value) => value.price)

            // console.log(priceArr, "price")
            // console.log(Math.max.apply(null,priceArr))
            // let maxPrice = priceArr.reduce((initial, currValue) =>
            //     Math.max(initial, currValue), 0
            // )
            // console.log(maxPrice, "maxPrice")

            let maxPrice = Math.max(...priceArr)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice}
            };

        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true,
            }
        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false,
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            }
        case "SORTING_PRODUCTS":
            let newSortData;
            const {filter_products, sorting_value} = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price
                }
                if (sorting_value === "highest") {
                    return b.price - a.price
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = tempSortProduct.sort(sortingProducts)
            return {
                ...state,
                filter_products: newSortData,
            };

        case "UPDATE_FILTER_VALUE":
            const {name, value} = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            }
        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempFilterProduct = [...all_products];

            const {text, category, company, color, price} = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((item) => {
                    return item.name.toLowerCase().includes(text);
                })
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (item) => item.category === category)
            }
            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (item) => item.company.toLowerCase() === company.toLowerCase()
                )
            }
            if (color !== "all") {
                tempFilterProduct = tempFilterProduct.filter((item) =>
                    item.colors.includes(color)
                )
            }
            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter((item) => item.price === price)
            } else {
                tempFilterProduct = tempFilterProduct.filter((item) => item.price <= price)
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters:{
                   ...state.filters,
                    text: '',
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: 0,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.maxPrice,
                },
            }

        default:
            return state
    }
}

export default filterReducer;