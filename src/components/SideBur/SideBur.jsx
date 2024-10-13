import CSS from './SideBur.module.css';
import CheckBox from '../CheckBox/CheckBox';
import { useSelector } from 'react-redux';
import { selectCampType, selectQuery } from '../../redux/campers/selectors';
import { icons } from '../../media/icons';

const SideBur = () => {
    const queryState = useSelector(selectQuery);
    const campTypeState = useSelector(selectCampType);
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
            </form>
        </div>
    );
};

export default SideBur;
