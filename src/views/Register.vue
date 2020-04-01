<template>
	<div class="container my-5">
		<div class="row justify-content-center">
			<div class="col-md-4 com-sm-12 justify-content-left">
				<h3>註冊</h3>
				<label for="account">帳號</label>
				<div class="input-group input-group-sm mb-3">
					<input class="form-control" id="account" placeholder="Enter Account">
				</div>
				<label for="pwd">密碼</label>
				<div class="input-group input-group-sm mb-3">
					<input type="password" class="form-control" id="pwd" placeholder="Enter Password">
				</div>
				<label for="name">姓名</label>
				<div class="input-group input-group-sm mb-3">
					<input class="form-control" id="name" placeholder="Enter Name">
				</div>
				<button class="btn btn-primary">Register</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Register',
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
