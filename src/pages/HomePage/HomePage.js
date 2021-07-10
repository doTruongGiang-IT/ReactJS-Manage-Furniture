import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FurnitureList from "../../components/FurnitureList/FurnitureList";
import Header from "../../components/Header/Header";
import * as actions from "../../actions/index";

const HomePage = () => {
    let dispatch = useDispatch();
    const furnitureList = useSelector(state => state.furniture);
    const searchList = useSelector(state => state.search);
    useEffect(() => {
        dispatch(actions.getFurnitureListRequest());
        localStorage.setItem("furnitureList", JSON.stringify(furnitureList));
    },[furnitureList.length]);// eslint-disable-line react-hooks/exhaustive-deps

    const renderList = () => {
        let result = null;
        if(searchList.length > 0) {// eslint-disable-next-line
            result = searchList.map((furniture, index) => {
                if(furniture.status) {
                    return <FurnitureList key={index} furniture={furniture} />
                };
            });
        };
        if(searchList.length === 0) {// eslint-disable-next-line
            result = furnitureList.map((furniture, index) => {
                if(furniture.status) {
                    return <FurnitureList key={index} furniture={furniture} />
                };
            });
        };
        return result;
    };

    const searchItem = (item) => {
        dispatch(actions.searchFurniture(item));
    };

    return (
        <div className="HomePage">
            <Header searchFur={(item) => searchItem(item)} />
            <div className="container">
                <div className="row">
                    {renderList()} 
                </div>
            </div>
        </div>
    );
};

export default React.memo(HomePage);