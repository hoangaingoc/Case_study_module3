import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MyContext } from "../MyContext";

export default function DetailProduct() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const { currentUser } = useContext(MyContext);

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error("Error fetching product details:", err));
    }, [id]);

    const addToCart = () => {
        if (!currentUser.user || !currentUser.user.username) {
            alert("You need to log in to add products to the cart.");
            return;
        }

        if (product) {
            const cartData = {
                user: currentUser.user.username,
                total: product.price,
                date: new Date().toISOString(),
                products: [
                    {
                        id: product.id,
                        name: product.name,
                        quantity: 1,
                        price: product.price
                    }
                ]
            };

            axios.post("http://localhost:3000/carts", cartData)
                .then(res => {
                    alert("Product added to cart successfully!");
                })
                .catch(err => console.error("Error adding product to cart:", err));
        }
    };

    return (
        <>
            {product ? (
                <div className="row align-items-center">
                    <div className="col-6 mt-5 ml-5" >
                        <h2 align={"center"}>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.name} image ${index + 1}`}
                                style={{maxWidth: '200px', height: 'auto', marginRight: '5px'}}
                            />
                        ))}
                        <p>{product.description}</p>
                        <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>

            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
