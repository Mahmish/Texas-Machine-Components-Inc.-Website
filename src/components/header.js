import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <header>
            <div className="header-top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="company-name">
                                <Link><h5>Texas machine <br/>components Inc.</h5></Link>
                            </div>
                        </div>
                            
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="email">
                                <Link><i className="fa-solid fa-envelope"></i>
                                <span>Jeff.goff@texasmci.com</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/aboutUs">ABOUT US</Link>
                        </li>
                        <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown"  aria-expanded="false" to="servicePage">SERVICES</Link>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">Action</li>
                            <li class="dropdown-item">Another action</li>
                            <li class="dropdown-item">Something else here</li>
                        </ul>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/contactUsPage">CONTACT US</Link>
                        </li>
                    </ul>
                    </div>
                </div>
              </nav>
            <div className="nav-bar">
                <div className="container">
                    <div className="row align-items-center text-white">
                        <div className="col-lg-6 col-md-7 col-sm-8 col-12">
                            <div className="menu">
                                <ul id="menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/aboutUs">About us</Link></li>
                                    <li><Link to="/servicePage">services</Link></li>
                                    <li><Link to="contactUsPage">contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-4 col-12">
                            <div className="phone-no">
                                <i className="fa-solid fa-phone"></i>
                                <span>2149492548</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </header>
    

    </div>
  );
}
