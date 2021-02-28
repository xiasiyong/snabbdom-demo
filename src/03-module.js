import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

// 导入模块
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'
import { propsModule } from 'snabbdom/build/package/modules/props'

const patch = init([
  styleModule,
  eventListenersModule,
  propsModule
])

const app = document.querySelector('#app')

/**
 * 第一个参数： 标签+选择器
 * 第二个参数： 如果是数组，则将数组中的每一项当做child添加给第一个元素
 * 返回一个vnode
 */
let vnode = h('div#container.test', [
  h('h1#title', { style: { backgroundColor: 'red' } }, 'hello snabbdom'),
  h('p', { on: { click: handlerClick }, props: { title: 1 } }, 'this is a p')
])

function handlerClick (e) {
  console.log(e)
}

patch(app, vnode)