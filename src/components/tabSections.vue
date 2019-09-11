<template>  
  <div class="o-buttons u-max-width-4c u-mx-auto u-mt3 o-buttons--grouped">
      <CustomButton
        v-for="(section, index) in sections"
        basic
        small
        @click.native.prevent="switchSections(section)"
        :class="{'active': activeSection == section}"
      >
      {{section}}
      </CustomButton>        
  </div>    
</template>

<script>

import CustomButton from "./button";

  export default {
    name: 'tabSections',
    components: {
      CustomButton
    },
    props: {
      activeSection: {
        type: String,
        default: ''
      },
      sections: {
        type: Array,
        default: []
      }      
    },
    methods: {
      switchSections(section) {
        this.$emit('update:activeSection', section)
      }
    }
  }
</script>

<style scoped>

</style>