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
                <p>Vehicle equipment</p>
                {queryState &&
                    queryState.map((query, idx) => (
                        <CheckBox key={idx} query={query} />
                    ))}
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
