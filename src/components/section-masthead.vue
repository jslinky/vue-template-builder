<template>
  <div>
    <!-- Do multiple template switcher -->
    <!-- Do custom property amendments -->
    <DebugToggle :module="modules.masthead" class="u-fixed">
      <div class="o-buttons o-buttons--grouped">
      <CustomButton 
        :class="{'u-mb0': true, 'active': activeContent == 'example-1' }" 
        small primary inverted 
        @click.native.prevent="activeContent = 'example-1'">
        Example 1
      </CustomButton>
      <CustomButton 
        :class="{'u-mb0': true, 'active': activeContent == 'example-2' }" 
        small primary inverted 
        @click.native.prevent="activeContent = 'example-2'">
        Example 2
      </CustomButton>            
      </div>
    </DebugToggle>
    <ModuleComponent :module="modules.masthead" ref="example-1" v-if="activeContent == 'example-1'">
      <!-- make this item module -->
    <!-- <item v-for="(item, index) in items" :itemInfo="item" :itemIndex="index" />  -->
    <article data-theme="inverted" class="o-item o-item--card reverse">
      <figure class="o-item__image">
        <a href="/gentlemen/clothing/coats-and-jackets/">
          <img src="https://www.jackwills.com/on/demandware.static/-/Sites/default/dwf35f318f/2018/WK37/01_HOMEPAGE/02_FF/ends-sunday.jpg">
        </a>
        <figcaption class="o-item__content middle aligned center aligned" style="background: #485063;">
          <h1 class="o-hdr o-hdr--big center aligned u-mb-lg">{{modules.masthead.name}}</h1>          
          <!-- <div class="o-item__artwork eight wide">
            <img alt="Buy 2 shirts save %20" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwf7167aef/2017/WK10/04_MEGADROP/tshirt_promo_uk.svg" title="Buy 2 shirts save 20%">
          </div> -->
          <div class="o-buttons u-mt-lg ten wide">
            <h3 class="six wide u-mb-sm u-mt0">Women</h3>
            <h3 class="six wide u-mb-sm u-mt0">Mens</h3>
            <a href="#" class="o-btn o-btn--basic">Gill Sans Caps</a>
            <a href="#" class="o-btn o-btn--basic">Gill Sans Caps</a>
            <a href="#" class="o-btn o-btn--basic">Gill Sans Caps</a>
            <a href="#" class="o-btn o-btn--basic">Gill Sans Caps</a>
            <a href="#" class="o-btn o-btn--basic">Gill Sans Caps</a>
            <a href="#" class="o-btn o-btn--basic">Gill Sans Caps</a>
            <a href="#" class="o-btn o-btn--basic">Gill Sans Caps</a>
            <a href="#" class="o-btn o-btn--basic">Gill Sans Caps</a>                          
          </div>
        </figcaption>
      </figure>
    </article>
    </ModuleComponent>  
    <ModuleComponent :module="modules.masthead" ref="example-2" v-else-if="activeContent == 'example-2'">
      <article data-theme="inverted" class="o-item twelve wide center aligned">
        <figure class="o-item__image">                      
          <img alt="Shop now" src="https://www.jackwills.com/on/demandware.static/-/Sites/default/dwff92d337/2018/WK41/01_HOMEPAGE/01_XMAS_LAUNCH/image_1.jpg" title="">                        
            <figcaption class="o-item__content eight wide center aligned middle aligned">
              <h2 class="o-item__hdr o-hdr o-hdr--hg-msv u-mb0">No hover tint | Buttons as links</h2>          
              <p>["center aligned"] item with ["eight wide", "left aligned"] content</p>              
              <div class="o-buttons six wide">
                <a href="#" class="o-btn o-btn--basic">Shop Women</a>
                <a href="#" class="o-btn o-btn--basic">Shop Men</a>
              </div>
            </figcaption>
          </figure>
        </article>
    </ModuleComponent>        
  </div>
</template>


<script>

import ModuleComponent from './modules/module.vue'
import DebugToggle from './modules/debug-toggle.vue'
import CustomButton from './button.vue'
import CustomHeader from './heading.vue'
// import item from './item.vue'

export default {
  // Name of this component
  name: 'sectionMasthead',
  components: {
    ModuleComponent,
    DebugToggle,
    CustomButton,
    CustomHeader
    // item
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

<style lang="less">



</style>