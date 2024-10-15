import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectSelectedCamper } from '../../redux/campers/selectors';
import { useParams } from 'react-router-dom';
import { setId } from '../../redux/campers/slice';
import { getCampers } from '../../redux/campers/operations';
import CSS from './CamperDetail.module.css'

const CamperDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        dispatch(setId(id));
        dispatch(getCampers());
    }, []);
    const camp = useSelector(selectCampers)
    console.log(camp);
    return <div>
            {camp.gallery.length > 0 && camp.gallery.map((i,idx)=>
                <div key={idx}>
                    <img
                        src={`${i.original}`}
                        alt={camp.name}
                        className={CSS.img}
                    />
                </div>
            )}
        
    </div>;
};

export default CamperDetail;
