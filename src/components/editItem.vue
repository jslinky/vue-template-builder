<template>
  <div>
    <label>Please select a type</label>
    <select v-model="itemType">
      <!-- <option selected>Please select a type</option> -->
      <option v-for="(item, key, index) in types">{{ key | getItemTypeDescriptions }}</option>
    </select>
    
    <label>Span across</label>
    <!-- <select v-model="items[editPanel.itemIndex].spanAcross"> -->
    <select v-model="itemSpan">
      <option selected>Select column span</option>
      <option v-for="(item, index) in 9">{{index + 3}}</option>
    </select>
    
    <label>Width (optional)</label>
    <select v-model="itemWidthSelected">
      <option selected>{{ itemWidthSelected }}</option>
      <option
        v-for="(item, index) in items[editPanel.itemIndex].classes.available"
        v-if="item.class[2] == true && item.class[0].includes('wide')"
      >{{ item.class[0] }}</option>
    </select>

    <p>Applied Classes</p>
    <a
      class="c-btn-tag o-btn o-btn--plain o-btn--sm active"
      v-for="(CssClass, index) in items[editPanel.itemIndex].classes.applied"
      v-if="CssClass !== 'o-item'"
      @click="applyClass(index, items[editPanel.itemIndex].classes, 'remove')"
    >{{ CssClass }}</a>
    <p v-else-if="items[editPanel.itemIndex].classes.applied.length == 1">No classes applied</p>

    <hr>

    <p>Modifyer Classes</p>
    <a
      class="c-btn-tag o-btn o-btn--plain o-btn--sm"
      v-for="(item, index) in items[editPanel.itemIndex].classes.available"
      v-if="item.class[2] == true && !item.class[0].includes('wide') && !item.class[0].includes('aligned')"
      @click="applyClass(index, items[editPanel.itemIndex].classes, 'apply')"
    >{{ item.class | abbrClass }}</a>

    <hr>

    <p>Alignment</p>
    <a
      class="c-btn-tag o-btn o-btn--plain o-btn--sm"
      v-for="(item, index) in items[editPanel.itemIndex].classes.available"
      v-if="item.class[2] == true && item.class[0].includes('aligned')"
      @click="applyClass(index, items[editPanel.itemIndex].classes, 'apply')"
    >{{ item.class | abbrClass }}</a>
  </div>
</template>

<script>
import { editBus } from "../main";
import CustomHeading from "./heading.vue";
import { editPanelMixins } from "../mixins/editPanel-applyClass";
import {
  itemDefault,
  itemOverlay,
  itemCard,
  itemImageSwap,
  itemHeaderSwap
} from "./item-types/all";

export default {
  // Name of this component
  name: "editItem",
  components: {
    CustomHeading
  },
  props: {
    items: Array,
    editPanel: Object
  },
  watch: {
    itemWidthSelected: function(newVal, oldVal) {
      this.applyWidth(
        this.items[this.editPanel.itemIndex].classes.applied,
        newVal
      );
    },
    itemSpan: function(newVal, oldVal) {
      this.items[this.editPanel.itemIndex].spanAcross = newVal;
    },
    itemType: function(newVal, oldVal) {
      this.applyType(this.types[newVal], this.items[this.editPanel.itemIndex]);
      editBus.$emit("itemTypeUpdate", newVal, this.editPanel.itemIndex);
    }
  },
  data() {
    return {
      types: {
        current: {
          state: false,
          alias: [],
          descrip: "Please select an item type"
        },
        default: {
          default: true,
          alias: itemDefault,
          descrip: "Please select an item type"
        },
        overlay: {
          default: false,
          alias: itemOverlay,
          descrip: "Overlayed content"
        },
        card: {
          default: false,
          alias: itemCard,
          descrip: "Card layout"
        },
        imageSwap: {
          default: false,
          alias: itemImageSwap,
          descrip: "Image Swap on hover"
        },
        headerSwap: {
          default: false,
          alias: itemHeaderSwap,
          descrip: "Header Swap on hover"
        }
      },
      itemWidthSelected: "Select a width",
      itemSpan: function() {
        return this.items[this.editPanel.itemIndex].spanAcross;
      },
      itemType: "default"
    };
  },
  mixins: [editPanelMixins]
};
</script>



