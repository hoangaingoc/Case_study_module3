import React from 'react';
import {Route, Routes} from 'react-router-dom';
import User from "../pages/User";
import Cart from "../pages/Cart";
import DetailProduct from "../pages/DetailProduct";
import NavBar from "../components/NavBar";

export default function UserLayout() {
    return (
        <>
            <div className="container-fluid">
                <NavBar/>
                <div className="row">
                    <div className="col-12">
                        <Routes>
                            <Route path={''} element={<User/>}/>
                            <Route path={'detail/:id'} element={<DetailProduct/>}/>
                            <Route path={'cart/:id'} element={<Cart/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};


