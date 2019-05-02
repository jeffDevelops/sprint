import axios from 'axios';

import determineAPIHost from './determineAPIHost';

export async function get(path: string): Promise<any> {
  return await axios
    .get(`${determineAPIHost()}${path}`)
    .then(response => response)
    .catch(error => error);   
}

// TODO: post
// TODO: update
// TODO: destroy