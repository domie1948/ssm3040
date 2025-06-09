import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import bumenxinxi from '@/views/modules/bumenxinxi/list'
    import yuangong from '@/views/modules/yuangong/list'
    import daibangongzuo from '@/views/modules/daibangongzuo/list'
    import liuchengleixing from '@/views/modules/liuchengleixing/list'
    import gangweixinxi from '@/views/modules/gangweixinxi/list'
    import wodeyoujian from '@/views/modules/wodeyoujian/list'
    import renshidangan from '@/views/modules/renshidangan/list'
    import kaoqinjilu from '@/views/modules/kaoqinjilu/list'
    import kaoqindaka from '@/views/modules/kaoqindaka/list'
    import gonggaotongzhi from '@/views/modules/gonggaotongzhi/list'
    import xinjiangongzuo from '@/views/modules/xinjiangongzuo/list'
    import xinjiangongzuomoban from '@/views/modules/xinjiangongzuomoban/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/bumenxinxi',
        name: '部门信息',
        component: bumenxinxi
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/daibangongzuo',
        name: '待办工作',
        component: daibangongzuo
      }
      ,{
	path: '/liuchengleixing',
        name: '流程类型',
        component: liuchengleixing
      }
      ,{
	path: '/gangweixinxi',
        name: '岗位信息',
        component: gangweixinxi
      }
      ,{
	path: '/wodeyoujian',
        name: '我的邮件',
        component: wodeyoujian
      }
      ,{
	path: '/renshidangan',
        name: '人事档案',
        component: renshidangan
      }
      ,{
	path: '/kaoqinjilu',
        name: '考勤记录',
        component: kaoqinjilu
      }
      ,{
	path: '/kaoqindaka',
        name: '考勤打卡',
        component: kaoqindaka
      }
      ,{
	path: '/gonggaotongzhi',
        name: '公告通知',
        component: gonggaotongzhi
      }
      ,{
	path: '/xinjiangongzuo',
        name: '新建工作',
        component: xinjiangongzuo
      }
      ,{
	path: '/xinjiangongzuomoban',
        name: '新建工作模板',
        component: xinjiangongzuomoban
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
