import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import "./login.scss";
import {Box, Button, Container, TextField, Typography} from "@mui/material";

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required')
        }),
        onSubmit: (values, formikHelpers) => {
            alert(JSON.stringify(values));
        }
    });
    return <div className={"login"}>

                <form onSubmit={formik.handleSubmit}>


                        <Typography
                            textTransform={"capitalize"}
                            align="center"
                            color="textSecondary"
                            variant="h4"
                        >
                            Please sign in to continue
                        </Typography>

                    <TextField
                        fullWidth
                        label="Email Address"
                        helperText={formik.touched.email && formik.errors.email}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
                        variant="outlined"/>

                    <TextField
                        fullWidth
                        label="Password"
                        helperText={formik.touched.password && formik.errors.password}
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        margin="normal"
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="password"
                        value={formik.values.password}
                        variant="outlined"/>
                    <Button fullWidth size={
                        'large'
                    } variant={"contained"}>Submit</Button>
                </form>

    </div>
}