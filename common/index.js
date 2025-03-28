import http from './request.js';
export function getArticleList(data){
	return http({
		url:'/getArticleList',
		method:'post',
		data
	})
}

export function getFileList(){
	return http({
		url:'/getFileList'
	})
}

export function getSettingsDetail(data){
	return http({
		url:'/getSettingsDetail'
	})
}
export function getArticle(id){
	return http({
		url:`/getArticle?id=${id}`
	})
}
