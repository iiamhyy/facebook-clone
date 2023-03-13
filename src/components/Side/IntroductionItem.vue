<template>
	<div class="flex gap-2 mb-3 items-center">
		<img :src="icon" :style="{width: width + 'px', height: height + 'px'}"/>
		<slot/>
	</div>
</template>

<script>
import TheWrapper from "..//TheWrapper.vue";
import Information from "vue-material-design-icons/Information.vue" 


export default {
	name: "introduction-item",
	data () {
		return {
    }
	},
	components: {
    TheWrapper,
		Information
  },
  props: {
	icon: String,
	fill: String,
	width: Number,
  height: Number
  }
}
</script>

<style>

</style>