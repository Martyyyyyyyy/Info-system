import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/tablets';

export const listTablets = () => axios.get(REST_API_BASE_URL); 

export const createTablet = (tablet) => axios.post(REST_API_BASE_URL, tablet);

export const getTablet = (tabletId) => axios.get(REST_API_BASE_URL + '/' + tabletId);

export const updateTablet = (tabletId, tablet) => axios.put(REST_API_BASE_URL + '/' + tabletId, tablet);

export const deleteTablet = (tabletId) => axios.delete(REST_API_BASE_URL + '/' + tabletId);
