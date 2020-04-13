<template>
	<div class="container my-5">
		<div class="row justify-content-center">
			<div class="col-md-4 com-sm-12 justify-content-left">
				<h3>{{$t('__login')}}</h3>
				<div class="input-group input-group-sm my-3">
					<input class="form-control" :placeholder="$t('__enterAccount')" v-model="account">
				</div>
				<div class="input-group input-group-sm my-3">
					<input type="password" class="form-control" :placeholder="$t('__enterPassword')" v-model="pwd">
				</div>
				<div>{{login_msg}}</div>
				<button type="button" class="btn btn-success" @click="login">{{$t('__login')}}</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data () {
		return {
			account:'',
			pwd:'',
			login_msg:'',
		}
	},
	methods:{
		login(){
			var user_login = {
				"USER_ACCOUNT":this.account,
				"USER_PASSWORD":this.pwd
			}
			const options = {
				method:'POST',
				headers:{'Content-Type': 'application/x-www-form-urlencoded'},
				url: this.$conf.AJAX_PATH+'/login.php',
				data: this.$qs.stringify(user_login),
			};
			this.axios(options)
			.then((res)=>{
				if (res.data.Login == "success"){
					this.$session.start();
					this.login_msg = '登入成功';
					this.$session.set('token', 'ImLogin');
					this.$session.set('user_no', res.data.USER_NO);
					this.$session.set('user_name', res.data.USER_NAME);
					this.$router.push('/');
				}
				else {
					this.login_msg = '登入失敗';
				}
			}).catch((error)=>{
				this.login_msg = '登入失敗';
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
