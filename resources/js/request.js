import axios from 'axios'

const instance = axios.create({
    // baseURL: url,
    // url: '/library_type_option',
    // maxRedirects: 0,
    // headers: {
    //     'X-AXIOS': true,
    //     'Authorization': `bearer ${token}`
    // }
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    status401Action(error.response.status);
    return Promise.reject(error);
});

function status401Action(status) {
    if (status === 401) {
        console.log('401 action');
        window.location.href = portal_url+'/logout';
    }
}

export default instance
