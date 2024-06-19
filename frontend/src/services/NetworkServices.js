import axios from 'axios'
import {REACT_APP_SERVER_URL} from '@env'
const config = { withCredentials: true }


export const postData = async (endPoint, data) => {
    try {
        const resp = await axios.post(REACT_APP_SERVER_URL + endPoint, data)
        console.log(REACT_APP_SERVER_URL, ' ---- ', endPoint, ' ----- ', data)
        // console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const putData = async (endPoint, data) => {
    try {
        const resp = await axios.put(process.env.REACT_APP_SERVER_URL + endPoint, data, config)
        // console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const postFormData = async (formData) => {
    try {
        const resp = await axios.post(process.env.REACT_APP_UPLOAD_URL, formData);
        // console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getData = async (endPoint) => {
    try {
        const resp = await axios.get(process.env.REACT_APP_SERVER_URL + endPoint, config)
        // console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getExternalData = async (endPoint,headers) => {
    try {
        const resp = await axios.get(endPoint,{ headers: headers })
        // console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const postExternalData = async (endPoint, data) => {
    try {
        const resp = await axios.post(endPoint, data, {
            headers: {
                'Authorization': `Bearer CDQgxeDGxa9zuvvlwc0lVu4PgBlPRurUo9XN2Dl0wWrWUS58ani5S`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
        console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteData = async (endPoint) => {
    try {
        const resp = await axios.delete(process.env.REACT_APP_SERVER_URL + endPoint, config)
        // console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }
}


export const postMsgData = async (endPoint, data) => {
    try {
        const resp = await axios.post(endPoint, data)
        // console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }
}



export const postUsignData = async (endPoint, data, headers) => {
    try {
        const resp = await axios.post(endPoint, data, { headers: headers });
        // console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
        return error;
    }
}
