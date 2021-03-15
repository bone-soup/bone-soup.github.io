<template>
	<div class="tinymce-editor">
		<editor v-model="myValue" :init="init" :disabled="disabled" @onClick="onClick" @blur="onBlur"></editor>
	</div>
</template>
<script>
// "@tinymce/tinymce-vue": "^3.2.8",
// "tinymce": "^5.0.3",
// 官方兼容到IE11
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/themes/silver';
import 'tinymce/plugins/image'; // 插入上传图片插件
import 'tinymce/plugins/media'; // 插入视频插件
import 'tinymce/plugins/table'; // 插入表格插件
import 'tinymce/plugins/lists'; // 列表插件
import 'tinymce/plugins/code'; // 查看html源码
import 'tinymce/plugins/wordcount'; // 字数统计插件
import 'tinymce/icons/default/icons' //解决了icons.js 报错Unexpected token '<'
// .... 其他插件按需引入
export default {
	components: {
		Editor
	},
	props: {
		value: {
			type: String,
			default: ''
		},
		// 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
		// 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
		baseUrl: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		plugins: {
			type: [String, Array],
			default: 'lists image media table wordcount code'
		},
		toolbar: {
			type: [String, Array],
			default:'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \ styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
    table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs'
		}
	},
	data() {
		return {
			init: {
				language_url: `${this.baseUrl}/tinymce/langs/zh_CN.js`,
				language: 'zh_CN',
				// skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide`,									// 默认浅色系
				content_css: `${this.baseUrl}/tinymce/skins/content/default/content.css`,
				skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide-dark`,								// 暗色系
				content_css: `${this.baseUrl}/tinymce/skins/content/dark/content.css`,	// 暗色系
				height: 300,
				plugins: this.plugins,
				toolbar: this.toolbar,
				branding: false,
				menubar: 'file edit insert view format table code',
				// 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
				// 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
				images_upload_handler: (blobInfo, success, failure) => {
					const img = 'data:image/jpeg;base64,' + blobInfo.base64();
					success(img);
				}
			},
			myValue: this.value
		};
	},
	mounted() {
		tinymce.init({});
	},
	methods: {
		// 添加相关的事件，可用的事件参照文档=> https://www.tiny.cloud/docs/integrations/vue/#eventbinding
		// 需要什么事件可以自己增加
		onClick(e) {
			this.$emit('onClick', e, tinymce);
		},
		// 失焦保存
		onBlur() {
			console.log(111);
			this.$emit('onBlur', this.myValue);
		},
		// 可以添加一些自己的自定义事件，如清空内容
		clear() {
			this.myValue = '';
		},
		// 保存数据
		saveData() {
			this.$emit('save',this.myValue);
		}
	},
	watch: {
		value(newValue) {
			this.myValue = newValue;
		},
		myValue(newValue) {
			this.$emit('input', newValue);
		}
	}
};
</script>
