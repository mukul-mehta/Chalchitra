import axios from 'axios';
import config from './config.js';


async function getData(endpoint, data) {
  return await axios
    .get(config.baseurl + endpoint, {
      params: data
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('err in getData at endpoint ', endpoint, 'is ', err);
      return err;
    });
}

async function postData(endpoint, data) {
  return await axios
    .post(config.baseurl + endpoint, data, {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('err in postData at endpoint ', endpoint, 'is ', err);
      return err;
    });
}

let connectBackend = {
  getData,
  postData
};

export default connectBackend;
