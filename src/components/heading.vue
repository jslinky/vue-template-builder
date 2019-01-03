<template>
  <h1 v-if="el == 'h1'"
    class="o-hdr" 
    :class="classNames | ifClassPropsFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h1> 
  <h2 v-else-if="el == 'h2'"
    class="o-hdr" 
    :class="classNames | ifClassPropsFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h2> 
  <h3 v-else-if="el == 'h3'"
    class="o-hdr" 
    :class="classNames | ifClassPropsFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h3>  
  <h4 v-else-if="el == 'h4'"
    class="o-hdr" 
    :class="classNames | ifClassPropsFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h4> 
  <h5 v-else-if="el == 'h5'"
    class="o-hdr" 
    :class="classNames | ifClassPropsFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h5>   
  <h6 v-else-if="el == 'h6'"
    class="o-hdr" 
    :class="classNames | ifClassPropsFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h6>          
</template>

<script>

import { classPropsFilter } from '../mixins/classPropsFilter'

export default {
  name: 'CustomHeading',
  data() {
    return {
      classNames: {
        'o-item__hdr': this.item, 
        'o-hdr--secFont': this.secFont,
        'o-hdr--t': this.t,
        'o-hdr--sm': this.sm, 
        'o-hdr--md': this.md, 
        'o-hdr--lg': this.lg,
        'o-hdr--big': this.bg, 
        'o-hdr--hg': this.hg, 
        'o-hdr--msv': this.msv,
        'center aligned': this.center,
        'inverted': this.inverted        
      }
    }
  },
  watch: {
    classArray: function(newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal);      
    },    
  },  
  props: {
    el: {
      type: String,
      default: 'h3'
    },   
    classArray: Array,
    item: {
      type: Boolean,
      default: false
    },
    secFont: {
      type: Boolean,
      default: false
    },
    t: {
      type: Boolean,
      default: false      
    },
    sm: {
      type: Boolean,
      default: false      
    },
    md: {
      type: Boolean,
      default: false      
    },
    lg: {
      type: Boolean,
      default: false      
    },
    bg: {
      type: Boolean,
      default: false      
    },
    hg: {
      type: Boolean,
      default: false      
    },
    msv: {
      type: Boolean,
      default: false      
    },
    center: {
      type: Boolean,
      default: false
    },
    inverted: {
      type: Boolean,
      default:false
    }                  
  },
  mixins: [classPropsFilter]
}
</script>

