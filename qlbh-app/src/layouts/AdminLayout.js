import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Admin from "../pages/Admin";
import Update from "../components/Update";
import NavBar from "../components/NavBar";
import Create from "../components/Create";
import Category from "../pages/Category";
import Cart from "../pages/Cart";
import Create_Category from "../compoments-category/Create_Category";
import Update_Category from "../compoments-category/Update_Category";


export default function AdminLayout() {
    return (
        <>
            <div className="container-fluid">
                <NavBar/>
                <div className="row">
                    <div className="col-2 mt-5">
                        <Link to={''}>Admin Home</Link><br/>
                        <Link to={'category'}>Category</Link><br/>
                        <Link to={'create'}>Create Product</Link><br/>
                        <Link to={'cart'}>Cart</Link><br/>
                    </div>
                    <div className="col-10 mt-3">
                        <Routes>
                            <Route path={''} element={<Admin/>}/>
                            <Route path={'cart'} element={<Cart/>}/>>
                            <Route path={'category'} element={<Category/>}/>
                            <Route path={'category/update/:id'} element={<Update_Category/>}/>
                            <Route path={'category/create'} element={<Create_Category/>}/>
                            <Route path={'create'} element={<Create/>}/>
                            <Route path={'update/:id'} element={<Update/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

