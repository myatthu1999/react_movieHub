import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Landing = () => {
  const [related, setRelated] = useState([]);
  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US`
    );
    const { results } = await data.json();
    setRelated(results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          autoplay: true,
          interval: 1000,
          arrows: false,
        }}
      >
        {related?.map((rl) => (
          <SplideSlide key={rl.id}>
            <Carousel {...rl} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Landing;
