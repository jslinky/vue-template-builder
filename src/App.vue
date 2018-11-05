<template>
  <div id="app" :class="{edit: editPanel.state}">
    <section class="c-welcome" v-if="items.length == 0">
      <h1 class="u-flex u-justify-center u-flex-column u-items-center"><span class="o-hdr o-hdr--sm u-mt0">Welcome to</span> <span class="o-hdr o-hdr--hg u-mt-sm">Jack Wills Template Builder</span></h1>
    </section>    
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
    <div id="page-wrapper">
      <section class="c-item-container o-container">
        <!-- Item component - set to loop through items array -->
        <item v-for="(item, index) in items" :itemInfo="item" :itemIndex="index" />      
      </section>
    </div>
    <div class="main-nav">
      <a class="o-btn" :class="{disabled: editPanel.state}" @click="newItem">New item</a>
    </div>

  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
import { editBus } from './main'
import { itemClass } from './components/itemClass'
import item from './components/item.vue'

export default {
  // Name of this component
  name: 'app',
  props: {
    itemInfo: Object
  },
  components: {
    item
  },
  methods: {
    newItem() {
      let clone = JSON.parse(JSON.stringify(itemClass));
      this.items.push(clone);
    },
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
        let clone = JSON.parse(JSON.stringify(itemClass.content.heading[0]));
        this.items[this.editPanel.itemIndex].content.heading.push(clone);
      }
    }     
  },
  // Data within a child component should run a function that returns an object
  data() {
    return {
      items: [],
      // editPanel: false,
      editPanel: {
        state: false,
        itemIndex: 0
      },
      editPanelItemContent: false,
      editPanelItemImage: false
    }
  },
  mounted() {
    editBus.$on('editPanelState', (state, itemIndex) => {
      this.editPanel.state = state;
      this.editPanel.itemIndex = itemIndex;
    })
  }  
}


</script>


<style lang="less">

#app {
  min-height:100vh;
}

#app.edit #page-wrapper {
  transform:translate(320px, 0);
}

#page-wrapper {
  transition:transform 200ms ease-out;
}

.c-editPanel {
  position: fixed;
  width:300px;
  height:100vh;
  left:0;
  top:0;
  background:#ccc;
  z-index:1;
  transform:translate(-100%, 0);
  transition:all 200ms ease-out;
}

#app.edit .c-editPanel {
  transform:translate(0, 0);
}

.c-editPanel fieldset {
  margin-bottom:0;
}

.c-editPanel label {
  width:100%;
}

.c-editPanel__contentHeadings {
  position: relative;
}

.c-btn-remove {
  position:absolute;
  right:0;
  top:0;
  padding:0;
}

.c-editPanel fieldset + fieldset {
  padding-top:0;
}

.c-editPanel__heading + div {
  max-height:0;  
  overflow: hidden;
}

.c-editPanel__heading.active + div {
  max-height:100%;  
}

.c-item-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  grid-gap: 1.5rem 1.5rem;  
}

.c-welcome {
  min-height:100vh;
  display: flex;
  justify-content: center;
}

.main-nav {
  position:fixed;
  bottom:0;
  left:0;
  height:45px;
  border-top:1px solid #ddd;
  width:100%;
  display: flex;
  justify-content: center;
  background:rgba(255,255,255,.9);
}

.o-item__image {
  width:100%;
}

</style>