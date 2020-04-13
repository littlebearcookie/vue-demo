<template>
	<div id="app">
		<nav class="navbar navbar-expand-md bg-dark navbar-dark">
			<router-link class="navbar-brand" :to="{name:'home'}">
				<img src="@/assets/logo.png" id="logo">
			</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="collapsibleNavbar">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link" :to="{name:'home'}">{{$t('__home')}}</router-link>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							{{$t('__language')}}
						</a>
						<div class="dropdown-menu" aria-labelledby="languageDropdown">
							<button type="button" class="dropdown-item" @click="switch_lang('en')">English</button>
							<button type="button" class="dropdown-item" @click="switch_lang('tw')">繁體中文</button>
						</div>
					</li>
				</ul>
				<ul class="navbar-nav ml-auto" v-if="this.$session.get('token') === 'ImLogin'">
					<li class="nav-item">
						<span class="navbar-text">{{this.$session.get('user_name')}}</span>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link" @click="logout">{{$t('__logout')}}</a>
					</li>
				</ul>
				<ul class="navbar-nav ml-auto" v-else>
					<li class="nav-item">
						<router-link class="nav-link" :to="{name:'login'}">{{$t('__login')}}</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{name:'register'}">{{$t('__register')}}</router-link>
					</li>
				</ul>
			</div>  
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	methods:{
		logout(){
			this.$session.destroy();
			this.$router.go(0);
		},
		switch_lang(lang){
			this.$i18n.locale = lang;
			localStorage.setItem('locale', lang);
		}
	}
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
