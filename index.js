import {
  heroImages,
  grids,
  images,
  tabs,
  videos
} from "./compose";

import { init as initTabs } from "./src/components/tabs";
import { init as initAccordion } from "./src/components/accordion";
import { videoPlayer } from "./src/components/video";

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

UI.render(heroImages());
UI.render(grids());
UI.render(images());
UI.render(tabs());
UI.render(videos());

initTabs();
initAccordion();
videoPlayer();
