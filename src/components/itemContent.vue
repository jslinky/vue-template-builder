<template>
  <div class="o-item__content" :class="content.classes.applied">
    <!-- <img :src="imgUrl" /> -->
    <template v-for="(item, index) in content.heading">        
        <h1 v-if="item.el == 'h1' && !item.artwork.default" @dblclick="editHeaderContent(index)" :class="item.classes.applied">{{item.text}}</h1>
        <h2 v-else-if="item.el == 'h2' && !item.artwork.default" @dblclick="editHeaderContent(index)" :class="item.classes.applied">{{item.text}}</h2>
        <h3 v-else-if="item.el == 'h3' && !item.artwork.default" @dblclick="editHeaderContent(index)" :class="item.classes.applied">{{item.text}}</h3>
        <h4 v-else-if="item.el == 'h4' && !item.artwork.default" @dblclick="editHeaderContent(index)" :class="item.classes.applied">{{item.text}}</h4>
        <h5 v-else-if="item.el == 'h5' && !item.artwork.default" @dblclick="editHeaderContent(index)" :class="item.classes.applied">{{item.text}}</h5>
        <h6 v-else-if="item.el == 'h6' && !item.artwork.default" @dblclick="editHeaderContent(index)" :class="item.classes.applied">{{item.text}}</h6>
        <div v-else-if="item.artwork.default" class="o-item__artwork">
          <object type="image/svg+xml" :data="item.artwork.assetUrl">{{item.text}}</object>
        </div>
        <div v-if="item.edit" style="height:0">
          <input type="text" v-model="item.text" @keyup.enter="editHeaderContent(index)" style="margin-top:0; transform:translateY(-100%)" :class="item.classes.applied">
        </div>
    </template>
    <p v-html="content.subCopy">      
    </p>
    <div :class="content.buttons.classes.applied">
      <a v-for="(button, index) in content.buttons.button" :class="button.classes.applied" :href="button.linkUrl">{{button.text}}</a>
    </div>    
  </div>
</template>

<script>

import itemImage from './itemImage.vue'
import CustomButton from './button.vue'

import { editBus } from '../main'

export default {
  // Name of this component
  name: 'itemContent',
  props: {
    content: Object
  },
  components: {
    itemImage
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

