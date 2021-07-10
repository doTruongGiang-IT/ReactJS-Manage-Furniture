import * as types from "../constants/ActionTypes";

const initialState = [];

let findIndex = (furnitures, id) => {
    let result = -1;
    furnitures.forEach((furniture, index) => {
        if(furniture.id === id) {
            result = index;
        }
    });
    return result;
};

const furniture = (state = initialState, action) => {
    let index = -1;
    switch(action.type) {
        case types.GET_FURNITURE_LIST:
            state = action.furnitureList;
            return [...state];
        case types.GET_FURNITURE_BY_ID:
            state.splice(0);
            state.push(action.furniture);
            return [...state];
        case types.ADD_FURNITURE:
            state.push(action.furniture);
            return [...state];
        case types.UPDATE_FURNITURE:
            index = findIndex(state, action.furniture.id);
            state[index] = action.furniture;
            return [...state];
        case types.DELETE_FURNITURE:
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
};

export default furniture;