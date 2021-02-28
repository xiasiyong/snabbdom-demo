import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

const app = document.querySelector('#app')

/**
 * 第一个参数： 标签+选择器
 * 第二个参数： 如果是数组，则将数组中的每一项当做child添加给第一个元素
 * 返回一个vnode
 */
let vnode = h('div#container.test', [
  h('h1#title', 'hello snabbdom'),
  h('p', 'this is a p')
])

let oldVnode = patch(app, vnode)

setTimeout(() => {
  // 场景一： 替换
  // vnode = h('div#container.test', [
  //   h('h1#title', 'hello wolrd'),
  //   h('p', '这是一个中文的p')
  // ])
  // patch(oldVnode, vnode)
  // 场景二： 清空
  patch(oldVnode, h('!'))
}, 2000)

// vnode = h('p#container.xxx', 'hello snabbdom')
// oldVnode = patch(oldVnode, vnode)
// console.log(oldVnode)