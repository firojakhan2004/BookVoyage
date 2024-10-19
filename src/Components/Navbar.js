import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#bestseller"><i className="fas fa-star"></i>Best Seller</a>
            <a href="#awardwinners"><i className="fas fa-trophy"></i>Award Winners</a>
            <a href="#international"><i className="fas fa-globe"></i>International Best Seller</a>
            <a href="#newarrivals"><i className="fas fa-book-open"></i>New Arrivals</a>
            <a href="#fiction"><i className="fas fa-book"></i>Fiction Books</a>
        </nav>
    );
};

export default Navbar;
