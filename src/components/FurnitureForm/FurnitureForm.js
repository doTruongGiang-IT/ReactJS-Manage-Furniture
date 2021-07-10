import { useState, useEffect } from "react";

const FurnitureForm = ({addFurniture, selectedFurniture, updateFur}) => {
    const[id, setId] = useState(0);
    const[name, setName] = useState("");
    const[price, setPrice] = useState(0);
    const[image, setImage] = useState("");
    const[description, setDescription] = useState("");
    const[inventory, setInventory] = useState(0);
    const[status, setStatus] = useState(false);

    useEffect(() => {
        if(selectedFurniture) {
            setId(selectedFurniture.id);
            setName(selectedFurniture.name);
            setPrice(selectedFurniture.price);
            setImage(selectedFurniture.image);
            setDescription(selectedFurniture.description);
            setInventory(selectedFurniture.inventory);
            setStatus(selectedFurniture.status);
        };
    }, [selectedFurniture]);// eslint-disable-line react-hooks/exhaustive-deps

    const submitFur = () => {
        if(id === 0 && name !== "" && price !== 0 && image !== "" && description !== "" && inventory !==0) {
            let furniture = {
                name,
                price,
                image,
                description,
                inventory,
                status: Boolean(status)
            };
            addFurniture(furniture);
        };
        if(id !== 0) {
            let furniture = {
                name,
                price,
                image,
                description,
                inventory,
                status: Boolean(status)
            };
            updateFur(id, furniture);
        };
        setName("");
        setPrice(0);
        setImage("");
        setDescription("");
        setInventory(0);
        setStatus(false);
    };

    return (
        <div className="FurnitureForm">
            <div className="panel panel-primary">
                <div className="panel-heading"></div>
                <div className="panel-body">
                    <form>
                        <legend>Form Add Furniture</legend>
                    
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    
                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Image</label>
                            <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Inventory</label>
                            <input type="number" className="form-control" value={inventory} onChange={(e) => setInventory(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Status</label>
                            <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} >
                                <option value={true}>Serving</option>
                                <option value="">Out of order</option>
                            </select>
                        </div>
                    
                        <button type="button" className="btn btn-primary" onClick={() => submitFur()} >Submit</button>
                    </form>
                </div>
            </div> 
        </div>   
    );
};

export default FurnitureForm;