import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../components/Cart";
const SearchedLists = () => {
  const { name } = useParams();
  const [searchLists, setSearchLists] = useState([]);
  const getSearchMovie = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US&query=${name}&page=1&include_adult=false`
    );
    const { results } = await api.json();
    setSearchLists(results);
  };
  useEffect(() => {
    getSearchMovie();
  }, [name]);
  return (
    <section className=" container mx-auto">
      <div className="flex justify-center ">
        <h1 className=" text-3xl font-semibold text-white mt-24 mb-10">
          Search Results For {name}
        </h1>
      </div>
      <div className=" flex flex-wrap gap-5 justify-center">
        {searchLists?.map((sl) => (
          <Cart key={sl.id} {...sl} />
        ))}
      </div>
    </section>
  );
};

export default SearchedLists;
