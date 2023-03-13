<template>
  <the-header/>
  <div class="flex flex-col">
    <div class=" flex justify-center bg-gradient-to-b from-white to-black  max-h-[520px]">
      <div class="max-w-[1250px] w-full rounded-md max-h-[520px] h-full ">
          <img src="./assets/images/cover-image.png" alt="" class="w-full h-full object-contain rounded-xl ">
      </div>
    </div>
    <div class="flex bg-wrapper-color flex-col">
      <div class="flex justify-center mx-16p z-9">
        <div class="w-full flex  max-w-max-content justify-between">
          <div class="flex gap-3">
            <div class="relative w-[168px] h-[168px]">
              <div class="absolute top-[-30px] left-0">
                <img src="./assets/images/qkit.png" alt="" class="w-[168px] h-[168px] rounded-[50%] border-4 border-[#242526]">
              </div>
            </div>
            <div class="flex flex-col mt-[32px] mb-[16px] gap-2 ">
              <h1 class="text-3xl font-bold">QKIT Software</h1>
              <div class="flex gap-2">
                <p>63 lượt thích</p>
                <p> • </p>
                <p>68 người theo dõi</p>
              </div>
              <div class="flex relative">
                <img src="./assets/images/avt-1.jpg" alt="" class="w-[40px] h-[40px] rounded-[50%] z-4  border-2 border-wrapper-color">
                <img src="./assets/images/avt-2.jpg" alt="" class="w-[40px] h-[40px] rounded-[50%] z-2 left-[30px] absolute  border-2 border-wrapper-color">
                <img src="./assets/images/avt-3.jpg" alt="" class="w-[40px] h-[40px] rounded-[50%] z-0 absolute left-[60px]  border-2 border-wrapper-color">
              </div>
            </div>
          </div>
          <div class="flex gap-2 mt-[32px] mb-[16px] items-end">

              <TheHeaderButton 
              :height = "auto"
              :background = "'#1877F2'"
              :borderRadius = "8"
              :checkWidth = "false" 
              :icon = facebookMessenger
              :title="'Nhắn tin'"
              :paddingLeft="12"
              :paddingRight="12"
              :paddingTop="8"
              :paddingBottom="8"
              :gap = "10"
            />
            <TheHeaderButton 
              :height = "auto"
              :background = "'rgba(255,255,255,0.1)'"
              :borderRadius = "8"
              :checkWidth = "false" 
              :icon = like
              :title="'Thích'"
              :paddingLeft="12"
              :paddingRight="12"
              :paddingTop="8"
              :paddingBottom="8"
              :gap = "10"
              
            />
            <TheHeaderButton 
              :height = "auto"
              :background = "'rgba(255,255,255,0.1)'"
              :borderRadius = "8"
              :checkWidth = "false" 
              :icon = search
              :title="'Tìm kiếm'"
              :paddingLeft="12"
              :paddingRight="12"
              :paddingTop="8"
              :paddingBottom="8"
              :gap = "10"
            />
          </div>
        </div>
        
      </div>
      <div class=" flex justify-center pb-1 mx-16p">
        <div class="w-full flex flex-col max-w-max-content justify-between">
          <the-line/>
          <div class="flex justify-between items-center">
            
            <div class="flex cursor-pointer relative">
              <div v-bind:class="
                clicked ? 'blue' : 'transparent'" 
                @click="ItemChecked(0)"

              class="tab-item active rounded p-3 hover:bg-hover">
                <p >Bài viết</p>

              </div>
                <div 
                  @click="ItemChecked(1)"
                  class="tab-item rounded p-3 hover:bg-hover">
                  <p >Giới thiệu</p>
                </div>
                <div 
                @click="ItemChecked(2)"
                class="tab-item rounded p-3 hover:bg-hover">
                  <p>Lượt nhắc</p>
                </div>
              
                <div 
                @click="ItemChecked(3)"
                class="tab-item rounded p-3 hover:bg-hover">
                <p>Đánh giá</p>
                </div>
              
                <div 
                @click="ItemChecked(4)"
                class="tab-item rounded p-3 hover:bg-hover">
                  <p>Người theo dõi</p>
                </div>
              
              <div 
              @click="ItemChecked(5)"
              class="tab-item rounded p-3 hover:bg-hover">
                <p>Ảnh</p>
              </div>
              
              <div 
              @click="ItemChecked(6)"
              class="tab-item rounded p-3 hover:bg-hover">
                <p>Xem thêm </p>
              </div>
              <div class="line-active"></div>
            </div>
            <div class="relative" @click="isOpen = !isOpen">
            <TheHeaderButton 
              :width = "50"
              :height = "36"
              :background = "'rgba(255,255,255,0.1)'"
              :borderRadius = "8"
              :checkWidth = "false" 
              :icon = more
              :position="relative"
            />
            <div v-if="isOpen" class=" dropdown flex flex-col gap-3 p-3 w-[345px] absolute top-[135%] right-0 bg-[#242526] rounded-md shadow-lg">
                <div class="flex gap-2">
                  <img src="./assets/icons/exclamationmark.svg"/>
                  <p class="font-semibold">Tìm hỗ trợ hoặc báo cáo</p>
                </div>
                <div class="flex gap-2">
                  <img src="./assets/icons/person-block.svg"/>
                  <p class="font-semibold">Chặn</p>
                </div>
                <div class="flex gap-2">
                  <img src="./assets/icons/exclamationmark.svg"/>
                  <p class="font-semibold">Mời bạn bè</p>
                </div>
                <div class="flex gap-2">
                  <img src="./assets/icons/exclamationmark.svg"/>
                  <p class="font-semibold">Theo dõi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
    <div class="flex bg-wrapper-color">

    </div>
    <div class="flex  justify-center mt-4">
      <div class="flex max-w-max-content w-full gap-4 justify-center mx-16p">


    <component :is="currentComponent" />
    </div>
    </div>
    <!-- <Evaluate /> -->
  </div>


</template>

<script>
import ListPost from './components/Post/ListPost.vue';
import IntroductionItem from './components/Side/IntroductionItem.vue';
import TheWrapper from './components/TheWrapper.vue';
import TheLine from './components/TheLine.vue';
import TheHeaderButton from './components/Header/TheHeaderButton.vue';
import TheHeader from './components/Header/TheHeader.vue';
import AppSide from './components/Side/AppSide.vue';

import More from './assets/icons/more.svg';
import FacebookMessenger from './assets/icons/facebook-messenger.svg';
import Like from './assets/icons/like.svg';
import Search from './assets/icons/search.svg';

import Main from './views/Main.vue';
import Evaluate from './views/Evaluate.vue';
import Followers from './views/Followers.vue';
import Photo from './views/Photo.vue';
import Reminders from './views/Reminders.vue';
import Introduction from './views/Introduction.vue';
export default {
  name: "app",
  data() {
    return {
      more: More,
      facebookMessenger: FacebookMessenger,
      like: Like,
      search: Search,
      isOpen: false,
      clicked: false,
      currentComponent: Main,
    }
  },
  methods: {
    ItemChecked(index) {
      const tabActive = document.querySelector(".tab-item.active");
      const tabs = document.querySelectorAll(".tab-item");
      const line = document.querySelector(".line-active");
      // remove class active for tab-item in advantage
      tabActive.classList.remove("active");
      line.style.left = tabs[index].offsetLeft + "px";
      line.style.width = tabs[index].offsetWidth + "px";
      tabs[index].classList.add("active");
      switch(index){
        case 0:
          this.currentComponent = Main
          break;
        case 1:
          this.currentComponent = Introduction
          break;
        case 2:
          this.currentComponent = Reminders
          break;
        case 3:
          this.currentComponent = Evaluate
          break;
        case 4:
          this.currentComponent = Followers
          break;
        case 5:
          this.currentComponent = Photo
          break;
        default:
          break;
      }
      // if (index === 0) {h
      //   this.checkDirector = true;
      // }
      // if (index === 1) {
      //   this.checkDirector = false;
      // }
    }
  },
  components: {
    TheHeader,
    ListPost,
    IntroductionItem,
    TheWrapper,
    TheLine,
    AppSide,
    TheHeaderButton,
    Main,
    Evaluate,
    Followers,
    Photo,
    Reminders,
    Introduction
  },
  props: {

  }
}
</script>

<style scoped>
  html, body {
    height: 100%;
  }
  .line-active{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 70px;
    height: 3px;
    border-radius: 15px;
    --tw-bg-opacity: 1 !important;
    background-color: rgb(46,137,255);
    transition: all 0.2s ease;
  }
  .active{
    color: rgb(46,137,255);
  }
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
  .transparent {
    background-color: transparent;
  }

  .blue {
    background-color: blue;
  }
</style>