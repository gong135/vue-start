import fetch from '../utils/fetch';

let { API } = process.env;


export default {
  login(header) {
    return fetch(`${API}/auth/loginByWechat`, {}, 'post', header);
  },
  checkAuthorization(accessToken) {
    return fetch(`${API}/user-server/authorization`, { accessToken });
  },
  refreshAuthorization(refreshToken) {
    return fetch(`${API}/user-server/authorization/refresh.do`, { refreshToken });
  },
};
