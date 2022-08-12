import {useFetch} from '../hooks/useFetch';
import style from '../styles/main.module.scss';
import {StadisticsCard} from '../components/StadisticsCard';
import {Loading} from '../components/Loading';

const API = "https://covid-api.mmediagroup.fr/v1/cases";

export const Stadistics = () => {
    const {result} = useFetch(API);
			
    return (
        <div className={style.Stadistics}>
					{result.length > 0 
						?
							result.map(key => (
								<StadisticsCard keyProp={key} key={key}/>
							))
						:
							<Loading />	
					}
						
        </div>
    )
}
