<template>

    <section class="c-editPanel" v-if="items.length > 0">
      <h2 class="o-hdr o-hdr--sm center aligned">Edit Panel</h2>
      <fieldset>
        <label>Item preset types</label>
        <select>
          <option>Select a type</option>
        </select>
        <a class="c-btn-tag o-btn o-btn--plain o-btn--sm active" v-for="(CssClass, index) in items[editPanel.itemIndex].classes.applied" @click="applyClass(CssClass, 'remove')">{{ CssClass }}</a>      
        <hr>
        <a class="c-btn-tag o-btn o-btn--plain o-btn--sm" 
           v-for="(item, index) in items[editPanel.itemIndex].classes.available"
           v-if="item.class[2] == true"   
           @click="applyClass(index, 'apply')">
           {{ item.class | abbrClass }}
        </a>         
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
      <fieldset>        
        <h3 class="c-editPanel__heading o-hdr o-hdr--t u-mt0" @click="toggle('editPanelItemContent')" :class="{active: editPanelItemContent}">Item Buttons</h3>
        <div>
          <div v-for="(button, index) in items[editPanel.itemIndex].content.buttons.button">
            <label>Button {{index + 1}} - text</label>
            <input type="text" v-model="items[editPanel.itemIndex].content.buttons.button[index].text" placeholder="Binded value goes here" />            
            <label>Button {{index + 1}} - url</label>
            <input type="text" v-model="items[editPanel.itemIndex].content.buttons.button[index].url" placeholder="Binded value goes here" />                        
          </div>
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
  filters: {
    abbrClass(value) {
      if(value[0].startsWith("o-item") && value[2]) {        
        return value[0].replace("o-item", '');
      } 
    }
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
    },
    omitApplied(value) {
      if(!Array.isArray(value)) {
        return value        
      }      
    },
    applyClass(i, toggle) {
      // item being edited
      let itemEditing = this.items[this.editPanel.itemIndex],
      // array of classes being applied
      classesApplied = itemEditing.classes.applied,
      // ref to object (class name prop) in 'available' classes array          
      classToApply = itemEditing.classes.available[i].class[0];

      if(toggle == 'apply') {
        // Push to applied classes array if not already present      
        if(!classesApplied.includes(itemEditing.classes.available[i])) {
          classesApplied.push(classToApply);
          // Set last item in array to false - filter will not return in displayed list
          itemEditing.classes.available[i].class[2] = false;
        }
      } else if(toggle == 'remove') {
        // TODO
        console.log(i);
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

</style>
