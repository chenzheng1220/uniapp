export default {
	//接口
	api: function() {
		let version = wx.getAccountInfoSync().miniProgram.envVersion;//获取微信环境
		switch (version) {
			case "develop": //开发预览版
				return "http://lejibiji.cn:8081"
			case 'trial': //体验版
				return "http://xxx.xxx.xxx.xxx:xxx"
			case 'release': //正式版
				return "http://xxx.xxx.xxx.xxx:xxx"
			default: //未知,默认调用正式版
				return "http://lejibiji.cn:8081"
		}
	}
}
