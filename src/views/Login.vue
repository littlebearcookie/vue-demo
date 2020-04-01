<template>
	<div class="container my-5">
		<div class="row justify-content-center">
			<div class="col-md-4 com-sm-12 justify-content-left">
				<h3>登入</h3>
				<div class="input-group input-group-sm my-3">
					<input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="account" placeholder="Enter Account">
				</div>
				<div class="input-group input-group-sm my-3">
					<input type="password" class="form-control" id="pwd" placeholder="Enter password">
				</div>
				<button type="submit" class="btn btn-success">Login</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
