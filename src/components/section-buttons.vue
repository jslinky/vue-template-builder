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

    <!-- Demo SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
      <symbol id="search" viewBox="0 0 20 20" width="100%" height="100%">
        <g fill="none" transform="translate(-2 -2)">
          <path fill="currentColor" d="M16.3404493,14.8801826 L21.86,20.3997333 C22.18,20.7197333 21.8533333,21.0464 21.8533333,21.0464 L21.0466667,21.8530667 C20.72,22.1797333 20.4,21.8597333 20.4,21.8597333 L14.8804493,16.3401826 C13.5301062,17.3809122 11.8376522,17.9997333 10,17.9997333 C5.58,17.9997333 2,14.4197333 2,9.99973333 C2,5.57973333 5.58,1.99973333 10,1.99973333 C14.42,1.99973333 18,5.57973333 18,9.99973333 C18,11.8373856 17.3811789,13.5298396 16.3404493,14.8801826 Z M4,9.99973333 C4,13.3130667 6.68666667,15.9997333 10,15.9997333 C13.3133333,15.9997333 16,13.3130667 16,9.99973333 C16,6.6864 13.3133333,3.99973333 10,3.99973333 C6.68666667,3.99973333 4,6.6864 4,9.99973333 Z"></path>
        </g>
      </symbol>     
      <symbol id="chevronLeftLight" viewBox="0 0 7 12" width="100%" height="100%">
        <g fill="none" transform="translate(-8 -6)">
          <polygon fill="currentColor" points="16.965 8.655 11.655 13.965 6.344 8.655 5.655 9.344 11.655 15.345 17.655 9.344" transform="rotate(90 11.655 12)"></polygon>
        </g>
      </symbol>      
      <symbol id="chevronRightLight" viewBox="0 0 7 12" width="100%" height="100%">
        <g fill="none" transform="translate(-9 -6)">
          <polygon fill="currentColor" points="17.655 8.655 12.345 13.965 7.034 8.655 6.345 9.344 12.345 15.345 18.345 9.344" transform="rotate(-90 12.345 12)"></polygon>
        </g>
      </symbol>      
    </svg>

  
    <CustomHeader bg center aligned :class="{'inverted': invert}">Buttons</CustomHeader>   

      <div class="o-container">
        <input 
          type="radio"  
          id="smallBtn-radio"       
          :checked="buttonSize.small"        
          :value="buttonSize.small"     
          @click="setSize('sm')"     
          >          
        <label for="smallBtn-radio">Small size</label>

        <input 
          type="radio"  
          id="normalBtn-radio"       
          :checked="buttonSize.default"        
          :value="buttonSize.default"      
          @click="setSize('default')"    
          >          
        <label for="normalBtn-radio">Default size</label>   

        <input 
          type="radio"  
          id="largeBtn-radio"       
          :checked="buttonSize.large"        
          :value="buttonSize.large"     
          @click="setSize('lg')"     
          >          
        <label for="largeBtn-radio">Large size</label>                 
      </div>    

    
    <div class="c-container-buttons o-container" style="text-align:center">
      <p :ref="`${modules.plain.name}-desc`" :class="{'inverted': invert}">A plain button type</p>
      <ModuleComponent :el="'a'" :ref="modules.plain.name" :module="modules.plain">
        Button
      <!-- <CustomButton plain :class="{'inverted': invert}">Button</CustomButton>       -->
      </ModuleComponent>            

      <p :ref="`${modules.standard.name}-desc`" :class="{'inverted': invert}">A standard button type</p>
      <ModuleComponent :el="'a'" :ref="modules.standard.name" :module="modules.standard">
        Button
      <!-- <CustomButton :class="{'inverted': invert}">Button</CustomButton>       -->
      </ModuleComponent>            

      <p :ref="`${modules.secondary.name}-desc`" :class="{'inverted': invert}">A secondary button type</p>  
      <ModuleComponent :el="'a'" :ref="modules.secondary.name" :module="modules.secondary">
        Button
      <!-- <CustomButton secondary :class="{'inverted': invert}">Button</CustomButton>       -->
      </ModuleComponent>                      

      <p :ref="`${modules.basic.name}-desc`" :class="{'inverted': invert}">A basic button type</p> 
      <ModuleComponent :el="'a'" :ref="modules.basic.name" :module="modules.basic">
        Button
      <!-- <CustomButton basic :class="{'inverted': invert}" style="margin-bottom:1rem">Button</CustomButton>       -->
      </ModuleComponent>      
       
      <p :ref="`${modules.primary.name}-desc`" :class="{'inverted': invert}">A primary button type</p>  
      <ModuleComponent :el="'a'" :ref="modules.primary.name" :module="modules.primary" style="background:#fff">
        <svg class="o-btn__icon left aligned">
			    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
		    </svg>         
        Button              
      <!-- <CustomButton primary :class="{'inverted': invert}" style="margin-bottom:1rem">
      </CustomButton>       -->
      </ModuleComponent>      
      

      <CustomHeader sm center aligned :class="{'inverted': invert}">Directional</CustomHeader>                

      <ModuleComponent :ref="modules.left.name" :module="modules.left">
      <CustomButton plain :class="{'inverted': invert}" style="margin-top:1rem">
        <svg class="o-btn__icon left aligned">
			    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronLeftLight"></use>
		    </svg>         
        Button      
      </CustomButton>      
      </ModuleComponent>  

      <ModuleComponent :ref="modules.right.name" :module="modules.right">
      <CustomButton plain :class="{'inverted': invert}" style="margin-top:1rem">      
        Button      
        <svg class="o-btn__icon right aligned">
			    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronRightLight"></use>
		    </svg>           
      </CustomButton>      
      </ModuleComponent>             

      <CustomHeader sm center aligned :class="{'inverted': invert}">Buttons (container)</CustomHeader>    
      <div class="o-buttons o-buttons--grouped add-remove-buttons"> 
      <CustomButton @click.native.prevent="buttonsUpdate('remove')" basic :class="{'inverted': invert, 'add-remove-buttons-btn': true, 'disabled':modules.buttons.content.length == this.modules.buttons.content.min}" style="margin-top:1rem">
        <svg class="o-btn__icon">
			    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronLeftLight"></use>
		    </svg>         
      </CustomButton>  
      <CustomButton basic @click.native.prevent="buttonsUpdate('add')" :class="{'inverted': invert, 'add-remove-buttons-btn': true, 'disabled':modules.buttons.content.length == modules.buttons.content.max}" style="margin-top:1rem">         
        <svg class="o-btn__icon">
			    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronRightLight"></use>
		    </svg>           
      </CustomButton>             
      </div>

      <ModuleComponent :ref="modules.buttons.name" :module="modules.buttons">        
        <CustomHeader t center aligned :class="{'inverted': invert}" v-if="modules.buttons.content.length <= this.modules.buttons.content.min">Oh dear, I'm empty</CustomHeader>    
        <CustomButton basic :class="{'inverted': invert}" v-for="button in modules.buttons.content.length">      
          Button         
        </CustomButton> 
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
      buttonSize: {
        small: false,
        default: true,
        large: false
      },
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
            default: ['o-btn', 'o-btn--plain'],
            applied: ['o-btn--lg'],
            available: [
              // { class: ['o-btn--sm', "Small button", true] },
              // { class: ['o-btn--lg', "Large button", true] }
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
            default: ['o-btn'],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        secondary: {
          name: 'secondary',
          html: {
            show: true,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: ['o-btn', 'o-btn--secondary'],
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
            default: ['o-btn', 'o-btn--basic'],
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
            default: ['o-btn', 'o-btn--primary'],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        left: {
          name: 'left',
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
        right: {
          name: 'right',
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
        buttons: {
          name: 'buttons',
          content: {
            length: 2,
            min: 0,
            max: 10
          },
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: ['o-buttons'],
            applied: [],
            available: [
              { class: ['o-buttons--stacked', "Stacked", true] },
              { class: ['o-buttons--stacked-md', "Stacked at medium", true] },
              { class: ['o-buttons--grouped', "Grouped", true] },
              { class: ['two column grid-layout', "2 column layout", true] }              
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
    },
    setSize(size) {
      this.moduleNames.forEach(element => {
        let classes = this.modules[element].classes,
            classesApplied = classes.applied,
            includesLarge = classesApplied.includes('o-btn--lg') ? classesApplied.indexOf('o-btn--lg') : false,
            includesSmall = classesApplied.includes('o-btn--sm') ? classesApplied.indexOf('o-btn--sm') : false
            if(size === 'default' && typeof includesLarge === 'number') {
              classes.applied.splice(includesLarge, 1)
            } else if(size === 'default' && typeof includesSmall === 'number') {
              classes.applied.splice(includesSmall, 1)
            } else if(size === 'lg' && includesLarge === false) {
              if(typeof includesSmall === 'number') {
                classes.applied.splice(includesSmall, 1)
              }
              classes.applied.push('o-btn--lg')
            } else if(size === 'sm' && includesSmall === false) {
              if(typeof includesLarge === 'number') {
                classes.applied.splice(includesLarge, 1)
              }              
              classes.applied.push('o-btn--sm')
            }     
      })
    },
    buttonsUpdate(action) {
      if(action == 'add' && this.modules.buttons.content.length < this.modules.buttons.content.max) {
        this.modules.buttons.content.length += 1
      } else if(action == 'remove' && this.modules.buttons.content.length > this.modules.buttons.content.min) {
        this.modules.buttons.content.length -= 1
      }
      setTimeout(() => { this.$refs.buttons.updateHtmlToCopy() })  
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

p { 
  text-align:left;
  margin-top:2.5rem;
}

.add-remove-buttons {
  margin-bottom:4rem; 
  max-width:100px;
}

.add-remove-buttons-btn {
  padding-left:.5em;
  padding-right:.5em;
}

</style>