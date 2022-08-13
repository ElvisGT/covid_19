import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';
import { InteractionButton } from '../components/InteractionButton';

export const Home = () => {
    return (
        <div className={style.Home}>
            <div className={style.Home_buttonContainer}>
                <InteractionButton className={style.Button} text={"Listado de países"} path={"/stats"}/>
            </div>
            <img className={style.Home_image} 
                 src="https://i.ibb.co/nk44sPG/pexels-cdc-3993212-1.jpg" 
                 alt="imagen de un medico" />
        </div>
    );
};
