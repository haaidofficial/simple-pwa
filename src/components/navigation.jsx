import React from 'react';
import logo from '../assets/icons/logo.png';

export function Navigation() {


    function toggleMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');

        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
    }


    return (
        <>

            <nav>
                <button className="navigation-toggle-btn" onClick={toggleMenu}>☰</button>
                <div className='left-nav'>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className="menu">
                        <li><a href="#">Stores Near Me</a></li>
                        <li><a href="#">Products Near Me</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Beauty & Personal Care</a></li>
                        <li><a href="#">Home Decor</a></li>
                        <li><a href="#">Electronics</a></li>
                    </ul>
                </div>
                <div className='right-nav'>
                    <div className="search-container">
                        <button type="submit" className="search-button">
                            <svg className="search-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </button>
                        <input type="text" className="search-input" placeholder="Search..." />
                    </div>
                </div>

                <div className="mobile-menu-container">
                    <ul className="menu mobile-menu" style={{ display: 'none' }}>
                        <li><a href="#">Stores Near Me</a></li>
                        <li><a href="#">Products Near Me</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Beauty & Personal Care</a></li>
                        <li><a href="#">Home Decor</a></li>
                        <li><a href="#">Electronics</a></li>
                    </ul>
                    <div className="logo-mobile-container">
                        <div className="logo logo-mobile-menu">
                            <img src={logo} alt="Logo" />
                        </div>

                        <div className='right-nav mobie-right-nav'>
                            <div className="search-container">
                                <button type="submit" className="search-button">
                                    <svg className="search-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                    </svg>
                                </button>
                                <input type="text" className="search-input" placeholder="Search..." />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}