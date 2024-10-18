import { chechBoxText } from '../../api/api';
import { icons } from '../../media/icons';
import CSS from './Equipment.module.css'
import clsx from 'clsx';

const Equipment = ({ text,name }) => {
    const fill = name ==='microwave'||name ==='gas'
    return (
            <li className={CSS.equipmentLi}>
                <svg className={clsx(fill && CSS.icon )} width={20} height={20} >
                    <use xlinkHref={`${icons}#${name}`} />
                </svg>
                <p className={CSS.text}>{chechBoxText(name)}</p>
            </li>
    );
};

export default Equipment;
