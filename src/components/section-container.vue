<template>
  <div>
    <div class="o-container">
      <h1 class="o-hdr o-hdr--big center aligned u-mb-lg">Container</h1>
      <p>Use the class container for general puporse containers. It defines gutters and max-width for all screen sizes</p>
      <p>For a container with the maximum site width but no gutters use the class u-site-max-width in combination with u-mx-auto for centering.</p>
    </div>
    <Container>
      o-container
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
      classesApplied: [],
      classesAvailable: [
        { class: ['o-container-md', "Apply container styles at medium breakpoint", true] },
        { class: ['o-container-lg', "Apply container styles at large breakpoint", true] }
      ]
    }
  }  
}


</script>

<style lang="less">



</style>