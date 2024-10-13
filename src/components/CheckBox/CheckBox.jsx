import clsx from 'clsx';
import CSS from './CheckBox.module.css';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/campers/slice';
import { icons } from '../../media/icons/index';
import { getCampers } from '../../redux/campers/operations';
import { chechBoxText, stringToBool } from '../../api/api';

const CheckBox = ({ query, from }) => {
    const dispatch = useDispatch();
    const keys = Object.keys(query)[0];
    console.log(query[keys], keys);

    const handleClick = e => {
        e.preventDefault();

        console.log(Boolean(''));

        dispatch(setQuery({ [keys]: stringToBool(keys, query[keys]) }, from));
        console.log('do geta');
        dispatch(getCampers());
        console.log('pislya geta');
    };

    console.log(keys);

    return (
        <div>
            <button
                className={clsx(CSS.btn, query[keys] && CSS.checked)}
                onClick={handleClick}
            >
                <div className={CSS.btnBox}>
                    <svg className={CSS.icon}>
                        <use xlinkHref={`${icons}#${keys}`} />
                    </svg>
                    {chechBoxText(keys)}
                </div>
            </button>
        </div>
    );
};

export default CheckBox;
