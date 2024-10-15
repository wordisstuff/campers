import { chechBoxText } from '../../api/api';
import { icons } from '../../media/icons';

const Equipment = ({ text }) => {
    console.log(text);
    return (
        <ul>
            <li>
                <svg className={CSS.icon} width={20} height={20}>
                    <use xlinkHref={`${icons}#${text}`} />
                </svg>
                <p className={CSS.text}>{chechBoxText(text)}gergergerger</p>
            </li>
        </ul>
    );
};

export default Equipment;
