import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Menu.js";
import { useRef } from "react";
import { useEffect } from "react";

function Menu() {
  const [show, setShow] = useState(false);

  const fakeData = [
    {
      title: "Home",
    },
    {
      title: "Movies",
    },
    {
      title: "TV Show",
    },
    {
      title: "Video",
    },
    {
      title: "FAQ",
    },
    {
      title: "Pricing",
    },
    {
      title: "Contact US",
    },
  ];

  const showSearchInput = () => {
    setShow(true);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div className="menu flex">
        <a
          href="#"
          className="menu_left text_a primary_color f_z32 l_h48 f_w700"
        >
          Watchflix
        </a>
        <div className="menu_middle flex">
          {fakeData.map((item, index) => {
            return (
              <a key={index} className="nav_item ">
                {item.title}
              </a>
            );
          })}
          <div className="line_effect"></div>
        </div>
        <div className="menu_right flex">
          <div className="menu_right_search">
            <div className="search_box" ref={wrapperRef}>
              <input
                type="text"
                className={`search_text ${show ? `show` : `hide`} `}
              />

              <div className="search_icon" onClick={showSearchInput}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <a href="#" className="text_a primary_color f_z16 l_h24">
            Đăng Ký
          </a>
          <a href="#" className="text_a primary_color f_z16 l_h24">
            Đăng nhập
          </a>
        </div>
      </div>
    </>
  );
}
export default Menu;
