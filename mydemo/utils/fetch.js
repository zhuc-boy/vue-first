import axios from 'axios'
import router from '../src/router'
import qs from 'qs'
import store from '../src/store/index'
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 4000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    transformRequest: [(data) => {
        //return JSON.stringify(data)
        return qs.stringify(data)
    }]
});
instance.interceptors.request.use(
    config => {
        config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
        if (store.state.token) {
            //console.log(store.state.token);
            config.headers['Token'] = store.state.token//新添加的
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
instance.interceptors.response.use(
    res => {
        //console.log(res);
        return res
    },
    err => {
        console.log(err.response)
        if (err && err.response) {
            switch (err.response.status) {
                case 401:
                    //store.commit('del_token');
                    console.log('11111')
                    router.replace({
                        path: '/login',
                    })
            }
        }
        return Promise.reject(err.response)
    }
);
export default instance;