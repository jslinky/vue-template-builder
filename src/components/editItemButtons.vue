<template>             
  <div>

    <a 
      class="c-btn-tag o-btn o-btn--plain o-btn--sm active" 
      v-for="(CssClass, index) in buttonsClassesApplied"             
      @click="applyClass(index, buttonsClasses, 'remove')">
      {{ CssClass }}
    </a>      
    
    <hr>

    <a class="c-btn-tag o-btn o-btn--plain o-btn--sm" 
      v-for="(item, index) in cssClassLinksToApply"    
      @click="applyClass(item.index, buttonsClasses, 'apply')">
      {{ item.class | abbrClass }}
    </a>     

    <!-- <custom-button button plain small 
      class="c-btn-tag"
      v-for="(item, index) in cssClassLinksToApply"  
      @click="applyClass(item.index, buttonsClasses, 'apply')"  
      >
      {{ item.class | abbrClass }}
    </custom-button> -->


    <label>Width (optional)</label>
    <select v-model="buttonsWidthSelected">
      <option selected>{{ buttonsWidthSelected }}</option>
      <option v-for="(item, index) in buttonWidthClasses">{{ item.class[0] }}</option>
    </select>       


    <label>Columns (optional)</label>
    <select v-model="buttonsColumnsSelected">
      <option selected>{{ buttonsColumnsSelected }}</option>
      <option v-for="(item, index) in buttonColumnClasses">{{ item.class[0] }}</option>
    </select>                      

    <div v-for="(button, index) in buttonsButton">
      <h3 class="o-hdr o-hdr--t u-mt-t">Button {{index + 1}}</h3>                     
      <select v-model="buttonEdit" class="minimal">
        <option selected>Select property to edit</option>
        <option 
          v-for="(value, key, index) in buttonsButton[editPanel.itemIndex]" 
          :key="index">
          {{ key }}          
        </option>
      </select>  
      <div v-if="buttonEdit == 'text'">             
        <input 
          type="text" 
          v-model="buttonsButton[index].text" 
          placeholder="Binded value goes here" />            
      </div>
      <div v-if="buttonEdit == 'linkUrl'">             
        <input 
          type="text" 
          v-model="buttonsButton[index].url" 
          placeholder="Binded value goes here" />                        
      </div>
    </div>
  </div>
</template>

<script>

import { editPanelMixins } from '../mixins/editPanel-applyClass'
import CustomButton from './button.vue'

export default {
  // Name of this component
  name: 'editItemButtons',
  components: {
    CustomButton
  },
  props: {
    items: Array,
    editPanel: Object
  },  
  data() {
    return {
      buttonsWidthSelected: 'Select a width',
      buttonsColumnsSelected: 'Select no of columns',
      buttonEdit:'Select property to edit',
      buttonsClasses: this.items[this.editPanel.itemIndex].content.buttons.classes,
      buttonsClassesAvailable: this.items[this.editPanel.itemIndex].content.buttons.classes.available,
      buttonsClassesApplied: this.items[this.editPanel.itemIndex].content.buttons.classes.applied,
      buttonsButton: this.items[this.editPanel.itemIndex].content.buttons.button,
      classLinksToApply: []     
    }
  },
  computed: {
    cssClassLinksToApply() {
      this.buttonsClassesAvailable.map((className, index) => {
        if((className => className.class[2] == true) && (!className.class[0].includes('wide')) && (!className.class[0].includes('column'))) {
          className.index = index
          this.classLinksToApply.push(className)
        }
      })      
      return this.classLinksToApply
    },
    buttonWidthClasses() {
      return this.buttonsClassesAvailable.filter(className => className.class[2] == true && className.class[0].includes('wide'))
    },
    buttonColumnClasses() {
      return this.buttonsClassesAvailable.filter(className => className.class[2] == true && className.class[0].includes('column'))
    }    
  },
  mixins: [editPanelMixins],    
  watch: { 
    buttonsWidthSelected: function(newVal, oldVal) { // watch it
      this.applyWidth(this.items[this.editPanel.itemIndex].content.buttons.classes.applied, newVal)
    },    
    buttonsColumnsSelected: function(newVal, oldVal) { // watch it
      this.applyWidth(this.items[this.editPanel.itemIndex].content.buttons.classes.applied, newVal)
      // Add buttons if explicit column type selected
      const buttonArr = this.items[this.editPanel.itemIndex].content.buttons.button,
            buttonRef = JSON.parse(JSON.stringify(buttonArr[0]))
      if(newVal.includes('three') && buttonArr.length < 3) {
        buttonArr.push(buttonRef)
      }
      if(newVal.includes('four') && buttonArr.length < 4) {
        while(buttonArr.length < 4) {
          buttonArr.push(buttonRef)
        }
      }       
      
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



