import style from '../styles/main.module.scss';
import { MenuDesktop } from './MenuDesktop';

export const MenuScrollDesktop = () => {
  return (
    <div className={style.menuDesktopFixed}>
      <MenuDesktop />
    </div>
  )
}
