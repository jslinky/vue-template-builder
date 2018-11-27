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
      clone.id = 'item-' + this.items.length;
      let itemsLength = this.items.push(clone);      
      itemsLength;
      // As a argument for extendItemClasses pass an array of objects with two key properties... 
      // 1) a reference to this.items and the key to update
      // 2) an array containing the names of the classes to be extended (from their definition in root of itemClass)
      this.extendItemClasses([ 
        {
          ref: this.items[itemsLength - 1],
          classesToCopy: ['width', 'alignment']
        }, 
        {
          ref: this.items[itemsLength - 1].image,
          classesToCopy: ['width']          
        },
        {
          ref: this.items[itemsLength - 1].content,
          classesToCopy: ['width', 'alignment']          
        },          
        {
          ref: this.items[itemsLength - 1].content.buttons,
          classesToCopy: ['width']          
        }                        
      ]);
    },
    extendItemClasses(target) {      
      // Class types 
      // Create two copies of class types to be extended
      let classesWidth = itemClass.classes.width.map(ob => ob),
      classesAlignment = itemClass.classes.alignment.map(ob => ob);

      // Function takes 2 args
      // 1) The class type to iterate over and push and push to..
      // 2) finish this off
      function pushToClassesAvailable(classType, classesAvailable) {
        classType.forEach((item) => { classesAvailable.push(item); })
      }      

      for(let j=0; j < target.length; j++) {
        // val is each entry of classesToCopy array
        let classesAvailable = target[j].ref.classes.available.map(ob => ob); 
  
        target[j].classesToCopy.forEach((val) => {
          
          if(val.includes('alignment')) {
            pushToClassesAvailable(classesAlignment, classesAvailable);           
          } 
          else if(val.includes('width')) {
            pushToClassesAvailable(classesWidth, classesAvailable);  
          }  
        })
        // Assign new array to freshly created item object    
        target[j].ref.classes.available = classesAvailable;
      }

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
    editBus.$on('changeItemOrder', (from, to) => {
      console.log("fired");
      let arr = this.items;
      arr.splice(to, 0, arr.splice(from, 1)[0])
      return arr;      
    })
  }  
}


</script>


<style lang="less">

:root {
  --itemSpanAcross: 3;
  --itemOrder: 0;
}

#app {
  min-height:100vh;
}

#app.edit #page-wrapper {
  transform:translate(320px, 0);
}

#page-wrapper {
  transition:transform 200ms ease-out;
}

#app.edit .c-itemTemplate-container > .o-item {
  opacity:.125;
}

#app.edit .c-itemTemplate-container.toEdit > .o-item {
  opacity:1;
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
  overflow-y:auto; 
}

.c-editPanel > div {
  overflow-y:auto; 
  height:100vh;
  padding-bottom:4rem;
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
  grid-template-columns: repeat(12, 1fr);  
  grid-gap: 1px 1px;  
  background:#ccc;  
  background-image:radial-gradient(farthest-side at 0 0,rgba(255,26,198,.3),rgba(255,26,198,0)),radial-gradient(farthest-side at 100% 0,rgba(60,221,221,.4),rgba(60,221,221,0)),radial-gradient(farthest-side at 50% 0,rgba(255,26,198,.1),rgba(255,26,198,0));
}

.edit .c-item-container {
  margin-left:0;
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

select.minimal {
  background-color:transparent;
  padding-left:0;
  border:0;
}

</style>