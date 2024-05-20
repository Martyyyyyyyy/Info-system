import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/processors';

export const listProcessors = () => axios.get(REST_API_BASE_URL); 

export const createProcessor = (processor) => axios.post(REST_API_BASE_URL, processor);

export const getProcessor = (processorId) => axios.get(REST_API_BASE_URL + '/' + processorId);

export const updateProcessor = (processorId, processor) => axios.put(REST_API_BASE_URL + '/' + processorId, processor);

export const deleteProcessor = (processorId) => axios.delete(REST_API_BASE_URL + '/' + processorId);
