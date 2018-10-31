<template>
  <section>
  <div :class="item.classes.applied">
    <itemImage :imgUrl="item.image.url" :content="item.content" /> 
    <!-- <itemContent :content="content" /> -->
  </div>

  <div v-for="(item, index) in items">
    <div :class="items[index].classes.applied">
      <itemImage :imgUrl="items[index].image.url" :content="items[index].content" />
      <!-- <itemContent :content="content" /> -->
    </div>    
    <!-- Edit the item -->
    <a @click="editItem" class="o-link">Edit</a>    
    <div v-if="edit">      
      <div v-for="(value, key) in items[index].classes" class="o-buttons">
        <a class="o-btn" v-if="omitApplied(value)" @click="addClass(value, index)">{{ key }}</a>
      </div>
    </div>      
  </div>
    <a class="o-btn o-btn--primary" @click="newItem">New item</a>
    </section>
</template>

<script>

import itemImage from './itemImage.vue'
import itemContent from './itemContent.vue'
import { editBus } from '../main'
import { item } from './itemClass'

export default {
  // Name of this component
  name: 'item',
  props: {
    title: String
  },
  components: {
    itemImage,
    itemContent
  },
  methods: {
    newItem() {
      let clone = JSON.parse(JSON.stringify(item));
      this.items.push(clone);
    },
    editItem() {
      if(this.edit == true) {
        this.edit = false;
      } else {
        this.edit = true;
      }
    },
    omitApplied(value) {
      if(!Array.isArray(value)) {
        return value        
      }      
    },
    addClass(value, i) {
      let classesApplied = this.items[i].classes.applied; 
      if(!classesApplied.includes(value)) {
        classesApplied.push(value);
      } else {
        let index = classesApplied.indexOf(value);
        classesApplied.splice(index);        
      }      
    }
  },
  // Data within a child component should run a function that returns an object
  data() {
    return {
      items: [],
      edit: false,
      item: {
        classes: {
          applied: ['o-item'],
          imageSwap: 'o-item__imageSwap',
          headerSwap: 'o-item__headerSwap',
          imageRotation: 'o-item__imageRotation',
          card: 'o-item--card',
          fullWidth: 'o-item--100vw',
          tintHover: 'o-item--tintHover'
        },
        image: {
          link: false,
          linkUrl: '',
          url: 'https://www.jackwills.com/on/demandware.static/-/Sites/default/dw0c9b5508/2018/WK38/01_MEGADROP/MD_Gifting.jpg',
          classes: {
            fullWidth: 'o-item__image--100vw'
          }          
        },
        content: {
          heading: [
            {
              el: 'h2',
              text: 'This is a heading',
              link: false,
              linkUrl: '',
              classes: {
                applied: ['o-hdr', 'o-hdr--sm', 'o-item__content', 'o-item__hdr']
              },
              edit: false
            },
            {
              el: 'h3',
              text: 'This is a heading',
              link: false,
              linkUrl: '',
              classes: {
                applied: ['o-hdr', 'o-hdr--lg', 'o-item__content', 'o-item__hdr']
              },
              edit: false
            }          
          ],
          subCopy: `This is some sub copy`,
          buttons: {
            button: [
              {
                linkUrl: '',
                text: 'Shop Now',
                classes: {
                  applied: ['o-btn', 'o-btn--basic']
                }
              },
              {
                linkUrl: '',
                text: 'Shop Now',
                classes: {
                  applied: ['o-btn', 'o-btn--basic']
                }
              }            
            ],
            classes: {
              applied: ['o-buttons']
            }
          },
          classes: {

          }          
        }                 
      }      
    }
  },
  created() {
    editBus.$on('editHeaderContent', (i) => {
      if(!this.item.content.heading[i].edit) {
        this.item.content.heading[i].edit = true;
      } else {
        this.item.content.heading[i].edit = false;
      }      
    })
  }
}
</script>

