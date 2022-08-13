import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';


export const StadisticsCardName = ({keyProp,imgSrc,imgAlt,fun}) => {
  return (
    <div className={style.Stadistics_card}>
        {imgSrc &&
          <img src={imgSrc} alt={imgAlt} onClick={fun} className={style.Stadistics_iconClose}/> 
        }
        <Link className={style.Stadistics_link} to={`details/${keyProp}`}>
              {keyProp}
		    </Link>
      </div>
  )
}
