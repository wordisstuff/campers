import { useState } from "react";
// import { getTrendingMovies } from "../services/api";
import Hero from "../../components/Hero/Hero";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  // const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading && <Loader />}
      <Hero/>
    </>
  );
};

export default Home;