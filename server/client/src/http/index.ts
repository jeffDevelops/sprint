import axios from 'axios';

import determineAPIHost from './determineAPIHost';

export async function get(path: string): Promise<any> {
  return await axios
    .get(`${determineAPIHost()}${path}`)
    .then(response => response)
    .catch(error => error);   
}

export async function post(path: string, body: any): Promise<any> {
  return axios
    .post(`${determineAPIHost()}${path}`, body)
    .then(response => response)
    .catch(error => error);
}

export async function put(path: string, body?: any): Promise<any> {
  return await axios
    .put(`${determineAPIHost()}${path}`, body)
    .then(response => response)
    .catch(error => error);
}

export async function destroy(path: string): Promise<any> {
  return await axios
    .delete(`${determineAPIHost()}${path}`)
    .then(response => response)
    .catch(error => error);
}