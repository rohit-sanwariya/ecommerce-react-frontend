import React from "react";
import { Link } from "react-router-dom";
import NavSearch from "../NavSearch/NavSearch";
import "./Navbar.scss";
const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="brand-container">
        <h2 className="brand">Mantra.in</h2>
      </div>
      <ul>
        <li>
          <NavSearch />
        </li>
        <li className="user-profile nav-list-item"  >
          <Link className="router-link" to="/">
            <span className="material-icons">person</span>
          </Link>
          <div className="modal">
            <div className="line-container">
              <div className="line"></div>
            </div>
            <div className="user-profile-details">
              <div className="top">
                <h3>Welcome</h3>
                <h4>To access account and manage orders</h4>
                <div className="button">
                  <button className="btn btn-primary" >
                    <Link className="button-router-link" to='login'>Login/Sign Up</Link>
                  </button>
                </div>
              </div>
              <div className="bottom">
                <ul  className="profile-list">
                  <li className="profile-list-item">
                    <Link className="router-link-item"  to="/orders">Orders</Link>
                  </li>
                  <li className="profile-list-item">
                    <Link className="router-link-item"   to="/wishlist">Wishlist</Link>
                  </li>
                  <li className="profile-list-item">
                    <Link className="router-link-item"   to="/giftcards">Gift cards</Link>
                  </li>
                  <li className="profile-list-item">
                    <Link className="router-link-item"   to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-list-item">
          <Link className="router-link" to="/wishlist">
            <span className="material-icons">favorite_border</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="router-link" to="/register">
            <span className="material-icons">shopping_bag</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
