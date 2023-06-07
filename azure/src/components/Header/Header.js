import React from "react";
import hamburger from "../asset/img/hamburger.svg";
import azurelogo from "../asset/img/azurelogo.svg";
import search from "../asset/img/search.svg";
import angledown from "../asset/img/angledown.png";
import threedots from "../asset/img/dots.svg";

import "./Header.css";

function AzureHeader() {
  return (
    <header>
      <div className="azure-header">
        <div className="azure-subheading">
          <div className="azure-hamburger">
            <img src={hamburger} />
            <span>Azure</span>
          </div>
          <div className="azure-logo">
            <img src={azurelogo} />
          </div>
          <div className="azure-signin">
            <img src={search} />
            <span>Sign In</span>
          </div>
        </div>
        <div className="azure-headerTwo">
          <div className="azure-headerTwo-subheading">
            <div className="azure-hamburgerTwo">
              <img src={azurelogo} />
              <span>Azure</span>
            </div>
            <div className="azure-header-nav">
              <ul>
                <li>
                  <a href="#">Explore</a>
                  <img src={angledown} />
                </li>
                <li>
                  <a href="#">Products</a>
                  <img src={angledown} />
                </li>
                <li>
                  <a href="#">Solutions</a>
                  <img src={angledown} />
                </li>
                <li>
                  <a href="#">Pricing</a>
                  <img src={angledown} />
                </li>
                <li>
                  <a href="#">Partners</a>
                  <img src={angledown} />
                </li>
                <li>
                  <a href="#">Resources</a>
                  <img src={angledown} />
                </li>
              </ul>
            </div>
          </div>
          <div className="search-header">
            <img className="search-mirror" src={search} />
            <img className="more-option" src={threedots} />
            <span>Sign In</span>
          </div>
          <div className="header-Three">
            <div className="search-button">
              <span>Search</span>
              <img src={search} />
            </div>
            <div className="header-Three">
              <div className="header-nav-Three">
                <ul>
                  <li>Learn</li>
                  <li>Support</li>
                  <li>Contact Sales</li>
                </ul>
              </div>
              <button>Free account</button>
              <span>Sign In</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AzureHeader;
