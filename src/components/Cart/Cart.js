

const Cart = ({list, indexDelete, upQty, downQty, total}) => {
    const renderCart = () => {
        let result = null;
        if(list.length > 0) {
            result = list.map((item, index) => {
                return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.image} alt="" style={{width: '100px', height: '100px'}} /></td>
                            <td>${item.price}</td>
                            <td style={{display: 'flex'}}>
                                <input type="text" className="form-control" value={item.qty} onChange={() => handleChange()} />
                                <span style={{display: 'flex', flexDirection: 'column'}}>
                                    <button type="button" className="btn btn-default" style={{height: '16.5px', position: 'relative'}} onClick={() => upQty(item.id)}>
                                        <i className="glyphicon glyphicon-chevron-up" style={{position: 'absolute', marginLeft: '-7px'}}></i>
                                    </button>
                                    <button type="button" className="btn btn-default" style={{height: '16.5px', position: 'relative'}} onClick={() => downQty(item.id)}>
                                        <i className="glyphicon glyphicon-chevron-down"  style={{position: 'absolute', marginLeft: '-7px'}}></i>
                                    </button>
                                </span>
                            </td>
                            <td><button type="button" className="btn btn-danger" onClick={() => indexDelete(item.id)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>
                        </tr>
            });
        };
        return result;
    };

    const handleChange = () => {};
    
    const process = () => {
        alert("Có tiền không mà mua hàng :)))");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1>Your Cart</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderCart()}
                            <tr>
                                <td colSpan="3"><strong>TOTAL:</strong></td>
                                <td>${total}</td>
                                <td><button type="button" className="btn btn-success" onClick={() => process()}>Process to Checkout</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;