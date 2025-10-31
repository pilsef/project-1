import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik"
import axios from "axios";
import * as Yup from "yup"

const RegisterPage = () => {

    const [requestResponse, setRequestResponse] = useState({
        message: "",
        alertClass: ""
    });

    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: ""
    };

    const navigate = useNavigate();

    const onSubmit = (values) => {
        // console.log("form data: ", values)
        axios
            .post("http://localhost:9191/api/auth/register", values)
            .then(
                (response) => {
                    console.log(response.data);
                    setRequestResponse({
                        message: "Registration Successful",
                        alertClass: "alert alert-success"
                    });
                    localStorage.setItem("token", response.data.access_token);
                    navigate("/");
                },
                (error) => {
                    console.log(error);
                    setRequestResponse({
                        message: "Registration Failed! Try Again.",
                        alertClass: "alert alert-danger"
                    });
                }
            )
            .catch(error => console.log(error))
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("name is required"),
        username: Yup.string().required("username is required"),
        email: Yup.string().required("email is required")
            .email("invalid email format"),
        password: Yup.string().required("password is required")
            .min(6, "password must be at least 6 characters"),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
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

                        <h2>Register</h2>
                        <hr />

                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text" 
                                    name="name"
                                    className={formik.errors.name && formik.touched.name ? "form-control is-invalid" : "form-control"}
                                    value={formik.values.name} 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name && formik.touched.name ?
                                    (<small className="text-danger">{formik.errors.name}</small>)
                                    : null
                                }
                            </div>

                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text" 
                                    name="username"
                                    className={formik.errors.username && formik.touched.username ? "form-control is-invalid" : "form-control"}
                                    value={formik.values.username} 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.username && formik.touched.username ?
                                    (<small className="text-danger">{formik.errors.username}</small>)
                                    : null
                                }
                            </div>

                            <div className="form-group">
                                <label className="mt-2">Email</label>
                                <input
                                    type="text" 
                                    name="email"
                                    className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email && formik.touched.email ?
                                    (<small className="text-danger">{formik.errors.email}</small>)
                                    : null
                                }
                            </div>

                            <div className="form-group">
                                <label className="mt-2">Password</label>
                                <input
                                    type="password" 
                                    name="password"
                                    className={formik.errors.password && formik.touched.password ? "form-control is-invalid" : "form-control"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.password && formik.touched.password ?
                                    (<small className="text-danger">{formik.errors.password}</small>)
                                    : null
                                }
                            </div>

                            <input
                                type="submit" 
                                value="Register"
                                className="btn btn-primary btn-block"
                                disabled={!formik.isValid}
                            />
                        </form>

                        <p className="mt-3">
                            Already registered? <Link to="/login">Log in.</Link>
                        </p>

                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}

export default RegisterPage;