import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <div className={style.Home}>
            <div className={style.Home_buttonContainer}>
                <button className={style.Home_buttonItem} type="button">
                    <Link className={style.Home_linkStats} to="/stats">Listado de países</Link>
                </button>
                
            </div>
            <img className={style.Home_image} 
                 src="https://i.ibb.co/y4qXkcK/pexels-polina-tankilevitch-3735769.jpg" 
                 alt="imagen de un medico" />
        </div>
    );
};
