import React from "react";
import "./style.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ListMovies() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [listMovies, setListMovies] = useState([]);

  const [selectedMoive, setSelectedMovie] = useState({});
  const [trailer, setTrailer] = useState({});

  //// đường dẫn của api
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  const IMG_TRAILER = "https://image.tmdb.org/t/p/w780";
  const API_URL = "https://api.themoviedb.org/3";
  const TRAILER = "https://www.youtube.com/embed/";

  //useEffect được gọi khi components thay đổi. Mỗi lần chạy chỉ được gọi 2 lần
  // Nếu ko có  []: dependent : hàm sẽ chạy vô hạn
  useEffect(() => {
    callMovies(); /// gọi lại hàm
  }, []);

  // tạo hàm callMoives: xử lý api
  const callMovies = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=554c83bd53b85322008ec381d0349f98"
      )
      .then((res) => {
        // console.log(res.data);
        setListMovies(res.data.results);
      });
  };

  const getTrailer = async (id) => {
    await axios
      .get(
        `${API_URL}/movie/${id}?api_key=554c83bd53b85322008ec381d0349f98&append_to_response=videos`
      )
      .then((res) => {
        setTrailer(res.data.videos);
      });
  };

  return (
    <>
      <div className="movie_container">
        <div className="movie_video">
          {/* sao chép mã nhúng trên youtube */}
          <iframe
            width="700"
            height="500"
            //// thay đổi đường dẫn
            src={`${
              trailer?.results ? `${TRAILER}${trailer?.results[0]?.key}` : ""
            }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="movie_img"
          // style={{
          //   background: ` url('${IMG_TRAILER}${selectedMoive.poster_path}') `,
          // }}
        >
          <div className="movie_content">
            <h1 className="movie_title f_z56 l_h72 primary_color">
              {selectedMoive ? selectedMoive.title : "Rong"}
            </h1>
            <div className="movie_desc f_z16 l_h32 secondary_color">
              {selectedMoive ? selectedMoive.overview : "Rong"}
            </div>
            {/* <div className="movie_a f_z16 l_h24 f_w500 primary_color">
              <p>{selectedMoive.original_language}</p>
              <p>{selectedMoive.release_date}</p>
              <p>Rat{selectedMoive.vote_average}</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="movie_card">
        <p className="f_z32 l_h48 f_w700 primary_color">Trailers</p>
        {/* slider sử dụng react slick */}
        <Slider {...settings}>
          {/* lấy giá trị listMovies duyệt qua map() */}
          {listMovies.map((item, index) => (
            <div
              key={index}
              className="movie_item"
              onClick={() => {
                setSelectedMovie(item);
                getTrailer(item.id);
              }}
            >
              {/* poster_path: lấy ảnh từ api */}
              <img src={`${IMG_URL}${item.poster_path}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default ListMovies;
