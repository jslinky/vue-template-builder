export const moduleSectionMixins = {
  methods: {
    pushModuleNames() {
      let moduleNames = Object.keys(this.modules).reduce(function(names, key) {
        names.push(key);
        return names;
      }, []);
      this.moduleNames = moduleNames;
    },
    toogleInvert() {
      this.invert = !this.invert;
      this.toogleModuleInvert();
    },
    toogleModuleInvert() {
      this.moduleNames.forEach(element => {
        this.$refs[element].toogleInvert();
        setTimeout(() => {
          this.$refs[element].updateHtmlToCopy();
        });
      });
    },
    ultilGroup(item) {
      let active = this.ultils.active;
      if (active === 'default') {
        return item
      } else {
        if (active == 'sm' && item[active]) {
          return item
        } else if (active == 'md' && item[active]) {
          return item
        } else if (active == 'lg' && item[active]) {
          return item
        }
      }
    }    
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }  
};
