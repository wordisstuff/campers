import { useEffect, useState } from 'react';
import Car from '../Car/Car';
import CSS from './CarList.module.css';
import { selectCampers } from '../../redux/campers/selectors';
import { getCampers } from '../../redux/campers/operations';
import { useDispatch, useSelector } from 'react-redux';

const CarList = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    console.log(campers);

    useEffect(() => {
        dispatch(getCampers());
    }, [dispatch]);
    return (
        <>
            <ul className={CSS.cars}>
                {campers.items &&
                    campers.items.map(({ ...rest }) => (
                        <Car key={rest.id} camp={rest} />
                    ))}
            </ul>
        </>
    );
};

export default CarList;
