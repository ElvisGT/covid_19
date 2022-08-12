import style from '../styles/main.module.scss';

export const About = () => {
    return (
        <article className={style.About}>
					<section className={style.About_sections}>
						<h2>Objetivos</h2>
						<p>Este sitio ha sido desarrollado con la intención de mostrar
								a todas las personas que deseen saber la magnitud del daño causado
								en todos los países por el <strong>COVID 19</strong>, desde personas que lamentablemente perdieron la vida
								hasta saber el número de contagiados.
						</p>
					</section>
					<section className={style.About_sections}>
						<h2>Agradecimientos</h2>
						<p>Para la realización de este sitio se utilizaron imágenes e íconos de webs externas como: </p>
						<ul>
								<li>Pexels para las imágenes: <a href="https://www.pexels.com/es-es/" target={"_blank"}>Enlace</a></li>
								<li>Icons8 para los íconos: <a href="https://iconos8.es/" target={"_blank"}>Enlace</a></li>
						</ul>
					</section>
					<section className={style.About_sections}>
						<h2>Tecnologías utilizadas</h2>
						<ul>
								<li>React.js</li>
								<li>Redux</li>
								<li>Sass</li>
								<li>Vite</li>                
						</ul>
					 </section>
        </article>
    )
}
