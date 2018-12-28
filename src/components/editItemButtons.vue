<template>             
  <div>

    <custom-button button plain small
    class="c-btn-tag"
    v-for="(CssClass, index) in buttonsClassesApplied"             
    @click.native="applyClass(index, buttonsClasses, 'remove')">
    {{ CssClass }}    
    </custom-button>
    
    <hr>

    <custom-button button plain small 
      class="c-btn-tag"
      v-for="(item, index) in cssClassLinksToApply"  
      @click.native="applyClass(item.index, buttonsClasses, 'apply')"  
      >
      {{ item.class | abbrClass }}
    </custom-button>

    <hr>

    <custom-button button basic small @click.native="addButton()">Add a button</custom-button>    


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
      <custom-button button plain small @click.native="removeButton(index)">remove</custom-button>       
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

import { editBus } from '../main'
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
      buttonRef: '',
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
      if(newVal.includes('three') && this.buttonsButton.length < 3) { this.addButton(); }
      if(newVal.includes('four') && this.buttonsButton.length < 4) {
        while(this.buttonsButton.length < 4) { this.addButton(); }
      }             
    }    
  },  
  methods: {
    addButton() {
      editBus.$emit('addButton', this.buttonRef);
    },
    removeButton(i) {
      // emit this
      editBus.$emit('removeButton', i);
      // this.buttonsButton.splice('', i)
      // alert(i)      
    }
  },
  created() {
    this.buttonRef = JSON.parse(JSON.stringify(this.buttonsButton[0]))
  }
}
</script>



