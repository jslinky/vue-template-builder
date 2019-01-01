<template>
  <div>
    <div class="o-container" :ref="module.name" :class="module.classes.applied" style="background:rgba(277, 7, 19, .1); min-height:30vh; margin-top:1.5rem">      
      <slot>Module component</slot>
    </div>
    <div class="o-container">
      <a href="#" class="o-btn">Show HTML</a>
      <div style="padding:1.5rem; background:#eee; font:0.785rem 'Courier'; letter-spacing:0.75px">
        {{ moduleHtml }}
        <!-- {{module.htmlContainer}} -->
      </div>
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
      console.log(htmlContentCleaned)
      // htmlContent.replace(/style="[^"]*"/, "") // this isn't working
      return htmlContentCleaned
    }    
  },
  computed: {
    classesAvailable() { return this.module.classes.available },
    classesApplied() { return this.module.classes.applied },
    moduleHtml() { return this.module.htmlContainer }
  },
  watch: {
    classesApplied: function() {
      setTimeout(function() { this.module.htmlContainer = this.getHtml() }.bind(this), 150)
    }
  },
  data() {
    return {   
      module: {
        name: 'Container',
        htmlContainer: '',
        classes: {
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
    this.module.htmlContainer = this.getHtml()
  }
}


</script>

<style lang="less">



</style>