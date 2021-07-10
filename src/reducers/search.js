import * as types from "../constants/ActionTypes";

const initialState = [];

const search = (state = initialState, action) => {
    switch(action.type) {
        case types.SEARCH_FURNITURE:
            state = JSON.parse(localStorage.getItem("furnitureList"));
            state = state.filter(item => item.name.toLowerCase().indexOf(action.keyword) !== -1);
            return [...state];
        default:
            return [...state];
    };
};

export default search;