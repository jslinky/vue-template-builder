<template>
  <div>
    <!-- Debug toggle component -->
    <div class="o-container u-relative">
      <DebugToggle :module="module" />
    </div>
    <!-- Module component -->
    <div :ref="module.name" :class="defaultClasses" :style="debugStyles">      
      <slot>{{module.name}}</slot>
    </div>
    <div class="c-code o-container u-flex">
      <CustomButton 
        small 
        basic 
        :class="{active: module.html.show}"
        @click.native.prevent="module.html.show = !module.html.show"
      >
        <span v-if="!module.html.show">Show</span>
        <span v-else>Hide</span>
        &nbsp;HTML
      </CustomButton>        
      <code v-if="module.html.show">{{ moduleHtml }}</code>
    </div>      
    <div class="c-module-relatedClasses o-container">
      <h4 class="o-hdr o-hdr--t">Related classes</h4>      
      <div class="u-flex u-flex-column u-items-start">
        <!-- Applied Classes -->      
        <CustomButton 
          small 
          plain 
          class="c-btn-tag active" 
          v-for="(item, index) in classesApplied" 
          @click.native.prevent="applyClass(index, module.classes, 'remove')">
          {{item}}
        </CustomButton>        
        <!-- Available Classes -->   
        <CustomButton 
          small 
          plain 
          class="c-btn-tag" 
          v-for="(item, index) in classesAvailable" 
          v-if="item.class[2] == true"
          @click.native.prevent="applyClass(index, module.classes, 'apply')">
          {{item.class[0]}}
        </CustomButton>
      </div>
    </div>

  </div>
</template>



<script>

import { editBus } from '../../main'
import CustomButton from '../button.vue'
import CustomHeader from '../heading.vue'
import DebugToggle from './debug-toggle.vue'
import { editPanelMixins } from '../../mixins/editPanel-applyClass'


export default {
  // Name of this component
  name: 'ModuleComponent',
  components: {
    CustomButton,
    CustomHeader,
    DebugToggle
  },
  props: {
    module
  },
  methods: {
    getHtml() { 
      let htmlContent = this.$refs[this.module.name].outerHTML,      
          htmlContentCleaned = htmlContent.replace(/ style="[^"]*"/, "");
      htmlContentCleaned = htmlContentCleaned.replace(/ (data-v-\w+="")/g, "") 
      // console.log(htmlContentCleaned)
      return htmlContentCleaned
    },
    updateHtmlToCopy() {
      setTimeout(function() { this.module.html.content = this.getHtml() }.bind(this), 150)
      if(this.module.classes.applied.includes('transparent')) {
        editBus.$emit('updateClassesApplied', true)        
      } else {
        editBus.$emit('updateClassesApplied', false)
      }
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
    classesApplied: function(newVal, oldVal) {
      this.updateHtmlToCopy()          
    }
  },
  mixins: [editPanelMixins],
  mounted() {
    this.module.html.content = this.getHtml()
  },
  created() {  
    editBus.$on('toggle-debug', (module) => {
      module.debug.show = !module.debug.show 
    })    
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


</style>