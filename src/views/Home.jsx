import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <div className={style.Home}>
            <div className={style.Home_buttonContainer}>
                <button className={style.Home_buttonItem} type="button">
                    <Link className={style.Home_linkStats} to="/stats">Ver estadisticas</Link>
                </button>
                
            </div>
            <img className={style.Home_image} 
                 src="https://i.ibb.co/25sZkRk/pexels-edward-jenner-4033148-1.jpg" 
                 alt="imagen de un medico" />
        </div>
    );
};
