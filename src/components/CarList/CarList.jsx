import { useEffect } from 'react';
import Car from '../Car/Car';
import CSS from './CarList.module.css';
import { getCampers } from '../../redux/campers/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectError } from '../../redux/campers/selectors';
import NotFound from '../NotFound/NotFound';

const CarList = () => {
    const dispatch = useDispatch();
    const selectCamp = useSelector(selectCampers);
    const error404 = useSelector(selectError);
    useEffect(() => {
        dispatch(getCampers());
    }, []);

    if (error404 === 404) {
        return <NotFound />;
    }
    return (
        <>
            <ul className={CSS.cars}>
                {selectCamp &&
                    selectCamp.map(({ ...rest }) => (
                        <Car key={rest.id} camp={rest} />
                    ))}
            </ul>
        </>
    );
};

export default CarList;
