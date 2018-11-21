<template>

    <section class="c-editPanel" v-if="items.length > 0">
      <div>
      <h2 class="o-hdr o-hdr--sm center aligned">Edit Panel</h2>
      <a href="#" @click="applyType(types.card, items[editPanel.itemIndex])">Apply overlay</a>
      <!-- Item -->
      <fieldset>
        <h3 
          class="c-editPanel__heading o-hdr o-hdr--t u-mt0" 
          @click="toggleSections('item')" 
          :class="{active: editPanelSections.item}">
          Item
        </h3>                
        <div>
          <label>Item preset types</label>
          <select>
            <option>Select a type</option>
          </select>

          <label>Span across</label>
          <!-- <select v-model="items[editPanel.itemIndex].spanAcross"> -->
          <select v-model="itemSpan">
            <option selected="selected">3</option>
            <option v-for="(item, index) in 9">{{index + 4}}</option>
          </select> 

          <label>Width (optional)</label>
          <select v-model="itemWidthSelected">
            <option selected>{{ itemWidthSelected }}</option>
            <option 
              v-for="(item, index) in items[editPanel.itemIndex].classes.available" 
              v-if="item.class[2] == true && item.class[0].includes('wide')">
              {{ item.class[0] }}
            </option>
          </select>           

          <p>Applied Classes</p>
          <a 
            class="c-btn-tag o-btn o-btn--plain o-btn--sm active" 
            v-for="(CssClass, index) in items[editPanel.itemIndex].classes.applied" 
            v-if="CssClass !== 'o-item'"
            @click="applyClass(index, items[editPanel.itemIndex].classes, 'remove')">
            {{ CssClass }}
          </a>
          <p v-else-if="items[editPanel.itemIndex].classes.applied.length == 1">
            No classes applied
          </p>

          <hr>

          <p>Modifyer Classes</p>
          <a class="c-btn-tag o-btn o-btn--plain o-btn--sm" 
            v-for="(item, index) in items[editPanel.itemIndex].classes.available"
            v-if="item.class[2] == true && !item.class[0].includes('wide') && !item.class[0].includes('aligned')"   
            @click="applyClass(index, items[editPanel.itemIndex].classes, 'apply')">
            {{ item.class | abbrClass }}
          </a> 

          <hr>

          <p>Alignment</p>
          <a class="c-btn-tag o-btn o-btn--plain o-btn--sm" 
            v-for="(item, index) in items[editPanel.itemIndex].classes.available"
            v-if="item.class[2] == true && item.class[0].includes('aligned')"   
            @click="applyClass(index, items[editPanel.itemIndex].classes, 'apply')">
            {{ item.class | abbrClass }}
          </a>                       


        </div>             
      </fieldset>

      <!-- Item Image -->
      <fieldset> 
        <h3 
          class="c-editPanel__heading o-hdr o-hdr--t u-mt0" 
          @click="toggleSections('image')" 
          :class="{active: editPanelSections.image}">
          Item Image
        </h3>
        
        <div>       
          <label>Image path</label>
            <input 
              type="text" 
              :value="items[editPanel.itemIndex].image.url" 
              @input="items[editPanel.itemIndex].image.url = $event.target.value" 
              placeholder="Binded value goes here" />

          <label>Link path</label>
          <input type="text" placeholder="Binded value goes here" />        
        </div>
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
            v-for="(heading, index) in items[editPanel.itemIndex].content.heading" 
            v-if="!heading.text == ''">       
            <label>Heading {{index + 1}}</label>
            <input 
              type="checkbox"  
              :id="index"               
              :value="true"
              @click="items[editPanel.itemIndex].content.heading[index].artwork.default = !items[editPanel.itemIndex].content.heading[index].artwork.default"
              >
            <label :for="index">Make artwork</label>            
            <input 
              type="text" 
              v-if="items[editPanel.itemIndex].content.heading[index].artwork.default"
              v-model="items[editPanel.itemIndex].content.heading[index].artwork.assetUrl" 
              placeholder="Binded value goes here" />               
            <button 
              class="c-btn-remove o-btn" 
              @click="removeContent(heading, 'text', items[editPanel.itemIndex].content.heading)">
              Remove
            </button>            
            <input 
              type="text" 
              v-model="items[editPanel.itemIndex].content.heading[index].text" 
              placeholder="Binded value goes here" />            

          </div>
          
          <button 
            v-if="items[editPanel.itemIndex].content.heading.length <= 3" 
            @click="addContent('heading')" 
            class="o-btn o-btn--basic o-btn--sm">
            Add heading
          </button>
          <p v-else>{{items[editPanel.itemIndex].content.heading.length}}</p>
          
          <label>Copy</label>
          <input 
            type="textarea" 
            v-model="items[editPanel.itemIndex].content.subCopy" 
            class="o-form__inputText" 
            placeholder="Binded value goes here" />                  
        </div>
      </fieldset>   

      <!-- Item Buttons -->         
      <fieldset>        
        <h3 
          class="c-editPanel__heading o-hdr o-hdr--t u-mt0" 
          @click="toggleSections('buttons')" 
          :class="{active: editPanelSections.buttons}">
          Item Buttons
        </h3>
        <div>          
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
      </fieldset>        
      </div>
      <!-- save / close footer -->
      <footer class="o-buttons">
        <custom-button button basic small>Cancel</custom-button>
        <custom-button button primary small>Save</custom-button>
      </footer>      
    </section>

  </template>

<script>

import { editBus } from '../main'
import { itemOverlay } from './item-types/overlay'
import { itemCard } from './item-types/card'
import { itemClass } from './itemClass'
import CustomButton from './button.vue'

export default {
  // Name of this component
  name: 'editPanel',
  props: {
    items: Array,
    editPanel: Object
  },
  components: {
    CustomButton
  },
  filters: {
    abbrClass(value) {
      if(value[2]) {        
        return value[0].replace("o-item", '');
      } else {
        return null;
      }
    }
  },
  watch: { 
    itemWidthSelected: function(newVal, oldVal) { // watch it
      console.log('Prop changed: ', newVal, ' | was: ', oldVal);
      let appliedClasses = this.items[this.editPanel.itemIndex].classes.applied;
      appliedClasses.forEach((element, i) => {
        if(element.includes("wide")) {
          appliedClasses.splice(i, 1);
        }
      });
      appliedClasses.push(newVal);
    },
    itemSpan: function(newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal);
      this.items[this.editPanel.itemIndex].spanAcross = newVal;      
    }
  },  
  methods: {
    // Apply type of item method
    // Arg 1: itemType is ref. to the 'types' object in data
    // Arg 2: itemToMutate is ref to current 'item' being edited
    applyType(itemType, itemToMutate) {

      // TODO - reset to original settings on change 

      // Start here
      // For each object in 'itemType' array - apply getPosition function
      // Iterate over the 'classesToApply' and push them to the applied classes of 'itemToMutate' 
      itemType.alias.forEach((entry) => {
        let obj = getPosition(entry, itemToMutate)
        for(let i=0; i < obj.classesToApply.length; i++) {
          obj.applied.push(obj.classesToApply[i])   
          setClassToFalse(obj, obj.classesToApply[i])       
        }
      });

      // Sets class boolean to false 
      function setClassToFalse(itemAliasObj, classToApply) {        
        itemAliasObj.classesAvailable.forEach((entry) => {
          if(entry.class[0].includes(classToApply)) {
            entry.class[2] = false;
          }          
        })
      }

      // Function gets each object in 'itemType' array
      // Each object contains a ref to nested position && classes to be applied
      // Arg 1: 'itemType' Object as defined in 'types.[type].ref' in data
      // Arg 2: 'itemToMutate' is ref to current 'item' being edited
      function getPosition(itemTypeAlias, itemToMutate) {
        // Reference Path to position in obj
        let ref = itemTypeAlias.ref.split("."),
            // Set itemType to object being edited
            itemClassAlias = itemToMutate,
            // Associated class to be applied
            classesToApply = itemTypeAlias.classes            

        // For each entry in split path build up path in 'itemClassAlias'
        ref.forEach((value) => itemClassAlias = itemClassAlias[value])

        let classesAvailable = itemClassAlias.available

        // Return an object with entries for
        // 1. 'item' being applied too (current editied item)
        // 2. Classes currently applied to this reference 
        // 3. Classes to apply for this 'itemType'
        return {
          itemClassAlias,
          applied: itemClassAlias.applied,
          classesToApply,
          classesAvailable
        } 
      }

    },
    // Pass through string of data key to toggle
    toggle(dataRef) {      
      if(this[dataRef] == false) {
        this[dataRef] = true;
      } else if(this[dataRef] == true) {
        this[dataRef] = false;
      }      
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
    applyClass(i, ref, toggle) {
      let classesRef = ref,
      classesApplied = classesRef.applied,
      classesAvailable = classesRef.available[i],
      classToApply = classesAvailable.class[0];

      if(toggle == 'apply') {
        // Push to applied classes array if not already present      
        if(!classesApplied.includes(classesAvailable)) {
          classesApplied.push(classToApply);
          // Set last item in array to false - filter will not return in displayed list
          classesAvailable.class[2] = false;
          if(classToApply == 'o-item--100vw') {            
            this.items[this.editPanel.itemIndex].spanAcross = 12
          }          
        }
      } else if(toggle == 'remove') {
        // class to remove        
        let classToRemove = classesApplied[i];
        // remove class from applied array
        classesApplied.splice(i, 1);
        if(classToRemove == 'o-item--100vw') {
          this.items[this.editPanel.itemIndex].spanAcross = this.itemSpan;
        }
        // loop over available classes and check for class to remove, then set to true
        classesRef.available.forEach((element) => {
          if(element.class[0].includes(classToRemove)) {
            element.class[2] = true;
          }
        });   
      }      
    }    
  },
  mounted() {
    editBus.$on('editPanelState', (state, itemIndex) => {
      this.editPanel.state = state;
      this.editPanel.itemIndex = itemIndex;      
    })
    editBus.$on('addItemHeading', () => {
      let clone = JSON.parse(JSON.stringify(itemClass.content.heading[0]));      
      this.items[this.editPanel.itemIndex].content.heading.push(clone);
    })  
  },   
  data() {
    return {
      types: {
        overlay: {
          default: false,
          alias: itemOverlay
        },
        card: {
          default: false,
          alias: itemCard
        }                 
      },
      // Panel Sections
      editPanelSections: {
        item: true,
        content: false,
        image: false,
        buttons: false  
      },
      itemWidthSelected: 'Select a width',
      itemSpan: function() {
        return this.items[this.editPanel.itemIndex].spanAcross
      },
      buttonEdit:'Select property to edit'
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
  bottom:0;
  left:0;
  width:100%;
  padding:1rem 1rem 0;
  background:#ccc;
}

</style>
