<template>
  <h1 v-if="el == 'h1'"
    class="o-hdr" 
    :class="classNames | testFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h1> 
  <h2 v-else-if="el == 'h2'"
    class="o-hdr" 
    :class="classNames | testFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h2> 
  <h3 v-else-if="el == 'h3'"
    class="o-hdr" 
    :class="classNames | testFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h3>  
  <h4 v-else-if="el == 'h4'"
    class="o-hdr" 
    :class="classNames | testFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h4> 
  <h5 v-else-if="el == 'h5'"
    class="o-hdr" 
    :class="classNames | testFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h5>   
  <h6 v-else-if="el == 'h6'"
    class="o-hdr" 
    :class="classNames | testFilter(this.classArray, this.classNames)">
    <slot>Heading</slot>
  </h6>          
</template>

<script>
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
        'o-hdr--bg': this.bg, 
        'o-hdr--hg': this.hg, 
        'o-hdr--msv': this.msv         
      }
    }
  },
  filters: {
    testFilter(item, classArr, classNames) {

      let check = classArr === undefined

      if(!check) {          
        for(let i=0; i < classArr.length; i++) {
          for(let [key, value] of Object.entries(item)) {
            if(key.indexOf(classArr[i]) !== -1) {
              classNames[key] = true
            }
          }      
        }
        return item
      } else {
        return item
      }
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
      default: true      
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
    }                  
  },
  mounted() {
    // console.log(this.classArray)
    // let check = this.classArray === undefined

    // if(!check) {
    //   console.log('Class prop > 0')

    //   let test = checkIfValidProp(this.$props, this.classArray)

    //   function checkIfValidProp(props, classArr) {
    //     let arr = []
    //     for(let [key, value] of Object.entries(props)) {
    //       if(classArr.includes(key)) {
    //         // return key
    //         arr.push(key)
    //       }           
    //     }
    //     return arr      
    //   }

    //   console.log(test)

    //   for(let [key, value] of Object.entries(this.classNames)) {
    //     if(key.indexOf('sm') !== -1) {
    //       console.log(key)
    //       // return key
    //     }
    //   }      
    // } else {
    //   console.log('Class prop not passed')
    // }


    
  }
}
</script>

