<template>
  <the-wrapper :width="100" :gap="12">
    <div class="flex justify-between">
      <p class="text-xl font-bold">Người theo dõi</p>
      <input class="w-[210px] h-[36px] bg-button rounded-[50px] px-2 " placeholder="Tìm kiếm"/>
    </div>
		<div class="flex">
			<a href="#">
				<div class="flex flex-col items-center h-[60px] px-[16px] relative">
					<div class="flex flex-1 items-center justify-center">
						<p class="">Người theo dõi</p>
					</div>
					<div class="h-[3px] bg-blue-ina bottom-0 absolute w-full"></div>
			</div>
			</a>
			<a href="#">
				<div class="flex flex-col items-center h-[60px] px-[16px] relative">
					<div class="flex flex-1 items-center justify-center">
						<p class="">Lượt thích</p>
					</div>
					<div class="h-[3px] bg-transparent bottom-0 absolute w-full"></div>
			</div>
			</a>
		</div>
		<div class="flex justify-center py-5">
			<p class="text-xl font-bold">Danh sách người theo dõi của QKIT Software hiện không hiển thị.</p>
		</div>
	</the-wrapper>
</template>

<script>
import TheWrapper from '../components/TheWrapper.vue'
export default {
  name: 'followers',
	data () {
		return {
    }
	}  ,
	components: {
    TheWrapper
  } 
}
</script>
