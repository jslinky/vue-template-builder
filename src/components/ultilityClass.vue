<template>
  <div>
    <div v-if="collection.length !== 0">
      <ul v-for="(item, index) in collection" class="c-ulti-list u-max-width-6c u-mx-auto" style="list-style-type:initial">     
        <li v-if="index >= from && index <= to" :ref="item.name" :key="item.name">
          {{prefix}}{{item.name}}<span v-if="item.sm && active === 'sm'">-sm</span><span v-if="item.md && active === 'md'">-md</span><span v-if="item.lg && active === 'lg'">-lg</span>    
        </li>
      </ul>
    </div>
    <ul v-else>
      <li>No classes at this breakpoint</li>
    </ul> 
  </div>
</template>

<script>
  export default {
    name: 'ultilityClass',
    props: {
      prefix: {
        type: String,
        default: 'u-'
      },
      collection: {
        type: Array,
        default: []
      },
      active: {
        type: Boolean,
        default: 'default'
      },
      from: {
        type: Number,
        default: 0
      },
      to: {
        type: Number,
        default: 25
      }      
    }
  }
</script>

<style scoped>

</style>