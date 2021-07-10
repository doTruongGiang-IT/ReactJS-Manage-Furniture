import Header from "../../components/Header/Header";
import Cart from '../../components/Cart/Cart';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/index";

const CartPage = () => {
    let dispatch = useDispatch();
    const cartList = useSelector(state => state.cart);
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    let cartItems = {};
    let listCart = [];

    useEffect(() => {
        loadCart();
    }, [cartList]);// eslint-disable-line react-hooks/exhaustive-deps

    const loadCart = () => {
        if(!localStorage.getItem("cartList") && localStorage.getItem("cartItem")) {
            let furniture = localStorage.getItem("cartItem");
            cartItems = JSON.parse(furniture)
            for(let i in cartItems) {
                listCart = [...listCart, ...cartItems[i]];
            };
            localStorage.removeItem("cartItem");
            setList(listCart);
            localStorage.setItem("cartList", JSON.stringify(listCart));
            totalPrice(listCart, 0);
        }else if(localStorage.getItem("cartList") && !localStorage.getItem("cartItem")) {
            let list = localStorage.getItem("cartList");
            listCart = JSON.parse(list);
            setList(listCart);
            localStorage.setItem("cartList", JSON.stringify(listCart));
            totalPrice(listCart, 0);
        }else if(localStorage.getItem("cartList") && localStorage.getItem("cartItem")) {
            let list = localStorage.getItem("cartList");
            let furniture = localStorage.getItem("cartItem");
            let middle = JSON.parse(list);
            cartItems = JSON.parse(furniture);
            localStorage.removeItem("cartItem");
            for(let i in cartItems) {
                middle = [...middle, ...cartItems[i]];
            };
            let joinList = createListItem(middle);
            for(let i in joinList) {
                listCart = [...listCart, ...joinList[i]];
            };
            setList(listCart);
            localStorage.setItem("cartList", JSON.stringify(listCart));
            totalPrice(listCart, 0);
        };
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

    const totalPrice = (arr, acc) => {
        if(arr.length === 0) {
            setTotal(0);
        }else {
            arr.forEach(item => {
                acc += item.price * item.qty;
                setTotal(acc);
            });
        };
    };

    const removeItem = (id) => {
        dispatch(actions.removeFromCart(id));
        totalPrice(listCart, 0);
    };

    const upQtyCart = (id) => {
        dispatch(actions.upQtyCart(id));
        totalPrice(listCart, 0);
    };

    const downQtyCart = (id) => {
        dispatch(actions.downQtyCart(id));
        totalPrice(listCart, 0);
    };
    
    return(
        <div className="CartPage">
            <Header />
            <Cart list={list} indexDelete={(id) => removeItem(id)} upQty={(id) => upQtyCart(id)} downQty={(id) => downQtyCart(id)} total={total} />
        </div>
    );
};

export default CartPage;