import { useEffect } from 'react';
import Car from '../Car/Car';
import CSS from './CarList.module.css';
import { getCampers } from '../../redux/campers/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredCampers } from '../../redux/campers/selectors';

const CarList = () => {
    const dispatch = useDispatch();
    const filteredCampers = useSelector(selectFilteredCampers);
    console.log(filteredCampers);

    useEffect(() => {
        dispatch(getCampers());
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
