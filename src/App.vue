<template>
  <div id="app" :class="{edit: editPanel.state}">
    <section class="c-welcome" v-if="items.length == 0">
      <h1 class="u-flex u-justify-center u-flex-column u-items-center">
        <span class="o-hdr o-hdr--sm u-mt0">Welcome to</span> <span class="o-hdr o-hdr--hg u-mt-sm">Jack Wills Template Builder</span>
      </h1>
    </section>    
    <!-- Edit Panel Component 
        - Pass through items and editPanel as props
    -->
    <editPanel :items="items" :editPanel="editPanel" />
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
import editPanel from './components/editPanel.vue'

export default {
  // Name of this component
  name: 'app',
  props: {
    itemInfo: Object
  },
  components: {
    item,
    editPanel
  },
  methods: {
    newItem() {
      let clone = JSON.parse(JSON.stringify(itemClass));
      this.items.push(clone);
    }  
  },
  // Data within a child component should run a function that returns an object
  data() {
    return {
      items: [],
      editPanel: {
        state: false,
        itemIndex: 0
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