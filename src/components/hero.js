import header from "./header";
import link from "./link";
import row from "./row";

export default function hero(url, ...args) {
  let markup = `<div class="hero">`;
  markup += `<div class="hero-container">`;
  args.map(child => (markup += child));
  markup += `</div>`;
  if (url != ``) {
    markup += link(url, `Learn More`);
  }
  markup += `</div>`;
  return markup;
}
