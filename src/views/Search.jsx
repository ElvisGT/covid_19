import style from '../styles/main.module.scss';
import {useState,useEffect,useRef} from 'react';
import {useFetch} from '../hooks/useFetch';
import {StadisticsCardName} from '../components/StadisticsCardName';
import { connect } from 'react-redux';
import {useScroll} from '../hooks/useScroll';
import {showMenuDesktop} from '../app/actions';
import {MenuScrollDesktop} from '../components/MenuScrollDesktop';



const API = "https://covid-api.mmediagroup.fr/v1/cases";

const Search = (props) => {
	const [search,setSearch] = useState(null);
	const {result} = useFetch(API);
	let foundCountries = null;
	const searchInput = useRef(null);
	const {scroll} = useScroll();
	const {menuDesktop,size} = props
	
	const handleSearch = () => {
		setSearch(searchInput.current.value); //Seteando el valor que tecleamos en el input al estado
	}

	//Esto es para que al borrar en el buscador todo, no muestre ningun pais
	useEffect(() => {
		if(search !== null){
			if(search.length === 0){
				setSearch(null); 
			}
		}
		if(size >= 768){
			props.showMenuDesktop(true);
		}else {
			props.showMenuDesktop(false);
		}
	},[search,size])

	if(result !== null && search !== null){
		//Logica del buscador
		foundCountries = result.filter(country => {
		return country.toLowerCase().includes(search.toLowerCase());
		});
	}
	

    return (
        <div className={style.Search}>
						{/*Si la pantalla es mayor o igual a 768px y el scroll es mayor a 100 entonces muestra el menu desktop*/}
						{menuDesktop &&
								scroll > 100 &&
								<MenuScrollDesktop />
						}
            <h1 className={style.Search_title}>Buscador de paises</h1>
            <div className={style.Search_searchBarContainer}>
								<input className={style.Search_searchBar} 
												type="text" 
												maxLength="50" 
												onChange={handleSearch}
												ref={searchInput}
												placeholder="Teclee el nombre del país"
								/>
            </div>
						<div className={style.Search_foundCountries}>
							{foundCountries !== null 
								?
									foundCountries.map(key => (
										<StadisticsCardName keyProp={key} key={key}/>
									))
								: 
									<img className={style.Search_image} src="https://i.ibb.co/G5mdc39/pexels-porapak-apichodilok-346885-1-1.jpg" alt="imagen del mundo" />
							}	
						</div>
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
		menuDesktop:state.menuDesktop, 
		size:state.size
	}
};

const mapDispatchToProps = {
	showMenuDesktop
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);