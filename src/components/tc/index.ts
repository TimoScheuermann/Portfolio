import { TCComponent } from "@/models/TCComponents/TCComponent.model";

const tcComponents: TCComponent[] = [
  {
    name: "Input",
    icon: "input",
    api: []
  },
  {
    name: "Card",
    icon: "card",
    api: [
      {
        name: "rounded",
        type: "Boolean",
        default: "false",
        description: "Determines if the card's borders are rounded"
      },
      {
        name: "hover",
        type: "Boolean",
        default: "false",
        description: "Determines if a shadow should appear on hover"
      },
      {
        name: "title",
        type: "String",
        description: "Set a pre-styled title to the card"
      },
      {
        name: "subtitle",
        type: "String",
        description: "Set a pre-styled subtitle to the card"
      },
      {
        name: "to",
        type: "url",
        description: "Add the href to the vue-router link"
      }
    ]
  },
  {
    name: "Divider",
    icon: "divider",
    api: []
  },
  {
    name: "Button",
    icon: "button",
    api: []
  },
  {
    name: "Sidebar",
    icon: "sidebar",
    api: []
  },
  {
    name: "Checkbox",
    icon: "checkbox",
    api: []
  },
  {
    name: "Link",
    icon: "arrow-down-right",
    api: []
  },
  {
    name: "Select",
    icon: "list",
    api: []
  },
  {
    name: "Modal",
    icon: "modal",
    api: []
  },
  {
    name: "Tabbar",
    icon: "tabbar",
    api: []
  },
  {
    name: "Table",
    icon: "table",
    api: []
  },
  {
    name: "Scroll Up",
    icon: "arrow-up",
    api: []
  }
];

export default tcComponents;
