import {
  heroImages,
  grids,
  images,
  tabAccordions,
  videos
} from "./compose";

import { init as initTabs } from "./src/components/Tab/tab";
import { init as initAccordion } from "./src/components/Accordion/accordion";
import { videoPlayer } from "./src/components/Video/video";

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

UI.render(heroImages());
UI.render(grids());
UI.render(images());
UI.render(tabAccordions());
UI.render(videos());

initTabs();
initAccordion();
videoPlayer();
