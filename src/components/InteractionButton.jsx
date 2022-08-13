import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';

export const InteractionButton = ({text,path}) => {
  return (
      <button className={style.Button}>
        <Link className={style.Button_link} to={path}>
          {text}
        </Link>
      </button>
  )
}
