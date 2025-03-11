<template>
	<view class="about">
		<view class="text">
			<mp-html :content='text' />
		</view>
	
	</view>
</template>

<script setup>
 import {ref,reactive,onMounted} from 'vue';
 import {getSettingsDetail} from '../../common';
 import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'
import { marked } from 'marked';

 const text = ref('');
 onMounted(async() => {
	
	 const res = await getSettingsDetail();
	 text.value = marked(res.data.about);
	
 })
</script>

<style lang="scss">
	.about {
		box-sizing: border-box;
		width:100%;
		padding:0 24rpx;
		overflow:hidden;
		background-color: #ebedf0;
		.text{
			font-size:26rpx;
			color:#000000;
			line-height:2em;
			background-color:#ffffff;
			padding:12rpx 24rpx;
			overflow:hidden;
		}
	}

</style>
