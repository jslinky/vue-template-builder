<template>
  <div :class="{'invert': invert}">
    <!-- Do custom property amendments -->
    <DebugToggle :module="modules.standard" class="u-fixed">
        <input 
          type="checkbox"  
          :id="toogleInvert"       
          :checked="invert"        
          :value="invert"
          @click="toogleInvert()"
          >          
        <label :for="toogleInvert">Inverted</label> 
    </DebugToggle>


    <CustomHeader bg center aligned :class="{'inverted': invert}">Buttons</CustomHeader>      
    
    <div class="c-container-buttons o-container" style="text-align:center">
      <ModuleComponent :ref="modules.plain.name" :module="modules.plain">
      <CustomButton plain :class="{'inverted': invert}">Button</CustomButton>      
      </ModuleComponent>      
      <p :ref="`${modules.plain.name}-desc`">A plain button type</p>

      <ModuleComponent :ref="modules.standard.name" :module="modules.standard">
      <CustomButton :class="{'inverted': invert}">Button</CustomButton>      
      </ModuleComponent>      
      <p :ref="`${modules.standard.name}-desc`">A standard button type</p>

      <ModuleComponent :ref="modules.basic.name" :module="modules.basic">
      <CustomButton basic :class="{'inverted': invert}" style="margin-bottom:1rem">Button</CustomButton>      
      </ModuleComponent>      
      <p :ref="`${modules.basic.name}-desc`">A basic button type</p>  

      <ModuleComponent :ref="modules.primary.name" :module="modules.primary" style="background:#fff">
      <CustomButton primary :class="{'inverted': invert}" style="margin-bottom:1rem">Button</CustomButton>      
      </ModuleComponent>      
      <p :ref="`${modules.primary.name}-desc`">A primary button type</p>            
     
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
  name: 'sectionButtons',
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
      moduleNames: [],
      modules: {
        plain: {
          name: 'plain',
          html: {
            show: true,
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
        standard: {
          name: 'standard',
          html: {
            show: true,
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
        basic: {
          name: 'basic',
          html: {
            show: true,
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
        primary: {
          name: 'primary',
          html: {
            show: true,
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
      this.moduleNames.forEach(element => {
        this.$refs[element].toogleInvert()
        setTimeout(() => { this.$refs[element].updateHtmlToCopy() })   
      })
    }
  },
  created() {
    let moduleNames = Object.keys(this.modules).reduce(function (names, key) {
        names.push(key)
        return names
    }, []);   
    this.moduleNames = moduleNames      
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

</style>