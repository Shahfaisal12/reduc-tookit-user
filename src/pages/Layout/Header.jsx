import React from "react";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="Header-section fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            RelymerLabs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  TodoList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/post">
                  Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/shop">
                  Shop
                </Link>
              </li>
            </ul>

            <div className="mx-0 mx-md-4 my-2 py-md-0">
              <Link
                className="my-cart position-relative text-white text-decoration-none fs-6 fw-bold "
                to="/cart"
              >
                <ImCart className="fs-2 text-danger" />
                <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">{items.length}</span>
              </Link>
            </div>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-search text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
