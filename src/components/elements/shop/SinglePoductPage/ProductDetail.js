import React from "react";
import "./SingleProductDetail.css";
import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";
import { Button, Typography } from "@mui/material";

class ProductDetail extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "../assets/subproduct/shoes.jpg",
          "../assets/subproduct/shoes1.jpg",
          "../assets/subproduct/shoes2.jpg",
          "../assets/subproduct/shoes3.jpg",
          "../assets/subproduct/shoes4.jpg",
          "../assets/subproduct/shoes5.jpg",
        ],
        description: "Nikee Air Jordans 1 MID Lakers Aj1 Basketball Shoes",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <>
        <div className="py-5 text-white">
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 2, py: 1 }}
          >
            Product Detail
          </Typography>
        </div>
        <div className="app text-white">
          {products.map((item) => (
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="" />
              </div>

              <div className="box">
                <div>
                  <Typography variant="h4" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                    ${item.price}
                  </Typography>
                </div>

                {/* Color component Buttons */}
                <Colors colors={item.colors} />

                <Typography
                  variant="p"
                  gutterBottom
                  sx={{
                    mt: 3,
                    textTransform: "uppercase",
                    display: "block",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  sx={{ my: 2, display: "block", fontFamily: "sans-serif" }}
                >
                  {item.content}
                </Typography>

                <DetailsThumb
                  images={item.src}
                  tab={this.handleTab}
                  myRef={this.myRef}
                />
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ float: "right", mt: 2 }}
                  color="error"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ProductDetail;
