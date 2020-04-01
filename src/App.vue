<template>
	<div id="app">
		<nav class="navbar navbar-expand-md bg-dark navbar-dark">
			<router-link class="navbar-brand" :to="{name:'home'}">
				<img src="./assets/logo.png" id="logo">
			</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="collapsibleNavbar">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link" :to="{name:'home'}">首頁</router-link>
					</li>
				</ul>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<router-link class="nav-link" :to="{name:'login'}">登入</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{name:'register'}">註冊</router-link>
					</li>
				</ul>
			</div>  
		</nav>
		<router-view/>
	</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
	height:30px;
}
</style>
