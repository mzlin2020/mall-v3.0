import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue) {
    // console.log("执行了obj的install函数");
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    //2.根据组件构造器，创建出一个实例
    const toast = new toastConstructor()
    
    //3.将组件对象，手动挂载到某一个元素上
    const div = document.createElement('div')
    toast.$mount(div) //挂载
    
    //4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast

}
export default obj
