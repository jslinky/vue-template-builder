<template>
  <transition name="section-trans">
    <div>
      <header class="c-header-group">
      <CustomHeader bg center aligned>Colours</CustomHeader>
    </header>
    <section class="c-colours-section">
      <div v-for="colour in colours" :data-theme="colour.inverted ? 'inverted' : 'none'" :class="`o-item u-bg-color-${colour.class}`" :key="colour.class" :ref="colour.class">
        <div>{{colour.class}}</div>
        <div>{{colour.hex}}</div>
        <div>{{colour.rgb}}</div>
      </div>    
    </section>
    </div>
  </transition>
</template>

<script>

import CustomHeader from './heading'

export default {
  name: 'sectionColours',
  components: {
    CustomHeader
  },
  data() {
    return {
      colours: [
        {
          class: 'jw-navy-digital',
          hex: '#101A31',
          rgb: '16, 26, 50',
          inverted: true
        },
        {
          class: 'jw-navy',
          hex: '#1F2A44',
          rgb: '31, 42, 68',
          inverted: true          
        },
        {
          class: 'jw-pink',
          hex: '#F09EB6',
          rgb: '240, 158, 182',
          inverted: false          
        },
        {
          class: 'jw-red',
          hex: '#C00D1E',
          rgb: '192, 13, 30',
          inverted: true          
        },
        // {
        //   class: 'primaryColor',
        //   hex: '#101A31',
        //   rgb: '16, 26, 50'          
        // },
        // {
        //   class: 'secondaryColor',
        //   hex: '#101A31',
        //   rgb: '16, 26, 50'          
        // },
        {
          class: 'jw-navy-shade1',
          hex: '#353F56',
          rgb: '53, 63, 86',
          inverted: true          
        },
        {
          class: 'jw-navy-shade2',
          hex: '#8F94A1',
          rgb: '143, 148, 161',
          inverted: true          
        },
        {
          class: 'jw-navy-shade3',
          hex: '#BBBFC6',
          rgb: '187, 191, 198',
          inverted: false          
        },
        {
          class: 'jw-navy-shade4',
          hex: '#D2D4DA',
          rgb: '210, 212, 218',
          inverted: false          
        },
        {
          class: 'jw-navy-shade5',
          hex: '#EFF0F2',
          rgb: '239, 240, 242',
          inverted: false          
        }              
      ]
    }
  },
  mounted() {
    let styleComp = getComputedStyle(this.$refs['jw-navy-shade5'][0])
    console.log(styleComp.getPropertyValue('background-color'))
  }
}
</script>

<style lang="less" scoped>

.c-colours-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  > div {
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    min-height:300px;
  }
}


</style>
