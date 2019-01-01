<template>
  <div>
    <div class="c-debug-toggle o-container">
      <input 
        type="checkbox"  
        id="module-debug"       
        :checked="module.debug.show"        
        :value="module.debug.show"
        @click="module.debug.show = !module.debug.show"
        >
      <label for="module-debug">Show debug styles</label>   
    </div>
    <div :ref="module.name" :class="defaultClasses" :style="debugStyles">      
      <slot>Module component</slot>
    </div>
    <div class="c-code o-container u-flex">
      <CustomButton 
        small 
        basic 
        :class="{active: module.html.show}"
        @click.native="module.html.show = !module.html.show"
      >
        <span v-if="!module.html.show">Show</span>
        <span v-else>Hide</span>
        &nbsp;HTML
      </CustomButton>        
      <code v-if="module.html.show">{{ moduleHtml }}</code>
    </div>      
    <div class="o-container">
      <h4 class="o-hdr o-hdr--t">Related classes</h4>      
      <div class="u-flex u-flex-column u-items-start">
        <!-- Applied Classes -->      
        <CustomButton 
          small 
          plain 
          class="c-btn-tag active" 
          v-for="(item, index) in classesApplied" 
          @click.native="applyClass(index, module.classes, 'remove')">
          {{item}}
        </CustomButton>        
        <!-- Available Classes -->   
        <CustomButton 
          small 
          plain 
          class="c-btn-tag" 
          v-for="(item, index) in classesAvailable" 
          v-if="item.class[2] == true"
          @click.native="applyClass(index, module.classes, 'apply')">
          {{item.class[0]}}
        </CustomButton>
      </div>
    </div>

  </div>
</template>



<script>

import CustomButton from '../button.vue'
import CustomHeader from '../heading.vue'
import { editPanelMixins } from '../../mixins/editPanel-applyClass'

export default {
  // Name of this component
  name: 'Container',
  components: {
    CustomButton,
    CustomHeader
  },
  methods: {
    getHtml() { 
      const htmlContent = this.$refs[this.module.name].outerHTML,
            htmlContentCleaned = htmlContent.replace(/ style="[^"]*"/, "")
      return htmlContentCleaned
    }    
  },
  computed: {
    defaultClasses() {
      const classes = this.module.classes.default.map((className) => className)
      this.classesApplied.map((className) => classes.push(className))
      return classes      
    },
    classesAvailable() { return this.module.classes.available },
    classesApplied() { return this.module.classes.applied },
    debugStyles() {
      if(this.module.debug.show) {
        return this.module.debug.styles
      }
    },
    moduleHtml() { return this.module.html.content }
  },
  watch: {
    classesApplied: function() {
      setTimeout(function() { this.module.html.content = this.getHtml() }.bind(this), 150)
    }
  },
  data() {
    return {   
      module: {
        name: 'Container',
        html: {
          show: false,
          content: ''
        },
        debug: {
          show: true,
          styles: "background:rgba(277, 7, 19, .1); min-height:30vh; margin-top:1.5rem; display: flex; justify-content: center; align-items: center"
        },
        classes: {
          default: ['o-container'],
          applied: [],
          available: [
            { class: ['o-container-md', "Apply container styles at medium breakpoint", true] },
            { class: ['o-container-lg', "Apply container styles at large breakpoint", true] }
          ]
        }
      }          
    }
  },
  mixins: [editPanelMixins],
  mounted() {
    this.module.html.content = this.getHtml()
  }
}


</script>

<style lang="less">

.c-code .o-btn {
  flex:0 1 auto;
  align-self:flex-start;
}

code {
  flex:1 1 auto;
  padding:1.5rem; 
  background:#eee; 
  font:0.785rem 'Courier'; 
  letter-spacing:0.75px  
}

.c-debug-toggle {
  text-align:right;
  margin-top:1.5rem;
  transform:translate(0, 1.25rem);
}

</style>