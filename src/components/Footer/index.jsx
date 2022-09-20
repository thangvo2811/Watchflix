import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
  // const fakeData = [
  //   {
  //     name_product: "Product",
  //     movies: "Movies",
  //     name_TVShow: "TV Show",
  //     name_Videos: "Videos",
  //   },
  //   {
  //     name_media: "Media Group",
  //     name_niceStudio: "Nice Studio",
  //     name_niceNew: "Nice News",
  //     name_niceTV: "Nice TV",
  //   },
  //   {
  //     name_site: "Sitemap",
  //     about: "About",
  //     name_Careers: "Careers",
  //     name_press: "Press",
  //   },
  // ];
  return (
    <div className="footer_container">
      <div className="footer_left">
        <div className="footer_name f_z56 f_w500 l_h32 primary_color">
          Watchflix
        </div>
        <div className="footer_desc f_w400">
          Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </div>
        <div className="footer_join f_w700 primary_color">Join Newsletters</div>
        <div className="footer_text">
          <input
            type="text"
            className="text_input primary_color"
            placeholder="Insert your mail here"
          ></input>
          <div className="footer_icon">
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="footer_right">
        <div className="footer_card">
          <div className="footer_product">
            <p className="f_w700 primary_color">Product</p>
            <p className="f_w400">Movies</p>
            <p className="f_w400">TV Show</p>
            <p className="f_w400">Videos</p>
          </div>
          <div className="footer_media">
            <p className="f_w700 primary_color">Media Group</p>
            <p className="f_w400">Nice Studio</p>
            <p className="f_w400">Nice News</p>
            <p className="f_w400">Nice TV</p>
          </div>
          <div className="footer_sitemap">
            <p className="f_w700 primary_color">SiteMap</p>
            <p className="f_w400">About</p>
            <p className="f_w400">Careers</p>
            <p className="f_w400">Press</p>
          </div>
        </div>
        <div className="footer_info">
          <div className="footer_info_location flex f_w400 primary_color">
            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
            <div className="location_info f_w400 primary_color m_l6">
              8819 Ohio St. South Gate, California 90280
            </div>
          </div>
          <div className="footer_info_message flex f_w400 primary_color">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <div className="message_info m_l6">ourstudio@hello.com</div>
          </div>
          <div className="footer_info_phone flex f_w400 primary_color">
            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
            <div className="phone_info m_l6 ">+271 386-647-3637</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
