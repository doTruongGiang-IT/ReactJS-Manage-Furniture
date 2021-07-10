

const FurnitureListStore = ({furniture, editFur, deleteFur}) => {
    const showStatus = () => {
        let result = null;
        if(furniture.status === true) {
            result = <span className="label label-success">Serving</span>;
        };
        if(furniture.status === false) {
            result = <span className="label label-danger">Out of order</span>;
        };
        return result;
    };

    return (
        <tr>
            <td>{furniture.id}</td>
            <td>{furniture.name}</td>
            <td>${furniture.price}</td>
            <td><img src={furniture.image} alt="" style={{width: '100px', height: '100px'}} /></td>
            <td>{furniture.description}</td>
            <td>{furniture.inventory}</td>
            <td>{showStatus()}</td>
            <td>
                <button type="button" className="btn btn-warning"><span className="glyphicon glyphicon-pencil" aria-hidden="true" onClick={() => editFur(furniture)}></span></button>
                <button type="button" className="btn btn-danger" style={{marginTop: '10px'}} onClick={() => deleteFur(furniture.id)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>   
            </td>
        </tr>
    );  
};

export default FurnitureListStore;