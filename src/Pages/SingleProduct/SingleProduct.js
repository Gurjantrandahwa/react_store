import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useProductContext} from "../../Common/Context/productContext";
import "./singleProduct.scss";
import {
    Button,
    CircularProgress,
    Dialog, DialogActions,
    DialogContentText,
    DialogTitle,
    Divider,
    IconButton, TextField,
    Typography
} from "@mui/material";
import FormatPrice from "../../Common/Helpers/FormatPrice";
import ProductImages from "../../Components/ProductImages/ProductImages";
import Rating from "../../Components/Rating/Rating";
import AddToCart from "../../Components/AddToCart/AddToCart";
import {ChevronRight} from "@mui/icons-material";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts";

export default function SingleProduct() {
    const {getSingleProduct, isLoading, singleProduct} = useProductContext();
    const [desc, setDescr] = useState(false);
    const API = "https://api.pujakaitem.com/api/products";
    const {id} = useParams();
    const [open, setOpen] = useState(false);
    const [reviewDialog, setReviewDialog] = useState(false)
    const [writeReview, setWriteReview] = useState({
        review: ""
    })
    const [form, setForm] = useState({
        review: ""
    });
    const [submit, submitted] = useState(false);

    const printValues = e => {
        e.preventDefault();
        setForm({
            review: writeReview.review,

        });
        submitted(true);
    };

    const updateField = e => {
        setWriteReview({
            ...writeReview,
            [e.target.name]: e.target.value
        });
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, []);


    const {name, company, price, description, category, stock, stars, reviews, image} = singleProduct;
    if (isLoading) {
        return <div className={"loader"}>
            <CircularProgress color="secondary"/>
        </div>
    }
    return <div>
        <div className={"name-link"}>
            {/*<AiOutlineHome/>*/}
            <NavLink to={"/"}>Home</NavLink>
            <ChevronRight/>
            <Typography>{name}</Typography>
            <ChevronRight/>
        </div>
        <div className={"single-p-container"}>
            <div className={"single-product-wrapper"}>
                <div>
                    <ProductImages images={image}/>
                </div>

                {/*Text*/}
                <div>
                    <div className={"product-name-wrapper"}>
                        <Typography variant={"h5"}>
                            {name}
                        </Typography>
                        <Typography>
                            <FormatPrice price={price}/>
                        </Typography>
                    </div>
                    <div className={"rating-wrapper"}>
                        <Rating stars={stars}/>
                        <Typography> {reviews} customer reviews</Typography>
                    </div>

                    <div className={"stock"}>
                        <Typography>
                            Availability :
                        </Typography>
                        <div className={"stock-check"}>
                            {stock > 0 ? <AiOutlineCheck/> : null}
                            {stock > 0 ? "In Stock" : "Not Available"}

                        </div>
                    </div>
                    <Typography className={"stock-length"}>
                        Hurry up! only {stock} product left in stock!
                    </Typography>

                    <Divider color={"#BDBDBD"}/>
                    {
                        stock > 0 && <AddToCart product={singleProduct}/>
                    }
                    <Divider color={"#BDBDBD"}/>
                    <div className={"company-wrapper"}>
                        <div>
                            <Typography variant={"h5"}>
                                Category :
                            </Typography>
                            <Typography>
                                {category}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant={"h5"}>
                                Company :
                            </Typography>
                            <Typography> {company}</Typography>
                        </div>
                    </div>

                </div>

            </div>
            <div className={"description-wrapper-buttons"}>

                <Button
                    variant={"outlined"}
                    onClick={() => {
                        setDescr(true)
                    }}
                    className={"des-btn"}
                >
                    Description
                </Button>
                <Button
                    onClick={() => setReviewDialog(true)}
                    variant={"contained"}
                    className={"review-btn"}
                >
                    Reviews
                </Button>


            </div>

            {
                desc &&
                <div className={"desc-wrapper"}>
                    <IconButton

                        onClick={() => setDescr(false)}
                    >
                        <AiOutlineClose/>
                    </IconButton>
                    <p>{description}</p>
                </div>
            }
            {
                reviewDialog &&
                <div className={"reviews-container"}>
                    <Typography variant={"h5"}>
                        Customer reviews
                    </Typography>


                    <Typography>
                        {submit ? form.review : null        }
                        {/*{writeReview.length > 1 ? submit? form.review : null : "No reviews yet"}*/}

                    </Typography>


                    <Button
                        onClick={handleClickOpen}
                        variant={"contained"}
                    >
                        Write a review
                    </Button>
                    <IconButton
                        className={"review-close"}
                        onClick={() => setReviewDialog(false)}
                    >
                        <AiOutlineClose/>
                    </IconButton>
                </div>
            }

        </div>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Reviews</DialogTitle>
            <form onSubmit={printValues}>
                <DialogContentText sx={{padding: "20px"}}>
                    To review to this product, please enter your review here.

                    <TextField
                        autoFocus
                        margin="dense"
                        name={"review"}
                        label="Review"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={writeReview.review}
                        onChange={updateField}
                    />


                </DialogContentText>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        className={"dialog-btns"}
                    >
                        Cancel
                    </Button>
                    <Button
                        type={"submit"}
                        onClick={handleClose}
                        className={"dialog-btns"}>
                        Review
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
        <FeatureProducts/>
    </div>
}