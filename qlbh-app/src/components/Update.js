import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function Update() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl1, setImageUrl1] = useState("");
    const [imageUrl2, setImageUrl2] = useState("");
    const [imageUrl3, setImageUrl3] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const idUpdate = params.id;

    useEffect(() => {
        if (idUpdate) {
            axios.get(`http://localhost:3000/products/${idUpdate}`)
                .then((res) => {
                    const data = res.data;
                    setName(data.name);
                    setPrice(data.price);
                    setQuantity(data.quantity);
                    setCategory(data.category);
                    if (data.images.length > 0) setImageUrl1(data.images[0]);
                    if (data.images.length > 0) setImageUrl2(data.images[1]);
                    if (data.images.length > 0) setImageUrl3(data.images[2]);
                })
                .catch((error) => alert("Error fetching product data: ", error));
        }
    }, [idUpdate]);

    const submit = () => {
        let product = {
            name,
            price,
            quantity,
            category,
            images: []
        };

        if (imageUrl1) product.images.push(imageUrl1);
        if (imageUrl2) product.images.push(imageUrl2);
        if (imageUrl3) product.images.push(imageUrl3);


        // Send PUT request to update the product
        axios.put(`http://localhost:3000/products/${idUpdate}`, product)
            .then(() => {
                alert("Update Success");
                navigate("/admin");
            })
            .catch((error) => {
                alert("Update error: ", error);
            });
    };

    return (
        <>
            <h1>Update Product</h1>
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
            <button className="btn btn-primary" onClick={submit}>Submit</button>
        </>
    );
}

