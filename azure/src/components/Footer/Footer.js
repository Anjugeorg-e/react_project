import React from 'react'
import azureLogo from "../asset/img/azure.svg"
import twitter from "../asset/img/twitter.svg"
import instagram from "../asset/img/instagram.svg"
import linkedin from "../asset/img/linkedin.svg";
import './Footer.css';


function Footer() {
  return (
    <div class="azure_footer">
      <div class="azure_footer_nav">
        <div class="footer_navone">
          <img src={azureLogo} />
          <a href="#">Get the Azure mobile app</a>
        </div>
        <div class="footer_navtwo">
          <img class="twitter" src={twitter} />
          <img src= {instagram}/>
          <img src={linkedin}  />
        </div>
      </div>
      <div class="footer_nav_column">
        <div class="footer_column_one nav_content">
          Explore Azure
        </div>
        <div class="footer_column_two nav_content">
          Products and pricing
        </div>
        <div class="footer_column_three nav_content">
          Solutions and support
        </div>
        <div class="footer_column_four nav_content">
          Partners
        </div>
        <div class="footer_column_five nav_content">
          Resources
        </div>
        <div class="footer_column_six nav_content">
          Cloud computing
        </div>
      </div>
      <div class="footer_navcolumn_two">
        <div class=" footer_twocolumnone footertwo_nav">
          <h3>Explore to Azure</h3>
          <ul>
            <li>What is Azure?</li>
            <li>Get started</li>
            <li>Global infrastructure</li>
            <li>Datacenter regions</li>
            <li>Trust your cloud</li>
            <li>Customer enablement</li>
            <li>Customer stories</li>
          </ul>
        </div>
        <div class="footer_twocolumntwo footertwo_nav">
          <h3>Products and pricing</h3>
          <ul>
            <li>Products</li>
            <li>Pricing</li>
            <li>Free Aure Services</li>
            <li>Flexible purchase options</li>
            <li>cloud economics</li>
            <li>optimise your costs</li>
          </ul>
        </div>
        <div class="footer_twocolumnthree footertwo_nav">
          <h3>Solutions andsupport</h3>
          <ul>
            <li>Solutions</li>
            <li>Resources for accelarating growth</li>
            <li>Solution Architectures</li>
            <li>Support</li>
            <li>Azure demo and live Q&A</li>
          </ul>
        </div>
        <div class="footer_twocolumnfour footertwo_nav">
          <h3>Partners</h3>
          <ul>
            <li>Azure marketplace</li>
            <li>Find a partner</li>
            <li>Technology partners</li>
          </ul>
        </div>
        <div class="footer_twocolumnfive footertwo_nav">
          <h3>Resources</h3>
          <ul>
            <li>Training and certifications</li>
            <li>Documentation</li>
            <li>Updates</li>
            <li>Blog</li>
            <li>Developer resources</li>
            <li>Students</li>
            <li>Events and webinars</li>
            <li>Analyst reports, white papers and e-books</li>
            <li>Videos</li>
          </ul>
        </div>
        <div class="footer_twocolumnsix footertwo_nav">
          <h3>Cloud Computing</h3>
          <ul>
            <li>What is machine learning?</li>
            <li>What is the cloud?</li>
            <li>What is Big data Analytics?</li>
            <li>What is PaaS</li>
            <li>What is acontainer?</li>
            <li>What is DevOPs?</li>
          </ul>
        </div>
      </div>
      <div class="footer_nav_row">
        <div class="dropdown_cultures">
          <p>Change language</p>
          <select class="dropdown_cultures_one" name="cultures" id="cultures">
            <option value="en-in">English (India)</option>
            <option value="en-us">English(US)</option>
            <option value="en-as">English(Australia)</option>
            <option value="en-gb">English(UK)</option>
            <option value="en-es">Espanol</option>
          </select>
        </div>
        <div class="footer_min_links">
          <ul>
            <li>Diversity and Inclusion</li>
            <li>Accessibility</li>
            <li>Privacy & Cookies</li>
            <li>Data Protection Notice</li>
            <li>Trademarks</li>
            <li>Terms of use</li>
            <li>Privacy Data Management</li>
            <li>Contact us</li>
            <li>Feedback</li>
            <li>Sitemap</li>
            <li class="footer_microsoft">© Microsoft 2023</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Footer