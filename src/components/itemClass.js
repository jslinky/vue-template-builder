export const itemClass = {
  edit: false,
  classes: {
    applied: ['o-item'],
    imageSwap: 'o-item__imageSwap',
    headerSwap: 'o-item__headerSwap',
    imageRotation: 'o-item__imageRotation',
    card: 'o-item--card',
    fullWidth: 'o-item--100vw',
    tintHover: 'o-item--tintHover',
    available: [  
      { class: ['o-item__imageSwap', "Image swaps on hover", true] },
      { class: ['o-item__headerSwap', 'Header content swaps on hover', true] },
      { class: ['o-item__imageRotation', 'For multiple image rotation', true] },
      { class: ['o-item--card', 'Card layout', true] },
      { class: ['o-item--100vw', 'Makes item 100% width of window', true] },
      { class: ['o-item--tintHover', 'Adds a tint on hover of item', true] }
    ]
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


