import React from "react";
import "./style.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function LastWatch(props) {
  const [lastWatch, setLastWatch] = useState([]);
  const IMG_PATH = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    callLastWatch();
  }, []);
  const callLastWatch = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=554c83bd53b85322008ec381d0349f98"
      )
      .then((res) => {
        console.log(res.data.results);
        setLastWatch(res.data.results);
      });
  };
  return (
    <>
      <div className="last_watch_container">
        <div className="last_category">
          <div className="f_z24 f_w500 secondary_color">{props.name}</div>
          <div className="f_w700 third_color">{props.view}</div>
        </div>
        <div className="last_watch_img">
          <div className="card_img">
            {lastWatch?.map((item, index) => {
              if (index <= 4) {
                return (
                  <div key={index} className="last_item">
                    <img
                      className="item_img"
                      src={`${IMG_PATH}${item.poster_path}`}
                    />
                    <div className="fantasy">Fantasy</div>

                    <div className="watch_desc ">
                      {" "}
                      <div className="watch_content_item f_z24 l_h24 primary_color">
                        {item.release_date}
                      </div>
                      <div className="watch_content_item f_z24 l_h24 primary_color">
                        {item.vote_count}
                      </div>
                    </div>
                    <div className="watch_content_name f_z32 l_h32 primary_color f_w700">
                      {item.title}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default LastWatch;
