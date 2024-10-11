import { useEffect, useState } from 'react';
import Car from '../Car/Car';
import CSS from './CarList.module.css';
import { getCampers } from '../../redux/campers/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectFilteredCampers } from '../../redux/campers/selectors';

const CarList = () => {
    const dispatch = useDispatch();
    const filteredCampers = useSelector(selectFilteredCampers);
    const campers = useSelector(selectCampers)
    console.log(campers)
    console.log(filteredCampers);

    useEffect(() => {
        dispatch(getCampers());
        // console.log(filteredCampers);
    }, []);
    return (
        <>
            <ul className={CSS.cars}>
                {filteredCampers &&
                    filteredCampers.map(({ ...rest }) => (
                        <Car key={rest.id} camp={rest} />
                    ))}
            </ul>
        </>
    );
};

export default CarList;
