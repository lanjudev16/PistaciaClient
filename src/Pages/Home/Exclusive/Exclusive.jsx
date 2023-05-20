import React from 'react';
import './Exclusive.css'
const Exclusive = () => {
    return (
<div className="divider-wrap bg-img" data-bg-img="https://htmldemo.net/kidol/kidol/assets/img/photos/bg1.png" style="background-image: url(&quot;assets/img/photos/bg1.png&quot;);">
              <div className="row align-items-center">
                <div className="col-lg-6 position-relative">
                  <div className="content">
                    <h2>Subscribe for Exclusive Sales &amp; News</h2>
                  </div>
                  <div className="shape-group">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="newsletter-form">
                    <form action="#">
                      <input className="form-control" type="email" placeholder="Enter Your Email"/>
                      <button className="btn btn-theme" type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default Exclusive;