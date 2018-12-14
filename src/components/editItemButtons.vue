<template>             
  <div>

    <a 
      class="c-btn-tag o-btn o-btn--plain o-btn--sm active" 
      v-for="(CssClass, index) in items[editPanel.itemIndex].content.buttons.classes.applied"             
      @click="applyClass(index, items[editPanel.itemIndex].content.buttons.classes, 'remove')">
      {{ CssClass }}
    </a>      
    
    <hr>

    <a class="c-btn-tag o-btn o-btn--plain o-btn--sm" 
      v-for="(item, index) in items[editPanel.itemIndex].content.buttons.classes.available"
      v-if="item.class[2] == true && !item.class[0].includes('wide') && !item.class[0].includes('column')"   
      @click="applyClass(index, items[editPanel.itemIndex].content.buttons.classes, 'apply')">
      {{ item.class | abbrClass }}
    </a> 

    <label>Width (optional)</label>
    <select v-model="buttonsWidthSelected">
      <option selected>{{ buttonsWidthSelected }}</option>
      <option 
        v-for="(item, index) in items[editPanel.itemIndex].content.buttons.classes.available" 
        v-if="item.class[2] == true && item.class[0].includes('wide')">
        {{ item.class[0] }}
      </option>
    </select>   

    <label>Columns (optional)</label>
    <select v-model="buttonsColumnsSelected">
      <option selected>{{ buttonsColumnsSelected }}</option>
      <option 
        v-for="(item, index) in items[editPanel.itemIndex].content.buttons.classes.available" 
        v-if="item.class[2] == true && item.class[0].includes('column')">
        {{ item.class[0] }}
      </option>
    </select>                      

    <div v-for="(button, index) in items[editPanel.itemIndex].content.buttons.button">
      <h3 class="o-hdr o-hdr--t u-mt-t">Button {{index + 1}}</h3>                     
      <select v-model="buttonEdit" class="minimal">
        <option selected>Select property to edit</option>
        <option 
          v-for="(value, key, index) in items[editPanel.itemIndex].content.buttons.button[editPanel.itemIndex]" 
          :key="index">
          {{ key }}
        </option>
      </select>  
      <div v-if="buttonEdit == 'text'">             
        <input 
          type="text" 
          v-model="items[editPanel.itemIndex].content.buttons.button[index].text" 
          placeholder="Binded value goes here" />            
      </div>
      <div v-if="buttonEdit == 'linkUrl'">             
        <input 
          type="text" 
          v-model="items[editPanel.itemIndex].content.buttons.button[index].url" 
          placeholder="Binded value goes here" />                        
      </div>
    </div>
  </div>
</template>

<script>

import { editPanelMixins } from '../mixins/editPanel-applyClass'

export default {
  // Name of this component
  name: 'editItemButtons',
  props: {
    items: Array,
    editPanel: Object
  },  
  data() {
    return {
      buttonsWidthSelected: 'Select a width',
      buttonsColumnsSelected: 'Select no of columns',
      buttonEdit:'Select property to edit'      
    }
  },
  mixins: [editPanelMixins],    
  watch: { 
    buttonsWidthSelected: function(newVal, oldVal) { // watch it
      this.applyWidth(this.items[this.editPanel.itemIndex].content.buttons.classes.applied, newVal)
    },    
    buttonsColumnsSelected: function(newVal, oldVal) { // watch it
      this.applyWidth(this.items[this.editPanel.itemIndex].content.buttons.classes.applied, newVal)
    }    
  },  
  methods: {
    addContent(type) {
      if(type == 'heading') {        
        editBus.$emit('addItemHeading');
      }
    }    
  }
}
</script>



