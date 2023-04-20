import { BsPlayCircle } from "react-icons/bs";
import "@splidejs/react-splide/css";

const Carousel = ({ id, title, overview, backdrop_path }) => {
  return (
    <div className=" w-full h-screen relative">
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        className=" w-full h-screen object-cover"
        alt=""
      />
      <div className="dark-ov"></div>
      <div className="box">
        <h1 className=" text-5xl font-extrabold mb-3">{title}</h1>
        <p className=" text-lg font-medium">{overview.substring(0, 200)}...</p>
        <button className=" btn glass mt-4">
          Watch now {<BsPlayCircle className="w-4 h-4 ml-2" />}
        </button>
      </div>
    </div>
  );
};
export default Carousel;
