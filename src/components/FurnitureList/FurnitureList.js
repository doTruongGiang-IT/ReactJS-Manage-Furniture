import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/index";

const FurnitureList = ({furniture}) => {
    let dispatch = useDispatch();

    const formatDesc = (description) => {
        let result = "";
        if(description !== "") {
            result = description.substr(0, 40) + "...";
        };
        return result;
    };

    const formatName = (name) => {
        let result = "";
        if(name !== "") {
            result = name.substr(0, 20) + "...";
        };
        return result;
    };

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail">
                <img src={furniture.image} alt="sofa_image" className="thumbnail_image" style={{width: '100%', height: '250px'}} />
                <div className="caption">
                    <h2>{formatName(furniture.name)}</h2>
                    <h3>${furniture.price}</h3>
                    <p>
                        {formatDesc(furniture.description)}
                    </p>
                    <p style={{display: 'flex', justifyContent: 'space-around'}}>
                        <button type="button" className="btn btn-success" onClick={() => {dispatch(actions.addToCart(furniture))}}>Add to Cart</button>
                        <Link to={`/furniture/${furniture.id}`} className="btn btn-primary">View Details</Link>
                    </p>
                </div>
            </div> 
        </div>
    );
};

export default FurnitureList;