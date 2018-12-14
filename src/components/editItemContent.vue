<template>             
  <div>
    <a 
      class="c-btn-tag o-btn o-btn--plain o-btn--sm active" 
      v-for="(CssClass, index) in items[editPanel.itemIndex].content.classes.applied"             
      @click="applyClass(index, items[editPanel.itemIndex].content.classes, 'remove')">
      {{ CssClass }}
    </a>      
    
    <hr>

    <a class="c-btn-tag o-btn o-btn--plain o-btn--sm" 
      v-for="(item, index) in items[editPanel.itemIndex].content.classes.available"
      v-if="item.class[2] == true && !item.class[0].includes('wide')"   
      @click="applyClass(index, items[editPanel.itemIndex].content.classes, 'apply')">
      {{ item.class | abbrClass }}
    </a>           
    <!-- try using computed property for this v-for -->
    <div 
      class="c-editPanel__contentHeadings" 
      v-for="(heading, index) in items[editPanel.itemIndex].content.heading.headings" 
      v-if="!heading.text == ''">       
      <label>Heading {{index + 1}}</label>
      <input 
        type="checkbox"  
        :id="index"               
        :value="true"
        @click="items[editPanel.itemIndex].content.heading.headings[index].artwork.default = !items[editPanel.itemIndex].content.heading.headings[index].artwork.default"
        >
      <label :for="index">Make artwork</label>    

      <select v-model="heading.type">
        <option selected>Please select a type</option>
        <option 
          v-for="(item, key, index) in items[editPanel.itemIndex].content.heading.types"  
          :key="key">
          {{ key }}
        </option>
      </select>              

      <input 
        type="text" 
        v-if="items[editPanel.itemIndex].content.heading.headings[index].artwork.default"
        v-model="items[editPanel.itemIndex].content.heading.headings[index].artwork.assetUrl" 
        placeholder="Binded value goes here" />               
      <button 
        class="c-btn-remove o-btn" 
        @click="removeContent(heading, 'text', items[editPanel.itemIndex].content.heading.headings)">
        Remove
      </button>            
      <input 
        type="text" 
        v-model="items[editPanel.itemIndex].content.heading.headings[index].text" 
        placeholder="Binded value goes here" />            

    </div>
    
    <button 
      v-if="items[editPanel.itemIndex].content.heading.headings.length <= 3" 
      @click="addContent('heading')" 
      class="o-btn o-btn--basic o-btn--sm">
      Add heading
    </button>
    <p v-else>{{items[editPanel.itemIndex].content.heading.headings.length}}</p>
    
    <label>Copy</label>
    <input 
      type="textarea" 
      v-model="items[editPanel.itemIndex].content.subCopy" 
      class="o-form__inputText" 
      placeholder="Binded value goes here" />                  
  </div>
</template>

<script>

import { editBus } from '../main'
import { editPanelMixins } from '../mixins/editPanel-applyClass'

export default {
  // Name of this component
  name: 'editItemContent',
  methods: {
    addContent(type) {
      if(type == 'heading') {        
        editBus.$emit('addItemHeading');
      }
    }    
  },
  props: {
    items: Array,
    editPanel: Object
  },  
  mixins: [editPanelMixins]  
}
</script>



