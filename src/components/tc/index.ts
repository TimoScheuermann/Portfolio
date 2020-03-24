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
    api: [
      {
        name: "icon",
        type: "string",
        description: "Adds an Icon in front of the input field",
        parameters: "Timo's Icons"
      },
      {
        name: "title",
        type: "string",
        description: "Sets a prestyled title on top of the input field"
      },
      {
        name: "buttons",
        type: "boolean",
        description: "Adds +/- Buttons (only for type='number')"
      },
      {
        name: "placeholder",
        type: "string",
        description:
          "Specifies a short hint that describes the expected value of an <tc-input> element"
      },
      {
        name: "type",
        type: "string",
        description: "Input type",
        default: "text"
      },
      {
        name: "value",
        type: "any",
        description: "Determines the state of the checkbox",
        default: "false"
      },
      { name: "v-model", type: "any", description: "" },
      {
        name: "@input",
        type: "function",
        description:
          "Is called whenever the user changes the state of the checkbox"
      },
      {
        name: "accept",
        type: "string",
        description:
          "Specifies a filter for what file types the user can pick from the file input dialog box (only for type='file')"
      },
      {
        name: "autocomplete",
        type: "string",
        parameters: "on, off",
        description:
          "Specifies whether an <tc-input> element should have autocomplete enabled"
      },
      {
        name: "autofocus",
        type: "boolean",
        description:
          "Specifies that an <tc-input> element should automatically get focus when the page loads"
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Specifies that an <tc-input> element should be disabled"
      },
      {
        name: "form",
        type: "string",
        description: "Specifies the form the <tc-input> element belongs to"
      },
      {
        name: "max",
        type: "number | date",
        description: "Specifies the maximum value for an <tc-input> element"
      },
      {
        name: "maxlength",
        type: "number",
        description:
          "Specifies the maximum number of characters allowed in an <tc-input> element"
      },
      {
        name: "min",
        type: "number | date",
        description: "Specifies a minimum value for an <tc-input> element"
      },
      {
        name: "minlength",
        type: "number",
        description:
          "Specifies the minimum number of characters required in an <tc-input> element"
      },
      {
        name: "pattern",
        type: "string",
        description:
          "Specifies a regular expression that an <tc-input> element's value is checked against"
      },
      {
        name: "readonly",
        type: "boolean",
        description: "Specifies that an input field is read-only"
      },
      {
        name: "required",
        type: "boolean",
        description:
          "Specifies that an input field must be filled out before submitting the form"
      },
      {
        name: "step",
        type: "number",
        default: "1",
        description:
          "Specifies the interval between legal numbers in an input field"
      }
    ]
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
        type: "function",
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
    api: [
      {
        name: "title",
        type: "string",
        description: "Set a pre-styled title to the modal"
      },
      {
        description: "Set a pre-styled subtitle to the modal",
        name: "subtitle",
        type: "string"
      },
      {
        name: "value",
        type: "boolean",
        description: "Determines the state of the modal",
        default: "false"
      },
      { name: "v-model", type: "boolean", description: "" },
      {
        name: "@input",
        type: "function",
        description:
          "Is called whenever the user changes the state of the modal"
      }
    ]
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
    api: [
      {
        default: "200",
        name: "height",
        type: "number",
        description: "Height of Hero Container"
      },
      {
        default: "px",
        name: "unit",
        type: "string",
        description: "Unit of height"
      },
      {
        default: "true",
        name: "hasFixedHeader",
        type: "boolean",
        description: "Determines if top should have a padding of 50px"
      },
      {
        name: "background",
        type: "string",
        description: "Background color of Hero",
        default: "transparent"
      }
    ]
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
        name: "color",
        type: "string",
        description: "Determines the color of the bar/ring",
        default: "#0088ff"
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
    api: [
      {
        name: "title",
        type: "String",
        description: "Sets a prestyled title"
      }
    ]
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
