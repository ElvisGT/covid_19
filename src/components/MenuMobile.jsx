import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';
import {linksMenu} from '../utils/linksMenu';

export const MenuMobile = ({action}) => {
  return (
      <ul className={style.Header_navMenu}>
        {
          linksMenu.map(item => (
            <li key={item.id} onClick={action}>
              <Link className={style.Header_navMenu_link} 
                    to={item.path}>
                {item.name}
              </Link>
            </li>
            ))
        }
      </ul>
  )
}
