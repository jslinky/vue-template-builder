<template>
  <div id="app">
    <section class="c-item-container o-container">
        <!-- Item component - set to loop through items array -->
        <item v-for="(item, index) in items" :itemInfo="item" />      
    </section>
    <div class="main-nav">
      <a class="o-btn" @click="newItem">New item</a>
    </div>

  </div>
</template>

<!--<template>
  <section>
  <div :class="item.classes.applied">
    <itemImage :imgUrl="item.image.url" :content="item.content" /> 
    
  </div>

  <div v-for="(item, index) in items">
    <div :class="items[index].classes.applied">
      <itemImage :imgUrl="items[index].image.url" :content="items[index].content" />      
    </div>    
    
    <a @click="editItem" class="o-link">Edit</a>    
    <div v-if="edit">      
      <div v-for="(value, key) in items[index].classes" class="o-buttons">
        <a class="o-btn" v-if="omitApplied(value)" @click="addClass(value, index)">{{ key }}</a>
      </div>
    </div>      
  </div>
    <a class="o-btn o-btn--primary" @click="newItem">New item</a>
    </section>
</template>-->


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
    editItem() {
      if(this.edit == true) {
        this.edit = false;
      } else {
        this.edit = true;
      }
    },
    omitApplied(value) {
      if(!Array.isArray(value)) {
        return value        
      }      
    },
    addClass(value, i) {
      let classesApplied = this.items[i].classes.applied; 
      if(!classesApplied.includes(value)) {
        classesApplied.push(value);
      } else {
        let index = classesApplied.indexOf(value);
        classesApplied.splice(index);        
      }      
    }
  },
  // Data within a child component should run a function that returns an object
  data() {
    return {
      items: []     
    }
  }
}


</script>


<style lang="less">

.c-item-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  grid-gap: 1.5rem 1.5rem;  
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