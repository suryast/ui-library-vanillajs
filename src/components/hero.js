import link from "./link";

export default function hero(...args) {
  let markup = `<div class="hero">`;
  markup += `<div class="hero-container">`;
  args.map(child => (markup += child));
  markup += `</div>`;
  markup += `</div>`;
  return markup;
}
