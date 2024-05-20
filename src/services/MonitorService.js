import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/monitors';

export const listMonitors = () => axios.get(REST_API_BASE_URL); 

export const createMonitor = (monitor) => axios.post(REST_API_BASE_URL, monitor);

export const getMonitor = (monitorId) => axios.get(REST_API_BASE_URL + '/' + monitorId);

export const updateMonitor = (monitorId, monitor) => axios.put(REST_API_BASE_URL + '/' + monitorId, monitor);

export const deleteMonitor = (monitorId) => axios.delete(REST_API_BASE_URL + '/' + monitorId);
