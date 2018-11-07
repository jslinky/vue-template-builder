<template>
  <div class="c-itemTemplate-container"> <!-- wrapping div -->
    <div :class="itemInfo.classes.applied">
      <itemImage :imgUrl="itemInfo.image.url" :content="itemInfo.content" /> 
    </div>
    <a @click="editItem(itemIndex)" class="o-link c-btn-itemEdit">Edit</a>     
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
    itemInfo: Object,
    itemIndex: Number
  },
  components: {
    itemImage,
    itemContent
  },
  methods: {
    editItem(index) {
      if(this.itemInfo.edit == true) {
        this.itemInfo.edit = false;
        editBus.$emit('editPanelState', false, index);
      } else {
        this.itemInfo.edit = true;
        editBus.$emit('editPanelState', true, index);
      }
    }
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

<style scoped lang="less">

.o-item {
  transition:all 100ms ease-in;
}

.o-item:hover {
  box-shadow:0 0 0 10px #fff, 0 0 6px 11px rgba(0,0,0,.2);
}

.o-item:hover .o-item__image {
  opacity:.75;
}

.c-itemTemplate-container { 
  position:relative; 
  margin-top:2.5rem;  
}

.c-btn-itemEdit {
  position:absolute;
  left:50%;
  transform:translate(-50%, ~"calc(-100% - 1px)");
  top:0;
  background:#000;
  padding:.25rem 1rem;
  color:#fff;
  font-size:0.75rem;
}

.c-btn-itemEdit:hover:after {
  background:transparent;
}

.c-btn-itemEdit:after {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #000;
  bottom: -6px;
  position: absolute;
  left: 50%;
  background: transparent;
  transform: translate(-50%, 0);
}

.o-butttons .o-btn {
  padding-left:0;
  padding-right:0;
  flex:0;
}

</style>