import React from "react";
import customStyle from "../css/customStyle.module.css";

const Footer = (props) =>{
    return(
        <div className={customStyle.contactInfo}>
        <h2 className={customStyle.contactInfoTitle}>Contact Information</h2>
        <div className={customStyle.phoneNum}><i class="fa fa-phone" aria-hidden="true"></i> (+63)9067866260 / (+63)9944640998 <br></br>
        <i class="fa fa-envelope" aria-hidden="true"></i> devillar.alejorenalyn@gmail.com     
        </div> 
        <div className={customStyle.phoneNum}></div>
               
         
      
        <div className={customStyle.socialIcon}>
            <a href="https://web.facebook.com/flauriauraservices/"><i className="fab fa-facebook"></i></a>
            <a href="https://pin.it/4evoYHle6"><i className="fab fa-pinterest"></i></a>
            <a href="https://www.youtube.com/@nalynalejo"><i className="fab fa-youtube"></i></a>
            <a href="https://www.tiktok.com/@nalyndevillar?is_from_webapp=1&sender_device=pc"><i className="fab fa-tiktok"></i></a>
          

        </div>
    </div>
    
    );
}

export default Footer;
