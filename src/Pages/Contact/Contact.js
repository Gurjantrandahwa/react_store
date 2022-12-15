import React from "react";
import "./contact.scss";
import {Button, TextField} from "@mui/material";
// import {Form, Formik} from "formik";


export default function Contact() {
    return <div className={"contact"}>
        <h3>Contact us for more details</h3>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.738403421663!2d75.1364571244109!3d31.36539831257329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a2fd66c971daf%3A0x66077b18b41cfa02!2sGurdwara%20Sahib!5e0!3m2!1sen!2sin!4v1670934151070!5m2!1sen!2sin"
            width="100%" height="400" style={{border: 0}} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <div className={"container"}>
            <div className={"contact-form"}>

                {/*<Formik>*/}
                <form action={"https://formspree.io/f/xzbqpbed"} method={"POST"}>
                    <div>
                        <TextField
                            margin={"normal"}
                            sx={{width: "35%", marginBottom: "20px"}}
                            size={"small"}
                            type={"text"}
                            placeholder={"Username"}
                            name={"Username"}
                            required
                            autoComplete={"off"}
                            variant={"outlined"}

                        />
                    </div>
                    <div>
                        <TextField
                            sx={{width: "35%", marginBottom: "20px"}}
                            size={"small"}
                            type={"email"}
                            placeholder={"Email"}
                            name={"Email"}
                            required
                            autoComplete={"off"}
                            variant={"outlined"}

                        />
                    </div>
                    <div>
                        <TextField
                            multiline
                            sx={{width: "35%", marginBottom: "20px"}}
                            placeholder={"Enter your message"}
                            cols={"59"}
                            minRows={"8"}
                            autoComplete={"off"}
                            name={"Message"}
                            required
                        />
                    </div>


                    <Button
                        variant={"contained"}
                        value={"send"}

                        type={"submit"}
                        sx={{width: "35%", marginBottom: "20px",bgcolor:"maroon"}}
                    >
                        Send
                    </Button>
                </form>
                {/*</Formik>*/}

            </div>
        </div>
    </div>
}