import SocialIcon from "./SocialIcon"
import Link from "./Link"
import ContactLine from "./ContactLine"
import PixCard from "./PixCard"
import { socialIconsData, footerImages, footerLinks } from "./footerData"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <article>
          <a href="#articles" className="main-logo">
            ELZERO
          </a>
          <div className="socials">
            {socialIconsData.map((item) => {
              return <SocialIcon key={item.id} {...item} />
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            inventore aperiam accusamus dignissimos quia! Alias?
          </p>
        </article>
        <ul>
          {footerLinks.map((link) => {
            return <Link key={link.id} {...link} />
          })}
        </ul>
        <div className="contact">
          <ContactLine />
        </div>
        <div className="pix">
          {footerImages.map((image) => {
            return <PixCard key={image.id} {...image} />
          })}
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  background-color: #191919;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: start;
    gap: 50px;
    padding: 50px 50px 20px;
  }

  article {
    .main-logo {
      font-size: 48px;
      font-weight: 900;
      letter-spacing: 3px;
      color: #fff;
    }
    .socials {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;
      a {
        border-radius: 2px;
        &:not(:first-of-type) {
          margin-left: 15px;
        }
        i {
          border-radius: 2px;
          width: 48px;
          font-size: 24px;
          text-align: center;
          color: #777;
          background-color: #333;
          padding: 10px;
          transition: 0.5s ease-in-out;
        }
        &:hover i {
          color: #fff;
        }
        &:hover:nth-of-type(1) i {
          background-color: var(--facebook-clr);
        }
        &:hover:nth-of-type(2) i {
          background-color: var(--twitter-clr);
        }
        &:hover:nth-of-type(3) i {
          background-color: var(--youtube-clr);
        }
      }
    }
  }
  ul {
    li {
      padding: 8px 30px;
      &:not(:last-of-type) {
        border-bottom: 1px solid #4a4949;
      }
      a {
        color: #b7b3b3;
        position: relative;
        transition: 0.2s ease-in-out;
        &:before {
          font-family: "Font Awesome 5 Free";
          content: "\f101";
          font-weight: 900;
          color: var(--main-service-color);
          margin-right: 10px;
          position: absolute;
          left: -25px;
          top: 8px;
        }
      }
      &:hover a {
        color: white;
        transform: translateX(10px);
      }
    }
  }
  .contact {
    .info-line {
      display: flex;
      align-items: center;
      i {
        color: var(--main-service-color);
      }
      p {
        color: #b7b3b3;
        padding: 10px 0;
        margin-left: 15px;
      }
    }
  }
  .pix {
    img {
      margin: 3px;
      border: 3px solid white;
      width: 75px;
    }
  }
`
