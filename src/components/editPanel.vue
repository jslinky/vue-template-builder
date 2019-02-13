<template>
  <section class="c-editPanel" v-if="items.length > 0">
    <div>
      <custom-heading sm center :el="'h2'">Edit Panel</custom-heading>
      <!-- Item Section -->
      <fieldset>
        <!-- Heading -->
        <custom-heading
          t
          :el="'h3'"
          class="c-editPanel__heading"
          :class="{active: editPanelSections.item}"
          @click.native="toggleSections('item')"
        >Item</custom-heading>
        <!-- Accordion content -->
        <editItem :items="items" :editPanel="editPanel"></editItem>
      </fieldset>

      <!-- Item Image Section -->
      <fieldset>
        <!-- Heading -->
        <custom-heading
          t
          :el="'h3'"
          class="c-editPanel__heading u-mt0"
          :class="{active: editPanelSections.image}"
          @click.native="toggleSections('image')"
        >Item Image</custom-heading>
        <!-- Accordion content -->
        <editImg :img="items[editPanel.itemIndex].image"></editImg>
      </fieldset>

      <!-- Item Content Section -->
      <fieldset>
        <!-- Heading -->
        <custom-heading
          t
          :el="'h3'"
          class="c-editPanel__heading u-mt0"
          :class="{active: editPanelSections.content}"
          @click.native="toggleSections('content')"
        >Item Content</custom-heading>
        <!-- Accordion content -->
        <editItemContent :items="items" :editPanel="editPanel"></editItemContent>
      </fieldset>

      <!-- Item Buttons Content -->
      <fieldset>
        <!-- Heading -->
        <custom-heading
          t
          :el="'h3'"
          class="c-editPanel__heading u-mt0"
          :class="{active: editPanelSections.buttons}"
          @click.native="toggleSections('buttons')"
        >Item Buttons</custom-heading>
        <!-- Accordion content -->
        <editItemButtons :items="items" :editPanel="editPanel"></editItemButtons>
      </fieldset>
    </div>
    <!-- save / close footer -->
    <footer class="o-buttons">
      <div @click="closePanel(editPanel.itemIndex)">
        <custom-button button plain small>Close</custom-button>
      </div>
    </footer>
  </section>
</template>

<script>
import { editBus } from "../main";

import { itemClass } from "./itemClass";
import CustomButton from "./button.vue";
import CustomHeading from "./heading.vue";
import editItem from "./editItem.vue";
import editImg from "./editImg.vue";
import editItemContent from "./editItemContent.vue";
import editItemButtons from "./editItemButtons.vue";

export default {
  // Name of this component
  name: "editPanel",
  props: {
    items: Array,
    editPanel: Object
  },
  components: {
    CustomButton,
    CustomHeading,
    editImg,
    editItem,
    editItemContent,
    editItemButtons
  },
  methods: {
    closePanel(index) {
      editBus.$emit("editPanelState", false, index);
    },
    toggleSections(sectionToOpen) {
      let obj = this.editPanelSections;
      for (let section in obj) {
        // if sectionToTop (string of key) is equal to key in object & it's value is false, set to true
        if (sectionToOpen == section && obj[section] == false) {
          this.$set(obj, section, true);
          // if sectionToTop (string of key) is equal to key in object & it's value is true, set to false
        } else if (sectionToOpen == section && obj[section] == true) {
          this.$set(obj, section, false);
          // else set to false
        } else {
          this.$set(obj, section, false);
        }
      }
    }
  },
  mounted() {
    editBus.$on("editPanelState", (state, itemIndex) => {
      this.editPanel.state = state;
      this.editPanel.itemIndex = itemIndex;
    });
    editBus.$on("addItemHeading", () => {
      let clone = JSON.parse(
        JSON.stringify(itemClass.content.heading.headings[0])
      );
      this.items[this.editPanel.itemIndex].content.heading.headings.push(clone);
    });
    editBus.$on("addButton", button => {
      // see prototype extension in main.js
      const copy = this.$extendObj(button);
      this.items[this.editPanel.itemIndex].content.buttons.button.push(copy);
    });
    editBus.$on("removeButton", index => {
      this.items[this.editPanel.itemIndex].content.buttons.button.splice(
        index,
        1
      );
      console.log(index);
    });
    // console.log(this.$root.$root.util)
  },
  data() {
    return {
      // Panel Sections
      editPanelSections: {
        item: true,
        content: false,
        image: false,
        buttons: false
      },
      responsiveImage: false,
      headingType: "Please select a type"
    };
  }
};
</script>

<style lang="less">
.c-editPanel__heading {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAkSURBVEhLYxgFo2AUjALSwX8qYZwAm2Jy8CgYBaNgFBAPGBgA6Rwj3cI4MzQAAAAASUVORK5CYII=");
  background-repeat: no-repeat;
  background-size: 8px 8px;
  background-position: center right;
}

.c-editPanel__heading.active {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA6SURBVEhLYxgF1Ab/oZhmYNQCgmDUAoKAYgtgBlCKcQJsisnBZAOKDSAERi0gCEYtIAhobsGIAwwMALBLQ71JoPyKAAAAAElFTkSuQmCC");
}

.c-btn-tag {
  border-radius: 2px;
  background: lightgray;
  margin-top: 6px;
  padding: 4px 8px;
}

.c-btn-tag:empty {
  display: none;
}

.c-btn-tag.active {
  background: green;
  color: #fff;
  text-shadow: -0.5px -0.5px 0px rgba(0, 0, 0, 0.3);
}

.c-btn-tag:empty {
  display: none;
}

footer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1rem 0;
  background: #ccc;
}
</style>
