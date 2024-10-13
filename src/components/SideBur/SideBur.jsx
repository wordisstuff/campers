import CSS from './SideBur.module.css';
import CheckBox from '../CheckBox/CheckBox';
import { useSelector } from 'react-redux';
import { selectCampType, selectQuery } from '../../redux/campers/selectors';

const SideBur = () => {
    const queryState = useSelector(selectQuery);
    const campTypeState = useSelector(selectCampType);
    console.log(queryState);
    return (
        <div className={CSS.sidbur}>
            <form className={CSS.form}>
                <p> Location</p>
                <label>
                    <input />
                </label>
                <p>Filters</p>
                <div className={CSS.equipment}>
                    <h3>Vehicle equipment</h3>
                    <span className={CSS.line}></span>
                    <div className={CSS.equBox}>
                        {queryState &&
                            queryState.map((q, idx) => (
                                <CheckBox key={idx} query={q} from={'query'} />
                            ))}
                    </div>
                </div>
                <div className={CSS.equipment}>
                    <p>Vehicle type</p>
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
