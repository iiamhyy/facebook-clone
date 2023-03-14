<template>
  <div
    id="header-button"
    class= "flex
    items-center
    justify-center
    hover:bg-button
    cursor-pointer"
    :style="{flex: flex, gap: gap + 'px',width: checkWidth ? width + '%' : width + 'px', height: height + 'px', backgroundColor: background, borderRadius: checkBorderRadius ? borderRadius + 'px' : borderRadius + '%', maxWidth: maxWidth + 'px', paddingRight: paddingRight + 'px', paddingBottom: paddingBottom + 'px', paddingTop: paddingTop + 'px', paddingLeft: paddingLeft + 'px', position: position, backgroundImage: backgroundImage}"
  >
    <img :src="icon" alt="">
    <p>{{ title }}</p>
  </div>
</template>
        
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiHome } from "@mdi/js";
export default {
  name: "header-button",
  data() {
    return {
      path: mdiHome,

    };
  },
  props:{
    width: String, 
    gap: String,
    height: String, 
    borderRadius: String, 
    checkBorderRadius: {
      type: Boolean,
      default: true,
    },
    background: String, 
    checkWidth: String,
    maxWidth: String,
    icon: String,
    title: String,
    flex: Number,
    paddingLeft: Number,
    paddingRight: Number,
    paddingTop: Number,
    paddingBottom: Number,
    position: String,
    backgroundImages: Function
  },
  methods:{

  },
  components: {
    SvgIcon,
    
  },
};
</script>
<style scoped>
</style>
