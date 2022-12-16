import React from "react";
import "./errorPage.scss";
import {Alert, Button, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

export default function ErrorPage() {
    return<div className={"error"}>
        <Alert  severity={"warning"} sx={{
            width:"50%",
            marginBottom:"10px"
        }}>
            Warning you are lost! This page does not exist.
        </Alert>
        <Typography color={"gray"}>
            Don't worry click on the home button go to home page.
        </Typography>
        <div>
            <NavLink to={"/"}>
                <Button
                    size={"medium"}
                    sx={{
                        margin:"30px",
                        padding:"5px 30px"
                    }}
                    variant={"contained"} color={"error"} >
                    Home
                </Button>
            </NavLink>
        </div>


        </div>
}