export const classPropsFilter = {
  // methods: {
  //   pressMe() {
  //     alert('Hello')
  //   }
  // },
  filters: {
    ifClassPropsFilter(item, classArr) {
      // check to see if classArray prop is being passed
      let check = classArr === undefined       
      
      if(!check) {       
        // set keys to false, if present within classArray then set to true
        
        // map function that prefixes o-hdr to entries within classArray
        let preFix = (entry) => `o-hdr--${entry}`
        // run map prefix function on classArr
        let classArrPreFix = classArr.map(preFix);
        // Map through item and check if includes keys from classArrPreFix, if inlcludes set to true, else false
        Object.keys(item).map((key) => {
          if(classArrPreFix.includes(key) || key == 'o-item__hdr') {
            item[key] = true
          } else {
            item[key] = false
          }
        })
        // Return item
        return item
      } 
      else {
        return item
      }
      
    },
  }
}