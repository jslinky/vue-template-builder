<template>
  <transition>
  <div class="c-itemTemplate-container" :style="spanAcross" :class="{ toEdit: itemInfo.edit }"> <!-- wrapping div -->
    <div class="o-item" :class="classesApplied" :id="itemInfo.id">
      <itemImage :img="itemInfo.image" :content="itemInfo.content" /> 
    </div>
    <a @click="editItem(itemIndex)" class="o-link c-btn-itemEdit">Edit</a>     
    <!-- Finish this -->
    <a @click="changeItemOrder(itemIndex, decreaseOrder)" class="c-btn-order left"></a>
    <a @click="changeItemOrder(itemIndex, increaseOrder)" class="c-btn-order right"></a>
    </div> 
  </transition>
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
  computed: {
    increaseOrder() {
      return this.itemIndex + 1
    },
    decreaseOrder() {
      return this.itemIndex - 1
    },    
    classesApplied() {
      this.itemInfo.classes.applied.forEach(element => {
        if(element.includes('o-item--100vw')) {
          this.itemInfo.spanAcross = 12;          
        }
      });
      return this.itemInfo.classes.applied;      
    },
    spanAcross() {
      return {
        '--itemSpanAcross': this.itemInfo.spanAcross,
        '--itemOrder': this.itemIndex
      }   
    }
  },
  methods: {    
    changeItemOrder(from, to) {
      editBus.$emit('changeItemOrder', from, to);
    },
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

.c-itemTemplate-container { 
  position:relative; 
  padding:1.5rem;
  background:#fff; 
  grid-column-end: span var(--itemSpanAcross);
  order: var(--itemOrder);
}

.c-btn-itemEdit {
  position:absolute;
  left:50%;
  transform:translate(-50%, 0);
  top:0;
  background:chocolate;
  padding:.25rem 1rem;
  color:#fff;
  font-size:0.75rem;
  border-radius: 3px;
  display:none;
}

#app.edit .c-itemTemplate-container:not(.toEdit) {
  pointer-events: none;
}

#app.edit .c-itemTemplate-container .c-btn-itemEdit {
  display: none;
}

.c-btn-order {
  background: chocolate;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: block;
  text-align: center;
  color: #fff;
  position: absolute;
  top: calc(33% - 12.5px);  
  display: none;
}

#app.edit .c-btn-order {
  display: none;
}

#app:not(.edit) .c-itemTemplate-container:hover .c-btn-order {
  display: block;
}

.c-itemTemplate-container > .c-btn-order.left {
  left: 12.5px;  
}

.c-itemTemplate-container > .c-btn-order.right {
  right: 12.5px;  
}

.c-itemTemplate-container:hover .c-btn-itemEdit {
  display: block;
}

.c-itemTemplate-container:first-child .c-btn-order.left,
.c-itemTemplate-container:last-child .c-btn-order.right {
  display: none;
}

.c-btn-itemEdit:hover:after {
  background:transparent;
}

.c-btn-itemEdit:after {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid chocolate;
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

.v-enter-active {
  animation: bounceIn 500ms;
}

.v-leave-active {
  animation: bounceIn 500ms reverse;
}

@keyframes bounceIn {
  0% {
    transform:scale(0.6);
    opacity: 0;
  }
  60% {
    transform:scale(1.1);
    opacity: 9;
  }
  65% {
    transform:scale(0.97);
    opacity: 1;
  }
  68% {
    transform:scale(1.02);
  }
  71% {
    transform:scale(1);
  }
}

</style>