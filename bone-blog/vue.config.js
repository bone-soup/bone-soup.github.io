module.exports = {
	publicPath :'/',
	outputDir:'dist',
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: 'bone-blog',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
	},
	devServer: {
		host: '192.168.1.44',
		port: 8080,
		https: false,
		proxy: {
			'/api': {
				target: '/',//这里后台的地址模拟的;应该填写你们真实的后台接口
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''//请求的时候使用这个api就可以
				}
			}
		}
	}
}
