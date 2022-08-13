import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';


export const StadisticsCardName = ({keyProp}) => {
  return (
    <Link className={style.Stadistics_link} to={`details/${keyProp}`}>
      <div className={style.Stadistics_card}>
        <p>
            {keyProp}
        </p>
      </div>
		</Link>
  )
}
