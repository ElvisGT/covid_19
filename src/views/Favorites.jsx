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
						<div className={style.Favorites_cardContainer}>
							{/*Renderizando los favoritos*/}
							{favorites.length > 0 &&
									favorites.map(item => (
										<>
											<img className={style.Favorites_iconClose} 
														src="https://i.ibb.co/Y8P59Ch/icons8-eliminar-32.png" 
														alt="icono de cerrar"
														onClick={() => handleRemove(item)}/>
											<StadisticsCardName keyProp={item} key={item}/>
										</>
									))
							}
						</div>
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
