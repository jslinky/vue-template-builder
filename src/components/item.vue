<template>
  <div :class="itemInfo.classes.applied">
    <itemImage :imgUrl="itemInfo.image.url" :content="itemInfo.content" /> 
  </div>
</template>

<script>

import itemImage from './itemImage.vue'
import itemContent from './itemContent.vue'
import { editBus } from '../main'

export default {
  // Name of this component
  name: 'item',
  props: {
    // title: String
    itemInfo: Object
  },
  components: {
    itemImage,
    itemContent
  },
  created() {
    editBus.$on('editHeaderContent', (i) => {
      if(!this.itemInfo.content.heading[i].edit) {
        this.itemInfo.content.heading[i].edit = true;
      } else {
        this.itemInfo.content.heading[i].edit = false;
      } 
    })
  }  
}
</script>

