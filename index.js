import {
  heroExample,
  gridExample,
  imageExample,
  tabExample
} from "./demo-components";

import { init as initTabs } from "./src/components/tabs";

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

UI.render(heroExample());
UI.render(gridExample());
UI.render(imageExample());
UI.render(tabExample());

initTabs();
