<template>

    <section class="c-editPanel" v-if="items.length > 0">
      <h2 class="o-hdr o-hdr--sm center aligned">Edit Panel</h2>
      <fieldset>
        <label>Item preset types</label>
        <select>
          <option>Select a type</option>
        </select>
      </fieldset>
      <fieldset> 
        <h3 class="c-editPanel__heading o-hdr o-hdr--t u-mt0" @click="toggle('editPanelItemImage')" :class="{active: editPanelItemImage}">Item Image</h3>
        <div>       
          <label>Image path</label>
            <input type="text" :value="items[editPanel.itemIndex].image.url" @input="items[editPanel.itemIndex].image.url = $event.target.value" placeholder="Binded value goes here" />
          <label>Link path</label>
          <input type="text" placeholder="Binded value goes here" />        
        </div>
      </fieldset>    
      <fieldset> 
        <h3 class="c-editPanel__heading o-hdr o-hdr--t u-mt0" @click="toggle('editPanelItemContent')" :class="{active: editPanelItemContent}">Item Content</h3>
        <div>
          <!-- try using computed property for this v-for -->
          <div class="c-editPanel__contentHeadings" v-for="(heading, index) in items[editPanel.itemIndex].content.heading" v-if="!heading.text == ''">       
            <label>Heading {{index + 1}}</label>
            <button class="c-btn-remove o-btn" @click="removeContent(heading, 'text', items[editPanel.itemIndex].content.heading)">Remove</button>            
            <input type="text" v-model="items[editPanel.itemIndex].content.heading[index].text" placeholder="Binded value goes here" />            
          </div>
          
          <button v-if="items[editPanel.itemIndex].content.heading.length <= 3" @click="addContent('heading')" class="o-btn o-btn--basic o-btn--sm">Add heading</button>
          <p v-else>{{items[editPanel.itemIndex].content.heading.length}}</p>
          
          <label>Copy</label>
          <input type="textarea" v-model="items[editPanel.itemIndex].content.subCopy" class="o-form__inputText" placeholder="Binded value goes here" />                  
        </div>
      </fieldset>        
    </section>

  </template>

<script>

import { editBus } from '../main'

export default {
  // Name of this component
  name: 'editPanel',
  props: {
    items: Array,
    editPanel: Object
  },
  methods: {
    // Pass through string of data key to toggle
    toggle(dataRef) {      
      if(this[dataRef] == false) {
        this[dataRef] = true;
      } else if(this[dataRef] == true) {
        this[dataRef] = false;
      }      
    },
    // obj = object to set new key value, key = string of key to modify it's value, arr = array in which obj is held
    removeContent(obj, key, arr) {      
      let arrLength = arr.length - 1;
      this.$set(obj, key, '');
      arr.splice(arrLength);      
    },
    // pass through 'string' type to clone itemClass and push to relevent place in items array
    addContent(type) {
      if(type == 'heading') {
        editBus.$emit('addItemHeading');
      }
    } 
  },
  data() {
    return {
      editPanelItemContent: false,
      editPanelItemImage: false      
    }
  }  
}  

</script>
