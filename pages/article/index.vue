<template>
	<view class="article">
		<view class="title">{{title}}</view>
		<view class="text">
			<mp-html :content='text' />
		</view>
	
	</view>
</template>

<script setup>
 import {ref,reactive,onMounted} from 'vue';
 import {getArticle} from '../../common';
 import { onLoad } from '@dcloudio/uni-app'
 import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'
import { marked } from 'marked';
 const title = ref('');
 const text = ref('');
 
 onLoad(async(options) => {
   const id = options.id || '';
   const res = await getArticle(id);
   title.value = res.data.title;
   text.value = marked(res.data.content);

 })

 

</script>

<style lang="scss">
	.article {
		box-sizing: border-box;
		width:100%;
		padding:0 24rpx;
		overflow:hidden;
		background-color: #ebedf0;
		.title{
			font-size:28rpx;
			text-align:center;
			background-color:#ffffff;
			padding:24rpx 0;
			margin:24rpx auto; 
			font-weight: bold;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.text{
			font-size:26rpx;
			color:#000000;
			line-height:2em;
			background-color:#ffffff;
			padding:24rpx;
			overflow:hidden;
		}
	}

</style>
