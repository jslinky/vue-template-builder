<template>
  <div class="o-item__image">
    <a>
      <img :src="imgUrl" />
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
    imgUrl: String,
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

