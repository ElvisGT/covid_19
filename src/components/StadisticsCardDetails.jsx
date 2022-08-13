import style from '../styles/main.module.scss';


export const StadisticsCardDetails = ({country,confirmed,deaths,population,continent,capital_city}) => {
  return (
      <div className={style.CardDetails}>
        <h2>{country}</h2>
        <p>Capital: {capital_city}</p>
        <p>Población: {population}</p>
        <p>Casos Confirmados: {confirmed}</p>
        <p>Muertes: {deaths}</p>
        <p>Continente: {continent}</p>
      </div>
  )
}
