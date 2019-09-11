<template>
  <transition name="section-trans">
    <div>
      <header class="c-header-group">
      <CustomHeader bg center aligned>Colours</CustomHeader>
    </header>
    <!-- Tabs -->
    <tabSections :activeSection.sync="section" :sections="['colours', 'ultilities']" />    
    <section v-if="section == 'colours'" class="c-colours-section u-mt2">
      <div v-for="colour in colours" :data-theme="colour.inverted ? 'inverted' : 'none'" :class="`o-item u-bg-color-${colour.class}`" :key="colour.class" :ref="colour.class">
        <div>{{colour.class}}</div>
        <div>{{colour.hex}}</div>
        <div>{{colour.rgb}}</div>
      </div>    
    </section>

    <section class="c-section-ulti o-container" v-else-if="section == 'ultilities'">
      <select v-model="ultils.active" class="u-max-width-2c u-mx-auto u-my2">
        <option value="default">Default</option>
        <option value="sm">sm classes</option>
        <option value="md">md classes</option>
        <option value="lg">lg classes</option>
      </select>
      <code class="u-p0">
        <div>
          <!-- Col 1 -->
          <div>
            <h4 class="o-hdr o-hdr--t o-hdr--secFont u-mt3">Color</h4>
            <ultilityClass :collection ="ultilsColor" :active="ultils.active" :prefix="'u-color-'" />
          </div>
          <!-- Col 2 -->
          <div>         
            <h4 class="o-hdr o-hdr--t o-hdr--secFont u-mt3">Background Color</h4>
            <ultilityClass :collection ="ultilsColor" :active="ultils.active" :prefix="'u-bg-color-'" />   
          </div>
          <!-- Col 3 -->
          <div>
            <h4 class="o-hdr o-hdr--t o-hdr--secFont u-mt3">Border Color</h4>
            <ultilityClass :collection ="ultilsColor" :active="ultils.active" :prefix="'u-border-color-'" />
          </div> 

        </div>
      </code>
    </section> 


    </div>
  </transition>
</template>

<script>

import CustomHeader from './heading'
import tabSections from "./tabSections"
import { moduleSectionMixins } from "../mixins/module-section"
import ultilityClass from "./ultilityClass"
import { colorUlt } from "./cssClasses/color"

export default {
  name: 'sectionColours',
  components: {
    CustomHeader,
    tabSections,
    ultilityClass
  },
  data() {
    return {
      section: 'colours',
      ultils: {
        active: 'default',
        colorUlt
      },      
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
  computed: {
    ultilsColor() {
      return this.ultils.colorUlt.filter((item) => this.ultilGroup(item))
    }
  },  
  mounted() {
    let styleComp = getComputedStyle(this.$refs['jw-navy-shade5'][0])
    console.log(styleComp.getPropertyValue('background-color'))
  },
  mixins: [moduleSectionMixins]
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
