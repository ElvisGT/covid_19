import {useFetch} from '../hooks/useFetch';
import style from '../styles/main.module.scss';
import {Link} from 'react-router-dom';

const API = "https://covid-api.mmediagroup.fr/v1/cases";

export const Stadistics = () => {
    const data = useFetch(API);
		const result = Object.keys(data).map(item => {return item}); // Obteniendo las claves del objeto de la Api
			
    return (
        <div className={style.Stadistics}>
					{result.length > 0 
						?
							result.map(key => (
								<Link className={style.Stadistics_link} key={key} to="/details">
									<div className={style.Stadistics_card}>
										<p>
												{key}
										</p>
									</div>
								</Link>
							))
						:
							<div className={style.Stadistics_loading}>
								<h1>Cargando...</h1>
							</div>
						
								
					}
						
        </div>
    )
}
