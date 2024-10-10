import { useEffect, useState } from "react";
import { carApi } from "../../api/api";
import Car from "../Car/Car";
import CSS from './CarList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { getCampers } from "../../redux/campers/operations";

const CarList = () => {
  const dispatch = useDispatch();
  const [camps, setCamps] = useState(null);
  const campers = useSelector(selectCampers);

  useEffect(() => {
dispatch(getCampers)
    // const func = async () => {

    //   const campsArr = await carApi.get();
    //   setCars(carsArr.data);
    //   console.log(carsArr);
    // };
    // func();
  }, []);

  return (
    <>
      <ul className={CSS.cars}>
        {/* {cars &&
          cars.map(({ ...rest }) => (
            <Car key={rest.id} car={rest} />
          ))} */}
      </ul>
    </>
  );
};

export default CarList;
