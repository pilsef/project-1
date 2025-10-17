import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from 'formik'

const LoginPage = () => {

    const [requestResponse, setRequestResponse] = useState({
        message: "",
        alertClass: ""
    });

    const initialValues = {
        email: "",
        password: ""
    };

    const navigate = useNavigate();

    const onSubmit = (values) => {
        // console.log("form data: ", values)
        axios
            .post("https://api.escuelajs.co/api/v1/auth/login", values)
            .then(
                (response) => {
                    console.log(response.data);
                    setRequestResponse({
                        message: "Login Successful",
                        alertClass: "alert alert-success"
                    });
                    localStorage.setItem("token", response.data.access_token);
                    navigate("/");
                },
                (error) => {
                    console.log(error);
                    setRequestResponse({
                        message: "Login Failed! Try Again.",
                        alertClass: "alert alert-danger"
                    });
                }
            )
            .catch(error => console.log(error))

    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required("email is required")
            .email("invalid email format"),
        password: Yup.string()
            .required("password is required")
            .min(6, "password must be at least 6 characters")
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">

                        <div className={requestResponse.alertClass} role="alert">
                            {requestResponse.message}
                        </div>

                        <h2>Log In</h2>
                        <hr />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnMount
                        >
                            {formik => (
                                <Form>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <Field
                                            type="text"
                                            name="email"
                                            className={
                                                formik.errors.email && formik.touched.email
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                        />
                                        <ErrorMessage name="email">
                                            {errorMessage => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label className="mt-2">Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            className={
                                                formik.errors.password && formik.touched.password
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                        />
                                        <ErrorMessage name="password">
                                            {errorMessage => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>

                                    <input type="submit" value="Log In" className="btn btn-primary btn-block" />

                                </Form>
                            )}
                        </Formik>

                        <p className="mt-3">
                            New user? <Link to="/register">Sign up.</Link>
                        </p>

                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}

export default LoginPage;