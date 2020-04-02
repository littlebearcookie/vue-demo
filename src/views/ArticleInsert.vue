<template>				
	<div class="container my-5">
		<div>
			<div class="form-group text-left">
				<label>標題</label>
				<input class="form-control" v-model="article_title">
			</div>
			<div class="form-group text-left">
				<label>內容</label>
				<textarea rows="10" class="form-control" v-model="article_detail"></textarea>
			</div>
		</div>
		<div class="modal-footer text-center">
			<button type="button" class="btn btn-success" @click="insert_article">Save</button>
			<router-link class="btn btn-danger" :to="{name:'home'}">Back</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ArticleInsert',
	data () {
		return { 
			article_title:'',
			article_detail:''
		}
	},
	methods:{
		insert_article(){
			var article = {
				"USER_NO":this.$session.get('user_no'),
				"ARTICLE_TITLE":this.article_title,
				"ARTICLE_DETAIL":this.article_detail
			}
			const options = {
				method:'POST',
				headers:{'Content-Type': 'application/x-www-form-urlencoded'},
				url: this.$conf.AJAX_PATH+'/article_insert.php',
				data: this.$qs.stringify(article),
			};
			this.axios(options)
			.then((res)=>{
				this.$router.push({name:'home'})
			}).catch((error)=>{
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
