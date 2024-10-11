import clsx from 'clsx';
import CSS from './SideBur.module.css';
import { useState } from 'react';

// const handleClick =(e,state)=>{
// e.de
// }
const SideBur = () => {
    const [ac, setAc] = useState(false)
    console.log(ac)
    return <div className={CSS.sidbur}>SideBur
    <form className={CSS.form}>
        <p> Location</p>
    <label>
    <input />
</label>
<p>Filters</p>
<p>Vehicle equipment</p>
<button className={clsx(CSS.ac, ac&& CSS.checked)} onClick={(e)=>{e.preventDefault(), setAc((ac)=>!ac)}} >AC</button>
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
    </div>;
};

export default SideBur;
