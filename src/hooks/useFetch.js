import { useState, useEffect } from 'react';

export const useFetch = (API) => {
    const [state, setState] = useState([]);

    //Funcion para hacer la peticon a la API
    const fetchData = () => {
        fetch(API)
            .then(response => response.json())
            .then(data => setState(data))
    };
    useEffect(() => {
        fetchData();
    }, [API]);

    return state;
};