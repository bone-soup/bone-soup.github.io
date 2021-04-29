<template>
  <div class="home">
		<div class="pengke-btn"></div>
		<Editer @input="inputTinyText" @onClick="clickTinyText">
			<button>保存</button>
		</Editer>
		<div>{{value}}</div>
		 <input id="btn1" type="button" value ="点我" @click="test"/>
  </div>
</template>

<script>
import Editer from '@/components/Editor.vue'
const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance();
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
		},
		
		// =====================================================================
		// 测试播放语音
		// =====================================================================
		test() {
			this.speek('欢迎光临')
		},
		
		// =====================================================================
		// 语音合成
		// =====================================================================
		speek (content) {
			let message = new SpeechSynthesisUtterance();
			message.text = content;
			message.lang = 'zh-CN';
			message.volume = 1;
			message.rate = 0.7;
			speechSynthesis.speak(message);
		}
	}
}
</script>
