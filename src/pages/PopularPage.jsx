import React from "react";
import Landing from "../components/Landing";
import Popular from "../components/Popular";

const PopularPage = () => {
  return (
    <div>
      <Landing />
      <Popular
        title={"Popular Movies"}
        url={`https://api.themoviedb.org/3/movie/popular?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US`}
      />
    </div>
  );
};

export default PopularPage;
