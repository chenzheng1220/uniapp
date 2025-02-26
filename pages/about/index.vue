<template>
	<view class="about">
		<view class="text">{{obj.about}}</view>
	
	</view>
</template>

<script setup>
 import {ref,reactive,onMounted} from 'vue';
 import {getSettingsDetail} from '../../common';

 const obj = ref({});
 onMounted(async() => {
	
	 const res = await getSettingsDetail();
	 obj.value = res.data;
	 console.log(obj)
 })
</script>

<style lang="scss">
	.about {
		width:100%;
		padding:0 24rpx;
		overflow:hidden;
		background-color: #ebedf0;
		.text{
			font-size:26rpx;
			color:#000000;
		}
	}

</style>
