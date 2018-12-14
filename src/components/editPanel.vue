<template>
  <section class="c-editPanel" v-if="items.length > 0">
    <div>
      <custom-heading sm center :el="'h2'">Edit Panel</custom-heading>
      <!-- Item -->
      <fieldset>
        <h3 
          class="c-editPanel__heading o-hdr o-hdr--t u-mt0" 
          @click="toggleSections('item')" 
          :class="{active: editPanelSections.item}">
          Item
        </h3>             
        <editItem :items="items" :editPanel="editPanel"></editItem>             
      </fieldset>

      <!-- Item Image -->
      <fieldset> 
        <h3 
          class="c-editPanel__heading o-hdr o-hdr--t u-mt0" 
          @click="toggleSections('image')" 
          :class="{active: editPanelSections.image}">
          Item Image
        </h3>       
         <editImg :img="items[editPanel.itemIndex].image"></editImg>
      </fieldset>

      <!-- Item content -->    
      <fieldset> 
        <h3 
          class="c-editPanel__heading o-hdr o-hdr--t u-mt0" 
          @click="toggleSections('content')" 
          :class="{active: editPanelSections.content}">
          Item Content
        </h3>
        <!-- Accordion content -->
        <editItemContent :items="items" :editPanel="editPanel"></editItemContent>    
      </fieldset>   

      <!-- Item Buttons -->         
      <fieldset>        
        <h3 
          class="c-editPanel__heading o-hdr o-hdr--t u-mt0" 
          @click="toggleSections('buttons')" 
          :class="{active: editPanelSections.buttons}">
          Item Buttons
        </h3>
        <editItemButtons :items="items" :editPanel="editPanel"></editItemButtons>    
      </fieldset>        
      </div>
      <!-- save / close footer -->
      <footer class="o-buttons">
        <div @click="closePanel(editPanel.itemIndex)">
          <custom-button button plain small>Close</custom-button>
        </div>
      </footer>      
    </section>

  </template>

<script>

import { editBus } from '../main'

import { itemClass } from './itemClass'
import CustomButton from './button.vue'
import CustomHeading from './heading.vue'
import editItem from './editItem.vue'
import editImg from './editImg.vue'
import editItemContent from './editItemContent.vue'
import editItemButtons from './editItemButtons.vue'

export default {
  // Name of this component
  name: 'editPanel',
  props: {
    items: Array,
    editPanel: Object
  },
  components: {
    CustomButton,
    CustomHeading,
    editImg,
    editItem,
    editItemContent,
    editItemButtons
  },
  methods: {
    closePanel(index) {
      editBus.$emit('editPanelState', false, index);    
    },    
    toggleSections(sectionToOpen) {
      let obj = this.editPanelSections;      
      for(let section in obj) {
        // if sectionToTop (string of key) is equal to key in object & it's value is false, set to true
        if(sectionToOpen == section && obj[section] == false) {
          this.$set(obj, section, true);
        // if sectionToTop (string of key) is equal to key in object & it's value is true, set to false          
        } else if(sectionToOpen == section && obj[section] == true) {
          this.$set(obj, section, false);
        // else set to false
        } else {
          this.$set(obj, section, false);
        }                
      }
    }
  },
  mounted() {
    editBus.$on('editPanelState', (state, itemIndex) => {
      this.editPanel.state = state;
      this.editPanel.itemIndex = itemIndex;      
    })
    editBus.$on('addItemHeading', () => {
      let clone = JSON.parse(JSON.stringify(itemClass.content.heading.headings[0]));      
      this.items[this.editPanel.itemIndex].content.heading.headings.push(clone);
    })  

  },   
  data() {
    return {
      // Panel Sections
      editPanelSections: {
        item: true,
        content: false,
        image: false,
        buttons: false  
      },
      responsiveImage: false,
      headingType: 'Please select a type'
    }
  }
}  

</script>

<style lang="less" scoped>

.c-btn-tag {
  border-radius: 4px;
  background: lightgray;
  margin-top:6px;
}

.c-btn-tag.active {
  background: darkseagreen;
}

.c-btn-tag:empty {
  display: none;
}

footer {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  padding:1rem 1rem 0;
  background:#ccc;
}

</style>
