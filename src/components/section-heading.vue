<template>
  <transition name="section-trans">
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

      <header class="c-header-group">
        <CustomHeader bg center aligned :class="{'inverted': invert}">Headings</CustomHeader>
      </header>

      <section>

      <div class="u-py2">
      <h3 class="c-module-intro o-hdr o-hdr--md" :class="{'show': moduleDetailsShow}">Heading 'object' used for adhereance to style guide 
        <button class="o-link u-font-family-primary" @click="moduleDetailsShow = !moduleDetailsShow">{{moduleDetailsShow ? 'Hide details': 'More details' }}</button>
      </h3>
      <div class="o-container">
        <div>
          <p>The heading 'object' uses the <code>o-hdr</code> class. This class sets up a default heading with associcated (custom) properties.</p>
          <div class="o-divider"></div>
          <CustomHeader md center aligned>Sizing</CustomHeader>
          <p>The heading object has a range of modifyer classes for diiferent sizes, which follow the framework sizing conventions of: <em>tiny</em>, <em>small</em>, <em>medium</em>, <em>large</em>, <em>big</em>, <em>huge</em> and <em>massive</em>.  
            </p>
            <p>The <em>tiny</em> variant also has a secondary font-family which is accessed using the class <code>o-hdr--secFont</code>
          </p> 
          <div class="o-divider"></div>
          <CustomHeader md center aligned>Dynamic Sizing</CustomHeader>
          <p>The heading 'object' also has a number of classes which allow for dynamic sizing based on screen size</p>
          <code class="u-p0">
          <ul class="u-m0 u-flex u-flex-column">
            <li class="u-inline-block">o-hdr--t-sm</li>
            <li class="u-inline-block">o-hdr--sm-md</li>
            <li class="u-inline-block">o-hdr--md-lg</li>
            <li class="u-inline-block">o-hdr--lg-big</li>
            <li class="u-inline-block">o-hdr--big-hg</li>
            <li class="u-inline-block">o-hdr--hg-msv</li>
          </ul>
          </code>
          <!-- For sizing you can use the modifyer classes ranging from 1-7. E.g. o-header--h4 -->
          <!-- You can have dynamic font sizes which are smaller for mobile and level up on larger screen. E.g. .o-header--h3-h2 -->
      </div>
      </div>    
      </div>
      
      <div class="c-header-container u-px4 u-py2">
        <ModuleComponent :ref="modules.headingMsv.name" :module="modules.headingMsv">
        <CustomHeader :el="'h1'" msv :class="{'inverted': invert}" style="margin-bottom:1rem; margin-top:var(--spacing)">I'm massive</CustomHeader>      
        </ModuleComponent>      
        <!-- <p :ref="`${modules.headingMsv.name}-desc`">Descriptive text here</p> -->
        <ModuleComponent :ref="modules.headingHuge.name" :module="modules.headingHuge">
          <CustomHeader hg :class="{'inverted': invert}" style="margin-bottom:1rem; margin-top:var(--spacing)">I'm huge</CustomHeader>
        </ModuleComponent>  
        <ModuleComponent :ref="modules.headingBig.name" :module="modules.headingBig">
          <CustomHeader bg :class="{'inverted': invert}" style="margin-bottom:1rem; margin-top:var(--spacing)">I'm big</CustomHeader>
        </ModuleComponent> 
        <ModuleComponent :ref="modules.headingLarge.name" :module="modules.headingLarge">
          <CustomHeader lg :class="{'inverted': invert}" style="margin-bottom:1rem; margin-top:var(--spacing)">I'm large</CustomHeader>
        </ModuleComponent>    
        <ModuleComponent :ref="modules.headingMedium.name" :module="modules.headingMedium">
          <CustomHeader md :class="{'inverted': invert}" style="margin-bottom:1rem; margin-top:var(--spacing)">I'm medium</CustomHeader>
        </ModuleComponent>         
        <ModuleComponent :ref="modules.headingSmall.name" :module="modules.headingSmall">
          <CustomHeader sm :class="{'inverted': invert}" style="margin-bottom:1rem; margin-top:var(--spacing)">Hey! I'm small</CustomHeader>
        </ModuleComponent>       
      </div>

      </section>

    </div>
  </transition>
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
      moduleDetailsShow: false,
      moduleNames: [],
      modules: {
        headingMsv: {
          name: 'headingMsv',
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
            applied: ['o-hdr'],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        headingHuge: {
          name: 'headingHuge',
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
        headingBig: {
          name: 'headingBig',
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
        headingLarge: {
          name: 'headingLarge',
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
        headingMedium: {
          name: 'headingMedium',
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
        headingSmall: {
          name: 'headingSmall',
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
    if(window.innerWidth > 1100) {
      this.moduleDetailsShow = true;
    }    
  }
}


</script>

<style scoped lang="less">

// body is outside scope of this component 
.invert,
.invert .c-header-group {
  background-color:#101A31;
}

.invert .c-debug-toggle label {
  color:#fff;
}

.c-header-container {
  padding:.015rem 0 3.5rem;
}

section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));  
  grid-gap:0 24px;
  margin-bottom:4rem;
}

section > div:first-of-type {
  border-right:1px solid var(--borderColor);
}


</style>