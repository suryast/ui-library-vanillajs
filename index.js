import header from "./src/components/header";
import "./src/css/styles.css";

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

// UI.render(page());
UI.render(header(`JS Component Library`, `h1`));
