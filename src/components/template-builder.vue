<template>
  <div class="template-builder" :class="{edit: editPanel.state}">
    <section class="c-welcome" v-if="items.length == 0">
      <h1 class="u-flex u-justify-center u-flex-column u-items-center">
        <span class="o-hdr o-hdr--sm u-mt0">Welcome to</span>
        <span class="o-hdr o-hdr--hg u-mt-sm">Jack Wills Template Builder</span>
        <div @click="showJoke()" class="u-mt-lg">
          <custom-button button basic>Just show me a joke</custom-button>
        </div>
        <transition name="joke">
          <p class="u-mt-md">{{joke}}</p>
        </transition>
        {{recentFlickrPosts}}
      </h1>
    </section>
    <!-- Edit Panel Component 
        - Pass through items and editPanel as props
    -->
    <editPanel :items="items" :editPanel="editPanel"/>
    <div id="page-wrapper">
      <section class="c-item-container o-container">
        <!-- Item component - set to loop through items array -->
        <item v-for="(item, index) in items" :itemInfo="item" :itemIndex="index"/>
      </section>
    </div>
    <!-- <div class="main-nav">
      <a class="o-btn" :class="{disabled: editPanel.state}" @click="newItem">New item</a>
    </div>-->
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
import { editBus } from "../main";
import { itemClass } from "./itemClass";
import CustomButton from "./button.vue";
import item from "./item.vue";
import editPanel from "./editPanel.vue";

export default {
  // Name of this component
  name: "templateBuilder",
  props: {
    itemInfo: Object
  },
  components: {
    item,
    editPanel,
    CustomButton
  },
  methods: {
    async showJoke() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const joke = await this.$http.get("https://icanhazdadjoke.com", config);
      this.joke = joke.data.joke;
    },
    newItem() {
      let clone = this.$stringObj(itemClass);
      clone.id = "item-" + this.items.length;
      let itemsLength = this.items.push(clone);
      itemsLength;
      // As a argument for extendItemClasses pass an array of objects with two key properties...
      // 1) a reference to this.items and the key to update
      // 2) an array containing the names of the classes to be extended (from their definition in root of itemClass)
      this.extendItemClasses([
        {
          ref: this.items[itemsLength - 1],
          classesToCopy: ["width", "alignment"]
        },
        {
          ref: this.items[itemsLength - 1].image,
          classesToCopy: ["width"]
        },
        {
          ref: this.items[itemsLength - 1].content,
          classesToCopy: ["width", "alignment"]
        },
        {
          ref: this.items[itemsLength - 1].content.buttons,
          classesToCopy: ["width"]
        }
      ]);
    },
    extendItemClasses(target) {
      // Class types
      // Create two copies of class types to be extended
      let classesWidth = itemClass.classes.width.map(ob => ob),
        classesAlignment = itemClass.classes.alignment.map(ob => ob);

      // Function takes 2 args
      // 1) The class type to iterate over and push and push to..
      // 2) finish this off
      function pushToClassesAvailable(classType, classesAvailable) {
        classType.forEach(item => {
          classesAvailable.push(item);
        });
      }

      for (let j = 0; j < target.length; j++) {
        // val is each entry of classesToCopy array
        let classesAvailable = target[j].ref.classes.available.map(ob => ob);

        target[j].classesToCopy.forEach(val => {
          if (val.includes("alignment")) {
            pushToClassesAvailable(classesAlignment, classesAvailable);
          } else if (val.includes("width")) {
            pushToClassesAvailable(classesWidth, classesAvailable);
          }
        });
        // Assign new array to freshly created item object
        target[j].ref.classes.available = classesAvailable;
      }
    }
  },
  // Data within a child component should run a function that returns an object
  data() {
    return {
      items: [],
      editPanel: {
        state: false,
        itemIndex: 0
      },
      joke: "",
      recentFlickrPosts: "awating flickr feed"
    };
  },
  mounted() {
    editBus.$on("editPanelState", (state, itemIndex) => {
      this.editPanel.state = state;
      this.editPanel.itemIndex = itemIndex;
    });
    editBus.$on("changeItemOrder", (from, to) => {
      console.log("fired");
      let arr = this.items;
      arr.splice(to, 0, arr.splice(from, 1)[0]);
      return arr;
    });
    this.$http
      .get(
        "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback&tags=fashion&format=json",
        { Accept: "application/json", "Access-Control-Allow-Origin": "*" }
      )
      .then(response => console.log(response))
      .catch(e => console.log("ERROR MSG " + e));
  }
};
</script>

<style lang="less">
:root {
  --itemSpanAcross: 3;
  --itemOrder: 0;
}

.template-builder {
  min-height: 100vh;
}

.template-builder.edit #page-wrapper {
  transform: translate(320px, 0);
}

#page-wrapper {
  transition: transform 200ms ease-out;
}

.template-builder.edit .c-itemTemplate-container > .o-item {
  opacity: 0.125;
}

.template-builder.edit .c-itemTemplate-container.toEdit > .o-item {
  opacity: 1;
}

.c-editPanel {
  position: fixed;
  width: 300px;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(239, 240, 242, 0.95);
  z-index: 1;
  transform: translate(-100%, 0);
  transition: all 200ms ease-out;
  overflow-y: auto;
  backdrop-filter: blur(10px);
}

.c-editPanel > div {
  overflow-y: auto;
  height: 100vh;
  padding-top: 6rem;
}

.template-builder.edit .c-editPanel {
  transform: translate(0, 0);
}

.c-editPanel fieldset {
  margin-bottom: 0;
  position: relative;
}

.c-editPanel label {
  width: 100%;
}

.c-editPanel__contentHeadings {
  position: relative;
}

.c-btn-remove {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
}

.c-editPanel fieldset + fieldset:after {
  position: absolute;
  content: "";
  display: inline-block;
  width: ~"calc(100% - (var(--fieldPadding) * 2))";
  left: var(--fieldPadding);
  border-top: 1px solid rgb(210, 212, 218, 0.7);
  bottom: 0;
}

.c-editPanel__heading + div {
  max-height: 0;
  overflow: hidden;
  transition: max-height 200ms ease-in-out;
}

.c-editPanel__heading.active + div {
  max-height: 1000px;
}

.c-item-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1px 1px;
  background: #ccc;
  background-image: radial-gradient(
      farthest-side at 0 0,
      rgba(255, 26, 198, 0.3),
      rgba(255, 26, 198, 0)
    ),
    radial-gradient(
      farthest-side at 100% 0,
      rgba(60, 221, 221, 0.4),
      rgba(60, 221, 221, 0)
    ),
    radial-gradient(
      farthest-side at 50% 0,
      rgba(255, 26, 198, 0.1),
      rgba(255, 26, 198, 0)
    );
}

.edit .c-item-container {
  margin-left: 0;
}

.c-welcome {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.o-item__image {
  width: 100%;
}

select.minimal {
  background-color: transparent;
  padding-left: 0;
  border: 0;
}

.joke-enter-to {
  animation: pulse 500ms;
}

.joke-leave-active {
  animation: pulse 500ms reverse;
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
</style>