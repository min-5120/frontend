import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://localhost:8888/wordpress',
  timeout: false,
  headers: {

  },
  // 表示跨域请求时是否需要使用凭证
  withCredentials: true,
  crossDomain: true,
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default
});
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status >= 200 && response.status < 400){
    console.log(response, 'response');
    return response.data;
  }

}, function (error) {
  console.log(error, '对响应错误做点什么');
  // 对响应错误做点什么
  return Promise.reject(error);
});

function request(url, method = 'post', params, ...otherConfig) {
  let defaultConfig = {
    url,
    method,
  };
  if (method === 'get') {
    defaultConfig = {
      ...defaultConfig,
      params,
    };
  } else {
    defaultConfig = {
      ...defaultConfig,
      data: { ...method },
    };
  }
  return instance.request({
    ...defaultConfig,
    ...otherConfig,
  }).then((res) => {
    console.log(res, '111');
    return res;
  }).catch(err => {
    console.log(err, '222');
  });
}
function getRequest(url, params) {
  return request(url, 'get', params);
}
function postRequest(url, params) {
  return request(url, 'post', params);
}

export {
  getRequest,
  postRequest,
};
