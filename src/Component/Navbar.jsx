import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartProvider";
import { Link } from "react-router-dom";

const Navbar = ({cartState,wishState}) => {
  // const { cartLength } = useContext(CartContext); 

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Link</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Home/Cart"> 
                Cart {cartState.cartLength == 0 ? "" : <sup className=" bg-danger text-white rounded-circle p-1 pt-0 pb-0" >{cartState.cartLength}</sup>}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Home/wish"> 
                Wish {wishState.wishLength == 0 ? "" : <sup className=" bg-danger text-white rounded-circle   pt-0 pb-0 " >{wishState.wishLength}</sup>}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
