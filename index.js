import {
  heroExample,
  gridExample,
  imageExample,
  tabExample,
  videoExample
} from "./demo-components";

import { init as initTabs } from "./src/components/tabs";
import { init as initAccordion } from "./src/components/accordion";
import { videoPlayer } from "./src/components/video";

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
UI.render(videoExample());

initTabs();
initAccordion();
videoPlayer();
