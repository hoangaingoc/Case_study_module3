import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Create_Category() {
    let [name, setName] = useState("");
    const navigate = useNavigate();

    const submit = () => {
        let category = {
            name: name,
        }

        axios.post("http://localhost:3000/categories", category).then(() => {
            alert("Thêm thành công");
            navigate("/admin/category");
        })
    }
    return (
        <>
            <h2>THÊM THỂ LOẠI</h2>
            <input className={"form-control"}
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <button className="btn btn-primary" onClick={() => {
                submit()
            }}>Submit
            </button>
        </>
    );
}

export default Create_Category;