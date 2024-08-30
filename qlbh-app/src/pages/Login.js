import {Field, Form, Formik} from "formik";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import {MyContext} from "../MyContext";

export default function Login() {
    let navigate = useNavigate();
    let {setCurrentUser} = useContext(MyContext)

    return (
        <>
            <Link to={'/register'}>Register</Link>
            <div className="lg-reg-container">
                <h1 align={"center"}>Login</h1>
                <Formik
                    initialValues={
                        {
                            username: '',
                            password: ''
                        }
                    }
                    onSubmit={values => {
                        if (values.username === 'admin' && values.password === 'admin') {
                            alert('Welcome Admin!');
                            navigate('/admin');  // Navigate to admin page
                        } else {
                            axios.post("http://localhost:3000/users/login", values)
                                .then((res) => {
                                    alert('Đăng nhập thành công');
                                    setCurrentUser(res.data);
                                    navigate('/user');
                                }).catch(e => {
                                alert('sai tk, mk')
                            })
                        }

                    }}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Field id="username" name="username" className="input-field"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" type="password" className="input-field"/>
                        </div>
                        <button className="btn btn-primary btn-lg btn-block">Login</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
