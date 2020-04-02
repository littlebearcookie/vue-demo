<template>				
	<div class="container my-3">
		<router-link class="btn btn-danger float-left mb-2" :to="{name:'home'}">返回</router-link>
		<table class="table text-left">
			<thead class="thead-dark">
				<tr>
					<th>
						標題：{{article.ARTICLE_TITLE}}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>
						<pre>{{article.ARTICLE_DETAIL}}</pre>
					</th>
				</tr>
				<tr v-for="message in messages" :key="message.MESSAGE_NO">
					<td>{{message.USER_NAME}}：{{message.MESSAGE_DETAIL}}</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td>
						<input class="form-control" v-model="new_message">
						<button type="button" class="btn btn-success float-right mt-2" @click="insert_message">留言</button>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script>
export default {
	name: 'ArticleDetail',
	data () {
		return {
			article:[],
			messages:[],
			new_message:'',
		}
	},
	created: function(){
		var options = {
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
		options = {
			method:'GET',
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},
			url:this.$conf.AJAX_PATH+'/messages.php',
			params:{article_no:this.$route.params.article_no}
		};
		this.axios(options)
		.then((res)=>{
			this.messages = res.data;
		}).catch((error)=>{

		});
	},
	methods:{
		insert_message(){
			var message = {
				"USER_NO":this.$session.get('user_no'),
				"ARTICLE_NO":this.$route.params.article_no,
				"MESAAGE_DETAIL":this.new_message
			}
			const options = {
				method:'POST',
				headers:{'Content-Type': 'application/x-www-form-urlencoded'},
				url: this.$conf.AJAX_PATH+'/message_insert.php',
				data: this.$qs.stringify(message),
			};
			this.axios(options)
			.then((res)=>{
				this.$router.go(0)
			}).catch((error)=>{
			});
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

