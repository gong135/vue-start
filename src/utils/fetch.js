import axios from 'axios';


const fetch = (url, params, method = 'get', customHeaders) => {
  const config = {
    url,
    method,
  };
  if (customHeaders) {
    Object.assign(customHeaders, axios.defaults.headers.common.Authorization);
    config.headers = customHeaders;
  }
  if (method === 'get' || method === 'delete') {
    config.params = params;
  } else {
    config.data = params;
  }
  return new Promise((resovle, reject) => {
    axios(config)
      .then((res) => {
        resovle(res && res.data);
      })
      .catch((err) => {
        if (err.message === 'Network Error') {
          reject('Network Error');
        } else if (err.response && err.response.data) {
          const data = err.response.data;
          if (data.code) {
            console.log(data.message);
          } else {
            console.log('服务器处理异常，请稍后重试!');
          }
          reject(data);
        }
      });
  });
};

export default fetch;
