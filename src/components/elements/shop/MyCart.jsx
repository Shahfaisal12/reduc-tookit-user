import styled from "@emotion/styled";
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Stack } from "@mui/system";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../../../pages/store/shopSlice/CartSlice";
import { Link } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

//Main function
const MyCart = () => {
  const getproducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // to delete the indv. elements from an Item Cart
  const removeItem = (productId) => {
    dispatch(removeToCart(productId));
  };

  return (
    <div className="cart-section py-5">
      <div style={{ width: "100%" }}>
        <Container fixed>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold", marginTop: "16px", color:'#FFF' }}
          >
            My Cart
          </Typography>
        </Container>
      </div>
      <Container>
        <Box style={{ float: "right" }}>
          <Link className="btn btn-outline-primary" to="/">
            Product page
          </Link>
        </Box>
        <Grid container spacing={3} sx={{ pr: 2, mb: 5, mt: 2 }}>
          <Grid item xs={12} sm={12} md={8}>
            <Box>
              {getproducts.map((item) => (
                <Box
                  key={item.id}
                  style={{ backgroundColor: "#ffffff" }}
                  className="px-3"
                >
                  <Grid container spacing={2} className="mt-3" key={item.id}>
                    <Grid item className="pb-3">
                      <ButtonBase style={{ height: "60px", width: "50px" }}>
                        <Img alt="complex" src={item.image} />
                      </ButtonBase>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ alignSelf: "center" }}
                      sm
                      className="pb-3"
                      container
                    >
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          className="fw-bold"
                          gutterBottom
                        >
                          {item.title}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          className="fw-bold"
                        >
                          {item.price}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        className="d-flex justify-content-center align-items-center"
                      >
                        <IconButton
                          aria-label="delete"
                          size="small"
                          onClick={() => removeItem(item.id)}
                        >
                          <CloseOutlinedIcon fontSize="inherit" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider />
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4} className="mt-3">
            <Card
              sx={{
                boxShadow: "none",
                background: "#e2e3e5",
                borderRadius: "0",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ mb: 3, fontWeight: "bold" }}
                  variant="h6"
                  component="div"
                  gutterBottom
                >
                  Summary
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "space-between", mb: 2 }}
                >
                  <Typography color="text.secondary">Order total</Typography>
                  <Typography variant="body2">$34.32</Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "space-between", mb: 2 }}
                >
                  <Typography color="text.secondary">Promo code</Typography>
                  <Typography
                    variant="body2"
                    sx={{ background: "#f1f1f2", p: 0.5, alignSelf: "center" }}
                  >
                    SALE22
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Typography color="text.secondary">Shipping</Typography>
                  <Typography variant="body2">$92.32</Typography>
                </Stack>
              </CardContent>
            </Card>
            <Card
              sx={{
                boxShadow: "none",
                background: "#eaedf2",
                borderRadius: "0",
                borderTop: " 4px  dashed #FFFFFF",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Typography color="text.secondary" className="fw-bold">
                    Sub total
                  </Typography>
                  <Typography variant="body2">$2.01,32</Typography>
                </Stack>
              </CardContent>
            </Card>
            <Button
              size="medium"
              variant="contained"
              sx={{ float: "right", mt: 2 }}
              color="error"
            >
              CheckOut Items
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MyCart;
