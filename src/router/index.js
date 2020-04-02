import Vue from 'vue'
import Router from 'vue-router'
// 登入和註冊
import Login from '@/views/Login'
import Register from '@/views/Register'

import Home from '@/views/Home'
import ArticleInsert from '@/views/ArticleInsert'
import ArticleEdit from '@/views/ArticleEdit'
import ArticleDetail from '@/views/ArticleDetail'

Vue.use(Router)

var router = new Router({
	routes: [
		// 登入
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		// 註冊
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		// 留言板首頁
		{
			path: '/',
			name: 'home',
			component: Home, 
			// 設定此路由(包括children路由)的meta值
            // 可以在全域 router.beforeEach 中篩選識別所有流過的路由(判斷特殊邏輯)
			meta: { requireAuth: true },
		},
		// 新增文章
		{
			path: '/insert',
			name: 'article_insert',
			component: ArticleInsert,
			meta: { requireAuth: true },
		},
		// 編輯文章
		{
			path: '/edit/:article_no',
			name: 'article_edit',
			component: ArticleEdit,
			meta: { requireAuth: true },
		},
		// 查看文章
		{
			path: '/detail/:article_no',
			name: 'article_detail',
			component: ArticleDetail,
			meta: { requireAuth: true },
		},
	]
})

// Navigation hook
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {

		// this route requires auth (record.meta.requireAuth == true)
		
		let isLogin = (Vue.prototype.$session.get('token') === 'ImLogin');
        // 兩種方式判斷登入與否:
        // 1. 前端確認登入沒 (但是有可能過期或直接被server side強制踢出，但反正資料一定會再跟server要，到時再驗證token囉)
        // 2. 最保險就是直接ajax透過後端檢查token囉
        // let currentToken = localStorage.getItem(constantService.localStorage.tokenKey);
        // if (currentToken) {

        //     // [client side] 判斷有token就算登入可轉頁 
        //     // 反正後續重要資料一定從server端，會在取資料時進行server端token驗證
        //     isLogin = true;

        //     // [server side] 直接透過ajax讓後端檢查token合法性
        //     // 在此須使用同步的方式，等待處理結果後才能繼續往下走
        //     let data = await authService.isTokenAlive();
        //     isLogin = data;
        // }
        if (isLogin === false && to.path !== '/login') {
            next({
                path: '/login',
                // query: { redirect: to.fullPath }
            })
        } else {
            next() //必須向下走
        }

    } else {
        next() // 必須向下走
    }
})

export default router;