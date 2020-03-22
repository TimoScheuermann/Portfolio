import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import { TCComponentApi } from "@/models/TCComponents/TCComponentApi.model";

const tcComponent_Api: TCComponentApi[] = [
  { name: "dark", type: "boolean", description: "Toggles darkmode on or off" },
  { name: "color", type: "string", description: "Default font color" },
  {
    name: "background",
    type: "string",
    description: "Default background color"
  }
];

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
        name: "title",
        type: "string",
        description: "Set a pre-styled title to the card"
      },
      {
        description: "Set a pre-styled subtitle to the card",
        name: "subtitle",
        type: "string"
      },
      {
        name: "frosted",
        type: "boolean",
        description: "Determines if the card should have a frosted appearance"
      },
      {
        name: "shadow",
        type: "boolean",
        default: "true",
        description: "Determines if the card should have a base shadow"
      },
      {
        description: "Determines if the card's borders are rounded",
        name: "rounded",
        type: "boolean"
      },
      {
        description: "Determines if a shadow should appear on hover",
        name: "hover",
        type: "boolean"
      },
      ...tcComponent_Api
    ]
  },
  {
    name: "Divider",
    icon: "divider",
    api: [
      {
        name: "name",
        type: "String",
        description: "Text to be displayed"
      },
      {
        name: "icon",
        type: "String",
        description: "Icon to be displayed",
        parameters: "Timo's Icon"
      },
      {
        name: "position",
        type: "String",
        description: "Name/Icon Position",
        parameters: "left, center, right",
        default: "center"
      },
      {
        name: "Color",
        type: "String",
        description: "Determines the color of TC-Divider"
      }
    ]
  },
  {
    name: "Button",
    icon: "button",
    api: [
      { name: "to", type: "object", description: "Route to navigate to" },
      { name: "href", type: "string", description: "Href to open" },
      { name: "name", type: "string", description: "Title to be displayed" },
      {
        name: "@click",
        type: "function",
        description: "Is triggered, when ever a button is clicked"
      },
      {
        name: "icon",
        type: "string",
        description: "Icon to be displayed",
        parameters: "Timo's Icons"
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Determines if the button is disabled",
        default: "false"
      },
      {
        name: "variant",
        type: "string",
        description: "Determines the style of the button",
        default: "border",
        parameters: "opaque, border, filled"
      }
    ]
  },
  {
    name: "Sidebar",
    icon: "sidebar",
    api: []
  },
  {
    name: "Checkbox",
    icon: "checkbox",
    api: [
      {
        name: "title",
        type: "string",
        description: "Sets a title next to the checkbox"
      },
      {
        name: "color",
        type: "string",
        description: "Determines the color of the checkmark",
        default: "#0088ff"
      },
      {
        name: "value",
        type: "boolean",
        description: "Determines the state of the checkbox",
        default: "false"
      },
      { name: "v-model", type: "boolean", description: "" },
      {
        name: "@input",
        type: "boolean",
        description:
          "Is called whenever the user changes the state of the checkbox"
      }
    ]
  },
  {
    name: "Link",
    icon: "arrow-down-right",
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
  },
  {
    name: "Image",
    icon: "windows",
    api: []
  },
  {
    name: "Switch",
    icon: "toggle",
    api: []
  },
  {
    name: "Spinner",
    icon: "spinner",
    api: []
  },
  {
    name: "Hero",
    icon: "painting",
    api: []
  },
  {
    name: "Revealer",
    icon: "cross",
    api: []
  },
  {
    name: "Progress",
    icon: "bar-progress",
    api: [
      {
        name: "percent",
        type: "number",
        default: "0",
        description: "Percentage to be displayed"
      },
      {
        name: "type",
        type: "string",
        default: "bar",
        parameters: "bar | ring",
        description: "Progress Type"
      },
      {
        name: "barHeight",
        type: "number",
        default: "4",
        description: "Determines the height of the progress bar"
      },
      {
        name: "ringSize",
        type: "number",
        default: "70",
        description: "Determines the size of the progress ring"
      },
      {
        name: "ringWidth",
        type: "number",
        default: "8",
        description: "Determines the width of the ring of the progress ring"
      }
    ]
  },
  {
    name: "Quote",
    icon: "quote-right",
    api: []
  },
  {
    name: "Header",
    icon: "bar",
    api: [
      { name: "title", type: "string", description: "Sets a prestyled title" },
      {
        name: "variant",
        type: "string",
        description: "Determines the variant used for TC-Header",
        parameters: "fixed, floating, sticky",
        default: "fixed"
      },
      {
        name: "top",
        type: "number",
        description: "Determines the position of TC-Header",
        default: "0 (if variant=floating +40)"
      },
      {
        name: "backTo",
        type: "any",
        description: "Sets the destination for a prestyled back button"
      },
      {
        name: "backHref",
        type: "string",
        description: "Sets the destination for a prestyled back button"
      },
      {
        name: "backName",
        type: "string",
        default: "back",
        description:
          "Sets the title for a prestyled back button (only visible if backTo or backHref is set)"
      },
      {
        name: "@click",
        type: "function",
        description: "Get called whenever a user clicks the back button"
      }
    ]
  },
  {
    name: "Headline",
    icon: "bar",
    api: [
      { name: "title", type: "string", description: "Sets a prestyled title" },
      {
        name: "icon",
        type: "string",
        description:
          "Inserts a Icon in front of Headline title (only visible with default title)",
        parameters: "Timo's Icons"
      }
    ]
  },
  {
    name: "Segments",
    icon: "segment",
    api: []
  },
  {
    name: "Slider",
    icon: "slider",
    api: []
  },
  {
    name: "Navbar",
    icon: "dot",
    api: []
  },
  {
    name: "Picker",
    icon: "list",
    api: []
  },
  {
    name: "Tooltip",
    icon: "tooltip",
    api: []
  }
];

export default tcComponents;
