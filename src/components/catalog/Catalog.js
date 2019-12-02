import React, {useState} from "react";
import "./index.scss";
import conferenceImg from "../../images/1-1.jpg";
import {Container,Row, Col} from "react-bootstrap";

function Catalog({micrositeRef,handleMicroSitePopup}){
    return(
        <div className="popup-overlay">
            <div ref={micrositeRef} className="microsite-modal">
                <div className="close-icon pr-2 pl-2 pt-2">
                    <i onClick={()=>handleMicroSitePopup()} className='fas fa-times'></i>
                </div>
                <div className="content-wrapper">
                    <div className="catalog-heading">
                        <a target="_blank" href="https://issuu.com/tourismlinkagesnetwork/docs/style_jamaica_show_island_village" className="catalog-text">
                            VIEW CATALOG TODAY!
                        </a>
                    </div>
                    <div className="col-one">
                        <div className="conference-img-div">
                            <img className="conference-img" src={conferenceImg} alt="conference_img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Catalog;