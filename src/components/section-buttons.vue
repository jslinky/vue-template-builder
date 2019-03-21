<template>
  <transition name="section-trans">
    <div :class="{'invert': invert}">
      <!-- Do custom property amendments -->
      <DebugToggle :module="modules.standard" class="u-fixed">
        <input
          type="checkbox"
          :id="toogleInvert"
          :checked="invert"
          :value="invert"
          @click="toogleInvert()"
        >
        <label :for="toogleInvert">Inverted</label>
      </DebugToggle>

      <!-- Demo SVG -->
      <svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
        <symbol id="search" viewBox="0 0 20 20" width="100%" height="100%">
          <g fill="none" transform="translate(-2 -2)">
            <path
              fill="currentColor"
              d="M16.3404493,14.8801826 L21.86,20.3997333 C22.18,20.7197333 21.8533333,21.0464 21.8533333,21.0464 L21.0466667,21.8530667 C20.72,22.1797333 20.4,21.8597333 20.4,21.8597333 L14.8804493,16.3401826 C13.5301062,17.3809122 11.8376522,17.9997333 10,17.9997333 C5.58,17.9997333 2,14.4197333 2,9.99973333 C2,5.57973333 5.58,1.99973333 10,1.99973333 C14.42,1.99973333 18,5.57973333 18,9.99973333 C18,11.8373856 17.3811789,13.5298396 16.3404493,14.8801826 Z M4,9.99973333 C4,13.3130667 6.68666667,15.9997333 10,15.9997333 C13.3133333,15.9997333 16,13.3130667 16,9.99973333 C16,6.6864 13.3133333,3.99973333 10,3.99973333 C6.68666667,3.99973333 4,6.6864 4,9.99973333 Z"
            ></path>
          </g>
        </symbol>
        <symbol id="chevronLeftLight" viewBox="0 0 7 12" width="100%" height="100%">
          <g fill="none" transform="translate(-8 -6)">
            <polygon
              fill="currentColor"
              points="16.965 8.655 11.655 13.965 6.344 8.655 5.655 9.344 11.655 15.345 17.655 9.344"
              transform="rotate(90 11.655 12)"
            ></polygon>
          </g>
        </symbol>
        <symbol id="chevronRightLight" viewBox="0 0 7 12" width="100%" height="100%">
          <g fill="none" transform="translate(-9 -6)">
            <polygon
              fill="currentColor"
              points="17.655 8.655 12.345 13.965 7.034 8.655 6.345 9.344 12.345 15.345 18.345 9.344"
              transform="rotate(-90 12.345 12)"
            ></polygon>
          </g>
        </symbol>
        <symbol id="add" viewBox="0 0 14 14">
        <g fill="none" transform="translate(-5 -5)">
        <rect width="14" height="2" x="5" y="11" fill="currentColor" fill-rule="nonzero"></rect>
        <rect width="2" height="14" x="11" y="5" fill="currentColor" fill-rule="nonzero"></rect>
        </g>
        </symbol>    
        <symbol id="minus" viewBox="0 0 14 2">
        <g fill="none" transform="translate(-5 -11)">
        <rect width="14" height="2" x="5" y="11" fill="currentColor" fill-rule="nonzero"></rect>
        </g>
        </symbol>            
      </svg>

      <header class="c-header-group">
        <CustomHeader bg center aligned :class="{'inverted': invert}">Buttons</CustomHeader>
      </header>

      <section>

      <div class="u-py2 u-px4 u-px2-sm">
        <h3 class="c-module-intro o-hdr o-hdr--md" :class="{'show': moduleDetailsShow}">Button 'object' used for adhereance to style guide 
          <button class="o-link u-font-family-primary" @click="moduleDetailsShow = !moduleDetailsShow">{{moduleDetailsShow ? 'Hide details': 'More details' }}</button>
        </h3>
        <div>
          <div>
            <p>The button 'object' uses the <code>o-btn</code> class. This class sets up a default button with associcated (custom) properties.</p>
            <div class="o-divider"></div>
            <CustomHeader md center aligned>Sizing</CustomHeader>
            <p>The button object has two additional modifyer classes for smaller and larger sizes. These are <code>o-btn--sm</code> and <code>o-btn--lg</code>. <em>For demo purposes, you can toggle these using the radio buttons above</em>.</p>
            </p> 
            <div class="o-divider"></div>
            <CustomHeader md center aligned>Types</CustomHeader>            
            <p>The different button types are listed below. Apart from the <span class="o-link" style="--fontSize: initial; margin-right:0;">'link'</span> type (<code>o-link</code>), each of these are modifyer classes used in addition to the standard <code>o-btn</code> class.</p>
            <p>The link type is identical to a default button without the horizontal padding.</p>
            <ul class="u-m0 u-flex u-flex-column">
              <li class="u-inline-block"><em>Default</em></li>
              <li class="u-inline-block"><em>Plain</em></li>
              <li class="u-inline-block"><em>Basic</em></li>
              <li class="u-inline-block"><em>Primary</em></li>
              <li class="u-inline-block"><em>Link</em></li>
            </ul>
            <div class="o-divider"></div>
            <CustomHeader md center aligned>Icons</CustomHeader>  
            <p>Icons can be added to a button using the class <code>o-btn__icon</code> on the icon element (svg). The addtional classes of <code>left aligned</code> or <code>right aligned</code> will provide appropriate spacing</p>          
            <div class="o-divider"></div>
            <CustomHeader md center aligned>Button group</CustomHeader>            
            <p>When a grouping of buttons is required, use a container with the class of <code>o-buttons</code>. This will set up appropriate rules for spacing and layout at every screen size. You can see a demonstation of this by looking at the examples provided in the other panel. Click on the + or - buttons to see how different numbers of buttons react. You can also set explicit grid based column tracks using any of the following modifyer classes.
            <code class="u-p0">
            <ul class="u-ml3" style="list-style-type:initial">
              <li>two column grid-layout</li>
              <li>three column grid-layout</li>
              <li>four column grid-layout</li>
            </ul>
            </code>
             </p>
             <p>Above <em>@tabletBreakpoint</em> (> 768px), if there are three or four buttons, the collection will sit within one row. If the number of buttons is greater or less than this, they sit within a two column based layout</p>
             <p>Below the <em>@tabletBreakpoint</em> breakpoint, a two column based layout is implmented.</p>
             <h4 class="o-hdr center aligned">Stack the buttons</h4>
             <p>To stack the buttons use the modifyer class <code>o-buttons-stacked</code>. This will stack the buttons below <em>@tabletBreakpoint</em></p>
             <p>Use the modifyer class <code>o-buttons-stacked-md</code>  for screens above <em>@tabletBreakpoint</em></p>
            <!-- For sizing you can use the modifyer classes ranging from 1-7. E.g. o-header--h4 -->
            <!-- You can have dynamic font sizes which are smaller for mobile and level up on larger screen. E.g. .o-header--h3-h2 -->
        </div>
        </div>   

      </div>

      <div class="c-container-buttons u-py2 u-px4 u-px2-sm" style="text-align:center">
        <div class="u-center">
        <input
          type="radio"
          id="smallBtn-radio"
          :checked="buttonSize.small"
          :value="true"
          name="buttonSize"
          @click="setSize('sm')"
        >
        <label for="smallBtn-radio" :class="{'inverted': invert}">Small size</label>
        
        <input
          type="radio"
          id="normalBtn-radio"
          :checked="buttonSize.default"
          :value="true"
          name="buttonSize"
          @click="setSize('default')"
        >
        <label for="normalBtn-radio" :class="{'inverted': invert}">Default size</label>
        
        <input
          type="radio"
          id="largeBtn-radio"
          :checked="buttonSize.large"
          :value="true"
          name="buttonSize"
          @click="setSize('lg')"
        >
        <label for="largeBtn-radio" :class="{'inverted': invert}">Large size</label>
        </div>
        <div class="o-divider"></div>

        <CustomHeader sm center aligned class="u-mt3">Button type examples</CustomHeader>
        <p :ref="`${modules.plain.name}-desc`" :class="{'inverted': invert}" class="o-hdr u-left-align">A plain button type</p>
        <ModuleComponent :el="'a'" :ref="modules.plain.name" :module="modules.plain">Button
          <!-- <CustomButton plain :class="{'inverted': invert}">Button</CustomButton>       -->
        </ModuleComponent>

        <p :ref="`${modules.standard.name}-desc`" :class="{'inverted': invert}" class="o-hdr u-left-align">A standard button type</p>
        <ModuleComponent :el="'a'" :ref="modules.standard.name" :module="modules.standard">Button
          <!-- <CustomButton :class="{'inverted': invert}">Button</CustomButton>       -->
        </ModuleComponent>

        <p
          :ref="`${modules.secondary.name}-desc`"
          :class="{'inverted': invert}" class="o-hdr"
        >A secondary button type</p>
        <ModuleComponent :el="'a'" :ref="modules.secondary.name" :module="modules.secondary">Button
          <!-- <CustomButton secondary :class="{'inverted': invert}">Button</CustomButton>       -->
        </ModuleComponent>

        <p :ref="`${modules.basic.name}-desc`" :class="{'inverted': invert}" class="o-hdr u-left-align">A basic button type</p>
        <ModuleComponent :el="'a'" :ref="modules.basic.name" :module="modules.basic">Button
          <!-- <CustomButton basic :class="{'inverted': invert}" style="margin-bottom:1rem">Button</CustomButton>       -->
        </ModuleComponent>

        <p :ref="`${modules.primary.name}-desc`" :class="{'inverted': invert}" class="o-hdr u-left-align">A primary button type</p>
        <ModuleComponent
          :el="'a'"
          :ref="modules.primary.name"
          :module="modules.primary"
          style="background:#fff"
        >
          <svg class="o-btn__icon left aligned">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
          </svg>
          Button
          <!-- <CustomButton primary :class="{'inverted': invert}" style="margin-bottom:1rem">
          </CustomButton>-->
        </ModuleComponent>

        <div class="o-divider"></div>
        <CustomHeader sm center aligned :class="{'inverted': invert}">Directional</CustomHeader>

        <ModuleComponent :ref="modules.left.name" :module="modules.left">
          <CustomButton plain :class="{'inverted': invert}" style="margin-top:1rem">
            <svg class="o-btn__icon left aligned">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronLeftLight"></use>
            </svg>
            Button
          </CustomButton>
        </ModuleComponent>

        <ModuleComponent :ref="modules.right.name" :module="modules.right">
          <CustomButton plain :class="{'inverted': invert}" style="margin-top:1rem">
            Button
            <svg class="o-btn__icon right aligned">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronRightLight"></use>
            </svg>
          </CustomButton>
        </ModuleComponent>
        <div class="o-divider"></div>
        <div class="c-buttons-demo">
        <CustomHeader sm center aligned :class="{'inverted': invert}">Buttons</CustomHeader>
        <div class="add-remove-buttons">
          <CustomButton
            @click.native.prevent="buttonsUpdate('remove')"
            basic
            :class="{'inverted': invert, 'add-remove-buttons-btn': true, 'disabled':modules.buttons.content.length == this.modules.buttons.content.min, 'u-p2': true, 'u-circle': true}"
          >
            <svg class="o-btn__icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#minus"></use>
            </svg>
          </CustomButton>
          <CustomButton
            basic
            @click.native.prevent="buttonsUpdate('add')"
            :class="{'inverted': invert, 'add-remove-buttons-btn': true, 'disabled':modules.buttons.content.length == modules.buttons.content.max, 'u-p2': true, 'u-circle': true}"
          >
            <svg class="o-btn__icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#add"></use>
            </svg>
          </CustomButton>
        </div>
        </div>

        <ModuleComponent :ref="modules.buttons.name" :module="modules.buttons">
          <CustomHeader
            md
            center
            aligned
            :class="{'inverted': invert, 'u-my3': true}"
            v-if="modules.buttons.content.length <= this.modules.buttons.content.min"
          >Oh dear, I'm empty. Feed me</CustomHeader>
          <CustomButton
            basic
            :class="{'inverted': invert}"
            v-for="(button, index) in modules.buttons.content.length"
          >Button {{index + 1}}</CustomButton>
        </ModuleComponent>
      </div>

      </section>

    </div>
  </transition>
</template>


<script>
import { editBus } from "../main";
import ModuleComponent from "./modules/module.vue";
import DebugToggle from "./modules/debug-toggle.vue";
import CustomButton from "./button.vue";
import CustomHeader from "./heading.vue";
import { moduleSectionMixins } from "../mixins/module-section";
// import item from './item.vue'

export default {
  // Name of this component
  name: "sectionButtons",
  components: {
    ModuleComponent,
    DebugToggle,
    CustomButton,
    CustomHeader
    // item
  },
  data() {
    return {
      invert: false,
      moduleDetailsShow: false,
      moduleNames: [],
      buttonSize: {
        small: false,
        default: true,
        large: false
      },
      modules: {
        plain: {
          name: "plain",
          html: {
            show: true,
            content: ""
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: ["o-btn", "o-btn--plain"],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] },
              // { class: ['o-btn--lg', "Large button", true] }
            ]
          }
        },
        standard: {
          name: "standard",
          html: {
            show: true,
            content: ""
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: ["o-btn"],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        secondary: {
          name: "secondary",
          html: {
            show: true,
            content: ""
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: ["o-btn", "o-btn--secondary"],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        basic: {
          name: "basic",
          html: {
            show: true,
            content: ""
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: ["o-btn", "o-btn--basic"],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        primary: {
          name: "primary",
          html: {
            show: true,
            content: ""
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: ["o-btn", "o-btn--primary"],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        left: {
          name: "left",
          html: {
            show: false,
            content: ""
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        right: {
          name: "right",
          html: {
            show: false,
            content: ""
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: [],
            applied: [],
            available: [
              // { class: ['o-btn--sm', "Small button", true] }
            ]
          }
        },
        buttons: {
          name: "buttons",
          content: {
            length: 2,
            min: 0,
            max: 10
          },
          html: {
            show: false,
            content: ""
          },
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: ["o-buttons"],
            applied: [],
            available: [
              { class: ["o-buttons--stacked", "Stacked", true] },
              { class: ["o-buttons--stacked-md", "Stacked at medium", true] },
              { class: ["o-buttons--grouped", "Grouped", true] },
              { class: ["two column grid-layout", "2 column layout", true] },
              { class: ["three column grid-layout", "3 column layout", true] },
              { class: ["four column grid-layout", "4 column layout", true] }
            ]
          }
        }
      }
    };
  },
  methods: {
    setSize(size) {
      this.moduleNames.forEach(element => {
        if (element !== "buttons") {
          let classes = this.modules[element].classes,
            classesApplied = classes.applied,
            includesLarge = classesApplied.includes("o-btn--lg")
              ? classesApplied.indexOf("o-btn--lg")
              : false,
            includesSmall = classesApplied.includes("o-btn--sm")
              ? classesApplied.indexOf("o-btn--sm")
              : false;
          if (size === "default" && typeof includesLarge === "number") {
            classes.applied.splice(includesLarge, 1);
          } else if (size === "default" && typeof includesSmall === "number") {
            classes.applied.splice(includesSmall, 1);
          } else if (size === "lg" && includesLarge === false) {
            if (typeof includesSmall === "number") {
              classes.applied.splice(includesSmall, 1);
            }
            classes.applied.push("o-btn--lg");
          } else if (size === "sm" && includesSmall === false) {
            if (typeof includesLarge === "number") {
              classes.applied.splice(includesLarge, 1);
            }
            classes.applied.push("o-btn--sm");
          }
        }
      });
    },
    buttonsUpdate(action) {
      if (
        action == "add" &&
        this.modules.buttons.content.length < this.modules.buttons.content.max
      ) {
        this.modules.buttons.content.length += 1;
      } else if (
        action == "remove" &&
        this.modules.buttons.content.length > this.modules.buttons.content.min
      ) {
        this.modules.buttons.content.length -= 1;
      }
      setTimeout(() => {
        this.$refs.buttons.updateHtmlToCopy();
      });
    }
  },
  created() {
    this.pushModuleNames();
    // See mixins
  },
  mounted() {
    if (this.invert) {
      // Works but throwing an error undefined
      this.toogleModuleInvert();
    }
    if(window.innerWidth > 1100) {
      this.moduleDetailsShow = true;
    }     
  },
  mixins: [moduleSectionMixins]
};
</script>

<style scoped lang="less">
// body is outside scope of this component
.invert,
.invert .c-header-group {
  background-color: #101a31;
}

.invert .c-debug-toggle label {
  color: #fff;
}

.add-remove-buttons {
  max-width: 100px;
  margin-left:var(--spacing);
}

.add-remove-buttons-btn {
  padding-left: 0.5em;
  padding-right: 0.5em;
}

section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));  
  grid-gap:0 24px;
  margin-bottom:4rem;
}

section > div:first-of-type {
  border-right:1px solid var(--borderColor);
}

section > div:first-of-type code {
  white-space: nowrap;
}

.c-buttons-demo {
  display: flex;
  justify-content: center;
  align-items:center;
  margin-bottom:var(--spacing);
}

.c-buttons-demo + div .o-buttons {
  margin-bottom:var(--spacing);
}


</style>