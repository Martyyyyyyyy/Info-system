import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/printers';

export const listPrinters = () => axios.get(REST_API_BASE_URL); 

export const createPrinter = (printer) => axios.post(REST_API_BASE_URL, printer);

export const getPrinter = (printerId) => axios.get(REST_API_BASE_URL + '/' + printerId);

export const updatePrinter = (printerId, printer) => axios.put(REST_API_BASE_URL + '/' + printerId, printer);

export const deletePrinter = (printerId) => axios.delete(REST_API_BASE_URL + '/' + printerId);
