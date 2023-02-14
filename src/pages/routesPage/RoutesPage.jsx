import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "../Layout/Base";
import Home from "../../pages/Home";
import PageNotFound from "../../pages/PageNotFound";
import Counter from "../../components/elements/Counter";
import PostList from "../../components/elements/postComp/PostList";
import Prducts from '../../components/elements/shop/Prducts'
import MyCart from '../../components/elements/shop/MyCart'
import SinglePostPage from "../../components/elements/postComp/SinglePostPage";
import EditPost from "../../components/elements/postComp/EditPost";
import AddPost from "../../components/elements/postComp/AddPost";
import ProductDetail from "../../components/elements/shop/SinglePoductPage/ProductDetail";
import CheckOutPage from "../../components/elements/shop/CheckOutPage";
import OrderDetail from "../../components/elements/shop/OrderDetail";

const RoutesPage = () => {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/product" element={<Prducts />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/post" element={<PostList />} />
            <Route path="/addPost" element={<AddPost />} />
            <Route path="post/post/:postId" element={<SinglePostPage />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/checkoutpage" element={<CheckOutPage />} />
            <Route path="/orderdetail" element={<OrderDetail />} />
            <Route path="post/edit/:postId" element={<EditPost />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
};

export default RoutesPage;
