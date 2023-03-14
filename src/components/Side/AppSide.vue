<template>
          <div class="w-full  max-w-side md:max-w-[685px] md:w-full sm:max-w-full">
          <div class="flex sticky top-[56px] flex-col top- w-full max-w-side gap-4 content md:max-w-[685px] md:w-full sm:max-w-full">
            <div id="introduction" >
              <the-wrapper :gap = "15">
                <h2 class="text-xl font-bold">Giới thiệu</h2>
                <p class="text-center">Trang thông tin chính thức của công ty Công Ty TNHH Quý Khánh IT
                  <br/>
                  <br/>
                  Dịch vụ cung cấp:
                </p>
                <the-line></the-line>
                <div class="flex flex-col gap-[8px]">
                  <introduction-item 
                  :icon = information
                  :width="22"
                  :height="22" >
                  <a href="#"> <b>Trang </b> · Phần mềm</a>
                  </introduction-item>
                  <introduction-item 
                  :icon = direction
                  :width="22"
                  :height="22" >
                  <p >Dĩ An, VietNam</p>
                  </introduction-item>
                  <introduction-item
                  :width="22"
                  :height="22" 
                  :icon = phone >
                  <p>033 812 7699</p>
                  </introduction-item>
                  <introduction-item 
                  :icon = mail
                  :width="22"
                  :height="22" >
                  <p>quy.nguyen@qkit.vn</p>
                  </introduction-item>
                  <introduction-item 
                  :icon = internet
                  :width="22"
                  :height="22" >
                  <a href="#" class="text-blue-1">qkit.vn</a>
                  </introduction-item>
                  <introduction-item 
                  :icon = clock
                  :width="22"
                  :height="22" >
                  <a href="#" class="text-green-1">Đang mở cửa</a>
                  </introduction-item>
                  <introduction-item 
                  :icon = messenger
                  :width="22"
                  :height="22" >
                  <div class="flex flex-col">
                    <p class="text-blue-1">Gửi tin nhắn</p> 
                    <p class="text-sm">Thường phản hồi trong vài giờ</p>
                  </div>`
                  </introduction-item>
                  <introduction-item 
                  :icon = star
                  :width="22"
                  :height="22" >
                  <p>Chưa xếp hạng (0 lượt đánh giá)</p>
                  </introduction-item>
                </div>

                
              </the-wrapper>
            </div>
            <div  >
              <the-wrapper>
                <div class="flex justify-between">
                  <h2 class="text-xl font-bold">Ảnh</h2>
                  <a href="#" class="text-blue-1">Xem tất cả ảnh</a>
                </div>
                <div class="grid grid-cols-3 gap-1 my-3">
                  <div class="grow">
                    <img src="../../assets/images/p-1.jpg" alt="" class=" img-detail object-cover rounded-tl-lg">
                  </div>
                  <div class="grow">
                    <img src="../../assets/images/p-2.jpg" alt="" class=" img-detail object-cover">
                  </div>
                  <div>
                    <img src="../../assets/images/p-3.jpg" alt="" class="object-cover img-detail rounded-tr-lg">
                  </div>
                  <div>
                    <img src="../../assets/images/p-4.jpg" alt="" class="object-cover img-detail">
                  </div>
                  <div>
                    <img src="../../assets/images/p-5.jpg" alt="" class="object-cover img-detail">
                  </div>
                  <div>
                    <img src="../../assets/images/p-6.jpg" alt="" class="object-cover img-detail">
                  </div>
                  <div>
                    <img src="../../assets/images/p-7.jpg" alt="" class="object-cover img-detail rounded-bl-lg">
                  </div>
                  <div>
                    <img src="../../assets/images/p-8.jpg" alt="" class="object-cover img-detail">
                  </div>
                  <div>
                    <img src="../../assets/images/p-9.jpg" alt="" class="object-cover img-detail rounded-br-lg">
                  </div>

                </div>
              </the-wrapper>
            </div>

            <div>
              <a class="text-sm text-secondary mr-2" href="#">Quyền riêng tư</a>
              <a class="text-sm text-secondary mr-2" href="#">Điều khoản</a>
              <a class="text-sm text-secondary mr-2" href="#">Quảng cáo</a>
              <a class="text-sm text-secondary mr-2" href="#">Lựa chọn quảng cáo</a>
            </div>
          </div>
        </div>
</template>

<script>
import TheLine from '../TheLine.vue';
import TheWrapper from '../TheWrapper.vue';
import IntroductionItem from './IntroductionItem.vue';

import Information from '../../assets/icons/information.svg';
import Direction from '../../assets/icons/direction.svg';
import Phone from '../../assets/icons/phone.svg';
import Mail from '../../assets/icons/mail.svg';
import Internet from '../../assets/icons/internet.svg';
import Clock from '../../assets/icons/clock.svg';
import Messenger from '../../assets/icons/messenger.svg';
import Star from '../../assets/icons/star.svg';

export default {
  name: 'app-side',
  data () {
    return {
      information: Information,
      direction: Direction,
      phone: Phone,
      mail: Mail,
      internet: Internet,
      clock: Clock,
      messenger: Messenger,
      star: Star
    }
  },
  components: {
    TheLine,
    TheWrapper,
    IntroductionItem,
  }
}
</script>

<style scoped>
  .content {
    position: -webkit-sticky; 
  }
  .img-detail {
    aspect-ratio: 1/1;
  }
</style>