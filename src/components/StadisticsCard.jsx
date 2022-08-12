import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';


export const StadisticsCard = ({keyProp}) => {
  return (
    <Link className={style.Stadistics_link} to="/details">
      <div className={style.Stadistics_card}>
        <p>
            {keyProp}
        </p>
      </div>
		</Link>
  )
}
