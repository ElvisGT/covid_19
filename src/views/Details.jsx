import style from '../styles/main.module.scss';
import {useFetch} from '../hooks/useFetch';
import {InteractionButton} from '../components/InteractionButton';
import {StadisticsCardDetails} from '../components/StadisticsCardDetails';
import {Loading} from '../components/Loading';
import {useEffect} from 'react';



export const Details = () => {
  let path = window.location.hash.split("/");

  useEffect(() => {
    //Esto es para separar en un array los elementos del path sin "/"
    path = window.location.hash.split("/"); 
  }, [window.location.hash])
  //Esto es para obtener el ultimo valor de la url
  const country = path[path.length - 1];
  
  const API = `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`;
  const {stateData} = useFetch(API);
  //Obtener el primer valor del path
  const hashName = path[1];
  
  return (
    <div className={style.Details}>
      <div className={style.ButtonContainer}>
        <InteractionButton text="Atrás" path={`/${hashName}`}/>
        <InteractionButton text="Agregar a Favoritos" path="/favorites"/>
      </div>

      {stateData.All !== undefined
        ?
            <StadisticsCardDetails key={stateData.All.country} {...stateData.All}/>
        :
          <Loading />
      }
      
    </div>
  )
}
