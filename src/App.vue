<template>
  <div id="app">
    <keep-alive>
      <component :is="activeComponent" :ref="activeComponent"/>
    </keep-alive>
    <div class="main-nav">
      <div v-if="activeComponent != 'templateBuilder'">
        <a class="o-btn" data-ref="masthead" @click="switchComponent($event)">Mastheads</a>
        <a class="o-btn" data-ref="sectionHeading" @click="switchComponent($event)">Headings</a>
        <a class="o-btn" data-ref="sectionItems" @click="switchComponent($event)">Items</a>
        <a class="o-btn" data-ref="sectionContainer" @click="switchComponent($event)">Container</a>
        <a class="o-btn" data-ref="buttons" @click="switchComponent($event)">Buttons</a>
        <a class="o-btn" data-ref="grid" @click="switchComponent($event)">Grid</a>
        <a class="o-btn" data-ref="menus" @click="switchComponent($event)">Menu</a>
        <a
          class="o-btn"
          data-ref="templateBuilder"
          @click="switchComponent($event)"
        >Template Builder</a>
      </div>
      <div v-else>
        <a class="o-btn" data-ref="masthead" @click="switchComponent($event)">Back</a>
        <a class="o-btn" :class="{disabled: editPanel.state}" @click="newItem">New item</a>
      </div>
    </div>
  </div>
</template>


<script>
import { editBus } from "./main";
import masthead from "./components/section-masthead.vue";
import sectionItems from "./components/section-items.vue";
import sectionContainer from "./components/section-container.vue";
import sectionHeading from "./components/section-heading.vue";
import buttons from "./components/section-buttons.vue";
import grid from "./components/section-grid.vue";
import menus from "./components/section-menu.vue";
import templateBuilder from "./components/template-builder.vue";
import CustomButton from "./components/button.vue";

export default {
  // Name of this component
  name: "app",
  components: {
    masthead,
    sectionItems,
    sectionContainer,
    sectionHeading,
    buttons,
    grid,
    menus,
    templateBuilder,
    CustomButton
  },
  methods: {
    switchComponent(event) {
      this.activeComponent = event.currentTarget.dataset.ref;
    },
    newItem() {
      // calls method in child templateBuilder component
      this.$refs.templateBuilder.newItem();
    }
  },
  // Data within a child component should run a function that returns an object
  data() {
    return {
      activeComponent: "masthead",
      // change state from emited event
      editPanel: {
        state: false
      }
    };
  }
};
</script>

<style lang="less">
.main-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 45px;
  border-top: 1px solid #ddd;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
}
</style>