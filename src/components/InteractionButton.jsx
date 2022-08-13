import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';

export const InteractionButton = ({text,action,path,className}) => {

  return (
      <Link className={style.Button_link} to={path ? path : ""}>
        <div className={className ? `${className} ${style.Button}`: style.Button} onClick={action}>
              {text}
        </div>
      </Link>
  )
}
