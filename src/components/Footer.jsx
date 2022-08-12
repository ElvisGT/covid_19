import React from "react";
import style from '../styles/main.module.scss';

const linksSocialNetworks = [
    {
        id:1,
        name:"Linkedin",
        path:"https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/",
        alt:"icono de linkedin",
        imgSrc:"https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png"
    },
    {
        id:2,
        name:"Github",
        path:"https://github.com/ElvisGT",
				alt:"icono de github",
        imgSrc:"https://i.ibb.co/Fbfdvz5/icons8-github-64.png"
    },
   
]

export const Footer = () => {
  return (
  <div className={style.Footer}>
      <ul className={style.Footer_socialNetworksContainer}>
          {linksSocialNetworks.map(item => (
            <li key={item.id} className={style.Footer_socialNetworksItem}>
                  <img className={style.Footer_iconSocialN} src={item.imgSrc} alt={item.alt}/>
                  <a className={style.Footer_socialNetworksLink} href={item.path}>{item.name}</a>
            </li>
          ))
          }
      </ul>
      <h3 className={style.Footer_developepBy}>Hecho por ElvisGT</h3>
  </div>
  
)};
