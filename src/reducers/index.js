import { combineReducers } from "redux";
import furniture from "./furniture";
import cart from "./cart";
import search from "./search";

const appReducers = combineReducers({
    furniture,
    cart,
    search
});

export default appReducers;