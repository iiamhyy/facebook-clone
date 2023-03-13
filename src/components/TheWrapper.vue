<template>
  <div id="the-wrapper" class="flex flex-col px-18p py-2 rounded-lg bg-wrapper-color"
  :style="{gap: gap + 'px',maxWidth: maxWidth + 'px', width: width + '%', marginTop: marginTop + 'px', marginRight: marginRight , marginLeft: marginLeft, marginBottom: marginBottom + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "the-wrapper",
  data() {
    return {
      
    }
  },
  props: {
    gap: String,
    maxWidth: String,
    width: String,
    marginTop: String,
    marginRight: String,
    marginLeft: String,
    marginBottom: String
  }

}
</script>

<style>

</style>