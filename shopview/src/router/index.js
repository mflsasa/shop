import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes=[
	{
		path: '/login',
		component: () => import(/* webpackChunkName: "login" */ '@/components/common/Home'),
		meta: { title: '登陆' },
	},
	{
		path: '/',
		component: () => import(/* webpackChunkName: "home" */ '@/components/common/Home'),
		redirect:"/index",
		children:[
			{
				path: '/index',
				component: () => import(/* webpackChunkName: "index" */ '@/components/pages/index'),
				meta: { title: '系统首页' }
			},
		]
	},
]

const router = new Router({
	// mode:"history",
	routes:routes
})
export default router