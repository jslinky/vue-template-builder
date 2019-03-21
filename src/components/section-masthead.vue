<template>
<transition name="section-trans">
  <div class="c-section-masthead" :class="{'edit': this.editPanel}">    
    <section class="c-editPanel">
      <div class="c-editPanel__custProps">          
        <h2 class="o-hdr o-hdr--t o-hdr--secFont">Masthead type</h2>
        <label class="u-mt2">Please select a type</label>
        <!-- <select v-model="itemType">
          <option v-for="(item, key, index) in types">{{ key | getItemTypeDescriptions }}</option>
        </select>           -->
        <select v-model="moduleType">
          <option v-for="(type, key, index) in moduleTypes" :value="Object.keys(moduleTypes)[index]">
            {{type.label}}
          </option>
        </select>
          <div class="c-editPanel__custProps-form">
            <h2 class="o-hdr o-hdr--t o-hdr--secFont">Custom Properties</h2>
            <custom-heading
              t
              :el="'h3'"
              class="c-editPanel__heading u-mt0"
              :class="{active: editPanelSections.customPropDefault}"
              @click.native="toggleSections('customPropDefault')"
            >Default</custom-heading>         
            <div>   
              <h3 class="o-hdr">Space below masthead</h3>
              <template v-for="prop in customProps[0]">            
                <label :for="prop.name">--{{prop.name}}: <input :name="prop.name" :type="customPropsType(prop.type)" v-model="prop.value" /></label>                                                      
              </template>            
                <h3 class="o-hdr">Min height</h3>
              <template v-for="prop in customProps[1]">
                <!-- <div class="error u-hide" :key="prop.name + '-error'">You've entered a invalid format.</div> -->                       
                <label :for="prop.name">--{{prop.name}}: <input :name="prop.name" :type="customPropsType(prop.type)" v-model="prop.value" /></label>                                                      
              </template>
              <h3 class="o-hdr">Max height</h3>
              <template v-for="prop in customProps[2]">            
                <label :for="prop.name">--{{prop.name}}: <input :name="prop.name" :type="customPropsType(prop.type)" v-model="prop.value" /></label>                                                      
              </template>                  
            </div>

            <custom-heading
              t
              :el="'h3'"
              class="c-editPanel__heading u-mt0"
              :class="{active: editPanelSections.customPropProp}"
              @click.native="toggleSections('customPropProp')"
            >Proportional</custom-heading>         
            <div>   
              <h3 class="o-hdr">Proportional sizing</h3>
              <p v-if="activeContent == 'example-1' && moduleType == 'proportional'">Warning: Proportional masthead's aren't designed to work with content based on o-item--card item</p>
              <template v-for="prop in customProps[3]">            
                <label :for="prop.name">--{{prop.name}}: <input :name="prop.name" :type="customPropsType(prop.type)" v-model="prop.value" /></label>                                                      
              </template>            
            </div>

          </div>    
      </div>
    </section>
    <SiteHeader />
    <!-- Do custom property amendments -->
    <DebugToggle :module="modules.masthead" class="u-fixed">
      <div class="u-flex u-items-center">
        <!-- <CustomHeader class="u-mx-lg">Content examples</CustomHeader> -->
        <div class="o-buttons">
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
      <div class="c-icon-settings" :class="{'spin': !editPanel}" @click="toggleEditPanel()">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEASURBVEhL5ZXLCQIxFEXHvR+0DAuwD/GztQPbsAB1bwUWYRMuBQU70J2fe2AGwpsXx4EJCB44m+S9G0liJvsblvJlZKwxdtIuwFgjDOVJ2gUYY64WLXmQezmXW/mUNryQOWqopYdeMqIspBdURzJc2vIqvaY6kkFWiZX0GvAsJ7KTO5ZH6dUiWSVouktbTPhAWvryIm09GWS5jORNhg388hhTGdbSS8ZH7ALufuZ0ZVhLbyVJF/C2KLqfgvsf1tIb3aLYIXNbOFALB1/rkKuuKQfKlvTkTHrhhe41Tf5Hg6RPBdjHbiMf0gtC5tby68fOo9HnOkbSDw4k/2T+Kln2Bs4A2GHKR2iEAAAAAElFTkSuQmCC"
          class="c-icon-settings__cog"
        >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACHSURBVEhL7Y5RCoAgEES9RHcs6rjdp3aohU1Ex9XADx8smuy8KUyGZZVZnisFdpGh2GUumVOGKcEOdpFBtogNlEpqdj8wQbdcyQma5UpK1E2uxMKucsWWdJeDXwusHKe9N5fEcnyn3lzkRM0ljMBdUhN0lRwyNQFbgizFJkP9zQt2kZkMRwg3JsJK5RshxGkAAAAASUVORK5CYII="
          class="c-icon-settings__close"
        >
      </div>      
    </DebugToggle>


    <ModuleComponent 
      :module="modules.masthead" 
      ref="example-1" 
      v-if="activeContent == 'example-1'"
      :style="custProps"
      class="o-mh-props"
      :customProps="custProps"
    >
    <article data-theme="inverted" class="o-item o-item--card reverse twelve wide">
      <figure class="o-item__image">
        <a href="/gentlemen/clothing/coats-and-jackets/">
          <img src="https://www.jackwills.com/on/demandware.static/-/Sites/default/dwf35f318f/2018/WK37/01_HOMEPAGE/02_FF/ends-sunday.jpg">
        </a>
        <figcaption class="o-item__content middle aligned center aligned" style="background: #485063;">
          <h1 class="o-item__hdr o-hdr o-hdr--msv center aligned">{{modules.masthead.name}}</h1>          
          <p class="u-my3 u-font-size-md u-line-height-4"> This is a default masthead example. It includes a item (card variant) module. </p>
          <div class="u-flex twelve wide u-flex-column u-flex-row-md u-max-width-4c">
            <div class="o-buttons o-buttons--stacked o-buttons--stacked-md twelve wide mobile six wide tablet six wide computer u-mx1"><h3 class="o-hdr o-item__hdr twelve wide">Women</h3>              
              <a href="#" class="o-btn o-btn--basic">Button</a>
              <a href="#" class="o-btn o-btn--basic">Button</a>
              <a href="#" class="o-btn o-btn--basic">Button</a>
            </div>
            <div class="o-buttons o-buttons--stacked o-buttons--stacked-md twelve wide mobile six wide tablet six wide computer u-mx1 u-mt3-sm">
              <h3 class="o-hdr o-item__hdr twelve wide">Men</h3>
              <a href="#" class="o-btn o-btn--basic">Button</a>
              <a href="#" class="o-btn o-btn--basic">Button</a>
              <a href="#" class="o-btn o-btn--basic">Button</a>
            </div>
          </div>
        </figcaption>
      </figure>
    </article>
    </ModuleComponent>  
    <ModuleComponent 
      :module="modules.masthead" 
      ref="example-2" 
      v-else-if="activeContent == 'example-2'"
      :customProps="custProps"
    >
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
    <ModuleComponent 
      :module="modules.masthead" 
      ref="example-3" 
      v-else-if="activeContent == 'example-3'"
      :customProps="custProps"
    >
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

    <p class="c-module-intro" :class="{'show': moduleDetailsShow}">The masthead module is a container for above the fold hero content.  
      <button class="o-link" @click="moduleDetailsShow = !moduleDetailsShow">{{moduleDetailsShow ? 'Hide details': 'More details' }}</button>
    </p>
    <div class="o-container">
      <div>
        <p>By default, the masthead defines it’s own height (including min and max) on screens above <em>‘largeMobileBreakpoint’</em> (480px).</p>
        <p>When used in conjunction with the <em>item</em> module, it allow’s for automatic responsive image size and positioning based on the masthead size. Dynamic sizing based on the masthead also applies to the <code>o-item__artwork</code> container, which is used for SVG headings.</p>
        <div class="o-divider"></div>
        <h3 class="o-hdr o-hdr--md">Variations</h3>
        <p>The masthead module also includes two variations:-</p>

        <h3 class="o-hdr">FullScreen</h3>
        <p>Using the modifier class <code>o-mh—fullScreen</code> will enable the masthead to fill the remaining available space of the window inner height. This applies to all screen sizes. </p>
        <p>Adding a class of <code>transparent</code> will provide the additional rules required to display correctly with the transparent navigation setting.</p>
        <h3 class="o-hdr">Proportional</h3>
        <p>Using the modifier class <code>o-mh—prop</code> creates a masthead where the ‘height’ is defined by a generated pseudo element’s padding. The padding value is based on a ratio calculation. Those ratio values are defined by associated custom properties.</p>
        <div class="o-divider"></div>
        <h3 class="o-hdr o-hdr--md">Custom Properties</h3>    
        <p>The following is a list of masthead related custom properties and their default values.</p>
        <p><a class="o-link lg" @click="toggleEditPanel()" style="--fontSize: var(--small)">Edit values</a></p>

        <ul>
          <li>--mh-minHVal-m: 400;</li>
          <li>--mh-minHVal-lmb: 450;</li>
          <li>--mh-minHVal-tb: 600;</li>
          <li>--mh-minHVal-cb: 600;</li>
          <li>--mh-maxHVal-m: inherit;</li>
          <li>--mh-maxHVal-lmb: inherit;</li>
          <li>--mh-maxHVal-tb: 1500;</li>
          <li>--mh-maxHVal-cb: 1500;</li>
          <li>--mh-adjContent: 250;</li>


          <li>--mh-prop-ratio-w-val-m: 4;</li>
          <li>--mh-prop-ratio-h-val-m: 3;</li>
          <li>--mh-prop-ratio-w-val-lmb: 4;</li>
          <li>--mh-prop-ratio-h-val-lmb: 3;</li>
          <li>--mh-prop-ratio-w-val-tb: 4;</li>
          <li>--mh-prop-ratio-h-val-tb: 3;</li>
          <li>--mh-prop-ratio-w-val-cb: 16;</li>
          <li>--mh-prop-ratio-h-val-cb: 9;</li>
          <li>--mh-prop-ratio-w-val-lcb: 16;</li>
          <li>--mh-prop-ratio-h-val-lcb: 7;</li>
          <li>--mh-item-image-position: absolute;</li>
          <li>--mh-item-image-object-fit: cover;</li>
          <li>--mh-item-image-object-position: center;</li>
        </ul>
    </div>
    </div>    

    
  </div>
  </transition>
</template>


<script>

import { editBus } from '../main'
import SiteHeader from './modules/site-header-example'
import ModuleComponent from './modules/module'
import DebugToggle from './modules/debug-toggle'
import CustomButton from './button'
import CustomHeading from './heading'
import { editPanelMixins } from '../mixins/editPanel-applyClass';
// import item from './item.vue'

export default {
  // Name of this component
  name: 'sectionMasthead',
  components: {
    SiteHeader,
    ModuleComponent,
    DebugToggle,
    CustomButton,
    CustomHeading
  },
  methods: {
    switchActiveContent(contentRef) {
      this.activeContent = contentRef
      // should probably use a promise here
      setTimeout(() => { this.$refs[this.activeContent].updateHtmlToCopy() })      
    },
    customPropsType(item) {
      let value = (item == Number) ? 'number' : 'text'
      return value
    },
    customPropsList() {
      // let output = []
      // this.customProps.map(entry => output.push(`--${entry.name} : ${entry.value}`))
      // this.customPropsOutput = output
      let output = this.customPropsOutput
      this.customProps.map((entry, index) => output[`--${entry.name}`] = this.customProps[index].value)
      // this.customPropsOutput = output      
    },     
    scrollTop() {
      window.scrollTo(0, 0)
    },
    toggleEditPanel() {
      this.editPanel = !this.editPanel
      this.scrollTop();
    } 
  },
  watch: {
    moduleType: function(newVal, oldVal) {
      // related classes of type selected
      let relatedClasses = this.moduleTypes[newVal].classes.related,
      // classes available set within module - hardcoded for time sake
          moduleAvailable = this.moduleAvailables

      // set availble class on module to true
      for(let item in moduleAvailable) {
        moduleAvailable[item].class[2] = true
      }

      function enableClass(val) {
        for(let item in moduleAvailable) {
          if(val == moduleAvailable[item].class[0]) {
            moduleAvailable[item].class[2] = false
          }
        }        
      }

      // Call function which sets available class to false
      relatedClasses.forEach(element => enableClass(element))
      
      // Push related classes to applied
      this.modules.masthead.classes.applied = []
      relatedClasses.forEach(element => this.modules.masthead.classes.applied.push(element));      

    }
  },
  data() {
    return {
      editPanel: false,
      activeContent: 'example-1',
      moduleDetailsShow: false,
      moduleType: 'default',
      moduleTypes: {
        default: {
          label: 'Default',
          classes: {            
            related: []
          }
        },
        fullScreen: {
          label: 'Full Screen',
          classes: {
            related: ['o-mh--fullScreen']
          }
        },
        // fullScreenProp: {
        //   label: 'Full Screen | Proportional',
        //   classes: {
        //     related: ['o-mh--fullScreen', 'o-mh--prop']
        //   }
        // },
        fullScreenTransparent: {
          label: 'Full Screen | Transparent',
          classes: {
            related: ['o-mh--fullScreen', 'transparent']
          }
        },
        // fullScreenTransparentProp: {
        //   label: 'Full Screen | Transparent | Proportional',
        //   classes: {
        //     related: ['o-mh--fullScreen', 'transparent', 'o-mh--prop']
        //   }
        // },                
        proportional: {
          label: 'Proportional',
          classes: {
            related: ['o-mh--prop']
          }
        },
        proportionalMd: {
          label: 'Proportional Tablet Breakpoint',
          classes: {
            related: ['o-mh--prop-md']
          }
        }                       
      },
      modules: {
        masthead: {
          name: 'Masthead',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: false,
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
      },
      customPropsOutput: {},
      customProps: [
        [
          {
            name: 'mh-adjContent',
            type: Number,
            value: 250
          }
        ],        
        [
          {
            name: 'mh-minHVal-m',
            type: Number,
            value: 400
          },
          {
            name:'mh-minHVal-lmb',
            type: Number,
            value: 450
          },
          {
            name: 'mh-minHVal-tb',
            type: Number,
            value: 600
          },
          {
            name: 'mh-minHVal-cb',
            type: Number,
            value: 600
          }
        ],
        [
          {
            name: 'mh-maxHVal-m',
            type: String,
            value: 'inherit'
          },
          {
            name:'mh-maxHVal-lmb',
            type: String,
            value: 'inherit'
          },
          {
            name: 'mh-maxHVal-tb',
            type: Number,
            value: 1500
          },
          {
            name: 'mh-maxHVal-cb',
            type: Number,
            value: 1500
          }   
        ],
        [
          {
            name: 'mh-prop-ratio-w-val-m',
            type: Number,
            value: 4
          },
          {
            name:'mh-prop-ratio-h-val-m',
            type: Number,
            value: 3
          },
          {
            name: 'mh-prop-ratio-w-val-lmb',
            type: Number,
            value: 4
          },
          {
            name: 'mh-prop-ratio-w-val-lmb',
            type: Number,
            value: 3
          },
          {
            name: 'mh-prop-ratio-w-val-tb',
            type: Number,
            value: 4
          },
          {
            name:'mh-prop-ratio-h-val-tb',
            type: Number,
            value: 3
          },
          {
            name: 'mh-prop-ratio-w-val-cb',
            type: Number,
            value: 16
          },
          {
            name: 'mh-prop-ratio-h-val-cb',
            type: Number,
            value: 9
          },
          {
            name: 'mh-prop-ratio-w-val-lcb',
            type: Number,
            value: 16
          },
          {
            name:'mh-prop-ratio-h-val-lcb',
            type: Number,
            value: 7
          }                              
        ]
      ],
      // Panel Sections
      editPanelSections: {
        customPropDefault: false,
        customPropProp: false
      }      
    }
  },
  computed: {
    moduleAvailables() {
      return this.modules.masthead.classes.available
    },    
    custProps() {      
      // let result = this.customProps.reduce(function(props, entry) {
      //   props = `--${entry.name}: ` + entry.value
      //   return props
      // }, '');
      // console.log(result)
      // return result

      // let output = '';
      // output = this.customProps.map((entry) => `--${entry.name}:` + entry.value);      
      // console.log(output)
      // return output

      return {
        '--mh-adjContent': this.customProps[0][0].value,
        '--mh-minHVal-m': this.customProps[1][0].value,
        '--mh-minHVal-lmb': this.customProps[1][1].value,
        '--mh-minHVal-tb': this.customProps[1][2].value,
        '--mh-minHVal-cb': this.customProps[1][3].value,
        '--mh-maxHVal-m': this.customProps[2][0].value,
        '--mh-maxHVal-lmb': this.customProps[2][1].value,
        '--mh-maxHVal-tb': this.customProps[2][2].value,
        '--mh-maxHVal-cb': this.customProps[2][3].value,
        '--mh-prop-ratio-w-val-m': this.customProps[3][1].value,          
        '--mh-prop-ratio-h-val-m': this.customProps[3][2].value,          
        '--mh-prop-ratio-w-val-lmb': this.customProps[3][3].value,          
        '--mh-prop-ratio-w-val-tb': this.customProps[3][4].value,                      
        '--mh-prop-ratio-h-val-tb': this.customProps[3][5].value,          
        '--mh-prop-ratio-w-val-cb': this.customProps[3][6].value,          
        '--mh-prop-ratio-h-val-cb': this.customProps[3][7].value,
        '--mh-prop-ratio-w-val-lcb': this.customProps[3][8].value,
        '--mh-prop-ratio-h-val-lcb': this.customProps[3][9].value                
      }      
    }
  },
  mounted() {
    this.customPropsList()
    // console.log(this.$refs[this.activeContent].$refs['Masthead'])
    // below pretty hacky
    editBus.$on("addClass", (index, classes, action) => {
      // console.log(index, classes, action)      
      if(classes.applied.length == 1 ) {
        if(classes.applied[0] == 'o-mh--fullScreen') {
          this.moduleType = 'fullScreen'
        }        
      } else if(classes.applied.length > 1) {
        let arr = []
        Object.entries(classes.applied).forEach(element => {
          arr.push(element[1])
        });
        if(arr.includes('o-mh--fullScreen', 'transparent')) {
          this.moduleType = 'fullScreen'
        }
      }
    }); 
    editBus.$on("removeClass", (index, classes, action) => {      
      if(classes.applied.length == 0 ) {
          this.moduleType = 'default'
      }
    });        
  },
  activated() {
    this.scrollTop()
  },
  mixins: [editPanelMixins]
}


</script>

<style scoped lang="less">

.c-section-masthead {
  padding-bottom:6rem;
}

.c-debug-toggle {
  top: 33px;
  z-index: 10;
  left: 50%;
  right: auto;
  transform: translateX(-50%);  
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;  
  .o-buttons .o-btn {
    --padding: var(--tiny); 
    &:nth-child(2) {
      margin:auto 6px;
    }   
  }
}

@media (min-width:480px) {
  .c-debug-toggle {
    top: 50px;
  }  
}

.c-debug-toggle .o-btn,
.c-debug-toggle .o-btn:hover {
  --borderColor: transparent;
}

.c-debug-toggle .o-btn:hover {
  --backgroundColor:inherit;
  --color: inherit;
}

.c-editPanel > div {
  padding-left:1rem;
  padding-right:1rem;
}

.c-editPanel__custProps {
  margin-top:3rem;
}

.c-editPanel__custProps select {
  margin-bottom:1.5rem;
}

.c-editPanel__heading {
  padding:1rem 0;
}

.c-editPanel__heading.active + div {
  display: grid;
  grid-template-columns: auto 100px;  
  grid-gap:0.5rem;
  align-items:center;
  padding:0;
}

.c-editPanel__custProps-form label {
  display:contents;
  font-style: italic;
  font-weight: 300;  
}

.c-editPanel__heading,
.c-editPanel__custProps-form .o-hdr,
.c-editPanel__custProps-form p {
  grid-column-end: span 2;
}

.c-editPanel__custProps-form input {
  --inputWidth: auto;
  --inputBackground: rgba(255,255,255,.2);
  --inputPadding: .5rem;  
}

.c-icon-settings {
  position: fixed;
  right: -1rem;
  top: 2.25rem;
  z-index: 10;
  width: 20px;
  height: 20px; 
}


@media (max-width:48em) {
  .c-mh-relative-ex {
    --mh-item-image-position: relative;   
  }
}



</style>