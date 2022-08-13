import { useState, useEffect } from 'react';

export const useFetch = (API) => {
    const [stateData, setStateData] = useState([]);

    //Funcion para hacer la peticon a la API
    const fetchData = () => {
        fetch(API)
            .then(response => response.json())
            .then(data => setStateData(data))
    };
    useEffect(() => {
        fetchData();
    }, [API]);

    // Obteniendo las claves del objeto de la Api
    const result = Object.keys(stateData).map(item => { return item });

    return { result, stateData };
};