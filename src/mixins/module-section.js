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
    }
  }
};
