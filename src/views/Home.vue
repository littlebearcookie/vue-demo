<template>				
	<div class="container my-3">
		<router-link class="btn btn-success float-right mb-2" :to="{name:'article_insert'}">新增文章</router-link>
		<table class="table">
			<thead class="thead-dark">
				<tr>
					<th style="width:50%">標題</th>
					<th style="width:30%">發文者</th>
					<th style="width:20%">功能</th>
				</tr>
			</thead>
			<tbody v-if="articles.length != 0">
				<tr v-for="article in articles" :key="article.ARTICLE_NO">
					<td>{{article.ARTICLE_TITLE}}</td>
					<td>{{article.USER_NAME}}</td>
					<td>
						<router-link class="btn btn-sm btn-primary" :to="{name:'article_detail',params:{'article_no':article.ARTICLE_NO}}">查看</router-link>
						<router-link class="btn btn-sm btn-warning" :to="{name:'article_edit',params:{'article_no':article.ARTICLE_NO}}">編輯</router-link>
						<button type="button" class="btn btn-sm btn-danger" @click="delete_article(article.ARTICLE_NO)">刪除</button>
					</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr>
					<td colspan="3" class="text-center">目前尚無文章</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	name: 'Home',
	data () {
		return {
			articles:[],
		}
	},
	created: function(){
		const options = {
			method:'GET',
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},
			url: this.$conf.AJAX_PATH+'/articles.php'
		};
		this.axios(options)
		.then((res)=>{
			this.articles = res.data;
		})
		.catch((error)=>{

		});
	},
	methods:{
		delete_article(article_no){
			const options = {
				method:'GET',
				headers:{'Content-Type': 'application/x-www-form-urlencoded'},
				url: this.$conf.AJAX_PATH+'/article_delete.php',
				params:{article_no:article_no}
			};
			this.axios(options)
			.then((res)=>{
				this.$router.go(0)
			}).catch((error)=>{
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
