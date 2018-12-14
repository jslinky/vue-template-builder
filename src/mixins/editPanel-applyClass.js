export const editPanelMixins = {
  methods: {
    // obj = object to set new key value, key = string of key to modify it's value, arr = array in which obj is held
    removeContent(obj, key, arr) {      
      let arrLength = arr.length - 1;
      this.$set(obj, key, '');
      arr.splice(arrLength);      
    },  
    applyWidth(appliedClasses, newVal) {
      appliedClasses.forEach((element, i) => {
        // if(element.includes("wide")) {
          appliedClasses.splice(i, 1);
        // }
      });
      appliedClasses.push(newVal);
    },    
    applyClass(i, ref, toggle) {
      let classesRef = ref,
      classesApplied = classesRef.applied,
      classesAvailable = classesRef.available[i],
      classToApply = classesAvailable.class[0];
  
      if(toggle == 'apply') {
        // Push to applied classes array if not already present      
        if(!classesApplied.includes(classesAvailable)) {
          classesApplied.push(classToApply);
          // Set last item in array to false - filter will not return in displayed list
          classesAvailable.class[2] = false;
          if(classToApply == 'o-item--100vw') {            
            this.items[this.editPanel.itemIndex].spanAcross = 12
          }          
        }
      } else if(toggle == 'remove') {
        // class to remove        
        let classToRemove = classesApplied[i];
        // remove class from applied array
        classesApplied.splice(i, 1);
        if(classToRemove == 'o-item--100vw') {
          this.items[this.editPanel.itemIndex].spanAcross = this.itemSpan;
        }
        // loop over available classes and check for class to remove, then set to true
        classesRef.available.forEach((element) => {
          if(element.class[0].includes(classToRemove)) {
            element.class[2] = true;
          }
        });   
      }      
    },
    // Apply type of item method
    // Arg 1: itemType is ref. to the 'types' object in data
    // Arg 2: itemToMutate is ref to current 'item' being edited
    applyType(itemType, itemToMutate) {
      // this object is a reference that gets pushehd to this.types.current - handles reset of classes
      let objRef = []
      // Start here - apply new item type
      getObjRef(itemType, applyClasses)

      // If first time init push object type, else reset and apply
      if(!this.types.current.state) {
        this.types.current.alias.push(objRef);
      } else if(this.types.current.state) {
        for(let value of this.types.current.alias) {
          for(let entry of value) {          
            // create copy of applied classes  
            let appliedCopy = entry.itemClassAlias.applied.map(appliedClass => appliedClass)
            // reset / clear array of applied classes
            entry.itemClassAlias.applied = []
            for(let applied in appliedCopy) {
              setClassTo(true, entry, applied)
            }            
            // apply new item type
            getObjRef(itemType, applyClasses)
          }
        }
      }      

      // Set to true after init
      this.types.current.state = true


      // For each object in 'itemType' array - apply getPosition function
      // Iterate over the 'classesToApply' and push them to the applied classes of 'itemToMutate' 
      function getObjRef(itemType, cb) {  
        itemType.alias.forEach((entry) => {
          let obj = getPosition(entry, itemToMutate)
          cb(obj)
          objRef.push(obj)        
        });
      }

      function applyClasses(obj) {
        // Reset applied classes. Only preventing repeat application of same type (Need to set 'classes available' booleon)
        // TO DO - don't remove default classes - default classes moved out of applied array - other nodes haven't      
        for(let i=0; i < obj.applied.length; i++) {
          if(obj.applied.indexOf(obj.classesToApply[i])) {
            obj.applied.splice(obj.classesToApply[i])
          }
        }        
        for(let i=0; i < obj.classesToApply.length; i++) {
          obj.applied.push(obj.classesToApply[i])      
          setClassTo(false, obj, obj.classesToApply[i])       
        }
      }      

      // Sets class boolean to false 
      function setClassTo(bool, itemAliasObj, classToApply) {        
        itemAliasObj.classesAvailable.forEach((entry) => {
          if(!bool && entry.class[0].includes(classToApply)) {
            entry.class[2] = false;
          } else if(bool && entry.class[0].includes(classToApply)) {
            entry.class[2] = true;
          }
        })
      }   


      // Function gets each object in 'itemType' array
      // Each object contains a ref to nested position && classes to be applied
      // Arg 1: 'itemType' Object as defined in 'types.[type].ref' in data
      // Arg 2: 'itemToMutate' is ref to current 'item' being edited
      function getPosition(itemTypeAlias, itemToMutate) {
        // Reference Path to position in obj
        let ref = itemTypeAlias.ref.split("."),
            // Set itemType to object being edited
            itemClassAlias = itemToMutate,
            // Associated class to be applied
            classesToApply = itemTypeAlias.classes            

        // For each entry in split path build up path in 'itemClassAlias'
        ref.forEach((value) => itemClassAlias = itemClassAlias[value])

        let classesAvailable = itemClassAlias.available
        
        // Return an object with entries for
        // 1. 'item' being applied too (current editied item)
        // 2. Classes currently applied to this reference 
        // 3. Classes to apply for this 'itemType'
        return {
          itemClassAlias,
          applied: itemClassAlias.applied,
          classesToApply,
          classesAvailable
        } 
      }

    }    
  }
}