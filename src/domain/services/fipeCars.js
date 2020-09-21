import { api, failureCallback, successCallback } from '../api';

export const loadCars = async () => {
    return api()
        .get('carros/marcas')
        .then(successCallback)
        .catch(failureCallback);
};

export const loadModels = async model => {
    return api()
        .get(`carros/marcas/${model}/modelos`)
        .then(successCallback)
        .catch(failureCallback);
};
