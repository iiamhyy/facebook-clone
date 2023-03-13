<template>
	<div class="flex flex-col w-full">
  <the-wrapper 
	:max-width="685" 
	:width="100"
	:marginBottom="0"
	:marginTop="0"
	:marginRight="'auto'"
	:marginLeft="'auto'">
		<p class="text-xl font-bold pt-2 ">Bạn có đề xuất QKIT Software không?</p>
		<div class="flex gap-3 pt-4">
			<div class="flex flex-1 items-center justify-center bg-button py-2 rounded-md">
				<p class="text-lg font-medium">Có</p>
			</div>
			<div class="flex flex-1 items-center justify-center bg-button py-2 rounded-md">
				<p class="text-lg font-medium">Không</p>
			</div>
		</div>
	</the-wrapper>
	<div class="my-5 mx-auto ">
		<div class="flex justify-center my-4">
			<img src="../assets/icons/noneEvaluate.svg" alt="" class="w-[112px]">
		</div>
		<p class="text-center text-lg font-bold">Không có đánh giá</p>
		<p class="text-canter text-lg">Hãy là người đầu tiên đánh giá</p>
	</div>
	</div>
</template>

<script>
import TheWrapper from '../components/TheWrapper.vue';
export default {
	name: 'evaluate',
	data() {
    return {
			
    }
  },
	components: {
		TheWrapper
	}
}
</script>

<style>

</style>