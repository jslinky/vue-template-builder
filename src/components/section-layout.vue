<template>
  <transition name="section-trans">
    <div>
      <header class="c-header-group">
      <CustomHeader bg center aligned>Layout</CustomHeader>
    </header>          
      <div class="o-buttons u-max-width-4c u-mx-auto u-mt3 o-buttons--grouped">
          <CustomButton
            basic
            small
            @click.native.prevent="switchSections('container')"
            :class="{'active': section == 'container'}"
          >
          Container
          </CustomButton>        
          <CustomButton
            basic
            small
            @click.native.prevent="switchSections('grid')"
            :class="{'active': section == 'grid'}"
          >
          Grid
          </CustomButton>        
      </div>
      <CustomHeader md center aligned class="u-mt3">{{section | capitalize}}</CustomHeader>
      <section v-if="section == 'container'">  
        <div> 
          <p class="c-module-intro" :class="{'show': moduleDetailsShow}">The container object applies rules around wrapping content 
            <button class="o-link" @click="moduleDetailsShow = !moduleDetailsShow">{{moduleDetailsShow ? 'Hide details': 'More details' }}</button>
          </p>
          <div>
            <div>
              <p>The <em>container</em> 'object' uses the class <code>o-container</code>, in which gutters and max-width for all screen sizes are defined.</p>
              <p>You can also apply <em>container</em> rules only at medium and large breakpoints, using classes <code>o-container-md</code> and <code>o-container-lg</code>.
              <p>If you need a 'container' without gutter rules, use the appropiate width class (e.g <code>twelve wide</code>) in conjunction with <code>u-mx-auto</code> (sets horizontal margins to auto) and the <code>u-max-width-<em>n</em>c</code> ultility classes. See below for examples.</p>              
            </div>
          </div>
        </div>

      <ModuleComponent :module="modules.container">
        <div style="text-align:center; padding:1.5rem 0">
        <h3 class="o-hdr o-hdr--t u-my2 center aligned">o-container</h3>
        </div>
      </ModuleComponent>
      <div class="o-divider"></div>
      <ModuleComponent :module="modules.maxWidth">
        <h3 class="o-hdr o-hdr--t u-my2 center aligned">u-mx-auto</h3>
      </ModuleComponent>    
      </section>
      <section v-else-if="section == 'grid'">
        <div> 
          <p class="c-module-intro" :class="{'show': moduleDetailsShow}">The grid collection and more 
            <button class="o-link" @click="moduleDetailsShow = !moduleDetailsShow">{{moduleDetailsShow ? 'Hide details': 'More details' }}</button>
          </p>
          <div>
            <div>
              <p>The <em>grid</em> 'collection' is a seperate module (css file) that can be linked to when required. It contains a robust set of classes to use. It is based on a twelve column layout.</p>
              
              <p>For general purpose layouts, it's preferable that the use of flex ultility classes or custom written css grid is used over this collection, for file size and flexibility benefits.</p> 
            </div>
          </div>
        </div>


<section class="o-section u-center o-container">
      <h2 class="o-header o-header--h5 o-header--underline">Grid</h2>
      <p class="u-font-size-md u-my0">A grid layout can be defined with a <span class="u-color-primaryColor u-font-family-monospace u-color-primaryColor">grid</span> wrapper element.</p>
      <p class="u-font-size-md u-my0">Uniform column widths can also be defined on a grid container by adding <span class="u-color-primaryColor u-font-family-monospace u-color-primaryColor">[number] wide column.</span></p>
      <p class="u-font-size-sm u-my0">The grid system is based on a twelve column grid layout.</p>      
      <div class="three column wide grid debug ">
        <div class="column"><p class="u-border">Column</p></div>
        <div class="column"><p class="u-border">Column</p></div>
        <div class="column"><p class="u-border">Column</p></div>
      </div>

      <h3 class="o-header o-header--h6">Related grid element classes</h3>
      <ul class="u-font-size-md u-inline-block u-left-align u-color-primaryColor u-font-family-monospace u-color-primaryColor" style="list-style: disc;">
          <li>relaxed</li>
          <li>very relaxed</li>
          <li>stackable</li>
          <li>padded</li>
          <li>gutterless</li>
          <li>equal width</li>
          <li>horizontally padded</li>
          <li>vertically padded</li>
          <li>left floated</li>
          <li>right floated</li>
          <li>top aligned</li>
          <li>middle aligned</li>
          <li>bottom aligned</li>
          <li>left aligned</li>
          <li>right aligned</li>
          <li>center aligned</li>
          <li>justified</li>
          <li>centered</li>
        </ul>

        <h2 class="o-header o-header--h5 o-header--underline u-block">Columns</h2>
        <p class="u-font-size-md u-my0">Columns are defined with a class of <span class="u-color-primaryColor u-font-family-monospace u-color-primaryColor">column</span> and should be direct descendants of a grid or row wrapper.</p>
        <p class="u-font-size-md u-mt0">Columns widths can be defined on the column element by using the following convention <span class="u-color-primaryColor u-font-family-monospace u-color-primaryColor">[number] wide</span> class</p>
        <p class="u-font-size-sm u-mt0">You can also arbitrary set column widths outside of a grid container or in any context by using the following convention. <span class="u-color-primaryColor u-font-family-monospace u-color-primaryColor">column--[number digit]</span> (1-12). These also include screen size based variants:- <span class="u-color-primaryColor u-font-family-monospace u-color-primaryColor">column-sm--[number digit]</span>, <span class="u-color-primaryColor u-font-family-monospace u-color-primaryColor">column-md--[number digit]</span>. See less/ultility/grid.less for more.</p>
        <div class="grid debug ">
          <div class="three wide column"><p class="u-border">three wide</p></div>
          <div class="three wide column"><p class="u-border">three wide</p></div>
          <div class="three wide column"><p class="u-border">three wide</p></div>
          <div class="three wide column"><p class="u-border">three wide</p></div>
          <div class="two wide column"><p class="u-border">two wide</p></div>
          <div class="six wide column"><p class="u-border">six wide</p></div>
          <div class="four wide column"><p class="u-border">four wide</p></div>
        </div>

        <h3 class="o-header o-header--h6">Related column element classes</h3>
        <ul class="u-font-size-md u-inline-block u-left-align u-color-primaryColor u-font-family-monospace u-color-primaryColor" style="list-style: disc;">
            <li>left floated</li>
            <li>right floated</li>
            <li>top aligned</li>
            <li>middle aligned</li>
            <li>bottom aligned</li>
            <li>left aligned</li>
            <li>right aligned</li>
            <li>center aligned</li>
            <li>justified</li>
            <li>centered</li>
          </ul>

      <div class="u-border-left u-border-right u-mt3">
      <h3 class="o-header o-header--h6">Rows</h3>
      <p class="u-font-size-md u-my0">Rows are groups of columns which are aligned horizontally.</p>

      <p class="u-font-size-md u-my0">Rows can either be explicit, marked with an additional row element, or implicit, automatically occurring when no more space is left in a previous row.</p>

      <p class="u-font-size-md u-my0">After each group of columns vertical spacing is added to separate each group of columns, creating vertical rhythm.</p>
      <div class="four column grid debug ">
       <div class="row">
         <div class="column"><p class="u-border">column</p></div>
         <div class="column"><p class="u-border">column</p></div>
         <div class="column"><p class="u-border">column</p></div>
       </div>
       <div class="column"><p class="u-border">column</p></div>
       <div class="column"><p class="u-border">column</p></div>
       <div class="column"><p class="u-border">column</p></div>
       <div class="column"><p class="u-border">column</p></div>
      </div>

      <h3 class="o-header o-header--h6">Negative Margins</h3>
      <p class="u-font-size-md u-my0">Since all grid columns include gutters, grids use negative margins to make sure that the first and last columns sit flush with content outside the grid.</p>

      <p class="u-font-size-md u-mt0">In some cases, like when a column or row is colored, you may want to avoid using negative margins. You can do this by using a padded grid variation.</p>

      <div class="padded grid debug">
        <div class="three column row u-bg-color-primaryColor">
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
        </div>
        <div class="eight column row">
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
        </div>
      </div>
    </div>

    <h3 class="o-header o-header--h6">Nested grids</h3>

    <div class="two column grid u-py3">
      <div class="column u-border">
        <div class="three column grid">
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
        </div>
      </div>
      <div class="column u-border"><p class="u-border">column</p></div>
      <div class="column u-border"><p class="u-border">column</p></div>
      <div class="column u-border">
        <div class="grid">
          <div class="six wide column"><p class="u-border">column</p></div>
          <div class="six wide column"><p class="u-border">column</p></div>
        </div>
      </div>
    </div>

    <h3 class="o-header o-header--h6">Clearing content</h3>
    <p class="u-font-size-md u-mt0">Row wrappers will automatically clear previous columns, making them useful when using floated variations.</p>
    <div class="grid debug ">
      <div class="four column row">
        <div class="left floated column"><p class="u-border">column</p></div>
        <div class="right floated column"><p class="u-border">column</p></div>
      </div>
      <div class="row">
        <div class="three wide column"><p class="u-border">column</p></div>
        <div class="five wide column"><p class="u-border">column</p></div>
        <div class="four wide column"><p class="u-border">column</p></div>
      </div>
    </div>

    <h3 class="o-header o-header--h6">Reponsive Grid</h3>
    <p class="u-font-size-md u-mt0">Columns (and rows) can have their width defined at multiple breakpoints. Use the convention <span class="u-font-family-primary">[number] wide [screen]</span></p>
    <div class="grid debug ">
      <div class="six wide mobile six wide tablet two wide computer column"><p class="u-border">column</p></div>
      <div class="six wide mobile six wide tablet two wide computer column"><p class="u-border">column</p></div>
      <div class="four wide mobile six wide tablet two wide computer column"><p class="u-border">column</p></div>
      <div class="four wide mobile six wide tablet two wide computer column"><p class="u-border">column</p></div>
      <div class="four wide mobile twelve wide tablet four wide computer column"><p class="u-border">column</p></div>
    </div>

    <h3 class="o-header o-header--h6">Equal Width Grid</h3>
    <p class="u-font-size-md u-mt0">Make all columns equal width <span class="u-font-family-primary">equal width</span></p>
    <div class="equal width grid debug ">
      <div class="column"><p class="u-border">column</p></div>
      <div class="column"><p class="u-border">column</p></div>
      <div class="column"><p class="u-border">column</p></div>
      <div class="column"><p class="u-border">column</p></div>
      <div class="column"><p class="u-border">column</p></div>
    </div>

    <h3 class="o-header o-header--h6">Stackable Grid</h3>
    <p class="u-font-size-md u-mt0">Make columns stack on mobile (below 768px). Use <span class="u-font-family-primary">stackable</span></p>
    <div class="equal width stackable grid debug ">
      <div class="column"><p class="u-border">column</p></div>
      <div class="column"><p class="u-border">column</p></div>
      <div class="column"><p class="u-border">column</p></div>
    </div>

    <h3 class="o-header o-header--h6">Gutterless Grid</h3>
    <p class="u-font-size-md u-mt0">Use <span class="u-font-family-primary">gutterless</span></p>
    <div class="grid gutterless ">
        <div class="column">
          <p class="u-border">Column 1</p>
        </div>
        <div class="column">
          <p class="u-border">Column 2</p>
        </div>
        <div class="column">
          <p class="u-border">Column 3</p>
        </div>
        <div class="column">
          <p class="u-border">Column 4</p>
        </div>
        <div class="column">
          <p class="u-border">Column 5</p>
        </div>
        <div class="column">
          <p class="u-border">Column 6</p>
        </div>
        <div class="column">
          <p class="u-border">Column 7</p>
        </div>
        <div class="column">
          <p class="u-border">Column 8</p>
        </div>
        <div class="column">
          <p class="u-border">Column 9</p>
        </div>
        <div class="column">
          <p class="u-border">Column 10</p>
        </div>
        <div class="column">
          <p class="u-border">Column 11</p>
        </div>
        <div class="column">
          <p class="u-border">Column 12</p>
        </div>
      </div>

      <h3 class="o-header o-header--h6">Relaxed Grid</h3>
      <p class="u-font-size-md u-mt0">Use <span class="u-font-family-primary">relaxed</span></p>
      <div class="relaxed equal width grid ">
          <div class="column">
            <p class="u-border">Column 1</p>
          </div>
          <div class="column">
            <p class="u-border">Column 2</p>
          </div>
          <div class="column">
            <p class="u-border">Column 3</p>
          </div>
          <div class="column">
            <p class="u-border">Column 4</p>
          </div>
          <div class="column">
            <p class="u-border">Column 5</p>
          </div>
          <div class="column">
            <p class="u-border">Column 6</p>
          </div>
        </div>

        <h3 class="o-header o-header--h6">Very Relaxed Grid</h3>
        <p class="u-font-size-md u-mt0">Use <span class="u-font-family-primary">very relaxed</span></p>
        <div class="very relaxed equal width grid ">
            <div class="column">
              <p class="u-border">Column 1</p>
            </div>
            <div class="column">
              <p class="u-border">Column 2</p>
            </div>
            <div class="column">
              <p class="u-border">Column 3</p>
            </div>
          </div>


    </section>        

      </section>
    </div>    
  </transition>
</template>


<script>

import ModuleComponent from './modules/module.vue'
import CustomHeader from './heading'
import CustomButton from "./button";

export default {
  // Name of this component
  name: 'sectionLayout',
  components: {
    ModuleComponent,
    CustomHeader,
    CustomButton
  },
  data() {
    return {
      moduleDetailsShow: false,
      section: 'container',
      modules: {
        container: {
          name: 'Container',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: true,
            styles: "background:rgba(277, 7, 19, .1); min-height:150px; margin-top:1.5rem; display: flex; justify-content: center; align-items: center"
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
            styles: "background:rgba(277, 7, 19, .1); min-height:150px; margin-top:1.5rem; display: flex; justify-content: center; align-items: center"
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
  },
  methods: {
    switchSections(section) {
      this.section = section;
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}


</script>

<style lang="less">



</style>