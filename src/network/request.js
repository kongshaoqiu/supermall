import axios from 'axios'


// const url = "http://106.54.54.237:8000/api/w1";
// const url2 = "http://123.207.32.32:8000/api/w1";

// let config = {
//     baseURL: url || url2
//   };
 
// const _axios = axios.create(config);
  
// 'http://123.207.32.32:8000'|| 

export function request(config){
    // 1.创建axios实例
    const instance = axios.create({
        //baseURL:'http://123.207.32.32:8000/api/wh',
        baseURL:'http://106.54.54.237:8000/api/wh',
        timeout: 5000      
    })

    // 2.axios的拦截器
    // 2.1请求拦截的作用
    instance.interceptors.request.use(config =>{
        return config
    }, err => {  
        //console.log(err);
    })
   

    //2.2拦截的响应
    instance.interceptors.response.use(res =>{
        return res.data
    }, err => { 
        //console.log(err);
    })

  
    //3.发送网络请求
    return instance(config)
}

//-------------------------------------------------------------------------------------

// import axios from "axios";
// // import qs from "qs";
// // import { Toast } from "vant";

// const url = "http://106.54.54.237:8000/api/w1";
// const url2 = "http://123.207.32.32:8000/api/w2";

// let config = {
//   baseURL: url || url2
// };

// const _axios = axios.create(config);

// // 请求拦截
// _axios.interceptors.request.use(
//   req => {
//     Toast.loading({
//       forbidClick: true,
//       message: "加载中..."
//     });
//     return req;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );

// // 响应拦截
// _axios.interceptors.response.use(
//   res => {
//     // Toast.clear();
//     // return res.data;
//   },
//   err => {
//     // Toast.clear();
//     // return Promise.reject(err);
//   }
// );


// export default _axios;
// // 全局注册axios qs
// window.axios = _axios;
// // window.qs = qs;