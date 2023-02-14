import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../pages/store/shopSlice/CartSlice";
import {
  fetchProducts,
  STATUSES,
} from "../../../pages/store/shopSlice/ProviderSlice";
import { Link } from "react-router-dom";

const Prducts = () => {
  const dispatch = useDispatch();
  const { data: getProducts, status } = useSelector((state) => state.product);

  // const [getProducts, setGetProducts] = useState();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());

    // const ProductData = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setGetProducts(data)
    // };
    // ProductData();

    /////otherway create poviderSlice to call api
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2 className="text-center mt-5 pt-5">Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2 className="text-center mt-5 pt-5">Something Went wrong!</h2>;
  }

  return (
    <div className="products-section py-5">
      <div className="container">
        <div className="row">
          <h1>Store</h1>
          {getProducts?.map((product) => (
            <div className="col-xs-12 col-sm-6 col-md-3 mt-3" key={product.id}>
              <div className="product-item text-center">
                <Card className="mt-3">
                  <Link to="/productdetail">
                    <div className="card-img">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ height: "150px" }}
                        className="img-fluid px-5"
                      />
                    </div>
                  </Link>
                  <Card.Body>
                    <Card.Subtitle className="text-truncate">
                      {product.title}
                    </Card.Subtitle>
                    <Card.Title className="my-2">{product.price}</Card.Title>
                    <Button
                      className="btn-custom"
                      variant="outline-primary"
                      onClick={() => handleAdd(product)}
                    >
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prducts;
