import style from '../styles/main.module.scss';
import {linksMenu} from '../utils/linksMenu';
import {Link} from 'react-router-dom';

export const MenuDesktop = () => {
  return (
      <ul className={style.Header_navMenuDesktop}>
        {
          linksMenu.map(item => (
            <li key={item.id}>
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
