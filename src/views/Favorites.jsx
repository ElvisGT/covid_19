import {connect} from 'react-redux';
import {StadisticsCardName} from '../components/StadisticsCardName';
import style from '../styles/main.module.scss';
import {removeFavorites} from '../app/actions';


const Favorites = (props) => {
    const {favorites} = props;

		const handleRemove = (payload) => {
			props.removeFavorites(payload);
		}
    
    return (
        <div className={style.Favorites}>
						<h2 className={style.Favorites_title}>Favoritos({favorites.length})</h2>
							{/*Renderizando los favoritos*/}
							{favorites.length > 0 &&
									favorites.map(item => (												
										<StadisticsCardName keyProp={item} 
																				imgSrc={"https://i.ibb.co/WsRDpHZ/icons8-eliminar-24.png"}
																				imgAlt={"icono de borrar"}
																				fun={() => handleRemove(item)}
																				/>
									))
							}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites:state.favorites,
    }
}

const mapDispatchToProps = {
	removeFavorites,
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);
