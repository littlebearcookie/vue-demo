import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'

Vue.use(Router)

var router = new Router({
	routes: [
		// 登入
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		// 留言板首頁
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { requireAuth: true },
		},
	]
})

// Navigation hook
router.beforeEach((to, from, next) => {
	if (to.meta.requireAuth) {
		if (Vue.prototype.$session.has('user_name')) {
			next();
		}
		else {
			next({
				name: 'login',
			});
		}
	}
	else {
		next();
	}
})

export default router;