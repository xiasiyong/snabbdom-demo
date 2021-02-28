import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

const app = document.querySelector('#app')

/**
 * 第一个参数： 标签+选择器
 * 第二个参数： 如果是字符串，则是标签中的文本内容
 * 返回一个vnode
 */
let vnode = h('div#container.test', 'hello world')

/**
 * 第一个参数旧的vnode，也可以是一个真实的dom，内部工作的时候回转换成虚拟dom
 * 第二个参数新的vnode
 * 返回一个新的vnode
 */
let oldVnode = patch(app, vnode)

vnode = h('p#container.xxx', 'hello snabbdom')
oldVnode = patch(oldVnode, vnode)
console.log(oldVnode)