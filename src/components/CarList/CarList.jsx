import { useEffect, useState } from 'react';
import Car from '../Car/Car';
import CSS from './CarList.module.css';
import { getCampers } from '../../redux/campers/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectError, selectPageIdx, selectPagesArr } from '../../redux/campers/selectors';
import NotFound from '../NotFound/NotFound';
import clsx from 'clsx';
import { setPageIdx } from '../../redux/campers/slice';

const CarList = () => {

    const dispatch = useDispatch();
    const selectPages = useSelector(selectPagesArr);
    const selectedPageIdx = useSelector(selectPageIdx);
    const error404 = useSelector(selectError);
    useEffect(() => {
        dispatch(getCampers());
    }, []);

    if (error404 === 404) {
        return <NotFound />;
    }

    const handlePage = (e)=>{
        e.preventDefault()
        dispatch(setPageIdx(Number(e.target.innerText)))
    };
    return (
        <>
            <ul className={CSS.cars}>
                <div className={CSS.pages}>
                {selectPages &&
                    selectPages.map((_,idx) => (
                        <>
                        <button className={clsx(CSS.btn, idx+1===selectedPageIdx && CSS.active )} onClick={handlePage}>{idx+1}</button>   
                        </>
                    ))}
                </div>
            {selectPages && 
                    selectPages.map((campArr,idx) => (
                        <>
                        {idx+1 === selectedPageIdx && campArr.map(({ ...rest }) => (
                            <Car key={rest.id} camp={rest} />
                    ))}
                        </>
                    ))}
            </ul>
        </>
    );
};

export default CarList;
