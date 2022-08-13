import style from '../styles/main.module.scss';
import {useState,useEffect,useRef} from 'react';
import {useFetch} from '../hooks/useFetch';
import {StadisticsCardName} from '../components/StadisticsCardName';

const API = "https://covid-api.mmediagroup.fr/v1/cases";

export const Search = () => {
	const [search,setSearch] = useState(null);
	const {result} = useFetch(API);
	let foundCountries = null;
	const searchInput = useRef(null);

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
	},[search])

	if(result !== null && search !== null){
		//Logica del buscador
		foundCountries = result.filter(country => {
		return country.toLowerCase().includes(search.toLowerCase());
		});
	}
	

    return (
        <div className={style.Search}>
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
									<img className={style.Search_image} src="https://i.ibb.co/1mpvY1b/pexels-porapak-apichodilok-346885.jpg" alt="imagen del mundo" />
							}	
						</div>
        </div>
    )
}
