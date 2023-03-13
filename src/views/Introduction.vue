<template>
  <the-wrapper :width = "100" >
		<div class="flex">
			<div class="flex flex-col w-[287px] gap-2">
				<p class="font-bold text-xl">Giới thiệu</p>
				<div class="flex items-center h-[35px] rounded-md hover:bg-hover">
					<p>Thông tin và liên hệ cơ bản</p>
				</div>
				<div class="flex items-center h-[35px] rounded-md hover:bg-hover">
					<p>Tính minh bạch của trang</p>
				</div>
			</div>
			<div class="w-1 h-full border-l border-primary mx-2" ></div>
			<div class="flex flex-col gap-3">
				<p class="text-lg font-semibold">Hạng mục</p>
				<introduction-item
				:icon=folder
				:width="24"
				:height="24"
				>
				<p>Phần mềm</p>
			</introduction-item>
			<p class="text-lg font-semibold">Thông tin liên hệ</p>
			<img class="rounded-lg" src="../assets/images/map.png"/>
			<introduction-item
				:icon=home
				:width="24"
				:height="24"
				>
				<div class="flex flex-col">
					<p>Dĩ An, Vetnam, 75308</p>
					<p class="text-[0.8rem] text-secondary">Địa chỉ</p>
				</div>
			</introduction-item>
			<introduction-item
				:icon=phone
				:width="24"
				:height="24"
				>
				<div class="flex flex-col">
					<p>033 812 7699</p>
					<p class="text-[0.8rem] text-secondary">Di động</p>
				</div>
			</introduction-item>
			<introduction-item
				:icon=mail
				:width="24"
				:height="24"
				>
				<div class="flex flex-col">
					<p>quy.nguyen@qkit.vn</p>
					<p class="text-[0.8rem] text-secondary">Email</p>
				</div>
			</introduction-item>
			<p class="text-lg font-semibold">Các trang web và liên kết xã hội</p>
			<introduction-item
				:icon=internet
				:width="24"
				:height="24"
				>
				<div class="flex flex-col">
					<p>qkit.vn</p>
					<p class="text-[0.8rem] text-secondary">Trang web</p>
				</div>
			</introduction-item>
			<p class="text-lg font-semibold">Thông tin cơ bản</p>
			<introduction-item
				:icon=star
				:width="24"
				:height="24"
				>
				<div class="flex flex-col">
					<p>Chưa xếp hạng (0 lượt đánh giá)</p>
				</div>
			</introduction-item>
			<introduction-item
				:icon=clock
				:width="24"
				:height="24"
				>
				<div class="flex flex-col">
					<p>Đang mở cửa</p>
					<p class="text-[0.8rem] text-secondary">Giờ hoạt động</p>
				</div>
			</introduction-item>
			</div>
		</div>
	</the-wrapper> 
</template>

<script>
import TheWrapper from '../components/TheWrapper.vue';
import IntroductionItem from '../components/Side/IntroductionItem.vue';

import Information from '../assets/icons/information.svg';
import Direction from '../assets/icons/direction.svg';
import Phone from '../assets/icons/phone.svg';
import Mail from '../assets/icons/mail.svg';
import Internet from '../assets/icons/internet.svg';
import Clock from '../assets/icons/clock.svg';
import Messenger from '../assets/icons/messenger.svg';
import Star from '../assets/icons/star.svg';
import Folder from '../assets/icons/folder.svg';
import Home from '../assets/icons/home.svg';

export default {
	name: 'introduction',
	data () {
		return {
			information: Information,
      direction: Direction,
      phone: Phone,
      mail: Mail,
      internet: Internet,
      clock: Clock,
      messenger: Messenger,
      star: Star,
			folder: Folder,
			home: Home
    }
	},
  components: {
    TheWrapper,
		IntroductionItem
  }   
}
</script>

<style>

</style>