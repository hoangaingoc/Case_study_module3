import { Field, Form, Formik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons/faAlignCenter";

export default function Register() {
    let navigate = useNavigate();
    return (
        <>
            <Link to={'/'}>Login</Link>
            <div className="lg-reg-container">
                <h1 align={"center"}>Register</h1>
                <Formik
                    initialValues={{
                        name: '',
                        username: '',
                        password: '',
                        dob: ''
                    }}
                    onSubmit={values => {
                        axios.post("http://localhost:3000/users/register", values)
                            .then((res) => {
                                alert('Đăng ký thành công');
                                navigate('/');
                            })
                            .catch(e => {
                                alert('User đã tồn tại');
                            });
                    }}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field id="name" name="name" className="input-field" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Field id="username" name="username" className="input-field" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" type="password" className="input-field" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <Field id="dob" name="dob" type="date" className="input-field" />
                        </div>
                            <button type="submit" className="btn btn-primary btn-sl btn-block">Register</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}
