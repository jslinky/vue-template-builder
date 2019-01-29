<template>
  <div>
    <input
      type="checkbox"
      id="responsiveImg"
      :value="img.responsive.status"
      @click="img.responsive.status = !img.responsive.status"
    >
    <label for="responsiveImg">Responsive</label>
    
    <label>Image path</label>
    <input
      type="text"
      :value="img.responsive.sizes.mobile.url"
      @input="img.responsive.sizes.mobile.url = $event.target.value"
      placeholder="Binded value goes here"
    >

    <editResponsiveImg :location="img.responsive" :type="'largeMobile'"></editResponsiveImg>
    <editResponsiveImg :location="img.responsive" :type="'tablet'"></editResponsiveImg>
    <editResponsiveImg :location="img.responsive" :type="'computer'"></editResponsiveImg>

    <label>Link path</label>
    <input type="text" placeholder="Binded value goes here">
  </div>
</template>

<script>
import editResponsiveImg from "./editResponsiveImg.vue";

export default {
  // Name of this component
  name: "editImg",
  components: {
    editResponsiveImg
  },
  props: {
    img: Object
  }
};
</script>



