import React from "react";
import "./footer.scss";
import Logo from "../../images/logo.gif";
import Menu from "../../images/icon/menu.svg";
import Close from "../../images/icon/cross.svg";
import f1 from "../../images/footer/f1.png";
import f2 from "../../images/footer/f2.png";
import f3 from "../../images/footer/f3.png";
import f4 from "../../images/footer/f4.png";
import f5 from "../../images/footer/f5.png";
import f6 from "../../images/footer/f6.png";
import f7 from "../../images/footer/f7.png";
import f8 from "../../images/footer/f8.png";
import f9 from "../../images/footer/f9.png";
import fb from "../../images/icon/fb.svg";
import twitter from "../../images/icon/twitter/blue_b.svg";
import insta from "../../images/icon/insta.svg";
import { Link } from "react-router-dom";
import mapMain from "../../images/map-main-color_g.svg";
import phone from "../../images/phone_g.svg";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const oThis = this;
    let d = new Date();
    let currentYear = d.getFullYear();
    return (
      // <footer className="footer">
      //   <div>
      //     <a href="https://www.mot.gov.jm/" target="_BLANK">
      //       <img src={footer1} />
      //     </a>
      //     <a href="http://www.jamaicatradeandinvest.org/" target="_BLANK">
      //       <img src={f13} />
      //     </a>
      //     <a
      //       href="https://www.mot.gov.jm/agency/tourism-enhancement-fund"
      //       target="_BLANK"
      //     >
      //       <img src={footer4} />
      //     </a>
      //     <a href="https://rada.gov.jm/" target="_BLANK">
      //       <img src={f12} />
      //     </a>
      //     <a href="http://www.jtbonline.org/" target="_BLANK">
      //       <img src={f11} />
      //     </a>
      //     <a href="http://www.jhta.org/" target="_BLANK">
      //       <img src={footer5} />
      //     </a>
      //     <a href="https://www.instagram.com/thejmea_/" target="_BLANK">
      //       <img src={footer2} />
      //     </a>
      //     <a href="https://www.jbdc.net/" target="_BLANK">
      //       <img src={footer3} />
      //     </a>
      //   </div>
      //   <div className="copyright">
      //     <span>
      //       Copyright © {currentYear}. Developed by Ministry of Tourism and
      //       Powered by Tourism Enhancement Fund
      //     </span>
      //     <div className="social-icons">
      //       <a href="https://www.facebook.com/tefjamaica/" target="_BLANK">
      //         <img src={fb} />
      //       </a>
      //       {/*
      //                   <a href="https://www.mot.gov.jm/" target="_BLANK">
      //                       <img src={twitter} />
      //                   </a>
      //               */}
      //       <a
      //         href="https://www.instagram.com/tourismenhancementfundja/"
      //         target="_BLANK"
      //       >
      //         <img src={insta} />
      //       </a>
      //     </div>
      //   </div>
      // </footer>
      <footer className="container-fluid">
        <div className="detail-footer row">
          <div className="col-md-8 offset-md-2 col-10 offset-1 footer-col">
            <div className="row">
              <div className="col-md-4 col-12  contact-section">
                <div className="content">
                  <div className="top-img">
                    <img src={mapMain} />
                  </div>
                  <span className="top">
                    64 Knutford Boulevard Kingston 5 Jamaica, WI
                  </span>
                </div>
                <div className="content">
                  <img src={phone} />
                  <span className="phone">+9876544321</span>
                </div>
              </div>
              <div className="col-md-8 col-12 ">
                <div className="row">
                  <div className="col-md-3 col-6">
                    <div className="">
                      <div className="category-section">
                        <Link to="/duty_free">Duty Free</Link>
                        <Link to="/artisan">Artisan</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-6">
                    <div className="">
                      <div className="category-section">
                        <Link to="/crafts">Crafts</Link>
                        <Link to="/retails">Retails</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 footer-links">
                    <div className="row">
                      <div className="social-icons  col-md-12 col-xs-6">
                        <a
                          href="https://www.facebook.com/tefjamaica/"
                          target="_BLANK"
                        >
                          <img src={fb} />
                        </a>
                        <a
                          href="https://www.instagram.com/tourismenhancementfundja/"
                          target="_BLANK"
                        >
                          <img src={insta} />
                        </a>
                        <a href="https://www.mot.gov.jm/" target="_BLANK">
                          <img src={twitter} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mobile-copyright col-md-12 col-12">
                    <div className="copyright-text">
                      Copyright © {currentYear}. Developed by Ministry of
                      Tourism and Powered by Tourism Enhancement Fund
                    </div>
                    <ul className="logos col-12">
                      <li>
                        <a href="https://www.mot.gov.jm/" target="_BLANK">
                          <img src={f1} />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.jtbonline.org/" target="_BLANK">
                          <img src={f2} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/thejmea_/"
                          target="_BLANK"
                        >
                          <img src={f3} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.jbdc.net/" target="_BLANK">
                          <img src={f4} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.mot.gov.jm/agency/tourism-enhancement-fund"
                          target="_BLANK"
                        >
                          <img src={f5} />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.jhta.org/" target="_BLANK">
                          <img src={f6} />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.jhta.org/" target="_BLANK">
                          <img src={f7} />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.jhta.org/" target="_BLANK">
                          <img src={f8} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.jamaicatradeandinvest.org/"
                          target="_BLANK"
                        >
                          <img src={f9} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
