import * as types from "../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const getFurnitureList = (furnitureList) => {
    return {
        type: types.GET_FURNITURE_LIST,
        furnitureList
    };
};

export const getFurnitureListRequest = () => {
    return (dispatch) => {
        return callApi("furnitures", "GET", null)
                    .then(res => {
                        dispatch(getFurnitureList(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    }
};

export const getFurnitureById = (furniture) => {
    return {
        type: types.GET_FURNITURE_BY_ID,
        furniture
    };
};

export const getFurnitureByIdRequest = (id) => {
    return (dispatch) => {
        return callApi(`furnitures/${id}`, "GET", null)
                    .then(res => {
                        dispatch(getFurnitureById(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const addFurniture = (furniture) => {
    return {
        type: types.ADD_FURNITURE,
        furniture
    };
};

export const addFurnitureRequest = (furniture) => {
    return (dispatch) => {
        return callApi("furnitures", "POST", furniture)
                    .then(res => {
                        dispatch(addFurniture(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const updateFurniture = (furniture) => {
    return {
        type: types.UPDATE_FURNITURE,
        furniture
    };
};

export const updateFurnitureRequest = (id, furniture) => {
    return (dispatch) => {
        return callApi(`furnitures/${id}`, "PUT", furniture)
                    .then(res => {
                        dispatch(updateFurniture(res.data));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const deleteFurniture = (id) => {
    return {
        type: types.DELETE_FURNITURE,
        id
    };  
};

export const deleteFurnitureRequest = (id) => {
    return (dispatch) => {
        return callApi(`furnitures/${id}`, "DELETE", null)
                    .then(res => {
                        dispatch(deleteFurniture(res.data.id));
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
    };
};

export const getCartList = (furniture) => {
    return {
        type: types.GET_CART_LIST,
        furniture
    };
};

export const addToCart = (furniture) => {
    return {
        type: types.ADD_TO_CART,
        furniture
    };
};

export const removeFromCart = (id) => {
    return {
        type: types.REMOVE_FROM_CART,
        id
    };
};

export const upQtyCart = (id) => {
    return {
        type: types.UP_QTY_CART,
        id
    };
};

export const downQtyCart = (id) => {
    return {
        type: types.DOWN_QTY_CART,
        id
    };
};

export const searchFurniture = (keyword) => {
    return {
        type: types.SEARCH_FURNITURE,
        keyword
    };
}