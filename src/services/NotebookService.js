import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/notebooks';

export const listNotebooks = () => axios.get(REST_API_BASE_URL); 

export const createNotebook = (notebook) => axios.post(REST_API_BASE_URL, notebook);

export const getNotebook = (notebookId) => axios.get(REST_API_BASE_URL + '/' + notebookId);

export const updateNotebook = (notebookId, notebook) => axios.put(REST_API_BASE_URL + '/' + notebookId, notebook);

export const deleteNotebook = (notebookId) => axios.delete(REST_API_BASE_URL + '/' + notebookId);