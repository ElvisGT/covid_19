import style from '../styles/main.module.scss';
import {useFetch} from '../hooks/useFetch';
import {InteractionButton} from '../components/InteractionButton';
import {StadisticsCardDetails} from '../components/StadisticsCardDetails';
import {Loading} from '../components/Loading';
import {useEffect} from 'react';
import {addFavorites} from '../app/actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


const Details = (props) => {
  let path = window.location.hash.split("/");
  const {favorites} = props;

  useEffect(() => {
    //Esto es para separar en un array los elementos del path sin "/"
    path = window.location.hash.split("/"); 
  }, [window.location.hash])
  //Esto es para obtener el ultimo valor de la url
  const country = path[path.length - 1];

  //Esto es para que el nombre quede legible con espacios y sin el simbolo de %
  const cleanCountry = country.split("%20").join(" ");
  
  const API = `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`;
  const {stateData} = useFetch(API);
  //Obtener el primer valor del path
  const hashName = path[1];


  const handleClick = (payload) => {
    //Si el valor que le estamos pasando existe en favoritos devuelve falso y no se agrega
    const isPayloadInFav = favorites.find(item => item === payload);
    if(!isPayloadInFav){
      props.addFavorites(payload);
    }
  }
  
  return (
    <div className={style.Details}>
      <div className={style.ButtonContainer}>
        <Link className={style.ButtonContainer_link} to={`/${hashName}`}>
          <InteractionButton text="Atrás" />
        </Link>
        {/*invocando la funcion handleClick que usa un dispatch para agregar a favoritos*/}
        <InteractionButton text="Agregar a Favoritos" action={() => handleClick(cleanCountry)} />
      </div>

      {stateData.All !== undefined
        ?
            <StadisticsCardDetails key={stateData.All.country} {...stateData.All}/>
        :
          <Loading />
      }
      
    </div>
  )
};


const mapDispatchToProps = {
  addFavorites,
};

const mapStateToProps = (state) => {
  return {
    favorites:state.favorites,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);