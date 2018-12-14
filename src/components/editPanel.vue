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
        <div>
          <label>{{itemType}}</label>
          <select v-model="itemType">
            <option selected>Please select a type</option>
            <option 
              v-for="(item, key, index) in types"              >
              {{ key | getItemTypeDescriptions }}
              >
            </option>
          </select>  

          <label>Span across</label>
          <!-- <select v-model="items[editPanel.itemIndex].spanAcross"> -->
          <select v-model="itemSpan">            
            <option selected>Select column span</option>
            <option v-for="(item, index) in 9">{{index + 3}}</option>
          </select> 

          <label>Width (optional)</label>
          <select v-model="itemWidthSelected">
            <option selected>{{ itemWidthSelected }}</option>
            <option 
              v-for="(item, index) in items[editPanel.itemIndex].classes.available" 
              v-if="item.class[2] == true && item.class[0].includes('wide')">
              {{ item.class[0] }}
              >
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
import { itemOverlay, itemCard, itemImageSwap, itemHeaderSwap } from './item-types/all'
import { itemClass } from './itemClass'
import { editPanelMixins } from '../mixins/editPanel-applyClass'
import CustomButton from './button.vue'
import CustomHeading from './heading.vue'
import editImg from './editImg.vue'

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
    editImg
  },
  filters: {
    abbrClass(value) {
      if(value[2]) {        
        return value[0].replace("o-item", '');
      } else {
        return null;
      }
    },
    getItemTypeDescriptions(item) {
      if(!item.includes('current')) {
        // let split = item.charAt(0).toUpperCase() + item.slice(1);
        // return `item${split}`
        return item
      }
    }    
  },  
  watch: { 
    itemWidthSelected: function(newVal, oldVal) { // watch it
      console.log('Prop changed: ', newVal, ' | was: ', oldVal);
      this.applyWidth(this.items[this.editPanel.itemIndex].classes.applied, newVal)
    },
    buttonsWidthSelected: function(newVal, oldVal) { // watch it
      this.applyWidth(this.items[this.editPanel.itemIndex].content.buttons.classes.applied, newVal)
    },    
    buttonsColumnsSelected: function(newVal, oldVal) { // watch it
      this.applyWidth(this.items[this.editPanel.itemIndex].content.buttons.classes.applied, newVal)
    },        
    itemSpan: function(newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal);
      this.items[this.editPanel.itemIndex].spanAcross = newVal;      
    },
    itemType: function(newVal, oldVal) {
      console.log(newVal)
      this.applyType(this.types[newVal], this.items[this.editPanel.itemIndex])
    }
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
    },
    // pass through 'string' type to clone itemClass and push to relevent place in items array
    addContent(type) {
      if(type == 'heading') {
        console.log(type)
        editBus.$emit('addItemHeading');
      }
    }
    // omitApplied(value) {
    //   if(!Array.isArray(value)) {
    //     return value        
    //   }      
    // }   
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
      types: {
        current: {
          state: false,
          alias: [],
          descrip: 'Please select an item type'
        },
        overlay: {
          default: false,
          alias: itemOverlay,
          descrip: 'Overlayed content'
        },
        card: {
          default: false,
          alias: itemCard,
          descrip: 'Card layout'
        },
        imageSwap: {
          default:true,
          alias: itemImageSwap,
          descrip: 'Image Swap on hover'
        },
        headerSwap: {
          default:true,
          alias: itemHeaderSwap,
          descrip: 'Header Swap on hover'
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
      buttonsWidthSelected: 'Select a width',
      buttonsColumnsSelected: 'Select no of columns',
      itemSpan: function() {
        return this.items[this.editPanel.itemIndex].spanAcross
      },
      itemType: 'Select a type',
      buttonEdit:'Select property to edit',
      responsiveImage: false,
      headingType: 'Please select a type'
    }
  },
  mixins: [editPanelMixins]  
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
