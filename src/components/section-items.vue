<template>
  <div
    class="c-section-items"
    style="margin-bottom:5rem"
    :class="{edit: editPanel.state}"
  >
    <header class="c-header-group">
      <CustomHeader
        bg
        center
        aligned        
        @click.native.prevent="editItem(modules.itemOne.name + '-panel')"
      >Items</CustomHeader>      
      <div class="c-icon-settings" :class="{'spin': !editPanel.state}">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEASURBVEhL5ZXLCQIxFEXHvR+0DAuwD/GztQPbsAB1bwUWYRMuBQU70J2fe2AGwpsXx4EJCB44m+S9G0liJvsblvJlZKwxdtIuwFgjDOVJ2gUYY64WLXmQezmXW/mUNryQOWqopYdeMqIspBdURzJc2vIqvaY6kkFWiZX0GvAsJ7KTO5ZH6dUiWSVouktbTPhAWvryIm09GWS5jORNhg388hhTGdbSS8ZH7ALufuZ0ZVhLbyVJF/C2KLqfgvsf1tIb3aLYIXNbOFALB1/rkKuuKQfKlvTkTHrhhe41Tf5Hg6RPBdjHbiMf0gtC5tby68fOo9HnOkbSDw4k/2T+Kln2Bs4A2GHKR2iEAAAAAElFTkSuQmCC"
          class="c-icon-settings__cog"
        >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACHSURBVEhL7Y5RCoAgEES9RHcs6rjdp3aohU1Ex9XADx8smuy8KUyGZZVZnisFdpGh2GUumVOGKcEOdpFBtogNlEpqdj8wQbdcyQma5UpK1E2uxMKucsWWdJeDXwusHKe9N5fEcnyn3lzkRM0ljMBdUhN0lRwyNQFbgizFJkP9zQt2kZkMRwg3JsJK5RshxGkAAAAASUVORK5CYII="
          class="c-icon-settings__close"
        >
      </div>
    </header>

    <div class="o-container">

    <p class="c-module-intro" :class="{'show': moduleDetailsShow}">Items are the building blocks of the site. There use is ideally suited to a image and related content. 
      <button class="o-link" @click="moduleDetailsShow = !moduleDetailsShow">{{moduleDetailsShow ? 'Hide details': 'More details' }}</button>
    </p>
    <div>
      <div>
        <p>The container class for an item is 'o-item', in which contains a image container 'o-item__image'.</p>
        <p>The associated content sits within a container 'o-item__content'</p>
    </div>
    </div>

    <DebugToggle :module="modules.itemOne" class="u-fixed">
      <input
        type="checkbox"
        :id="toogleInvert"
        :checked="invert"
        :value="invert"
        @click="invertItem($event.target.id)"
      >
      <label :for="toogleInvert">Inverted</label>
    </DebugToggle>

    <section class="c-section-items__moduleContainer">
      <div class="c-section-items__modulePanel">
        <editItem :items="moduleArray" :editPanel="editPanel" ref="editItemType"></editItem>
        <editPanel
          :items="moduleArray"
          :editPanel="editPanel"
          :ref="modules.itemOne.name + '-panel'"
        />
      </div>
      <div class="c-section-items__module">
        <ModuleComponent :module="modules.itemOne" :ref="modules.itemOne.name">
          <itemImage
            :img="modules.itemOne.image"
            :content="modules.itemOne.content"
            :headerSwap="modules.itemOne.headerSwap"
            :imageSwap="modules.itemOne.imageSwap"
          />
          <!-- <div class="o-item" :class="classesApplied" :id="itemInfo.id">
                <itemImage :img="itemInfo.image" :content="itemInfo.content" /> 
          </div>-->
        </ModuleComponent>
      </div>
    </section>
    </div>
  </div>
</template>


<script>
import { editBus } from "../main";
import { itemClass } from "./itemClass";
import {
  itemCard,
  // itemHeaderSwap,
  itemImageSwap,
  itemOverlay
} from "./item-types/all";
import item from "./item.vue";
import itemImage from "./itemImage.vue";
import itemContent from "./itemContent.vue";
import ModuleComponent from "./modules/module.vue";
import { moduleSectionMixins } from "../mixins/module-section";
import { editPanelMixins } from "../mixins/editPanel-applyClass";
import CustomHeader from "./heading.vue";
import editItem from "./editItem.vue";
import editPanel from "./editPanel.vue";
import DebugToggle from "./modules/debug-toggle.vue";

export default {
  // Name of this component
  name: "sectionItems",
  components: {
    item,
    itemImage,
    itemContent,
    ModuleComponent,
    CustomHeader,
    editItem,
    editPanel,
    DebugToggle
  },
  data() {
    return {
      invert: false,
      moduleDetailsShow: false,
      editPanel: {
        state: false,
        itemIndex: 0
      },
      itemClass: "",
      moduleNames: [],
      moduleArray: [],
      modulePath: "",
      lastAppliedIndex: [],
      modules: {
        itemOne: {
          name: "itemOne",
          imageSwap: false,
          headerSwap: false,
          html: {
            show: false,
            content: ""
          },
          edit: true,
          inverted: false,
          debug: {
            show: false,
            styles: ""
          },
          classes: {
            default: ["o-item"],
            applied: [],
            available: []
          },
          content: {
            classes: {
              default: ["o-item__content"],
              applied: [],
              available: []
            }
          },
          image: {
            responsive: {
              status: false,
              sizes: {
                mobile: {},
                largeMobile: {},
                tablet: {},
                computer: {}
              }
            },
            link: false,
            linkUrl: "",
            url:
              "https://www.jackwills.com/on/demandware.static/-/Sites/default/dw0c9b5508/2018/WK38/01_MEGADROP/MD_Gifting.jpg",
            mobile: {},
            largeMobile: {},
            tablet: {},
            computer: {},
            classes: {}
          }
        }
      }
    };
  },
  computed: {
    moduleOne() {
      return this.modules.itemOne;
    }
  },
  methods: {
    invertItem() {
      for (let key in this.modules) {
        this.setInvert(key);
      }
    },
    setInvert(key, targetId) {
      if (targetId) {
        console.log(targetId);
      }
      let elRef = this.$refs[key].$refs[key];
      this.invert = !this.invert;
      // if (!this.invert && this.$refs[key].module.inverted) {
      //   elRef.dataset.theme = "inverted";
      //   // this.invert = true;
      // } else {
      //   elRef.removeAttribute("data-theme");
      //   // this.invert = false;
      // }
      this.toggleDataTheme(elRef, this.invert);
      setTimeout(() => {
        this.$refs[key].updateHtmlToCopy();
      });
    },
    toggleDataTheme(el, bool) {
      if (bool) {
        el.dataset.theme = "inverted";
      } else {
        el.removeAttribute("data-theme");
      }
    },
    editItem(name) {
      this.$refs[name].editPanel.state = !this.$refs[name].editPanel.state;
    },
    itemProps(index) {
      return this.modules[index];
    },
    // Set a reactive copy of object class in data
    createItem() {
      this.itemClass = this.$extendObj(itemClass);
    },
    // This initialises the function chain which copies classes from global itemClass
    // and applies them to each instance of a item
    initSetClasses(modules, itemClass, path) {
      if (path.includes("classes")) {
        // Gets classes from itemClass
        let itemClassPath = this.returnAssociatedClasses(itemClass, path);
        // Destructures them to scoped vars
        let { applied, available, alignment, width } = this.$stringObj(
          itemClassPath
        );
        // Sets the classes on each module instance
        for (let key in modules) {
          this.setAssociatedClasses(modules[key], `${path}.applied`, applied);
          this.setAssociatedClasses(
            modules[key],
            `${path}.available`,
            available
          );
          this.setAssociatedClasses(
            modules[key],
            `${path}.alignment`,
            alignment
          );
          this.setAssociatedClasses(modules[key], `${path}.width`, width);
        }
      } else {
        let contentPath = this.returnAssociatedClasses(itemClass, path);
        for (let key in modules) {
          this.setAssociatedClasses(
            modules[key],
            `${path}`,
            this.$stringObj(contentPath)
          );
        }
      }
    },
    returnAssociatedClasses(obj, path) {
      path = path.split(".").reduce(function(finalPath, currentValue, index) {
        finalPath = finalPath[currentValue];
        return finalPath;
      }, obj);
      return path;
    },
    setAssociatedClasses(obj, path, value) {
      let p = path.split("."),
        pLength = p.length;
      for (let i = 0; i < pLength - 1; i++) {
        let string = p[i];
        if (!obj[string]) {
          obj[string] = {};
        }
        obj = obj[string];
      }
      obj[p[pLength - 1]] = value;
    },
    createModuleArray() {
      let moduleArray = Object.entries(this.modules).reduce(function(
        names,
        [key, value]
      ) {
        names = value;
        return names;
      },
      {});
      this.moduleArray.push(moduleArray);
    },
    setClassToAvailable(index) {
      this.modules.itemOne.classes.available[index].class[2] = true;
    }
  },
  beforeMount() {
    this.createItem();
    this.pushModuleNames();
    this.createModuleArray();
    this.initSetClasses(this.modules, this.itemClass, "classes");
    this.initSetClasses(this.modules, this.itemClass, "content");
    this.initSetClasses(this.modules, this.itemClass, "image");
    this.init = true;
  },
  mounted() {
    editBus.$on("itemTypeUpdate", (type, index) => {
      let entry = Object.keys(this.modules)[index];
      type == "imageSwap"
        ? (this.modules[entry].imageSwap = true)
        : (this.modules[entry].imageSwap = false);
      if (type == "overlay" || type == "imageSwap") {
        this.invert = true;
        this.modules[entry]["inverted"] = true;
        this.toggleDataTheme(this.$refs[entry].$refs[entry], true);
        this.modules[entry].classes.available.forEach(
          element => (element.class[2] = true)
        );
      } else {
        this.invert = false;
        this.modules[entry]["inverted"] = false;
        this.toggleDataTheme(this.$refs[entry].$refs[entry], false);
        if (type == "default") {
          this.modules[entry].classes.available.forEach(
            element => (element.class[2] = true)
          );
        }
      }
    });
    editBus.$on("addClass", (index, classes, action, item) => {
      this.lastAppliedIndex.push(item.class);
      if (item.class[0] == "o-item__imageSwap") {
        // hardcoded but fuck it
        this.modules.itemOne.imageSwap = true;
        this.$refs.editItemType.itemType = "imageSwap";
      }
    });
    editBus.$on("removeClass", (index, classes, action, item) => {
      classes.available.forEach((element, i) => {
        if (element.class[0].indexOf(item)) {
          element.class[2] = true;
        }
      });
      if (item == "o-item--imageSwap") {
        // hardcoded but fuck it
        this.modules.itemOne.imageSwap = false;
        this.$refs.editItemType.itemType = "default";
      }
    });
  },
  mixins: [moduleSectionMixins, editPanelMixins]
};
</script>

<style lang="less">
.c-section-items__moduleContainer {
  // display: grid;
  // grid-template-columns: repeat(2, minmax(350px, 600px));
}

.c-section-items > div {
  display: flex;
  flex-direction: column;
}

.c-section-items__modulePanel > div > label:not(:first-of-type),
.c-section-items__modulePanel > div > select:not(:first-of-type),
.c-section-items__modulePanel > div > p,
.c-section-items__modulePanel > div > a {
  display: none;
}

.c-section-items .c-editPanel {
}

.c-section-items.edit .c-editPanel {
  transform: translate(0, 0);
}

.c-section-items .c-editPanel > div {
  // height: auto;
  // padding-top: 0;
}

.c-section-items .c-editPanel > div > h2,
.c-section-items hr,
.c-section-items .c-editPanel footer,
.c-section-items .c-editPanel > div fieldset:first-of-type {
  display: none;
}

.c-section-items__module > div {
  display: flex;
  flex-direction: column;
}

.c-section-items .o-item {
  flex: 1 1 50%;
  align-self: center;
}

code {
  max-width: 70vw;
}

.c-header-group {
  display: flex;
  justify-content: center;
  align-items: center;
  position:sticky;
  top:0;
  z-index:2;
  background:rgba(255,255,255,.95);
  border-bottom: 1px solid #d2d4da;
}

.c-header-group .o-hdr {
  margin:var(--spacing) 0;
}

.c-header-group:hover {
  cursor: pointer;
}

.c-icon-settings {
  width: 16px;
  height: 16px;
  transform: translateY(-12px);
}

.c-icon-settings img {
  width: 100%;
  display: none;
}

.c-icon-settings.spin .c-icon-settings__cog {
  display: block;
  animation: spin-cog 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 250ms infinite;
}

.c-icon-settings:not(.spin) .c-icon-settings__close {
  display: block;
  animation: spin-cog 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes spin-cog {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.c-module-intro {
  --paragraphFontSize: var(--medium);
  text-align: center;
  display:flex;
  flex-direction:column;
  margin-top:var(--spacing)!important;
}

.c-module-intro .o-link {
  align-self:center;
  margin:var(--tiny) 0;
}

.c-module-intro + div {
  max-height:0;
  overflow: hidden;
  transition: max-height 200ms cubic-bezier(0.075, 0.82, 0.165, 1);  
  background: #EFF0F2;
  border-radius: 3px;  
  opacity:0;  
}

.c-module-intro.show + div {
  max-height:2000px;
  opacity:1;
}

.c-module-intro + div > div {
  padding: var(--spacing);
}

.c-module-intro + div p {
  text-align:center;
  --paragraphSpacing: 0;
  --paragraphFontSize: var(--small);
}


</style>