import axios from "axios";
const baseUrl = "http://localhost:3001/persons";


export const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

export const addPerson = (personData) => {
    const request = axios.post(baseUrl, personData);
    return request.then(response => response.data);
}

export const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(request => request.data);
}