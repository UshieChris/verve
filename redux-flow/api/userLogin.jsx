const path = `https://vervelife-service.k8.isw.la/vervelife/api/v1/login`;

import axios from "axios";

export const userLogin = (user) => {
    const {payload} =user
  return new Promise((resolve, reject) => {
    axios
      .post(path, payload)
      .then(res => {
        return resolve({...res, errors: false});
      })
      .catch(error => {
        return reject({ errors: true, error: error.response.data});
      });
  });
};


