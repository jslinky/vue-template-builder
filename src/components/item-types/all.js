const itemDefault = [
    {
      ref: "classes",
      classes: []
    },
    {
      ref: "content.classes",
      classes: []
    }
  ],
  itemCard = [
    {
      ref: "classes",
      classes: ["o-item--card", "o-item--100vw", "reverse"]
    },
    {
      ref: "content.classes",
      classes: ["middle aligned", "center aligned"]
    }
  ],
  itemHeaderSwap = [
    {
      ref: "classes",
      classes: ["o-item--headerSwap"]
    },
    {
      ref: "content.classes",
      classes: ["middle aligned", "center aligned", "o-item__content--overlay"]
    }
  ],
  itemImageSwap = [
    {
      ref: "classes",
      classes: ["o-item--imageSwap"]
    }
  ],
  itemOverlay = [
    {
      ref: "classes",
      classes: []
    },
    {
      ref: "content.classes",
      classes: ["o-item__content--overlay"]
    }
  ];

export { itemDefault, itemCard, itemHeaderSwap, itemImageSwap, itemOverlay };
