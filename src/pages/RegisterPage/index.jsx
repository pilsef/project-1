import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik"
import * as Yup from "yup"

const RegisterPage = () => {

    const initialValues = {
        firstName: "",
        email: "",
        phone: "",
        password: ""
    };
    const onSubmit = values => console.log("Form Data: ", values);

    const validationSchema = Yup.object({
        firstName: Yup.string().required("first name is required"),
        email: Yup.string().required("email is required")
            .email("invalid email format"),
        phone: Yup.string().required("phone number is required")
            .length(10, "phone number must be 10 digits"),
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

                        <h2>Register</h2>
                        <hr />

                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    type="text" 
                                    name="firstName"
                                    className={formik.errors.firstName && formik.touched.firstName ? "form-control is-invalid" : "form-control"}
                                    value={formik.values.firstName} 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.firstName && formik.touched.firstName ?
                                    (<small className="text-danger">{formik.errors.firstName}</small>)
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
                                <label className="mt-2">Mobile Phone Number</label>
                                <input
                                    type="tel" 
                                    name="phone"
                                    className={formik.errors.phone && formik.touched.phone ? "form-control is-invalid" : "form-control"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.phone && formik.touched.phone ?
                                    (<small className="text-danger">{formik.errors.phone}</small>)
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