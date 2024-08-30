import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  let [product, setProduct] = useState([]);
  const getList = () => {
    axios.get("http://localhost:3000/products").then((res) => {
      let data = res.data;
      setProduct(data);
    })
  }
  useEffect(() => {
    getList();
  }, []);


  const remove = (id) => {
    let isConfirm = window.confirm("Are you sure?");
    if (isConfirm) {
      axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
        alert("Deleted");
        getList();
      })
    }
  }

  return (
    <>
      <h2 align={"center"}>DANH SÁCH SẢN PHẨM</h2>
      <table className={'tableStyle'}>
        <tr>
          <th className={'thTdStyle'} align={"center"}>Id</th>
          <th className={'thTdStyle'} align={"center"}>Name</th>
          <th className={'thTdStyle'} align={"center"}>Price</th>
          <th className={'thTdStyle'} align={"center"}>Quantity</th>
          <th className={'thTdStyle'} align={"center"}>Category</th>
          <th className={'thTdStyle'} align={"center"}>Images</th>
          <th className={'thTdStyle'} align={"center"} colSpan={2}>Delete and Update</th>
        </tr>
        {
          product.map((item) => (
            <>
              <tr>
                <td className={'thTdStyle'}>{item.id}</td>
                <td className={'thTdStyle'}>{item.name}</td>
                <td className={'thTdStyle'}>${item.price}</td>
                <td className={'thTdStyle'}>{item.quantity}</td>
                <td className={'thTdStyle'}>{item.category}</td>
                <td className={'thTdStyle'}>
                  {item.images.map((image, index) => (
                      <img
                          key={index}
                          src={image}
                          alt={`${item.name} image ${index + 1}`}
                          style={{ maxWidth: '100px', height: 'auto', marginRight: '5px' }}
                      />
                  ))}x
                </td>
                <td className={'thTdStyle'} align={"center"}><button onClick={() => { remove(item.id) }} className="btn btn-primary">Delete</button></td>
                <td className={'thTdStyle'} align={"center"}><Link to={`/admin/update/${item.id}`}>Update</Link></td>
              </tr>
            </>
          ))
        }
      </table>
    </>
  );
}

export default List;