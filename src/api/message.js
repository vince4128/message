import axios from 'axios';

/**
 * Define the base url of the api used.
 */

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});
