import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import "./login.scss";
import img from "../Headers/Header/img.png";
import {Alert, Box, Button, Container, TextField, Typography} from "@mui/material";

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
    return <>
        <Box component={"main"}
             sx={{
                 alignItems: "center",
                 display: "flex",
                 flexGrow: 1,
                 minHeight: "100%"
             }}>
            <Container maxWidth={"sm"}>
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{my: 3}} justifyContent={"centre"} display={"flex"}>
                        <img src={img} width={200} alt={""}/>
                    </Box>
                    <Box
                        sx={{
                            pb: 1,
                            pt: 3
                        }}
                    >
                        <Typography
                            align="center"
                            color="textSecondary"
                            variant="body1"
                        >
                            Please sign in to continue
                        </Typography>
                    </Box>
                    <TextField
                        fullWidth
                        label="Email Address"
                        helperText={formik.touched.email && formik.errors.email}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        margin="normal"
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
                        variant="outlined"/>
                </form>
            </Container>
        </Box>
    </>
}