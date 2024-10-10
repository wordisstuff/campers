import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import Car from "../../components/Car/Car";

const Catalog = () => {
  const [campers, setCampers] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading && <Loader />}
      <Car/>
    </>
  );
};

export default Catalog;