import React from "react";
import "./footer.scss";
import SocialIcon from "./SocialIcon";
import Link from "./Link";
import ContactLine from "./ContactLine";
import PixCard from "./PixCard";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <a href="#articles" className="main-logo">
            ELZERO
          </a>
          <div className="socials">
            <SocialIcon
              website="https://www.facebook.com/"
              icon="fab fa-facebook-f"
            />
            <SocialIcon
              website="https://twitter.com/home"
              icon="fab fa-twitter"
            />
            <SocialIcon
              website="https://www.youtube.com/"
              icon="fab fa-youtube"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            inventore aperiam accusamus dignissimos quia! Alias?
          </p>
        </div>
        <ul className="links">
          <Link />
          <Link />
          <Link />
          <Link />
          <Link />
        </ul>
        <div className="contact">
          <ContactLine />
        </div>
        <div className="pix">
          <PixCard img="https://picsum.photos/id/122/700" />
          <PixCard img="https://picsum.photos/id/132/700" />
          <PixCard img="https://picsum.photos/id/142/700" />
          <PixCard img="https://picsum.photos/id/152/700" />
          <PixCard img="https://picsum.photos/id/162/700" />
          <PixCard img="https://picsum.photos/id/172/700" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* 
<footer>
        <div class="container">
           
            <div class="contact">
                        <div class="pix">

                <div class="info-line">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Egypt, Giza, Inside The Sphinx, Room Number 220
                    </p>
                </div>
                <div class="info-line">
                    <i class="fas fa-phone"></i>
                    <p>Business Hours: From 10:00 To 18:00
                    </p>
                </div>
                <div class="info-line">
                    <i class="far fa-clock"></i>
                    <p>+20123456789
                        +20198765432
                    </p>
                </div>
            </div>
           
        </div>
    </footer> */
