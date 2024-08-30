import Login from "./pages/Login";
import {Link, Route, Routes} from "react-router-dom";

import "./App.css"
import Header from "./components/Header";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import Register from "./pages/Register";
import React from "react";
import Cart from "./pages/Cart";
import Category from "./pages/Category";

function App() {

    return (
        <>

            <div className="container-fluid">
                <Header/>
                <div className="row">
                    <div className="col-12">
                        <Routes>
                            <Route path={'register'} element={<Register/>}></Route>
                            <Route path={''} element={<Login/>}></Route>
                            <Route path='admin/*' element={<AdminLayout/>}/>
                            <Route path='user/*' element={<UserLayout/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;