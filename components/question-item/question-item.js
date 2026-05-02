Component({
  properties: {
    question: {
      type: Object,
      value: {}
    },
    selectedIndex: {
      type: Number,
      value: -1
    }
  },

  data: {
    letters: ['A', 'B', 'C', 'D', 'E', 'F']
  },

  methods: {
    onOptionTap(e) {
      const index = e.currentTarget.dataset.index;
      this.triggerEvent('select', { index });
    }
  }
});