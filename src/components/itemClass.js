export const itemClass = {
  edit: false,
  spanAcross: 3,
  // types: [
  //   overlay: []
  // ],
  classes: {
    applied: ['o-item'],
    available: [  
      { class: ['o-item__imageSwap', "Image swaps on hover", true] },
      { class: ['o-item__headerSwap', 'Header content swaps on hover', true] },
      { class: ['o-item__imageRotation', 'For multiple image rotation', true] },
      { class: ['o-item--card', 'Card layout', true] },
      { class: ['o-item--100vw', 'Makes item 100% width of window', true] },
      { class: ['o-item--tintHover', 'Adds a tint on hover of item', true] }
    ],
    alignment: [
      { class: ['middle aligned', "Align middle", true] },
      { class: ['center aligned', "Center", true] },
      { class: ['left aligned', "Left aligned", true] },
      { class: ['right aligned', "Right aligned", true] }
    ],
    width: [
      { class: ['one wide', "One column width", true] },
      { class: ['two wide', "Two column width", true] },
      { class: ['three wide', "Three column width", true] },
      { class: ['four wide', "Four column width", true] },
      { class: ['five wide', "Five column width", true] },
      { class: ['six wide', "Six column width", true] },
      { class: ['seven wide', "Seven column width", true] },
      { class: ['eight wide', "Eight column width", true] },
      { class: ['nine wide', "Nine column width", true] },
      { class: ['ten wide', "Ten column width", true] },
      { class: ['eleven wide', "Eleven column width", true] },
      { class: ['twelve wide', "Twelve column width", true] }      
    ]    
  },
  image: {
    link: false,
    linkUrl: '',
    url: 'https://www.jackwills.com/on/demandware.static/-/Sites/default/dw0c9b5508/2018/WK38/01_MEGADROP/MD_Gifting.jpg',
    classes: {
      fullWidth: 'o-item__image--100vw',
      available: [
        { class: ['o-item__image--100vw', "Image 100vw", true] }
      ]
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
          applied: ['o-hdr', 'o-hdr--sm', 'o-item__hdr']
        },
        edit: false,
        artwork: {
          default: false,
          assetUrl: 'https://www.jackwills.com/on/demandware.static/-/Sites/default/dw619cb11c/2018/WK42/01_HOMEPAGE/30_lock_up_ff.svg'
        }
      },
      {
        el: 'h3',
        text: 'This is a heading',
        link: false,
        linkUrl: '',
        classes: {
          applied: ['o-hdr', 'o-hdr--lg', 'o-item__hdr']
        },
        edit: false,
        artwork: {
          default: false,
          assetUrl: 'https://www.jackwills.com/on/demandware.static/-/Sites/default/dw619cb11c/2018/WK42/01_HOMEPAGE/30_lock_up_ff.svg'
        }
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
        applied: ['o-buttons'],
        available: [
          { class: ['o-buttons--stacked', "Stack at mobile", true] },
          { class: ['o-buttons--stacked-md', "Stack at tablet", true] }                  
        ]
      }
    },
    classes: {
      applied: [],
      available: [  
        { class: ['o-item__content--overlay', "Content overlays image", true] },
        { class: ['o-item__content--overlay', "Content overlays image", true] }        
      ]
    }          
  }                 
}


