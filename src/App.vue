<template>
  <div id="app">    
    <keep-alive>      
      <component :is="activeComponent" :ref="activeComponent"/>      
    </keep-alive>
    <div class="main-nav" v-if="activeComponent != landingPage">
      <div v-if="activeComponent != 'templateBuilder'">
        <a class="o-btn" :class="{active: activeComponent == 'sectionHeading'}" data-ref="sectionHeading" @click="switchComponent($event)">Headings</a>
        <a class="o-btn" :class="{active: activeComponent == 'button'}" data-ref="buttons" @click="switchComponent($event)">Buttons</a>        
        <a class="o-btn" :class="{active: activeComponent == 'sectionItems'}" data-ref="sectionItems" @click="switchComponent($event)">Items</a>
        <a class="o-btn" :class="{active: activeComponent == 'sectionLayout'}" data-ref="sectionLayout" @click="switchComponent($event)">Layout</a>
        <a class="o-btn" :class="{active: activeComponent == 'sectionColours'}" data-ref="sectionColours" @click="switchComponent($event)">Colours</a>
        <a class="o-btn" :class="{active: activeComponent == 'masthead'}" data-ref="masthead" @click="switchComponent($event)">Mastheads</a>
        <a class="o-btn" :class="{active: activeComponent == 'sectionCarousel'}" data-ref="sectionCarousel" @click="switchComponent($event)">Carousel</a>
        <a class="o-btn" :class="{active: activeComponent == 'grid'}" data-ref="grid" @click="switchComponent($event)">Grid</a>
        <a class="o-btn" :class="{active: activeComponent == 'grid'}" data-ref="grid" @click="switchComponent($event)">Icons</a>
        <!-- <a class="o-btn" :class="{active: activeComponent == 'menus'}" data-ref="menus" @click="switchComponent($event)">Menu</a> -->
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
import sectionLanding from "./components/section-landing.vue";
import masthead from "./components/section-masthead.vue";
import sectionItems from "./components/section-items.vue";
import sectionLayout from "./components/section-layout.vue";
import sectionCarousel from "./components/section-carousel.vue";
import sectionHeading from "./components/section-heading.vue";
import sectionColours from "./components/section-colours.vue";
import buttons from "./components/section-buttons.vue";
import grid from "./components/section-grid.vue";
import menus from "./components/section-menu.vue";
import templateBuilder from "./components/template-builder.vue";
import CustomButton from "./components/button.vue";

export default {
  // Name of this component
  name: "app",
  components: {
    sectionLanding,
    masthead,
    sectionItems,
    sectionLayout,
    sectionCarousel,
    sectionHeading,
    sectionColours,
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
      landingPage: 'sectionLanding',
      entryPage: 'sectionHeading',
      activeComponent: '',
      // change state from emited event
      editPanel: {
        state: false
      }
    };
  },
  mounted() {
    this.activeComponent = this.landingPage
    editBus.$on('enterSite', () => {
      this.activeComponent = this.entryPage
    }) 
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


.section-trans-enter-active {
  animation: fadeIn 800ms forwards;
}

.section-trans-leave-active {
  animation: fadeIn 400ms forwards reverse;
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.invert p,
.invert li {
  color:#fff;
}

.invert .o-hdr {
  --headerColor:#fff;
}

.invert p code {
  color:initial;
}


</style>