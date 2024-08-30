import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {MyContext} from "../MyContext";
import {Link} from "react-router-dom";  // Import context

export default function Cart() {
    const [cart, setCart] = useState([]);
    const {currentUser} = useContext(MyContext);  // Get the currentUser from context

    const getList = () => {
        axios.get(`http://localhost:3000/carts`).then((res) => {
            let data = res.data;
            setCart(data);
        });
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <>
            <h2 align={"center"}>DANH SÁCH SẢN PHẨM</h2>
            <table className={'tableStyle'}>
                <tr>
                    <th className={'thTdStyle'} align={"center"}>User</th>
                    <th className={'thTdStyle'} align={"center"}>ID Product</th>
                    <th className={'thTdStyle'} align={"center"}>Name</th>
                    <th className={'thTdStyle'} align={"center"}>Price</th>
                    <th className={'thTdStyle'} align={"center"}>Quantity</th>
                </tr>
                {
                    cart.map((item) =>
                        item.products.map((product) => (
                            <>
                                <tr>
                                    <td className={'thTdStyle'}>{item.user}</td>
                                    <td className={'thTdStyle'}>{product.id}</td>
                                    <td className={'thTdStyle'}>{product.name}</td>
                                    <td className={'thTdStyle'}>${product.price}</td>
                                    <td className={'thTdStyle'}>{product.quantity}</td>
                                </tr>
                            </>
                        )))
                }
            </table>
        </>
    )
}
