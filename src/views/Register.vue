<template>
	<div class="container my-5">
		<div class="row justify-content-center">
			<div class="col-md-4 com-sm-12 justify-content-left">
				<h3>註冊</h3>
				<div class="input-group input-group-sm mb-3">
					<input class="form-control" placeholder="Enter Account" v-model="account">
				</div>
				<div class="input-group input-group-sm mb-3">
					<input type="password" class="form-control" placeholder="Enter Password" v-model="pwd">
				</div>
				<div class="input-group input-group-sm mb-3">
					<input class="form-control" placeholder="Enter Name" v-model="name">
				</div>
				<div>{{register_msg}}</div>
				<button type="button" class="btn btn-primary" @click="register">Register</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Register',
	data () {
		return {
			account:'',
			pwd:'',
			name:'',
			register_msg:''
		}
	},
	methods:{
		register(){
			var user_register = {
				"USER_ACCOUNT":this.account,
				"USER_PASSWORD":this.pwd,
				"USER_NAME":this.name
			}
			const options = {
				method:'POST',
				headers:{'Content-Type': 'application/x-www-form-urlencoded'},
				url: this.$conf.AJAX_PATH+'/register.php',
				data: this.$qs.stringify(user_register),
			};
			this.axios(options)
			.then((res)=>{
				this.register_msg = res.data;
				this.account = '';
				this.pwd = '';
				this.name = '';
			}).catch((error)=>{
			});
		}

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
