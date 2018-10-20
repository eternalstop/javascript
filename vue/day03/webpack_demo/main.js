//webpack试一个前端资源模板化加载器和打包工具，它能够把各种资源都作为模块来使用和处理
//实际四，webpack是通过不通的loader将这些资源加载后打包，然后输出打包后文件
//简单来说，webpack就是一个模块加载器，所有资源都可以作为模块来加载，最后打包输出
//官网：http://webpack.github.io/
//webpack有一个核心配置文件，：webpack.config.js,必须放在项目根目录下
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el:'#app',
    render:function (h) {
        return h(App);
    }
})

