<template>
  <header id="the-header" class="fixed z-10 top-0 px-16p flex gap-10 justify-between h-[56px] w-full bg-wrapper-color border-solid border border-b-primary border-t-transparent border-x-transparent">
    <div class="flex justify-start items-center gap-2">
      <img src="../../assets/icons/facebook.svg" alt="" class="h-[40px]">
      <div class="relative flex justify-center items-center">
        <img src="../../assets/icons/search.svg" class="absolute left-1 w-[20px] h-[20px]"/>
        <input type="text" placeholder="Tìm kiếm trên Facebook" class="search-input w-[280px] h-[40px]  border-transparent rounded-[20px] bg-[#3A3B3C] pl-[30px]" >
      </div>
      
    </div>
    <div class="flex justify-center flex-1 py-[3px]">
      <TheHeaderButton 
        :width = "100"
        :background = "transparent"
        :borderRadius = "8"
        :checkWidth = "true"
        :maxWidth="116"
        :icon=homeOutline
        :flex = 1
      />
      <TheHeaderButton 
        :width = "100"
        :background = "transparent"
        :borderRadius = "8"
        :checkWidth = "true"
        :maxWidth="116"
        :icon= watch
        :flex = 1
      />
      <TheHeaderButton 
        :width = "100"
        :background = "transparent"
        :borderRadius = "8"
        :checkWidth = "true"
        :maxWidth="116"
        :icon = store
        :flex = 1
      />
      <TheHeaderButton 
        :width = "100"
        :background = "transparent"
        :borderRadius = "8"
        :checkWidth = "true"
        :maxWidth="116"
        :icon = group
        :flex = 1
      />
      <TheHeaderButton 
        :width = "100"
        :background = "transparent"
        :borderRadius = "8"
        :checkWidth = "true"
        :maxWidth="116"
        :icon = game
        :flex = 1
      />
      
    </div>
    <div class="flex justify- items-center gap-2">
      <TheHeaderButton 
        :width = "40"
        :height = "40"
        :background = "'rgba(255,255,255,0.1)'"
        :borderRadius = "50"
        :checkBorderRadius="false"
        :checkWidth = "false" 
        :icon = menu
        :flex = 1
      />
      <TheHeaderButton 
        :width = "40"
        :height = "40"
        :background = "'rgba(255,255,255,0.1)'"
        :borderRadius = "50"
        :checkWidth = "false"
        :checkBorderRadius="false"
        :icon = facebookMessage
        :flex = 1
      />
      <TheHeaderButton 
        :width = "40"
        :height = "40"
        :background = "'rgba(255,255,255,0.1)'"
        :borderRadius = "50"
        :checkWidth = "false"
        :checkBorderRadius="false"
        :icon = notification
        :flex = 1
      />
        <div class="h-[40px]">
          <img src="../../assets/images/avt-1.jpg" alt="" class="w-[40px] h-[40px] rounded-[50%]">
        </div>

    </div>
  </header>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFacebook } from '@mdi/js';
import TheHeaderButton from './TheHeaderButton.vue';
import HomeOutline from '../../assets/icons/home-outline.svg';
import Watch from '../../assets/icons/watch.svg';
import Store from '../../assets/icons/store.svg';
import Group from '../../assets/icons/group.svg';
import Game from '../../assets/icons/game.svg';
import Notification from '../../assets/icons/notification.svg';
import FacebookMessage from '../../assets/icons/facebook-messenger.svg';
import Menu from '../../assets/icons/menu.svg';


export default {
  name: "the-header",
  data() {
    return {
	    path: mdiFacebook,
      homeOutline: HomeOutline,
      watch: Watch,
      store: Store,
      group: Group,
      game: Game,
      notification: Notification,
      facebookMessage: FacebookMessage,
      menu: Menu
    }
  },
  components: {
    SvgIcon,
    TheHeaderButton
}
}
</script>

<style scoped>

</style>