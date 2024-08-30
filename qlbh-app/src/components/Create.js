import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Create() {
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [category, setCategory] = useState("");
    const [imageUrl1, setImageUrl1] = useState("");
    const [imageUrl2, setImageUrl2] = useState("");
    const [imageUrl3, setImageUrl3] = useState("");
    const navigate = useNavigate();

    const submit = () => {
        let product = {
            name: name,
            price: price,
            quantity: quantity,
            category: category,
            images: []
        }

        if (imageUrl1) product.images.push(imageUrl1);
        if (imageUrl2) product.images.push(imageUrl2);
        if (imageUrl3) product.images.push(imageUrl3);

        axios.post("http://localhost:3000/products", product).then(() => {
            alert("Thêm thành công");
            navigate("/admin");
        })
    }
    return (
        <>
            <h2>THÊM SẢN PHẨM</h2>
            <input className={"form-control"}
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input className={"form-control"}
                value={price}
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <input className={"form-control"}
                value={quantity}
                placeholder="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
            />
            <input className={"form-control"}
                value={category}
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
            />
<br/>
            <input className={"form-control"}
                value={imageUrl1}
                placeholder="Image URL 1"
                onChange={(e) => setImageUrl1(e.target.value)}
            />
            <input className={"form-control"}
                value={imageUrl2}
                placeholder="Image URL 2"
                onChange={(e) => setImageUrl2(e.target.value)}
            />
            <input className={"form-control"}
                value={imageUrl3}
                placeholder="Image URL 3"
                onChange={(e) => setImageUrl3(e.target.value)}
            />
            <br/>
            <button className="btn btn-primary" onClick={() => {
                submit()
            }}>Submit
            </button>
        </>
    );
}

export default Create;