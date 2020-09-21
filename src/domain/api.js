import axios from 'axios';

export const api = () =>
    axios.create({
        baseURL: process.env.REACT_APP_API,
        validateStatus: function (status) {
            return status >= 200 && status < 500;
        },
    });

export const successCallback = result => {
    if (result.status < 300) {
        return result.data;
    } else if (result.status >= 400 && result.status < 500) {
        throw result;
    }
};

export const failureCallback = error => {
    throw error;
};
