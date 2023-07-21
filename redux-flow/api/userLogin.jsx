const path = `https://vervelife-service.k8.isw.la/vervelife/api/v1/login`;

import axios from "axios";

export const userLogin = (user) => {
    const {payload} =user
console.log('User check...................', user);
  return new Promise((resolve, reject) => {
    axios
      .post(path, payload)
      .then(res => {
        // console.log('User data...................', res);
        return resolve({...res, error: false});
      })
      .catch(error => {
        console.log('check again')
      });
  });
};


