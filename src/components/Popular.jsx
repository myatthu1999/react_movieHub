import { useState, useEffect } from "react";
import Cart from "./Cart";

const Popular = ({title,url}) => {
  const [popular, setPopular] = useState([]);
  const getData = async () => {
    const api = await fetch(url);
    const { results } = await api.json();
    setPopular(results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className=" container mx-auto">
      <div className="flex justify-center">
        <h1 className=" text-3xl font-semibold text-white my-14">
          {title}
        </h1>
      </div>
      <div className=" flex flex-wrap gap-5 justify-center">
        {popular?.map((mv) => (
          <Cart key={mv.id} {...mv} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
