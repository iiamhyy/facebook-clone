<template>
        <app-side/>
        <div class="flex flex-col gap-4 w-full">
          <the-wrapper>
            <div class="flex justify-between items-center">
              <h2 class="text-xl font-bold">Bài viết</h2>
              <TheHeaderButton 
              :height = "36"
              :background = "'rgba(255,255,255,0.1)'"
              :borderRadius = "8"
              :checkWidth = "false" 
              :icon = settingSlider
              :title="'Bộ lọc'"
              :paddingLeft="10"
              :paddingRight="10"
              :gap = "10"
            />
            </div>
          </the-wrapper>
          <list-post v-for="post in post" :key="post.id"
          :post="post" />
        </div>

</template>

<script>
import ListPost from '../components/Post/ListPost.vue';
import IntroductionItem from '../components/Side/IntroductionItem.vue';
import TheWrapper from '../components/TheWrapper.vue';
import TheLine from '../components/TheLine.vue';
import TheHeaderButton from '../components/Header/TheHeaderButton.vue';
import TheHeader from '../components/Header/TheHeader.vue';
import AppSide from '../components/Side/AppSide.vue';
import SettingSlider from '../assets/icons/settings-sliders.svg'

export default {
  name: 'main',
	data () {
		return {
      settingSlider: SettingSlider,

		}
	},	
  props: {
    post: Array
  },
	components: {
		ListPost,
    IntroductionItem,
    TheWrapper,
    TheLine,
    TheHeaderButton,
    TheHeader,
    AppSide
	}
}
</script>

<style>

</style>