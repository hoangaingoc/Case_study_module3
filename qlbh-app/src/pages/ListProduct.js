import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListProduct() {
    const [list, setList] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    useEffect(() => {
        axios.get("http://localhost:3000/products").then(response => {
            setList(response.data);
        });
    }, []);

    const filteredList = list.filter(item =>
        item.name.toLowerCase().includes(searchName.toLowerCase()) &&
        item.category.toLowerCase().includes(searchCategory.toLowerCase())
    );

    return (
        <>
            <div className="container mt-5">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by category"
                            value={searchCategory}
                            onChange={(e) => setSearchCategory(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    {filteredList.map(item => (
                        <div className="col-4 mb-4" key={item.id}>
                            <div className="card">
                                <img
                                    src={item.images[0]}
                                    alt={`${item.name}`}
                                    style={{ maxWidth: '100px', height: 'auto', marginRight: '5px' }}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.category}</p>
                                    <Link to={'detail/' + item.id} className="btn btn-primary">Xem chi tiết</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
