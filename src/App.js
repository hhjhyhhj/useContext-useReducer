
// import G6 from '@antv/g6';
// const data = {
//   // 点集
//   nodes: [
//     {
//       id: 'node1', // String，该节点存在则必须，节点的唯一标识
//       x: 100, // Number，可选，节点位置的 x 值
//       y: 200, // Number，可选，节点位置的 y 值
//     },
//     {
//       id: 'node2', // String，该节点存在则必须，节点的唯一标识
//       x: 300, // Number，可选，节点位置的 x 值
//       y: 200, // Number，可选，节点位置的 y 值
//     },
//   ],
//   // 边集
//   edges: [
//     {
//       source: 'node1', // String，必须，起始点 id
//       target: 'node2', // String，必须，目标点 id
//     },
//   ],
// };
// const graph = new G6.Graph({
//   container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
//   width: 800, // Number，必须，图的宽度
//   height: 500, // Number，必须，图的高度
// });


import { Color } from './isChange'
function App() {
  return (
    <div className="App">
               <Color/>
    </div>
  );
}

export default App;
