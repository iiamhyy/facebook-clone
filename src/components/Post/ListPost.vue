<template>
		<the-wrapper>
				<div class="flex gap-2 mb-2 ">
					<img src="../../assets/images/qkit.png" alt="" class="w-[40px] h-[40px] rounded-[50%]">
					<div class="flex flex-1 items-center justify-between">
						<div class="flex flex-col">
						<p class="text-[15px] font-bold">QKIT Software</p>
						<div class="flex gap-1">
							<p class="text-[13px]">24 Tháng 1, 2022 </p>
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
				<p>𝗠𝗛𝟳𝗔-𝗥𝗘𝗣𝗢𝗥𝗧 𝗠𝗔𝗡𝗔𝗚𝗘𝗠𝗘𝗡𝗧 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 <br/>
Project Management of reports, medical documents, and medical records. As one of the important applications of the medical application ecosystem under Military Hospital 7A. Contributing to the digitization of processes in the hospital, the application provides an intuitive and convenient solution for doctors and medical staff in managing, creating, and editing reports, documents, or patients. With convenience and high security, the application will reduce the user's time and effort, contributing to increasing work efficiency in a pressurized environment such as a hospital.
Technologies: Angular, NestJS, Adobe XD
Platform: Website
See more projects at: https://qkit.vn/en/portfolio
DỰ ÁN QUẢN LÝ BÁO CÁO BỆNH VIỆN QUÂN Y 7A
Dự án Quản lý báo cáo, tài liệu y khoa và bệnh án. Là một trong những ứng dụng quan trọng của hệ sinh thái ứng dụng y tế trực thuộc Bệnh viện Quân Y 7A. Đóng góp vào việc số hóa quy trình trong bệnh viện, ứng dụng mang lại một giải pháp trực quan, tiện lợi cho các y bác sĩ, nhân viên y tế trong việc quản lý, tạo, chỉnh sửa các báo cáo, tài liệu hay bệnh án. Với sự tiện dụng và độ bảo mật cao, ứng dụng sẽ giảm thiểu thời gian và công sức của người sử dụng, góp phần tăng hiệu quả công việc trong môi trường đầy áp lực như bệnh viện.
Công nghệ sử dụng: Angular, NestJS, Adobe XD
Nền tảng: Website 
Xem thêm một số dự án khác tại: https://qkit.vn/vi/portfolio 
#showcase #project #development #management
	</p>
	  <img src="../../assets/images/p-1.jpg" alt="">
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

export default {
	name: 'list-post',
	data() {
		return {
			isOpen: false
		}
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