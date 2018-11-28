<template>
<div>
  <input 
    type="checkbox"  
    :id="type"       
    v-if="location.status"    
    :checked="location.sizes[type].status"    
    :value="location.sizes[type].status"
    @click="location.sizes[type].status = !location.sizes[type].status"
    >            
    <label v-if="location.status" :for="type">{{location.sizes[type].label}}</label>            
    <div v-if="location.sizes[type].status && location.status">
      <label>Image path</label>
      <input 
        type="text" 
        :value="location.sizes[type].url" 
        @input="location.sizes[type].url = $event.target.value" 
        placeholder="Binded value goes here" />  
    </div>   
  </div>  
</template>

<script>

export default {
  // Name of this component
  name: 'editResponsiveImg',
  props: {
    location: Object,
    type: String
  }
}
</script>



