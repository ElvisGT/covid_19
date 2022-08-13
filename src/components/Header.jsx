import style from "../styles/main.module.scss";
import { connect } from 'react-redux';
import {activeMenu} from '../app/actions';
import {MenuMobile} from '../components/MenuMobile';
import {MenuDesktop} from '../components/MenuDesktop';

const Header = (props) => {
	const {mainMenu} = props;
	const handleMenu = () => {
		props.activeMenu(); //Setea lo contrario al valor de iconMenu
	}

	//Esto es para obtener el tamanio del ancho de la pantalla
	const getSize = () => document.documentElement.clientWidth;
	const size = getSize();

	return (
		<div className={style.Header}>
			{size < 768 
				?
					//Modo mobile
					!mainMenu 
						?
							<div className={style.Header_menu}>
								<img src="https://i.ibb.co/vhwg03G/icons8-coronavirus-48.png" alt="icono de coronavirus" />
								<h2 className={style.Header_title}>COVID 19</h2>
								<img src="https://i.ibb.co/Q8TW0J6/icons8-men-32.png" alt="icono de menu de hamburguesa" onClick={handleMenu}/>
							</div>
						:
						<nav className={style.Header_navMenuContainer}>
								{/*Logica para renderizar todos los links del menu recorriendo el arreglo*/}
									<MenuMobile action={handleMenu}/>
									<img className={style.Header_closeIcon} 
												src="https://i.ibb.co/S6dDFwf/icons8-cancelar-32-2.png" 
												alt="icono de cerrar" 
												onClick={handleMenu}/>
						</nav>
				:	
					<>
						<div className={style.Header_logoContainer}>
							<img src="https://i.ibb.co/vhwg03G/icons8-coronavirus-48.png" alt="icono de coronavirus" />
							<h2 className={style.Header_title}>COVID 19</h2>
						</div>
						<div className={style.Header_navMenuDesktopContainer}>
							<MenuDesktop />
						</div>
					</>
			}
	</div>
	);
};

const mapStateToProps = (state) => {
	return {
		mainMenu:state.mainMenu
	}
};

const mapDispatchToProps = {
	activeMenu,
};


export default connect(mapStateToProps,mapDispatchToProps)(Header);
