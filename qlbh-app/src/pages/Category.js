import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
    let [category, setCategory] = useState([]);
    const getList = () => {
        axios.get("http://localhost:3000/categories").then((res) => {
            let data = res.data;
            setCategory(data);
        })
    }
    useEffect(() => {
        getList();
    }, []);


    const remove = (id) => {
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm) {
            axios.delete(`http://localhost:3000/categories/${id}`).then((res) => {
                alert("Deleted");
                getList();
            })
        }
    }

    return (
        <>
            <button className="btn btn-outline-primary mt-3 mb-3"><Link to={'create'}>Thêm mới thể loại</Link>
            </button>
            <h2 align={"center"}>DANH SÁCH SẢN PHẨM</h2>
            <table className={'tableStyle'}>
                <tr>
                    <th className={'thTdStyle'} align={"center"}>Id</th>
                    <th className={'thTdStyle'} align={"center"}>Name</th>
                    <th className={'thTdStyle'} align={"center"} colSpan={2}>Delete and Update</th>
                </tr>
                {
                    category.map((item) => (
                        <>
                            <tr>
                                <td className={'thTdStyle'}>{item.id}</td>
                                <td className={'thTdStyle'}>{item.name}</td>
                                <td className={'thTdStyle'} align={"center"}><button onClick={() => { remove(item.id) }} className="btn btn-primary">Delete</button></td>
                                <td className={'thTdStyle'} align={"center"}><Link to={`/admin/category/update/${item.id}`}>Update</Link></td>
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    );
}

export default List;