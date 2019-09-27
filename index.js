import { heroExample, gridExample, paginatedExample } from "./demo-components";

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

UI.render(heroExample());
UI.render(gridExample());
UI.render(paginatedExample());
