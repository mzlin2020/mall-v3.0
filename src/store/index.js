import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../network/login'
import router from '../router/index'
import localCache from '../common/cache'

Vue.use(Vuex)



const store = new Vuex.Store({
    state() {
        return {
            cartList: [],
            userInfo:{},
            hiddenTabBar: false,
        }
    },
    mutations: {
        addCart(state, payLoad) {
            let sameProduct = null
            for(let item of state.cartList) {
                if(payLoad.iid == item.iid) {
                    // 存在相同商品
                    sameProduct = item
                }
            }
            if(sameProduct) {
                sameProduct.count += 1
            } else {
                payLoad.count = 1
                state.cartList.push(payLoad)
            }
        },

        // 购物车商品选择按钮
        changeChecked(state, payLoad) {
            state.cartList.forEach(item => {
                if(item.iid == payLoad) {
                    item.checked = ! item.checked 
                }
            })
        },
        // 删除某些商品
        deleteSomeGoods(state) {      
            state.cartList.forEach((item,index,arr) => {
                if(item.checked) {
                    item.checked = false
                    item.count = 0
                    arr.splice(index, 1)
                }
            })
        },

        // 下订单
        purchaseGoods(state, payload) {
            state.purchaseGoods = payload
        },
        
        // 登录时-保存用户信息（含token）
        UserLoginInfo(state, payload) {
            state.userInfo.name = payload.name
            state.userInfo.id = payload.id
            state.userInfo.token = payload.token

            // 跳转路由
            setTimeout(() => {
                router.push('/ProfileOk')
            },2000)
        },

        // 刷新时，初始化账号名、token
        saveName(state, name) {
            state.userInfo.name = name
        },
        saveToken(state, token) {
            state.userInfo.token = token
        },

        //处于登录、注册页面时，隐藏tabBar
        hiddenTabBar(state) {
            state.hiddenTabBar = true
        },
        doNotHiddenTabBar(state) {
            state.hiddenTabBar = false
        },

        // 退出登录
        existLogin(state) {
            state.userInfo = {} //清空个人信息
            state.cartList = [] //清空购物车
        },
        //删除购买界面信息
        deletePurchagePage(state) {
            state.purchaseGoods = null
        } 
    },
    actions: {
        async loginAction({commit}, payload) {
            // 发送网路请求
            const loginResult = await login({data: payload,method: 'POST'})
            // console.log(loginResult);
            const { id, name, token } = loginResult.data
            // 本地缓存token
            localCache.setCache("token", token)
            commit("UserLoginInfo", { id, name, token }) //提交mutations
           
        },

        // 刷新时，触发并将本地缓存的数据保存到state中
        loadUserInfo({commit}) {
            const name = localCache.getCache('name')
            commit('saveName', name)

            const token = localCache.getCache('token')
            commit('saveToken', token)
        }
    }
})

//触发刷新时，重新将vuex的数据加载到内存中
export function setupStore() {
    store.dispatch("loadUserInfo")
}

export default store