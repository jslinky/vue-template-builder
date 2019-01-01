<template>
  <div>
    <div class="o-container">
      <h1 class="o-hdr o-hdr--big center aligned u-mb-lg">Container</h1>
      <p>Use the class container for general puporse containers. It defines gutters and max-width for all screen sizes</p>
      <p>For a container with the maximum site width but no gutters use the class u-site-max-width in combination with u-mx-auto for centering.</p>
    </div>
    <Container :module="modules.container">
      <div style="text-align:center; padding:1.5rem 0">
      <h3 class="o-hdr o-hdr--t u-mt0">o-container</h3>
      </div>
    </Container>
    <div class="o-container"><hr></div>
    <Container :module="modules.maxWidth">
      <div style="text-align:center; padding:1.5rem 0">
      <h3 class="o-hdr o-hdr--t u-mt0">u-mx-auto</h3>
      </div>
    </Container>    
  </div>
</template>


<script>

import Container from './modules/container.vue'

export default {
  // Name of this component
  name: 'sectionContainer',
  components: {
    Container
  },
  data() {
    return {
      modules: {
        container: {
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
        },
        maxWidth: {
          name: 'maxWidth',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: true,
            styles: "background:rgba(277, 7, 19, .1); min-height:30vh; margin-top:1.5rem; display: flex; justify-content: center; align-items: center"
          },
          classes: {
            default: ['u-mx-auto'],
            applied: [],
            available: [
              { class: ['u-max-width-1c', "Max width of 1 column", true] },
              { class: ['u-max-width-2c', "Max width of 2 column", true] },
              { class: ['u-max-width-3c', "Max width of 3 column", true] },
              { class: ['u-max-width-4c', "Max width of 4 column", true] },
              { class: ['u-max-width-5c', "Max width of 5 column", true] },
              { class: ['u-max-width-6c', "Max width of 6 column", true] },
              { class: ['u-max-width-7c', "Max width of 7 column", true] },
              { class: ['u-max-width-8c', "Max width of 8 column", true] },
              { class: ['u-max-width-9c', "Max width of 9 column", true] },
              { class: ['u-max-width-10c', "Max width of 10 column", true] },
              { class: ['u-max-width-11c', "Max width of 11 column", true] }
            ]
          }
        }        
      }
    }
  }  
}


</script>

<style lang="less">



</style>