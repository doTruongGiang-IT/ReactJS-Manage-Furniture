import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from "../../components/Header/Header";
import FurnitureDetail from "../../components/FurnitureDetail/FurnitureDetail";
import * as actions from "../../actions/index";

const DetailPage = ({match, history}) => {
    let dispatch = useDispatch();
    let furnitureDetail = useSelector(state => state.furniture);
    useEffect(() => {
        dispatch(actions.getFurnitureByIdRequest(Number.parseInt(match.params.id)));
    },[]);// eslint-disable-line react-hooks/exhaustive-deps

    const renderDetail = () => {
        let result = null;
        if(furnitureDetail.length === 1) {
            result = furnitureDetail.map((furniture, index) => {
                return <FurnitureDetail key={index} furniture={furniture} history={history} />
            });
        };
        return result;
    };

    return (
        <div className="DetailPage">
            <Header />
            {renderDetail()}
        </div>
    );
};

export default React.memo(DetailPage);