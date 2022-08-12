import {Link} from 'react-router-dom';
import style from "../styles/main.module.scss";
import {useState} from "react";

const linksMenu = [
	{
		id:1,
		path:'/',
		name:"Inicio"
	},
	{
		id:2,
		path:'/search',
		name:"Buscador"
	},
	{
		id:3,
		path:'/favorites',
		name:"Favoritos"
	},
	{
		id:4,
		path:'/about',
		name:"Acerca"
	}
]

export const Header = () => {
	const [iconMenu,setIconMenu] = useState(true);

	const handleMenu = () => {
		setIconMenu(!iconMenu); //Setea lo contrario al valor de iconMenu
	}
	return (
		<div className={style.Header}>
			{/*Modo mobile*/}
			{iconMenu 
				?
					<div className={style.Header_menu}>
						<img src="https://i.ibb.co/vhwg03G/icons8-coronavirus-48.png" alt="icono de coronavirus" />
						<h2 className={style.Header_title}>COVID 19</h2>
						<img src="https://i.ibb.co/Q8TW0J6/icons8-men-32.png" alt="icono de menu de hamburguesa" onClick={handleMenu}/>
					</div>
				:
				<nav className={style.Header_navMenuContainer}>
						{/*Logica para renderizar todos los links del menu recorriendo el arreglo*/}
							<ul className={style.Header_navMenu}>
								{
									linksMenu.map(item => (
										<li key={item.id} onClick={handleMenu}>
											<Link className={style.Header_navMenu_link} 
														to={item.path}>
												{item.name}
											</Link>
										</li>
										))
									}
							</ul>
							<img className={style.Header_closeIcon} src="https://i.ibb.co/S6dDFwf/icons8-cancelar-32-2.png" alt="icono de cerrar" onClick={handleMenu}/>
					</nav>
			}
		</div>
	);
};
