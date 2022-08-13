import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';

export const InteractionButton = ({text,action,path,className}) => {

  return (
      <button className={className ? `${className} ${style.Button}`: style.Button} onClick={action}>
          <Link className={style.Button_link} to={path ? path : ""}>
            {text}
          </Link>
      </button>
  )
}
