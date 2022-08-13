import { useEffect } from 'react';

export const usePath = () => {
    let path = window.location.hash.split("/");

    useEffect(() => {
        //Esto es para separar en un array los elementos del path sin "/"
        path = window.location.hash.split("/");
    }, [window.location.hash])

    //Esto es para obtener el ultimo valor de la url
    const country = path[path.length - 1];

    //Esto es para que el nombre quede legible con espacios y sin el simbolo de %
    const cleanCountry = country.split("%20").join(" ");

    //Obtener el primer valor del path
    const hashName = path[1];

    return {
        country,
        cleanCountry,
        hashName
    }
};