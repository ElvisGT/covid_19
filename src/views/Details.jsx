import style from '../styles/main.module.scss';
import {useFetch} from '../hooks/useFetch';
import {InteractionButton} from '../components/InteractionButton';
import {StadisticsCardDetails} from '../components/StadisticsCardDetails';
import {Loading} from '../components/Loading';
import {addFavorites} from '../app/actions';
import { connect } from 'react-redux';
import {usePath} from '../hooks/usePath';


const Details = (props) => {
  const {favorites} = props;
  const {country,cleanCountry,hashName} = usePath();

  const API = `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`;
  const {stateData} = useFetch(API);

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
        <InteractionButton text="Atrás" path={`/${hashName}`}/>
        
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