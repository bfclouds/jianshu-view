import {
  Home, Detail, Write, Login, Register
} from './pages' //导入页面
//通过组件配置路由
const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/write',
  component: Write
}, {
  path: '/login',
  component: Login
}, {
  path: '/register',
  component: Register
}, {
  path: '/detail/:id',
  component: Detail
},
];
export default routes
