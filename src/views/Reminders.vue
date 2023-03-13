<template>
	<div class="flex flex-col w-full">
  <the-wrapper 
	:max-width="685" 
	:width="100"
	:marginBottom="0"
	:marginTop="0"
	:marginRight="'auto'"
	:marginLeft="'auto'">
	<div class="flex justify-between py-2">
		<p class="text-xl font-bold  ">Lượt nhắc</p>
		<TheHeaderButton 
              :height = "36"
              :background = "'rgba(255,255,255,0.1)'"
              :borderRadius = "8"
              :checkWidth = "false" 
              :icon = settingSlider
              :title="'Sắp xếp'"
              :paddingLeft="10"
              :paddingRight="10"
              :gap = "10"
            />
	</div>
	
	</the-wrapper>
	<div class="my-5 mx-auto ">
		<div class="flex justify-center my-4">
			<img src="../assets/icons/noneEvaluate.svg" alt="" class="w-[112px]">
		</div>
		<p class="text-center text-lg font-bold">Không có bài viết hoặc thẻ</p>
		<p class="text-canter text-lg">Không còn gì khác để hiển thị</p>
	</div>
	</div>
</template>

<script>
import TheWrapper from '../components/TheWrapper.vue';
import TheHeaderButton from '../components/Header/TheHeaderButton.vue';
import SettingSlider from '../assets/icons/settings-sliders.svg'
export default {
	name: 'reminders',
	data() {
    return {
			settingSlider: SettingSlider
    }
  },
	components: {
		TheWrapper,
		TheHeaderButton,
	}
}
</script>

<style>

</style>