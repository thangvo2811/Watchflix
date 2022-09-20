import React from "react";
import "./style.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function SeriesMovie() {
  const [seriesMovie, setSeriesMovie] = useState([]);
  const IMG_URL = "https://image.tmdb.org/t/p/original/";
  const IMG_SR = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    callSeriesMovie();
  }, []);
  const callSeriesMovie = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=554c83bd53b85322008ec381d0349f98&page=2"
      )
      .then((res) => {
        setSeriesMovie(res.data.results);
      });
  };
  return (
    <>
      <div className="series_movie">
        <div className="series_content">
          {seriesMovie?.map((item, index) => {
            if (index < 1) {
              return (
                <div className="series_movie_img">
                  <img src={`${IMG_URL}${item.poster_path}`} />
                  <div className="series_movie_desc">
                    <div className="series_movie_title f_z56 f_w700 l_h64 primary_color">
                      {item.title}
                    </div>
                    <div className="series_movie_overview f_z16 l_h32 f_w400">
                      {item.overview}
                    </div>
                  </div>
                  <div className="series_movie_icon">
                    <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="series_movie_trailer">
          {seriesMovie?.map((item, index) => {
            if (index <= 2) {
              return (
                <div className="series_movie_item">
                  <img src={`${IMG_SR}${item.poster_path}`} />
                  <div className="series_movie_trailer_icon">
                    <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>
                  </div>
                  <div className="series_movie_container">
                    <div className="episode f_w400 ">Episode {index}</div>
                    <div className="episode_movie_name f_z24 f_w500 primary_color">
                      {item.title}
                    </div>
                    <div className="episode_movie_content f_w400">
                      {item.overview}
                    </div>
                    <div className="episode_movie_date_view f_w400">
                      <div className="episode_movie_date">
                        {item.release_date}
                      </div>
                      <div className="episode_movie_view">
                        {item.vote_count}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
export default SeriesMovie;
