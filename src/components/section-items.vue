<template>
  <div class="c-section-items o-container" :class="{edit: editPanel.state}">
    <CustomHeader
      bg
      center
      aligned
      style="margin:1.5rem 0"
      @click.native.prevent="editItem(modules.itemOne.name + '-panel')"
    >Items</CustomHeader>

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
        <editItem :items="moduleArray" :editPanel="editPanel"></editItem>
        <editPanel
          :items="moduleArray"
          :editPanel="editPanel"
          :ref="modules.itemOne.name + '-panel'"
        />
      </div>
      <div class="c-section-items__module">
        <ModuleComponent :module="modules.itemOne" :ref="modules.itemOne.name">
          <itemImage :img="modules.itemOne.image" :content="modules.itemOne.content"/>
          <!-- <div class="o-item" :class="classesApplied" :id="itemInfo.id">
                <itemImage :img="itemInfo.image" :content="itemInfo.content" /> 
          </div>-->
        </ModuleComponent>
      </div>
    </section>
  </div>
</template>


<script>
import { editBus } from "../main";
import { itemClass } from "./itemClass";
import {
  itemCard,
  itemHeaderSwap,
  itemImageSwap,
  itemOverlay
} from "./item-types/all";
import item from "./item.vue";
import itemImage from "./itemImage.vue";
import itemContent from "./itemContent.vue";
import ModuleComponent from "./modules/module.vue";
import { moduleSectionMixins } from "../mixins/module-section";
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
      editPanel: {
        state: false,
        itemIndex: 0
      },
      itemClass: "",
      moduleNames: [],
      moduleArray: [],
      modulePath: "",
      modules: {
        itemOne: {
          name: "itemOne",
          html: {
            show: true,
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
    invertItem(targetId) {
      for (let key in this.modules) {
        this.setInvert(key, targetId);
      }
    },
    setInvert(key, targetId) {
      if (targetId) {
        ////// IF CLICKED FROM INVERTED RADIO
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
        let { applied, available, alignment } = this.$stringObj(itemClassPath);
        // Sets the classes on each module instance
        for (let key in modules) {
          this.setAssociatedClasses(modules[key], `${path}.applied`, applied);
          this.setAssociatedClasses(
            modules[key],
            `${path}.available`,
            available
          );
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
      if (type == "overlay" || type == "imageSwap" || type == "headerSwap") {
        this.invert = true;
        this.modules[entry]["inverted"] = true;
        this.toggleDataTheme(this.$refs[entry].$refs[entry], true);
      } else {
        this.invert = false;
        this.modules[entry]["inverted"] = false;
        this.toggleDataTheme(this.$refs[entry].$refs[entry], false);
      }
    });
  },
  mixins: [moduleSectionMixins]
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
</style>