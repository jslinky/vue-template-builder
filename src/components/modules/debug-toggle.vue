<template>  
    <div class="c-debug-toggle">
      <div class="c-debug-toggle__styles" v-if="module.debug.styles.length > 1">
        <input 
          type="checkbox"  
          :id="`${module.name}-debug`"       
          :checked="module.debug.show"        
          :value="module.debug.show"
          @click="toggle()"
          >          
        <label :for="`${module.name}-debug`">Show debug styles</label>   
      </div>
      <slot></slot>   
    </div>
</template>



<script>

import { editBus } from '../../main'

export default {
  // Name of this component
  name: 'DebugToggle',
  props: {
    module
  },
  methods: {
    toggle() {
      editBus.$emit('toggle-debug', this.module)
    }
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
  letter-spacing:0.75px;  
  word-break: break-all;
}

p code {
  padding:0;
}

.c-debug-toggle {
  text-align:right;
  margin-top:1.5rem;
  transform:translate(0, 1.25rem);
}

.c-module-relatedClasses {
  margin-bottom:2.5rem;
}

.c-debug-toggle {
  position: absolute;
  z-index: 3;
  width: auto;
  padding: 1rem 1.5rem;
  top: 0;
  transform: none;
  margin: 0;
  right: 0;
}

.c-debug-toggle > div,
.c-debug-toggle__styles {
  background: rgba(255,255,255,.4);
}

</style>