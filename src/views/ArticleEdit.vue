<template>				
	<div class="container my-5">
		<div>
			<div class="form-group text-left">
				<label>標題</label>
				<input class="form-control" v-model="article.ARTICLE_TITLE">
			</div>
			<div class="form-group text-left">
				<label>內容</label>
				<textarea rows="10" class="form-control" v-model="article.ARTICLE_DETAIL"></textarea>
			</div>
		</div>
		<div class="modal-footer text-center">
			<button type="button" class="btn btn-success" @click="edit_article">Edit</button>
			<router-link class="btn btn-danger" :to="{name:'home'}">Back</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ArticleEdit',
	data () {
		return {
			article:[]
		}
	},
	created: function(){
		const options = {
			method:'GET',
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},
			url:this.$conf.AJAX_PATH+'/article.php',
			params:{article_no:this.$route.params.article_no}
		};
		this.axios(options)
		.then((res)=>{
			this.article = res.data;
		}).catch((error)=>{

		});
	},
	methods:{
		edit_article(){
			var article = {
				"ARTICLE_NO":this.$route.params.article_no,
				"USER_NO":this.$session.get('user_no'),
				"ARTICLE_TITLE":this.article.ARTICLE_TITLE,
				"ARTICLE_DETAIL":this.article.ARTICLE_DETAIL
			}
			const options = {
				method:'POST',
				headers:{'Content-Type': 'application/x-www-form-urlencoded'},
				url: this.$conf.AJAX_PATH+'/article_edit.php',
				data: this.$qs.stringify(article),
			};
			this.axios(options)
			.then((res)=>{
				this.$router.push('/')
			}).catch((error)=>{
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
