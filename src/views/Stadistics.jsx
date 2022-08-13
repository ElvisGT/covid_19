import {useFetch} from '../hooks/useFetch';
import style from '../styles/main.module.scss';
import {StadisticsCardName} from '../components/StadisticsCardName';
import {Loading} from '../components/Loading';
import {InteractionButton} from '../components/InteractionButton';
import {useScroll} from '../hooks/useScroll';
import {activeMenu,showMenu} from '../app/actions';
import {useEffect} from 'react';
import { connect } from 'react-redux';

const API = "https://covid-api.mmediagroup.fr/v1/cases";

const Stadistics = (props) => {
    const {result} = useFetch(API);
		const {scroll} = useScroll();
		const {floatMenu} = props;

		useEffect(() => {
			if(scroll > 100){
				props.showMenu(true);
			}else {
				props.showMenu(false);
			}
		}, [scroll])

		const handleMenu = () => {
			props.activeMenu();
		}
			
    return (
        <div className={style.Stadistics}>
					{/*Si el scroll es mayor a 100 entonces se muestra el menu*/}
					{floatMenu &&
						<InteractionButton text={"Menu"} className={style.floatButton} action={handleMenu}/>
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
		floatMenu:state.floatMenu
	}
};

const mapDispatchToProps = {
	activeMenu,
	showMenu,
};

export default connect(mapStateToProps,mapDispatchToProps)(Stadistics);
