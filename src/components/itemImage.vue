<template>
  <div class="o-item__image">
    <a>
      <img v-if="!img.responsive.status" :src="img.responsive.sizes.mobile.url" />
      <picture v-else>
        <source 
          media="(min-width: 60em)" 
          :srcset="img.responsive.sizes.computer.url" 
          v-if="img.responsive.sizes.computer.status">
        <source 
          media="(min-width: 48.0625em)" 
          :srcset="img.responsive.sizes.tablet.url" 
          v-if="img.responsive.sizes.tablet.status">
        <source 
          media="(min-width: 30em)" 
          :srcset="img.responsive.sizes.largeMobile.url" 
          v-if="img.responsive.sizes.largeMobile.status">
        <img :src="img.responsive.sizes.mobile.url">          
      </picture>
    </a>
    <itemContent :content="content" />
  </div>
</template>

<script>

import itemContent from './itemContent.vue'

import { editBus } from '../main'

export default {
  // Name of this component
  name: 'itemImage',
  components: {
    itemContent
  },
  props: {
    img: Object,
    content: Object
  }
  // Data within a child component should run a function that returns an object
  // data() {
  //   return {
  //     title: 'This is a item component'
  //   }
  // }
}
</script>

<style scoped lang="less">



</style>

