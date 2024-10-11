import clsx from 'clsx';
import CSS from './SideBur.module.css';
import { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import { useSelector } from 'react-redux';
import { selectQuery } from '../../redux/campers/selectors';

// const handleClick =(e,state)=>{
// e.de
// }
const SideBur = () => {
    const queryState = useSelector(selectQuery);
    console.log(queryState);
    return (
        <div className={CSS.sidbur}>
            SideBur
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
                            queryState.map((query, idx) => (
                                <CheckBox key={idx} query={query} />
                            ))}
                    </div>
                </div>
                {/* <label> 
    <input className={CSS.checkBox} type='checkbox'/>
    <input className={CSS.checkBox} type='checkbox'/>
    <input className={CSS.checkBox} type='checkbox'/>
    <input className={CSS.checkBox} type='checkbox'/>
    <input className={CSS.checkBox} type='checkbox'/>
</label>
<p>Vehicle type</p>
<label>
    <input className={CSS.checkBox} type='checkbox'/>
    <input className={CSS.checkBox} type='checkbox'/>
    <input className={CSS.checkBox} type='checkbox'/>
</label> */}
            </form>
        </div>
    );
};

export default SideBur;
