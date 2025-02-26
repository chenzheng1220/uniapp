<template>
	<view class="index">
		<view class="item" v-for="item in list" :key="item.id">
			<view class="imageBox">
				<image class="articleCover" :src="item.articleCover"></image>
			</view>
			<view class="text">
			<!-- 	<view class="title">{{item.title}}</view> -->
				<text class="introduction">{{item.introduction}}</text>
				<view class="releaseTime">{{item.releaseTime}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
 import {ref,reactive,onMounted} from 'vue';
 import {getArticleList} from '../../common';
 const state = reactive({
	 pageNumber:1,
	 pageSize:10,
	 keyword:''
 });
 const list = ref([]);
 onMounted(async() => {
	
	 const res = await getArticleList(state);
	 list.value = res.list;
 })
</script>

<style lang="scss">
	.index {
		box-sizing: border-box;
		width:100%;
		padding:0 24rpx;
		overflow:hidden;
		background-color: #ebedf0;
		.item{
			box-sizing: border-box;
			width:100%;
			margin:24rpx auto; 
			display:flex;
			background-color:#ffffff;
			padding:24rpx;
			.imageBox{
				width:120rpx;
				height:120rpx;
				.articleCover{
					display:block;
					width:100%;
					height:100%;
				}
			}
			
			.text{
				flex:1;
				display:flex;
				flex-direction: column;
				padding:0 0 0 24rpx;
				overflow:hidden;
				justify-content: space-around;
				.title{
					font-size:28rpx;
					font-weight:bold;
					color:#000000;
					overflow:hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.introduction{
					display: -webkit-box;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					font-size:26rpx;
					line-height:1.6em;
					text-align:justify;
					color:#000000;
				}
				.releaseTime{
					font-size:24rpx;
					color:#909399;
					text-align:right;
				}
			}
		}
	}
</style>
