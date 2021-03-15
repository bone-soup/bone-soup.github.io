<template>
  <div class="home">
		<div class="pengke-btn"></div>
		<Editer @input="inputTinyText" @onClick="clickTinyText">
			<button>保存</button>
		</Editer>
		<div>{{value}}</div>
  </div>
</template>

<script>
import Editer from '@/components/Editor.vue'
export default {
  name: 'Home',
  components: { Editer },
	data() {
		return {
			value:''
		}
	},
	methods:{
		// =====================================================================
		// 监听输入
		// =====================================================================
		inputTinyText:function (e) {
			this.value = e;
		},
		
		// =====================================================================
		// 监听提交
		// =====================================================================
		clickTinyText:function (e,tiny) {
			console.log(e,tiny);
		}
	}
}
</script>
