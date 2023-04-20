import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";

const Detail = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const { id } = useParams();
  const getData = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US`
    );
    const data = await api.json();
    console.log(data);
    setSingleMovie(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="w-full relative h-screen">
      <div className=" h-2/3 relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${singleMovie?.backdrop_path}`}
          className="w-full h-full object-cover object-top "
          alt=""
        />
        <div className="dark-ov"></div>
      </div>
      <div className="detail-container transition-transform duration-300 hover:-translate-y-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${singleMovie?.poster_path}`}
          className="w-52 rounded-lg"
          alt=""
        />
        <div className=" ml-10 text-white">
          <h1 className=" text-4xl font-semibold ">{singleMovie.title}</h1>
          <p className=" text-lg ">
            <span className=" font-medium text-red-500">Release On: </span>{" "}
            {singleMovie.release_date}
          </p>
          <p>
            <span className="text-red-500 font-medium">Runtime : </span>
            {singleMovie.runtime}mins
          </p>
          {singleMovie.genres?.map((gr) => (
            <div key={gr.id} className="badge bg-error text-black mr-2 mb-2">
              {gr.name}
            </div>
          ))}
          <p className="text-gray-300 text-sm mb-3">{singleMovie.overview}</p>
          <Link
            to={singleMovie.homepage}
            target="_blank"
            className=" btn btn-outline btn-error"
          >
            Watch Now <BsPlayCircle className=" ml-2 h-5 w-5" />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Detail;
