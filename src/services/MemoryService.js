import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/memoryDevices';

export const listMemory = () => axios.get(REST_API_BASE_URL); 

export const createMemory = (memory) => axios.post(REST_API_BASE_URL, memory);

export const getMemory = (memoryId) => axios.get(REST_API_BASE_URL + '/' + memoryId);

export const updateMemory = (memoryId, memory) => axios.put(REST_API_BASE_URL + '/' + memoryId, memory);

export const deleteMemory = (memoryId) => axios.delete(REST_API_BASE_URL + '/' + memoryId);
