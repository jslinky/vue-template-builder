<template>
  <div :class="{'invert': invert}">
    <!-- Do custom property amendments -->
    <!-- <DebugToggle :module="modules.masthead" class="u-fixed"> -->
      <!-- ADD INVERT TOOGLE? -->
      <!-- <div class="u-flex u-items-center">
        <CustomHeader class="u-mx-lg">Content examples</CustomHeader>
        <div class="o-buttons o-buttons--grouped">
        <CustomButton 
          :class="{'u-mb0': true, 'active': activeContent == 'example-1' }" 
          small primary inverted 
          @click.native.prevent="switchActiveContent('example-1')">
          Item 1
        </CustomButton>
        <CustomButton 
          :class="{'u-mb0': true, 'active': activeContent == 'example-2' }" 
          small primary inverted 
          @click.native.prevent="switchActiveContent('example-2')">
          Item 2
        </CustomButton>            
        </div>
      </div> -->
    <!-- </DebugToggle> -->
 
    <!-- <ModuleComponent :module="modules.masthead" ref="example-2" v-else-if="activeContent == 'example-2'">
    </ModuleComponent>         -->
    <div class="o-container">
      <CustomHeader msv inverted>Massive Heading</CustomHeader>
      <CustomHeader hg>Huge Heading</CustomHeader>
      <CustomHeader bg>Big Heading</CustomHeader>
      <CustomHeader lg>Large Heading</CustomHeader>
      <CustomHeader md>Medium Heading</CustomHeader>
      <CustomHeader sm>Small Heading</CustomHeader>
      <CustomHeader t secFont>Tiny Heading</CustomHeader>
      <CustomHeader t>Tiny Heading (Secondary Font)</CustomHeader>
      <CustomHeader>Standard Heading</CustomHeader>
    </div>
  </div>
</template>


<script>

import { editBus } from '../main'
import ModuleComponent from './modules/module.vue'
import DebugToggle from './modules/debug-toggle.vue'
import CustomButton from './button.vue'
import CustomHeader from './heading.vue'
// import item from './item.vue'

export default {
  // Name of this component
  name: 'sectionHeading',
  components: {
    ModuleComponent,
    DebugToggle,
    CustomButton,
    CustomHeader
    // item
  },
  data() {
    return {
      invert: true,
      modules: {
        // masthead: {
        //   name: 'Masthead',
        //   html: {
        //     show: false,
        //     content: ''
        //   },
        //   debug: {
        //     show: true,
        //     styles: ""
        //   },
        //   classes: {
        //     default: ['o-mh'],
        //     applied: [],
        //     available: [
        //       { class: ['o-mh--fullScreen', "Full screen masthead", true] },
        //       { class: ['o-mh--prop', "Proportional masthead", true] },
        //       { class: ['transparent', "For transparent navigation", true] }
        //     ]
        //   }
        // }        
      }
    }
  }
}


</script>

<style scoped lang="less">

// body is outside scope of this component 
.invert {
  background-color:#101A31;
}


</style>