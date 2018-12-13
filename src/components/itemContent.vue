<template>
  <div class="o-item__content" :class="content.classes.applied">
    <!-- <img :src="imgUrl" /> -->
    <template v-for="(item, index, key) in content.heading.headings">        
        <custom-heading item :classArray="content.heading.types[item.type]" :el="item.el" v-if="!item.artwork.default" @dblclick="editHeaderContent(index)">{{item.text}}</custom-heading>
        <!-- <h6 v-else-if="item.el == 'h6' && !item.artwork.default" @dblclick="editHeaderContent(index)" :class="item.classes.applied">{{item.text}}</h6> -->
        <div v-else-if="item.artwork.default" class="o-item__artwork">
          <object type="image/svg+xml" :data="item.artwork.assetUrl">{{item.text}}</object>
        </div>
        <div v-if="item.edit" style="height:0">
          <input type="text" v-model="item.text" @keyup.enter="editHeaderContent(index)" style="margin-top:0; transform:translateY(-100%)" :class="item.classes.applied">
        </div>
    </template>
    <p v-html="content.subCopy">      
    </p>
    <div class="o-buttons" :class="content.buttons.classes.applied">
      <custom-button v-for="(button, index) in content.buttons.button" :class="button.classes.applied" :href="button.linkUrl">{{button.text}}</custom-button>
      <!-- <a v-for="(button, index) in content.buttons.button" :class="button.classes.applied" :href="button.linkUrl">{{button.text}}</a> -->
    </div>    
  </div>
</template>

<script>

import itemImage from './itemImage.vue'
import CustomButton from './button.vue'
import CustomHeading from './heading.vue'

import { editBus } from '../main'

export default {
  // Name of this component
  name: 'itemContent',
  props: {
    content: Object
  },
  components: {
    itemImage,
    CustomButton,
    CustomHeading
  },
  methods: {
    // http://andreybleme.com/2018-01-07/sharing-data-across-vuejs-components/
    editHeaderContent(i) {
      editBus.$emit('editHeaderContent', i);
    }
  }
  // Data within a child component should run a function that returns an object
  // data() {
  //   return {
  //     edit: ''
  //   }
  // }
}
</script>

