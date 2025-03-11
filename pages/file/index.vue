<template>
	<view class="file">
		<view class="item" v-for="item in list" :key="item.date">
			<view class="date">{{item.date}}</view>
			<view class="articles" v-for="obj in item.articles" :key="obj.id">
				<text class="title">{{obj.title}}</text>
				<text class="releaseTime">[{{obj.releaseTime}}]</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive,onMounted} from 'vue';
	import {getFileList} from '../../common';
	const list = ref([]);
	
	onMounted(async() => {
		const res = await getFileList();
		list.value = res.list;
	})
	
</script>

<style lang="scss">
	.file{
		box-sizing:border-box;
		width:100%;
		padding:0 24rpx;
		overflow:hidden;
		background-color: #ebedf0;
		.item{
			background-color:#ffffff;
			padding:12rpx 24rpx;
			overflow:hidden;
			.date{
				font-size:28rpx;
				font-weight: bold;
				color:#000000;
			}
			.articles{
				width:100%;
				margin:12rpx 0;
				.title{
					font-size:26rpx;
					text-decoration:underline;
					color:#2c3e50;
				}
				.releaseTime{
					font-size: 24rpx;
					color:#808080;
				}
			}
		}
	}
	
</style>
