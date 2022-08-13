import {useFetch} from '../hooks/useFetch';
import style from '../styles/main.module.scss';
import {StadisticsCardName} from '../components/StadisticsCardName';
import {Loading} from '../components/Loading';
import {InteractionButton} from '../components/InteractionButton';
import {useScroll} from '../hooks/useScroll';
import {activeMenu,showMenu,showMenuDesktop} from '../app/actions';
import {useEffect} from 'react';
import { connect } from 'react-redux';
import {MenuScrollDesktop} from '../components/MenuScrollDesktop';

const API = "https://covid-api.mmediagroup.fr/v1/cases";

const Stadistics = (props) => {
    const {result} = useFetch(API);
		const {scroll} = useScroll();
		const {floatMenu,menuDesktop,size} = props;

		useEffect(() => {
			if(scroll > 100){
				props.showMenu(true);
			}else {
				props.showMenu(false);
			}

			if(size >= 768){
				props.showMenuDesktop(true);
			}else {
				props.showMenuDesktop(false);
			}
		}, [scroll,size])

		const handleMenu = () => {
			props.activeMenu();
		}
			
    return (
        <div className={style.Stadistics}>
					{/*Si el scroll es mayor a 100 entonces se muestra el menu*/}
					{floatMenu &&
						size < 768 && //Si el ancho de la pantalla es menor a 768px muestra el menu
						<InteractionButton text={"Menu"} className={style.floatButton} action={handleMenu}/>
					}
					{/*Si la pantalla es mayor o igual a 768px y el scroll es mayor a 100 entonces muestra el menu desktop*/}
					{menuDesktop &&
							scroll > 100 &&
							<MenuScrollDesktop />
					}
					{result.length > 0 
						?
							result.map(key => (
								<StadisticsCardName keyProp={key} key={key}/>
							))
						:
							<Loading />	
					}
						
        </div>
    )
};

const mapStateToProps = (state) => {
	return {
		floatMenu:state.floatMenu,
		menuDesktop:state.menuDesktop,
		size:state.size
	}
};

const mapDispatchToProps = {
	activeMenu,
	showMenu,
	showMenuDesktop,
};

export default connect(mapStateToProps,mapDispatchToProps)(Stadistics);
