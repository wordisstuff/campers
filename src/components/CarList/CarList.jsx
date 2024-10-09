import { useEffect, useState } from "react";
import { carApi } from "../../api/api";
import Car from "../Car/Car";
import CSS from './CarList.module.css'

const CarList = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const func = async () => {
      const carsArr = await carApi.get();
      setCars(carsArr.data);
      console.log(carsArr);
    };
    func();
  }, []);

  return (
    <>
      <ul className={CSS.cars}>
        {cars &&
          cars.map(({ ...rest }) => (
            <Car key={rest.id} car={rest} />
          ))}
      </ul>
    </>
  );
};

export default CarList;
