<template>
  <div :class="{'invert': invert}">
    <!-- Do custom property amendments -->
    <DebugToggle :module="modules.headingMsv" class="u-fixed">
        <input 
          type="checkbox"  
          :id="toogleInvert"       
          :checked="invert"        
          :value="invert"
          @click="toogleInvert()"
          >          
        <label :for="toogleInvert">Inverted</label> 
    </DebugToggle>
    
    <div class="c-header-container o-container">
      <ModuleComponent :ref="modules.headingMsv.name" :module="modules.headingMsv">
      <CustomHeader :el="'h1'" msv :class="{'inverted': invert}" style="margin-bottom:1rem">Massive Heading</CustomHeader>      
      </ModuleComponent>      
      <!-- <p :ref="`${modules.headingMsv.name}-desc`">Descriptive text here</p> -->
      <ModuleComponent :ref="modules.headingHuge.name" :module="modules.headingHuge">
        <CustomHeader hg :class="{'inverted': invert}" style="margin-bottom:1rem">Huge Heading</CustomHeader>
      </ModuleComponent>  
      <ModuleComponent :ref="modules.headingBig.name" :module="modules.headingBig">
        <CustomHeader bg :class="{'inverted': invert}" style="margin-bottom:1rem">Big Heading</CustomHeader>
      </ModuleComponent> 
      <ModuleComponent :ref="modules.headingLarge.name" :module="modules.headingLarge">
        <CustomHeader lg :class="{'inverted': invert}" style="margin-bottom:1rem">Large Heading</CustomHeader>
      </ModuleComponent>    
      <ModuleComponent :ref="modules.headingMedium.name" :module="modules.headingMedium">
        <CustomHeader md :class="{'inverted': invert}" style="margin-bottom:1rem">Medium Heading</CustomHeader>
      </ModuleComponent>         
      <ModuleComponent :ref="modules.headingSmall.name" :module="modules.headingSmall">
        <CustomHeader sm :class="{'inverted': invert}" style="margin-bottom:1rem">Small Heading</CustomHeader>
      </ModuleComponent>       
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
      invert: false,
      headingNames: [],
      modules: {
        headingMsv: {
          name: 'headingMsv',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: ['o-hdr'],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        headingHuge: {
          name: 'headingHuge',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        headingBig: {
          name: 'headingBig',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        headingLarge: {
          name: 'headingLarge',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        headingMedium: {
          name: 'headingMedium',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        headingSmall: {
          name: 'headingSmall',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        headingTiny: {
          name: 'headingTiny',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        headingStd: {
          name: 'headingStd',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        }                                                                    
      }
    }
  },
  methods: {
    toogleInvert() {
      this.invert = !this.invert
      this.toogleModuleInvert()
    },
    toogleModuleInvert() {
      this.headingNames.forEach(element => {
        this.$refs[element].toogleInvert()
      })
    }
  },
  created() {
    let headingNames = Object.keys(this.modules).reduce(function (names, key) {
        names.push(key)
        return names
    }, []);   
    this.headingNames = headingNames      
  },  
  mounted() {
    if(this.invert) {
      // Works but throwing an error undefined
      this.toogleModuleInvert()      
    }    
  }
}


</script>

<style scoped lang="less">

// body is outside scope of this component 
.invert {
  background-color:#101A31;
}

.invert .c-debug-toggle label {
  color:#fff;
}

.c-header-container {
  padding:.015rem 0 3.5rem;
}


</style>