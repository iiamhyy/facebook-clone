<template>
		<the-wrapper >
				<div class="flex gap-2 mb-2 ">
					<img src="../../assets/images/qkit.png" alt="" class="w-[40px] h-[40px] rounded-[50%]">
					<div class="flex flex-1 items-center justify-between">
						<div class="flex flex-col">
						<p class="text-[15px] font-bold">QKIT Software</p>
						<div class="flex gap-1">
							<p class="text-[13px]">{{post.time}} </p>
							<img src="../../assets/icons/earth.svg"/>
						</div>
						</div>
						<div class="relative" @click="isOpen = !isOpen">
							<div class="cursor-pointer rounded-[50%] w-[36px] h-[36px]  hover:bg-hover flex justify-center items-center">
								<img src="../../assets/icons/more.svg" class="" alt="">
							</div>
							<div v-if="isOpen" class=" dropdown flex flex-col gap-3 p-3 w-[345px] absolute top-[135%] right-0 bg-[#242526] rounded-md shadow-lg">
                <div class="flex gap-2 cursor-pointer">
                  <img src="../../assets/icons/save.svg"/>
									<div class="flex flex-col">
										<p class="font-semibold">Lưu liên kết</p>
										<p class="font-thin text-[0.75rem] text-secondary">Thêm vào danh sách mục đã lưu</p>
									</div>
                </div>
								<the-line/>
                <div class="flex gap-2">
                  <img src="../../assets/icons/bell-outline.svg"/>
                  <p class="font-semibold">Bật thông báo về bài viết này</p>
                </div>
                <div class="flex gap-2">
                  <img src="../../assets/icons/code.svg"/>
                  <p class="font-semibold">Nhúng</p>
                </div>
								<the-line/>
                <div class="flex gap-2">
                  <img src="../../assets/icons/speech-balloon-exclamation.svg"/>
                  <div class="flex flex-col">
										<p class="font-semibold">Báo cáo bài viết</p>
										<p class="font-thin text-[0.75rem] text-secondary">Tôi lo ngại về bài viết này</p>
									</div>
                </div>
              </div>
            </div>
					</div>
				</div>
				<p>{{post.description}}
		</p>
	  <img v-bind:src="post.image" alt="" class="">
		<the-line/>
		<div class="flex  h-[32px] ">
			<div class="flex rounded-md flex-1 gap-3 items-center justify-center hover:bg-hover">
				<img src="../../assets/icons/like-outline.svg" alt="">
				<p>Thích</p>
			</div>
			<div class="flex flex-1 gap-3 items-center justify-center rounded-md hover:bg-hover">
				<img src="../../assets/icons/comment.svg" alt="">
				<p>Bình luận</p>
			</div>
			<div class="flex flex-1 gap-3 items-center justify-center rounded-md hover:bg-hover">
				<img src="../../assets/icons/share.svg" alt="">
				<p>Chia sẻ</p>
			</div>
		</div>
		<the-line/>
		<div class="flex gap-3 items-center pt-1">
			<div class="h-[32px] w-[32px]">
				<img src="../../assets/images/avt-1.jpg" class="rounded-[50%]"/>
			</div>
			<div class="flex flex-1 h-[36px] bg-[#3A3B3C] rounded-[60px] items-center px-2">
				<div class=" select-text flex-1">
					<p class="text-secondary text-sm">Viết bình luận...</p>
				</div>
				<div class="flex gap-[-5px]">
					<div class="flex justify-center items-center rounded-[50%]  hover:bg-hover">
						<img src="../../assets/icons/smile.svg" alt="" class="p-[6px]">
					</div>
					<div class="flex justify-center items-center rounded-[50%]  hover:bg-hover">
						<img src="../../assets/icons/smile.svg" alt="" class="p-[6px]">
					</div>
					<div class="flex justify-center items-center rounded-[50%]  hover:bg-hover">
						<img src="../../assets/icons/camera.svg" alt="" class="p-[6px]">
					</div>
					<div class="flex justify-center items-center rounded-[50%]  hover:bg-hover">
						<img src="../../assets/icons/gif.svg" alt="" class="p-[6px]">
					</div>
					<div class="flex justify-center items-center rounded-[50%]  hover:bg-hover">
						<img src="../../assets/icons/sticker.svg" alt="" class="p-[6px]">
					</div>
				</div>
			</div>
		</div>
	</the-wrapper>
</template>

<script>
import TheWrapper from '../TheWrapper.vue';
import TheLine from '../TheLine.vue';
import PostData from '../../post.json';

export default {
	name: 'list-post',
	data() {
		return {
			isOpen: false,
		}
	},
	props: {
		post: Object,
	},
	components: {
    TheWrapper,
		TheLine
  }
}
</script>

<style scoped>
	.dropdown {
		animation: growth ease-in 0.1s;

	}

	.dropdown::before {
		content: "";
		border: 20px solid;
		position: absolute;
		border-color: transparent transparent #242526 transparent;
		right: 12px;
		top: -28px;
	}

	@keyframes growth {
		from {
			opacity: 0;
			transform: scale(0);
		}
		to {
			opacity: 1;
      transform: scale(1);
    }
	}
</style>