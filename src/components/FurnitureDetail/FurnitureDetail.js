

const FurnitureDetail = ({furniture, history}) => {
    const showStatus = () => {
        let result = <h3><span className="label label-danger">Out of order</span></h3>;
        if(furniture.status) {
            result = <h3><span className="label label-success">Serving</span></h3>;
        };
        return result;
    };

    const navigateBack = () => {
        history.goBack();
    };

    return (
        <div className="container FurnitureDetail">
             <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading" style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h4>Furniture Details</h4>
                            <button type="button" className="btn btn-success" onClick={() => navigateBack()}>Back to List</button>
                        </div>
                        <div className="panel-body" style={{display: 'flex'}}>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <img src={furniture.image} alt="" style={{width: '100%', height: '100%'}} />        
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h3>Name: {furniture.name}</h3>
                                    <h3>Price: ${furniture.price}</h3>
                                    <h3>Description: {furniture.description}</h3>
                                    <h3>Inventory: {furniture.inventory}</h3>
                                    {showStatus()}
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default FurnitureDetail;