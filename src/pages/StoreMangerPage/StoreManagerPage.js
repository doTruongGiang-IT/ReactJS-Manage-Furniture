import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "../../actions/index";
import FurnitureForm from "../../components/FurnitureForm/FurnitureForm";
import FurnitureListStore from "../../components/FurnitureListStore/FurnitureListStore";
import Header from "../../components/Header/Header";

const StoreManagerPage = () => {
    let dispatch = useDispatch();
    const furnitureList = useSelector(state => state.furniture);
    const [selectedFurniture, setSelectedFurniture] = useState();
    useEffect(() => {
        dispatch(actions.getFurnitureListRequest());
    }, [furnitureList.length]);// eslint-disable-line react-hooks/exhaustive-deps

    const renderList = () => {
        let result = null;
        if(furnitureList.length > 0) {
            result = furnitureList.map((furniture, index) => {
                return <FurnitureListStore key={index} furniture={furniture} editFur={(furniture) => editFurniture(furniture)} deleteFur={(id) => removeFurniture(id)} />
            });
        };
        return result;
    };

    const createFurniture = (furniture) => {
        if(furniture) {
            dispatch(actions.addFurnitureRequest(furniture));
        };
    };

    const editFurniture = (furniture) => {
        if(furniture) {
            setSelectedFurniture(furniture);
        };
    };

    const updateFurniture = (id, furniture) => {
        if(id && furniture) {
            dispatch(actions.updateFurnitureRequest(id, furniture));
        };
    };

    const removeFurniture = (id) => {
        if(id) {
            dispatch(actions.deleteFurnitureRequest(id));
        };
    };

    return (
        <div className="StoreManagerPage">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Inventory</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderList()}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <FurnitureForm addFurniture={(furniture) => createFurniture(furniture)} selectedFurniture={selectedFurniture} updateFur={(id, furniture) => updateFurniture(id, furniture)} />         
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default StoreManagerPage;