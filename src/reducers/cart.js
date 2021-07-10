import * as types from "../constants/ActionTypes";

const initialState = {};
let arrCart = [];
let cartItem = {
    id: 0,
    name: "",
    price: 0,
    image: "",
    description: "",
    inventory: 0,
    status: false,
    qty: 0
};

let findIndex = (furnitures, id) => {
    let result = -1;
    furnitures.forEach((furniture, index) => {
        if(furniture.id === id) {
            result = index;
        }
    });
    return result;
};

const countQuantity = (arr, property) => {
    return arr.reduce(function (acc, obj) {
        let key = obj[property];
        if(!acc[key]) {
            acc[key] = 0;
        };
        acc[key]++;
        return acc;
    }, {});
};

const createListItem = (arr) => {
    return arr.reduce((acc, obj) => {
        let key = obj['id'];
        if(!acc[key]) {
            acc[key] = [];
        };
        acc[key].push(obj);
        if(acc[key].length > 1) {
            acc[key].splice(0, 1);
        };
        return acc;
    }, {});
};

const removeItemAll = (arr, id) => {
    let i = 0;
    while (i < arr.length) {
        if (arr[i].id === id) {
            arr.splice(i, 1);
        } else {
            ++i;
        };
    };
    return arr;
};

const cart = (state = initialState, action) => {
    let index = -1;
    switch(action.type) {
        case types.GET_CART_LIST:
            return state;
        case types.ADD_TO_CART:
            cartItem = {
                id: action.furniture.id,
                name: action.furniture.name,
                price: action.furniture.price,
                image: action.furniture.image,
                description: action.furniture.description,
                inventory: action.furniture.inventory,
                status: action.furniture.status,
                qty: 0
            };
            arrCart.push(cartItem);
            let groupItem = countQuantity(arrCart, "id");
            for(let i in groupItem) {
                if(i === cartItem.id) {
                    cartItem.qty = groupItem[i];
                };
            };
            state = createListItem(arrCart);
            localStorage.setItem("cartItem", JSON.stringify(state));
            return state;
        case types.UP_QTY_CART:
            state = JSON.parse(localStorage.getItem("cartList"));
            state.forEach(item => {
                if(item.id === action.id) {
                    item.qty++;
                    if(item.qty > item.inventory) {
                        alert("Mua gì lắm thế");
                        item.qty = item.inventory;
                    };
                };
            });
            localStorage.setItem("cartList", JSON.stringify(state));
            return state;
        case types.DOWN_QTY_CART:
            state = JSON.parse(localStorage.getItem("cartList"));
            for(let i = 0; i < state.length; i++) {
                if(state[i].id === action.id) {
                    state[i].qty--;
                    if(state[i].qty < 1) {
                        state.splice(i, 1);
                        removeItemAll(arrCart, action.id);
                    };
                };
            };
            localStorage.setItem("cartList", JSON.stringify(state));
            return state;
        case types.REMOVE_FROM_CART:
            state = JSON.parse(localStorage.getItem("cartList"));
            index = findIndex(state, action.id);
            state.splice(index, 1);
            removeItemAll(arrCart, action.id);
            localStorage.setItem("cartList", JSON.stringify(state));
            return state;
        default:
            return state;
    }
};

export default cart;