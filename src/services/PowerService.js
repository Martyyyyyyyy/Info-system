import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/powerUnits';

export const listPowers = () => axios.get(REST_API_BASE_URL); 

export const createPower = (power) => axios.post(REST_API_BASE_URL, power);

export const getPower = (powerId) => axios.get(REST_API_BASE_URL + '/' + powerId);

export const updatePower = (powerId, power) => axios.put(REST_API_BASE_URL + '/' + powerId, power);

export const deletePower = (powerId) => axios.delete(REST_API_BASE_URL + '/' + powerId);
