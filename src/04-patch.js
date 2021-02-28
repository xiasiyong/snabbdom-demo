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

const arr1 = [1, 2, 3, 4, 5]
// 一样的
const arr2 = [1, 2, 3, 4, 5]
// 往前添加一个 unshift
const arr3 = [0, 1, 2, 3, 4, 5]
// 让后添加一个 // push
const arr4 = [1, 2, 3, 4, 5, 6]
// 往前删除一个 shift
const arr5 = [2, 3, 4, 5]
// 往后删除一个 pop
const arr6 = [1, 2, 3, 4]
// 中间插入一个 spilce
const arr7 = [1, 2, 7, 8, 3, 5]
// 中间删除一个 splice
const arr8 = [1, 2, 4, 5]
// 倒序 sort
const arr9 = [5, 4, 3, 2, 1]


function createNodes(arr) {
  const vnodes = []
  arr.forEach(item => {
    const vnode = h('li', item)
    vnodes.push(vnode)
  })
  return vnodes
}

function createNodesWithKey(arr) {
  const vnodes = []
  arr.forEach(item => {
    const vnode = h('li', { key: item }, item)
    vnodes.push(vnode)
  })
  return vnodes
}

let oldNode = h('ul', createNodesWithKey(arr1))

patch(app, oldNode)

// const newNode = h('ul', createNodes(arr2))
// const newNode = h('ul', createNodes(arr3))
// const newNode = h('ul', createNodes(arr4))
const newNode = h('ul', createNodesWithKey(arr7))
patch(oldNode, newNode)