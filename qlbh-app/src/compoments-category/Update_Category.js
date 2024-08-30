import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update_Category() {
    const [name, setName] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const idUpdate = params.id;

    useEffect(() => {
        if (idUpdate) {
            axios.get(`http://localhost:3000/categories/${idUpdate}`)
                .then((res) => {
                    const data = res.data;
                    setName(data.name);
                })
                .catch((error) => alert("Error fetching category data: ", error));
        }
    }, [idUpdate]);

    const submit = () => {
        let category = {
            name
        };



        // Send PUT request to update the product
        axios.put(`http://localhost:3000/categories/${idUpdate}`, category)
            .then(() => {
                alert("Update Success");
                navigate("/admin/category");
            })
            .catch((error) => {
                alert("Update error: ", error);
            });
    };

    return (
        <>
            <h3>Cập NHẬT THỂ LOẠI</h3>
            <input className={"form-control"}
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <button className="btn btn-primary" onClick={submit}>Submit</button>
        </>
    );
}

