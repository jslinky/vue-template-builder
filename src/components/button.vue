<template>
  <button v-if="button"
    class="o-btn" 
    :class="{
      'o-btn--basic': basic, 
      'o-btn--primary': primary, 
      'inverted': inverted, 
      'o-btn--sm': small,
      'o-btn--lg': large,
      'o-btn--plain': plain,
      'o-btn--secondary': secondary
      }">
    <slot>Button</slot>
  </button> 
  <a v-else
    :href="url"
    class="o-btn" 
    :class="{
      'o-btn--basic': basic, 
      'o-btn--primary': primary, 
      'inverted': inverted, 
      'o-btn--sm': small,
      'o-btn--lg': large,
      'o-btn--plain': plain,
      'o-btn--secondary': secondary
    }">
    <slot>Button</slot>
  </a>    
</template>

<script>

export default {
  name: 'Button',
  props: {
    url: {
      type: String,
      default: '#'
    },
    button: {
      type: Boolean,
      default: false
    },
    basic: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false      
    },
    plain: {
      type:Boolean,
      default:false
    },
    secondary: {
      type:Boolean,
      default:false
    },    
    inverted: {
      type: Boolean,
      default: false      
    },
    small: {
      type: Boolean,
      default: false      
    },
    large: {
      type: Boolean,
      default: false      
    }         
  }
}
</script>

