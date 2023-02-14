import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const tablecellstyle = { fontWeight: "bold", fontSize: "16px" };

//    ********************************** Mask Function ***************************************************
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(+00) 000-0000000"
            definitions={{
                "#92": /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
//    ********************************** End Mask Function ***************************************************

//    ********************************** Main Function ***************************************************
const CheckOutPage = () => {
    //    ********************************** Radio button ***************************************************
    const [value, setValue] = React.useState("Cash on Delivery");

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };

    //    ********************************** End Radio Button ***************************************************

    //    ********************************** Mask input ***************************************************
    const [values, setValues] = React.useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    //    ********************************** End mask ***************************************************

    return (
        <>
            <div className="CheckoutPage-section">
                <div className="container">
                    <div className="text-white py-5">
                        <Typography
                            variant="h5"
                            align="center"
                            sx={{ fontWeight: "bold", mb: 2, py: 1 }}
                        >
                            CheckOut Page
                        </Typography>
                    </div>

                    <div className="d-flex justify-content-end">
                        <Link to='/orderdetail' className="text-decoration-none">
                            <Button variant="contained" color="error" sx={{ mt: 2 }}>
                                Order Detail
                            </Button>
                        </Link>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8} md={8} sx={{ my: 5 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="h6" color="error">
                                        Have a Coupon?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="coupon_code"
                                                    label="Coupon Code"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <Button variant="contained" color="error" sx={{ mt: 5 }}>
                                                    Apply Coupon
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ mt: 5 }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography variant="h6" color="error">
                                        Shipping Address
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ mb: 5 }}>
                                    <FormControl sx={{ m: 1 }} variant="standard">
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="first_name"
                                                    label="First Name"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="last_name"
                                                    label="Last Name"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="company_name"
                                                    label="Company Name"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={6} sx={{ mt: "auto" }}>
                                                <Input
                                                    value={values.textmask}
                                                    onChange={handleChange}
                                                    label="Phone"
                                                    name="textmask"
                                                    id="formatted-text-mask-input"
                                                    inputComponent={TextMaskCustom}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="email"
                                                    label="Email Address"
                                                    type="email"
                                                    variant="standard"
                                                    aria-describedby="my-helper-text"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="address"
                                                    label="Address"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="country"
                                                    label="Select Your Country"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField
                                                    id="appartment"
                                                    label="Appartment"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="city"
                                                    label="City"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="district"
                                                    label="District"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="postal_code"
                                                    label="Postal Code"
                                                    type="text"
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} sx={{ my: 5 }}>
                            <Typography variant="h6" color="error">
                                Order Summary
                            </Typography>
                            <TableContainer
                                component={Paper}
                                sx={{ mr: 2, mt: 1, maxWidth: "350px", display: "flex", m: "auto" }}
                            >
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow
                                            sx={{
                                                "td,th": { border: "1px solid rgba(224, 224, 224, 1)" },
                                            }}
                                        >
                                            <TableCell style={tablecellstyle}>Product</TableCell>
                                            <TableCell align="right" style={tablecellstyle}>
                                                Total
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            orientation="vertical"
                                            sx={{
                                                "td,th": { border: "1px solid rgba(224, 224, 224, 1)" },
                                            }}
                                        >
                                            <TableCell component="th" scope="row" orientation="vertical">
                                                T-Shirt x 1{" "}
                                            </TableCell>
                                            <TableCell align="right">$150</TableCell>
                                        </TableRow>
                                        <TableRow
                                            orientation="vertical"
                                            sx={{
                                                "td,th": { border: "1px solid rgba(224, 224, 224, 1)" },
                                            }}
                                        >
                                            <TableCell component="th" scope="row" orientation="vertical">
                                                Polo T-Shirt x 1
                                            </TableCell>
                                            <TableCell align="right">$250</TableCell>
                                        </TableRow>
                                        <TableRow
                                            orientation="vertical"
                                            sx={{
                                                "td,th": { border: "1px solid rgba(224, 224, 224, 1)" },
                                            }}
                                        >
                                            <TableCell component="th" scope="row" orientation="vertical">
                                                Shoes x 1
                                            </TableCell>
                                            <TableCell align="right">$350</TableCell>
                                        </TableRow>
                                        <TableRow
                                            orientation="vertical"
                                            sx={{
                                                "td,th": { border: "1px solid rgba(224, 224, 224, 1)" },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                orientation="vertical"
                                                sx={{ fontWeight: "bold", fontSize: "16px" }}
                                            >
                                                Subtotal
                                            </TableCell>
                                            <TableCell align="right">$750</TableCell>
                                        </TableRow>
                                        <TableRow
                                            orientation="vertical"
                                            sx={{
                                                "td,th": { border: "1px solid rgba(224, 224, 224, 1)" },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                orientation="vertical"
                                                sx={{ fontWeight: "bold", fontSize: "16px" }}
                                            >
                                                Tax
                                            </TableCell>
                                            <TableCell align="right">$35</TableCell>
                                        </TableRow>
                                        <TableRow
                                            orientation="vertical"
                                            sx={{
                                                "td,th": { border: "1px solid rgba(224, 224, 224, 1)" },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                orientation="vertical"
                                                sx={{ fontWeight: "bold", fontSize: "16px" }}
                                            >
                                                Total
                                            </TableCell>
                                            <TableCell align="right">$785</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography variant="h6" color="error" sx={{ mt: 3 }}>
                                Payment Method
                            </Typography>
                            <Paper
                                sx={{ mt: 1, p: 2, maxWidth: "350px", display: "flex", m: "auto" }}
                            >
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={value}
                                        onChange={handleChangeRadio}
                                    >
                                        <FormControlLabel
                                            value="Cash on Delivery"
                                            control={<Radio />}
                                            label="Cash on Delivery"
                                        />
                                        <FormControlLabel
                                            value="Via Paypal"
                                            control={<Radio />}
                                            label="Via Paypal"
                                        />
                                    </RadioGroup>

                                    <img
                                        src="../assets/image/paypal.jpg"
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                    <Button variant="contained" color="error" sx={{ mt: 2 }}>
                                        Place Order
                                    </Button>
                                </FormControl>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default CheckOutPage;
