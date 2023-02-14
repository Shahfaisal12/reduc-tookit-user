import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";

const tablecellstyle = {
    fontWeight: "bold", fontSize: "14px", textAlign: 'center',
    border: '1px solid rgba(224, 224, 224, 1)'
};
const tableborderstyle = { textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)' };

const OrderDetail = () => {
    return (
        <>
            <div className="OrderDetail-section py-5">
                <div className="container">
                    <div>
                        <Typography
                            variant="h5"
                            align="center"
                            sx={{ fontWeight: "bold", mb: 2, py: 1, color:"#fff" }}
                        >
                            Order Detail
                        </Typography>
                    </div>

                    <Grid container spacing={2} sx={{ mt: 5, color:'#fff' }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                Details Address
                            </Typography>
                            <Typography variant="subtitle1">Name: Abiq Ali</Typography>
                            <Typography variant="subtitle1">Phn no: +92 3452389200</Typography>
                            <Typography variant="subtitle1">City: Islamabad</Typography>
                            <Typography variant="subtitle1">
                                Address: plaza no 146, Bahria town Phase 4.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                                Order Details
                            </Typography>
                            <Typography variant="subtitle1">Order Status: Placed</Typography>
                            <Typography variant="subtitle1">Payment Status: Pending</Typography>
                            <Typography variant="subtitle1">Payment Type: Code</Typography>
                            <Typography variant="subtitle1">
                                Track Details: Detail of Shipping.
                            </Typography>
                        </Grid>
                    </Grid>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <TableContainer
                            component={Paper}
                            style={{
                                // maxWidth: "800px",
                                marginBottom: "4rem",
                                marginTop: "3.4rem",
                            }}
                        >
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={tablecellstyle}>Product</TableCell>
                                        <TableCell style={tablecellstyle}>Image</TableCell>
                                        <TableCell style={tablecellstyle}>Size </TableCell>
                                        <TableCell style={tablecellstyle}>Color</TableCell>
                                        <TableCell style={tablecellstyle}>Price</TableCell>
                                        <TableCell style={tablecellstyle}>Qty</TableCell>
                                        <TableCell style={tablecellstyle}>Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow orientation="vertical" align='center'>
                                        <TableCell style={tableborderstyle}>Shoes</TableCell>
                                        <TableCell align="center">
                                            {" "}
                                            <img
                                                src="../assets/subproduct/shoes.jpg"
                                                alt=""
                                                style={{ maxWidth: '100px' }}
                                            />
                                        </TableCell>
                                        <TableCell style={tableborderstyle}>XXL</TableCell>
                                        <TableCell style={tableborderstyle}>Black</TableCell>
                                        <TableCell style={tableborderstyle}>8922</TableCell>
                                        <TableCell style={tableborderstyle}>1</TableCell>
                                        <TableCell style={tableborderstyle}>71999</TableCell>
                                    </TableRow>
                                    <TableRow orientation="vertical">
                                        <TableCell colSpan={5} />
                                        <TableCell style={tablecellstyle}>Total</TableCell>
                                        <TableCell style={tablecellstyle}>71999</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDetail;
