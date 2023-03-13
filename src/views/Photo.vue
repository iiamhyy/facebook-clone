<template>
  <the-wrapper :width="100" :gap="12">
		<p class="text-xl font-bold">Ảnh</p>
		<div class="flex">
			<a href="#">
				<div class="flex flex-col items-center h-[60px] px-[16px] relative">
					<div class="flex flex-1 items-center justify-center">
						<p class="">Ảnh của QKIT Sofware</p>
					</div>
					<div class="h-[3px] bg-blue-ina bottom-0 absolute w-full"></div>
			</div>
			</a>
			<a href="#">
				<div class="flex flex-col items-center h-[60px] px-[16px] relative">
					<div class="flex flex-1 items-center justify-center">
						<p class="">Album</p>
					</div>
					<div class="h-[3px] bg-transparent bottom-0 absolute w-full"></div>
			</div>
			</a>
		</div>
		<div class="grid gap-2 grid-cols-6">
			<div class="">
        <img src="../assets/images/p-1.jpg" alt="" class=" img-detail object-fill rounded-lg">
      </div>
      <div class="">
        <img src="../assets/images/p-2.jpg" alt="" class=" img-detail object-fill rounded-lg">
      </div>
      <div>
      	<img src="../assets/images/p-3.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-4.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-5.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-6.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-7.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-8.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-9.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
			<div class="">
        <img src="../assets/images/p-1.jpg" alt="" class=" img-detail object-fill rounded-lg">
      </div>
      <div class="">
        <img src="../assets/images/p-2.jpg" alt="" class=" img-detail object-fill rounded-lg">
      </div>
      <div>
      	<img src="../assets/images/p-3.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-4.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-5.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-6.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-7.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-8.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
      <div>
        <img src="../assets/images/p-9.jpg" alt="" class="object-fill img-detail rounded-lg">
      </div>
		</div>
	</the-wrapper>
</template>

<script>
import TheWrapper from '../components/TheWrapper.vue'
export default {
  name: 'photo',
	data () {
		return {
    }
	}  ,
	components: {
    TheWrapper
  } 
}
</script>

<style scoped>
  .img-detail {
    aspect-ratio: 1/1;
  }
</style>