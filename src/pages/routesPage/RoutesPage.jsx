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

const RoutesPage = () => {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/shop" element={<Prducts />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/post" element={<PostList />} />
            <Route path="post/post/:postId" element={<SinglePostPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
};

export default RoutesPage;
