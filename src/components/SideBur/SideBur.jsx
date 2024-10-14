import CSS from './SideBur.module.css';
import CheckBox from '../CheckBox/CheckBox';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampType, selectQuery } from '../../redux/campers/selectors';
import { icons } from '../../media/icons';
import { useState } from 'react';
import { setLocation } from '../../redux/campers/slice';
import { getCampers } from '../../redux/campers/operations';

const SideBur = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const queryState = useSelector(selectQuery);
    const campTypeState = useSelector(selectCampType);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setLocation([{ location: city }]));
        dispatch(getCampers());
    };

    const handleCityChange = e => {
        setCity(e.target.value);
        if (city.length === 1) {
            dispatch(setLocation([{ location: '' }]));
            dispatch(getCampers());
        }
    };
    return (
        <div className={CSS.sidbur}>
            <form className={CSS.form}>
                <div className={CSS.locBox}>
                    <p className={CSS.locText}> Location</p>
                    <label className={CSS.locBox}>
                        <svg className={CSS.iconMap}>
                            <use xlinkHref={`${icons}#map`} />
                        </svg>
                        <input
                            placeholder="Kyiv, Ukraine"
                            className={CSS.locInput}
                            type="text"
                            value={city}
                            onChange={handleCityChange}
                        />
                    </label>
                </div>
                <p className={CSS.filterText}>Filters</p>
                <div className={CSS.equipment}>
                    <h3>Vehicle equipment</h3>
                    <span className={CSS.line}></span>
                    <div className={CSS.equBox}>
                        {queryState &&
                            queryState.map((q, idx) => (
                                <CheckBox key={idx} query={q} />
                            ))}
                    </div>
                </div>
                <div className={CSS.equipment}>
                    <h3>Vehicle type</h3>
                    <span className={CSS.line}></span>
                    <div className={CSS.equBox}>
                        {campTypeState &&
                            campTypeState.map((q, idx) => (
                                <CheckBox key={idx} query={q} />
                            ))}
                    </div>
                </div>
                <div className={CSS.btnBox}>
                    <button className={CSS.btn} onClick={handleSubmit}>
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SideBur;
