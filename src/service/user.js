import fetch from '../utils/fetch';

let { API } = process.env;


export default {
  login(header) {
    return fetch(`${API}/auth`, {}, 'post', header);
  },
  checkAuthorization(accessToken) {
    return fetch(`${API}/user-server`, { accessToken });
  },
  refreshAuthorization(refreshToken) {
    return fetch(`${API}/user-server`, { refreshToken });
  },
};
