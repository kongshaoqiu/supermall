import {request} from './request'

//此处是将promise函数request封装起来，放入getHomeMultidata()中，方便代码的维护和管理
//首页不同的请求向不同的模块发送，并实施不同封装

export function getHomeMultiData(){
    return request({
        url:'/home/multidata'
    });
}

export function getHomeGoodsData(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}



