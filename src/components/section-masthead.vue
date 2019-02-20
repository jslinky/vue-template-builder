<template>
  <div>
    <SiteHeader />
    <!-- Do custom property amendments -->
    <DebugToggle :module="modules.masthead" class="u-fixed">
      <div class="u-flex u-items-center">
        <CustomHeader class="u-mx-lg">Content examples</CustomHeader>
        <div class="o-buttons o-buttons--grouped">
        <CustomButton 
          :class="{'u-mb0': true, 'active': activeContent == 'example-1' }" 
          small primary inverted 
          @click.native.prevent="switchActiveContent('example-1')">
          Item 1
        </CustomButton>
        <CustomButton 
          :class="{'u-mb0': true, 'active': activeContent == 'example-2' }" 
          small primary inverted 
          @click.native.prevent="switchActiveContent('example-2')">
          Item 2
        </CustomButton>
        <CustomButton 
          :class="{'u-mb0': true, 'active': activeContent == 'example-3' }" 
          small primary inverted 
          @click.native.prevent="switchActiveContent('example-3')">
          Item 3
        </CustomButton>                    
        </div>
      </div>
    </DebugToggle>
    <ModuleComponent :module="modules.masthead" ref="example-1" v-if="activeContent == 'example-1'">
    <article data-theme="inverted" class="o-item o-item--card reverse">
      <figure class="o-item__image">
        <a href="/gentlemen/clothing/coats-and-jackets/">
          <img src="https://www.jackwills.com/on/demandware.static/-/Sites/default/dwf35f318f/2018/WK37/01_HOMEPAGE/02_FF/ends-sunday.jpg">
        </a>
        <figcaption class="o-item__content middle aligned center aligned" style="background: #485063;">
          <h1 class="o-item__hdr o-hdr o-hdr--msv center aligned">{{modules.masthead.name}}</h1>          
          <p class="u-my3 u-font-size-md u-line-height-4"> This is a default masthead example. It includes a item (card variant) module. </p>
          <div class="u-flex twelve wide u-flex-column u-flex-row-md u-max-width-4c">
            <div class="o-buttons o-buttons--stacked o-buttons--stacked-md twelve wide mobile six wide tablet six wide computer u-mx1"><h3 class="o-hdr twelve wide">Men</h3>              
              <a href="#" class="o-btn o-btn--basic">Button</a>
              <a href="#" class="o-btn o-btn--basic">Button</a>
              <a href="#" class="o-btn o-btn--basic">Button</a>
            </div>
            <div class="o-buttons o-buttons--stacked o-buttons--stacked-md twelve wide mobile six wide tablet six wide computer u-mx1 u-mt3-sm">
              <h3 class="o-hdr twelve wide">Men</h3>
              <a href="#" class="o-btn o-btn--basic">Button</a>
              <a href="#" class="o-btn o-btn--basic">Button</a>
              <a href="#" class="o-btn o-btn--basic">Button</a>
            </div>
          </div>
        </figcaption>
      </figure>
    </article>
    </ModuleComponent>  
    <ModuleComponent :module="modules.masthead" ref="example-2" v-else-if="activeContent == 'example-2'">
      <article data-theme="inverted" class="o-item o-item--tintHover twelve wide center aligned">
        <figure class="o-item__image">                      
          <img alt="Shop now" src="https://www.jackwills.com/on/demandware.static/-/Sites/default/dwff92d337/2018/WK41/01_HOMEPAGE/01_XMAS_LAUNCH/image_1.jpg" title="">                        
            <figcaption class="o-item__content o-item__content--overlay twelve wide center aligned middle aligned">
              <h2 class="o-item__hdr o-hdr o-hdr--hg-msv u-mb0">Masthead</h2>  
              <p class="u-my3 u-font-size-md u-line-height-4"> This is a default masthead example. It includes a ["center aligned"] item (--tintHover variant) module.<br /> It includes ["twelve wide", "middle aligned" "center aligned"] content </p>        
              <div class="o-buttons six wide u-max-width-6c">
                <a href="#" class="o-btn o-btn--basic">Shop Women</a>
                <a href="#" class="o-btn o-btn--basic">Shop Men</a>
              </div>
            </figcaption>
          </figure>
        </article>
    </ModuleComponent>  
    <ModuleComponent :module="modules.masthead" ref="example-3" v-else-if="activeContent == 'example-3'">
      <article data-theme="inverted" class="c-mh-relative-ex o-item twelve wide right aligned">
        <figure class="o-item__image">                      
          <img alt="Shop now" src="https://www.jackwills.com/on/demandware.static/-/Sites/default/dw1ba0bcea/2019/WK01/02_HOMEPAGE/image_1.jpg" title="">                        
          <div class="o-item__content o-item__content--overlay four wide computer five wide tablet seven wide mobile u-pr5 u-pr3-md u-px0-sm u-relative-sm u-mx-auto u-mt3-sm break_away u-max-width-4c u-justify-end u-justify-center-md u-mb4-sm">
            <img src="https://www.jackwills.com/on/demandware.static/-/Sites/default/dw6a9d3df9/2019/WK01/05_PLP/lockup.png">
            <h1 class="o-hdr o-hdr--md u-my3 u-my2-md u-mt2-sm u-max-width-3c" style="color:#363F69;">Full Screen variation with cover image</h1>
            <div class="o-buttons o-buttons--stacked o-buttons--stacked-md nine wide ten wide mobile u-max-width-4c">
              <a href="/ladies/clothing/new-in-clothing/?tagWrapper=hp_wide_1" role="button" class="o-btn o-btn--basic o-btn--breakAway" rel="nofollow">Shop Women's New In</a>
              <a href="/gentlemen/clothing/new-in-clothing/?tagWrapper=hp_wide_1" role="button" class="o-btn o-btn--basic o-btn--breakAway" rel="nofollow">Shop Men's New In</a>
            </div>
          </div>
          </figure>
        </article>
    </ModuleComponent>            
  </div>
</template>


<script>

import { editBus } from '../main'
import SiteHeader from './modules/site-header-example.vue'
import ModuleComponent from './modules/module.vue'
import DebugToggle from './modules/debug-toggle.vue'
import CustomButton from './button.vue'
import CustomHeader from './heading.vue'
// import item from './item.vue'

export default {
  // Name of this component
  name: 'sectionMasthead',
  components: {
    SiteHeader,
    ModuleComponent,
    DebugToggle,
    CustomButton,
    CustomHeader
    // item
  },
  methods: {
    switchActiveContent(contentRef) {
      this.activeContent = contentRef
      // should probably use a promise here
      setTimeout(() => { this.$refs[this.activeContent].updateHtmlToCopy() })      
    }
  },
  data() {
    return {
      activeContent: 'example-1',
      modules: {
        masthead: {
          name: 'Masthead',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: true,
            styles: ""
          },
          classes: {
            default: ['o-mh'],
            applied: [],
            available: [
              { class: ['o-mh--fullScreen', "Full screen masthead", true] },
              { class: ['o-mh--prop', "Proportional masthead", true] },
              { class: ['transparent', "For transparent navigation", true] }
            ]
          }
        }        
      }
    }
  }
}


</script>

<style scoped lang="less">


.c-debug-toggle {
  top:120px;
}


@media (max-width:48em) {
  .c-mh-relative-ex {
    --mh-item-image-position: relative;   
  }
}



</style>