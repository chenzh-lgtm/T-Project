Component({
  properties: {
    test: {
      type: Object,
      value: {}
    }
  },

  methods: {
    onTap() {
      this.triggerEvent('tap', { id: this.data.test.id });
    }
  }
});