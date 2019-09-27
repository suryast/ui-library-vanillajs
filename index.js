import { headerExample, gridExample } from "./content-components";

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

UI.render(headerExample());
UI.render(gridExample());
